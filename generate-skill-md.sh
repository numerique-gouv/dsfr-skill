#!/bin/bash

# generate-skill-md.sh
# Script pour générer SKILL.md avec les informations des composants
# Usage: ./generate-skill-md.sh

SKILL_FILE="skills/dsfr/SKILL.md"
COMPOSANTS_DIR="skills/dsfr/composants"

# Fonction pour extraire la première ligne de description d'un index.md
get_description() {
    local component=$1
    local index_file="$COMPOSANTS_DIR/$component/index.md"

    if [ -f "$index_file" ]; then
        # Chercher la ligne qui commence par > ** et finit par **
        grep -m 1 '^> \*\*.*\*\*$' "$index_file" | sed 's/> \*\*//; s/\*\*//'
    else
        echo "Description non disponible"
    fi
}

# Fonction pour extraire le titre français d'un index.md
get_title() {
    local component=$1
    local index_file="$COMPOSANTS_DIR/$component/index.md"

    if [ -f "$index_file" ]; then
        # Extraire le titre H1 (première ligne commençant par # )
        grep -m 1 '^# ' "$index_file" | sed 's/^# //'
    else
        echo "$component"
    fi
}

# Générer le SKILL.md à partir du header
cat ressources/SKILL_HEADER.md > "$SKILL_FILE"
echo "" >> "$SKILL_FILE"

# Compter le nombre de composants
component_count=$(ls -1 "$COMPOSANTS_DIR" | wc -l | tr -d ' ')

echo "**$component_count composants disponibles**" >> "$SKILL_FILE"
echo "" >> "$SKILL_FILE"

# Parcourir chaque composant et ajouter les informations
for component_dir in "$COMPOSANTS_DIR"/*; do
    if [ -d "$component_dir" ]; then
        component=$(basename "$component_dir")
        title=$(get_title "$component")
        description=$(get_description "$component")

        # Ajouter au SKILL.md
        cat >> "$SKILL_FILE" << COMPONENT

### $title (\`$component\`)
**Description** : $description

**Fichiers disponibles** :
- [\`composants/$component/index.md\`](composants/$component/index.md) - Présentation générale, quand utiliser, règles éditoriales
- [\`composants/$component/accessibilite.md\`](composants/$component/accessibilite.md) - Interactions clavier, ARIA, RGAA, lecteurs d'écran
- [\`composants/$component/code.md\`](composants/$component/code.md) - Structure HTML, CSS, JavaScript, API
- [\`composants/$component/design.md\`](composants/$component/design.md) - Anatomie, variantes, états, personnalisation
- [\`composants/$component/examples/\`](composants/$component/examples/) - Exemples HTML complets et fonctionnels

COMPONENT
    fi
done | sort

# Ajouter le footer
cat ressources/SKILL_FOOTER.md >> "$SKILL_FILE"

echo "✅ SKILL.md généré avec succès !"
echo "   Fichier : $SKILL_FILE"
echo "   Composants : $component_count"
