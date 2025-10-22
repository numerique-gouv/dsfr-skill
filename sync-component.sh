#!/bin/bash

# sync-component.sh
# Script pour synchroniser un composant du DSFR vers le skill
# Usage: ./sync-component.sh <nom-du-composant>

set -e  # Exit on error

# Configuration
COMPONENT=$1
DSFR_REPO="https://raw.githubusercontent.com/GouvernementFR/dsfr/main"
BASE_PATH="src/dsfr/component/${COMPONENT}/_part/doc"
LOCAL_PATH="skills/dsfr/composants/${COMPONENT}"
TEMP_DIR=$(mktemp -d)

# Couleurs pour les logs
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Fonction de log
log_info() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

log_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

log_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

log_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Vérification des arguments
if [ -z "$COMPONENT" ]; then
    log_error "Usage: $0 <nom-du-composant>"
    log_info "Example: $0 accordion"
    exit 1
fi

log_info "Starting synchronization for component: $COMPONENT"

# Créer la structure de dossiers
log_info "Creating directory structure..."
mkdir -p "$LOCAL_PATH"/{examples,assets}

# Fonction pour télécharger un fichier
download_file() {
    local url=$1
    local output=$2
    local description=$3

    log_info "Downloading $description..."
    if curl -f -s "$url" -o "$output" 2>/dev/null; then
        log_success "Downloaded $description"
        return 0
    else
        log_warning "Failed to download $description (file may not exist)"
        return 1
    fi
}

# Télécharger les fichiers markdown
download_file "$DSFR_REPO/$BASE_PATH/index.md" "$TEMP_DIR/index-raw.md" "index.md"
download_file "$DSFR_REPO/$BASE_PATH/accessibility/index.md" "$TEMP_DIR/accessibilite-raw.md" "accessibility/index.md"
download_file "$DSFR_REPO/$BASE_PATH/code/index.md" "$TEMP_DIR/code-raw.md" "code/index.md"
download_file "$DSFR_REPO/$BASE_PATH/design/index.md" "$TEMP_DIR/design-raw.md" "design/index.md"

# Fonction pour nettoyer le frontmatter YAML
clean_frontmatter() {
    local file=$1
    if [ -f "$file" ]; then
        sed -i.bak '/^---$/,/^---$/d' "$file" && rm "${file}.bak"
    fi
}

# Fonction pour nettoyer les directives DSFR
clean_dsfr_directives() {
    local file=$1
    if [ -f "$file" ]; then
        # Supprimer les directives :::dsfr-doc-* et :::
        sed -i.bak '/^::*dsfr-doc-/d; /^::*$/d' "$file" && rm "${file}.bak"
    fi
}

# Fonction pour extraire les blocs HTML
extract_html_blocks() {
    local input_file=$1
    local output_dir=$2

    if [ ! -f "$input_file" ]; then
        return
    fi

    log_info "Extracting HTML blocks..."

    awk '
    BEGIN { in_html=0; counter=0; file="" }
    /```[Hh][Tt][Mm][Ll]/ {
        in_html=1;
        counter++;
        file=sprintf("'"$output_dir"'/snippet-%d.html", counter)
        next
    }
    /```/ && in_html {
        in_html=0;
        next
    }
    in_html {
        print $0 > file
    }
    ' "$input_file"

    local count=$(ls "$output_dir"/snippet-*.html 2>/dev/null | wc -l | tr -d ' ')
    if [ "$count" -gt 0 ]; then
        log_success "Extracted $count HTML snippets"
    fi
}

# Fonction pour créer un fichier HTML complet
create_complete_html() {
    local snippet_file=$1
    local output_file=$2
    local title=$3

    cat > "$output_file" << 'EOF'
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>DSFR - COMPONENT_TITLE</title>
  <!-- DSFR CSS -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@gouvfr/dsfr/dist/dsfr.min.css">
</head>
<body>
  <div class="fr-container fr-mt-4w">
    <h1>COMPONENT_TITLE</h1>

SNIPPET_CONTENT
  </div>

  <!-- DSFR JS -->
  <script type="module" src="https://cdn.jsdelivr.net/npm/@gouvfr/dsfr/dist/dsfr.module.min.js"></script>
</body>
</html>
EOF

    # Remplacer le titre
    sed -i.bak "s/COMPONENT_TITLE/$title/g" "$output_file" && rm "${output_file}.bak"

    # Insérer le contenu du snippet avec indentation
    if [ -f "$snippet_file" ]; then
        sed -i.bak "/SNIPPET_CONTENT/r $snippet_file" "$output_file" && rm "${output_file}.bak"
        sed -i.bak '/SNIPPET_CONTENT/d' "$output_file" && rm "${output_file}.bak"
        # Ajouter l'indentation
        sed -i.bak 's/^/    /' "$output_file"
        # Enlever l'indentation de la première ligne et des balises HTML
        sed -i.bak '1,/<body>/s/^    //; /<\/body>/,$s/^    //' "$output_file" && rm "${output_file}.bak"
    fi
}

# Fonction pour télécharger les images
download_images() {
    local doc_file=$1

    if [ ! -f "$doc_file" ]; then
        return
    fi

    log_info "Finding and downloading images..."

    # Trouver toutes les références d'images
    grep -o '!\[\]([^)]*_asset/[^)]*)' "$doc_file" 2>/dev/null | sed 's/!\[\](\.\.\//_asset\//; s/!\[\](\.\//_asset\//; s/).*//' | sort | uniq | while read -r img_path; do
        # Nettoyer le chemin
        clean_path=$(echo "$img_path" | sed 's|^.*_asset/|_asset/|')
        # Créer le dossier de destination
        dest_dir="$LOCAL_PATH/assets/$(dirname "$clean_path" | sed 's|_asset/||')"
        mkdir -p "$dest_dir"
        # Nom du fichier
        img_filename=$(basename "$clean_path")
        dest_file="$dest_dir/$img_filename"
        # URL source
        img_url="$DSFR_REPO/$BASE_PATH/$clean_path"

        # Télécharger l'image
        if curl -f -s "$img_url" -o "$dest_file" 2>/dev/null; then
            log_success "Downloaded image: $img_filename"
        else
            log_warning "Failed to download image: $img_filename"
        fi
    done
}

# Traiter index.md
if [ -f "$TEMP_DIR/index-raw.md" ]; then
    log_info "Processing index.md..."
    clean_frontmatter "$TEMP_DIR/index-raw.md"
    clean_dsfr_directives "$TEMP_DIR/index-raw.md"
    # Mettre à jour les chemins d'images
    sed 's|!\[\](\./|\!\[\](./assets/|g; s|!\[\](\.\./|\!\[\](./assets/|g' "$TEMP_DIR/index-raw.md" > "$LOCAL_PATH/index.md"
    download_images "$TEMP_DIR/index-raw.md"
    log_success "Processed index.md"
fi

# Traiter accessibilite.md
if [ -f "$TEMP_DIR/accessibilite-raw.md" ]; then
    log_info "Processing accessibilite.md..."
    clean_frontmatter "$TEMP_DIR/accessibilite-raw.md"
    clean_dsfr_directives "$TEMP_DIR/accessibilite-raw.md"
    sed 's|!\[\](\./|\!\[\](./assets/|g; s|!\[\](\.\./|\!\[\](./assets/|g' "$TEMP_DIR/accessibilite-raw.md" > "$LOCAL_PATH/accessibilite.md"
    download_images "$TEMP_DIR/accessibilite-raw.md"
    log_success "Processed accessibilite.md"
fi

# Traiter code.md
if [ -f "$TEMP_DIR/code-raw.md" ]; then
    log_info "Processing code.md..."
    clean_frontmatter "$TEMP_DIR/code-raw.md"
    clean_dsfr_directives "$TEMP_DIR/code-raw.md"
    sed 's|!\[\](\./|\!\[\](./assets/|g; s|!\[\](\.\./|\!\[\](./assets/|g' "$TEMP_DIR/code-raw.md" > "$LOCAL_PATH/code.md"
    download_images "$TEMP_DIR/code-raw.md"

    # Extraire les exemples HTML
    extract_html_blocks "$TEMP_DIR/code-raw.md" "$LOCAL_PATH/examples"

    log_success "Processed code.md"
fi

# Traiter design.md
if [ -f "$TEMP_DIR/design-raw.md" ]; then
    log_info "Processing design.md..."
    clean_frontmatter "$TEMP_DIR/design-raw.md"
    clean_dsfr_directives "$TEMP_DIR/design-raw.md"
    sed 's|!\[\](\./|\!\[\](./assets/|g; s|!\[\](\.\./|\!\[\](./assets/|g' "$TEMP_DIR/design-raw.md" > "$LOCAL_PATH/design.md"
    download_images "$TEMP_DIR/design-raw.md"
    log_success "Processed design.md"
fi

# Créer des exemples HTML complets à partir des snippets
log_info "Creating complete HTML examples..."
counter=1
for snippet in "$LOCAL_PATH"/examples/snippet-*.html; do
    if [ -f "$snippet" ]; then
        output="$LOCAL_PATH/examples/example-$counter.html"
        create_complete_html "$snippet" "$output" "$COMPONENT - Example $counter"
        rm "$snippet"
        ((counter++))
    fi
done

# Nettoyer
rm -rf "$TEMP_DIR"

# Résumé
log_success "✅ Component $COMPONENT synchronized successfully!"
log_info "Location: $LOCAL_PATH"
log_info "Files created:"
[ -f "$LOCAL_PATH/index.md" ] && echo "  - index.md"
[ -f "$LOCAL_PATH/accessibilite.md" ] && echo "  - accessibilite.md"
[ -f "$LOCAL_PATH/code.md" ] && echo "  - code.md"
[ -f "$LOCAL_PATH/design.md" ] && echo "  - design.md"
echo "  - examples/ ($(ls "$LOCAL_PATH"/examples/*.html 2>/dev/null | wc -l | tr -d ' ') files)"
echo "  - assets/ ($(find "$LOCAL_PATH"/assets -type f 2>/dev/null | wc -l | tr -d ' ') files)"
