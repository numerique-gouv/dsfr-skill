# DSFR Skill pour Claude Code

Skill Claude Code fournissant la documentation complète de 15 composants du Design System Français (DSFR) avec exemples, spécifications d'accessibilité RGAA et scripts de synchronisation automatisés.

## Table des matières

- [Installation](#installation)
- [Utilisation avec Claude Code](#utilisation-avec-claude-code)
- [Structure du projet](#structure-du-projet)
- [Composants disponibles](#composants-disponibles)
- [Gestion du projet](#gestion-du-projet)
  - [Synchroniser les composants](#synchroniser-les-composants)
  - [Ajouter un nouveau composant](#ajouter-un-nouveau-composant)
  - [Mettre à jour le SKILL.md](#mettre-à-jour-le-skillmd)
  - [Modifier le contenu du SKILL.md](#modifier-le-contenu-du-skillmd)
- [Architecture des fichiers](#architecture-des-fichiers)
- [Scripts disponibles](#scripts-disponibles)
- [Licence](#licence)

## Installation

### Pour utiliser le skill avec Claude Code

```bash
cd ~/.config/claude-code/skills  # ou le chemin approprié pour votre OS
git clone <url-de-ce-depot> dsfr
```

Redémarrer Claude Code ou recharger les skills.

### Pour développer ou contribuer

```bash
git clone <url-de-ce-depot>
cd dsfr-skill
```

**Prérequis** : bash, curl, awk, sed (outils Unix standards)

## Utilisation avec Claude Code

Une fois le skill installé, vous pouvez demander à Claude Code :

```
"Montre-moi comment créer un bouton primaire avec le DSFR"
"Quelles sont les règles d'accessibilité pour les accordéons ?"
"Donne-moi un exemple de modal avec le DSFR"
"Comment implémenter un fil d'Ariane accessible ?"
```

Claude Code aura accès à :
- Documentation technique complète (HTML, CSS, JavaScript)
- Guides d'accessibilité RGAA 4.1
- Spécifications design (variantes, états, anatomie)
- Exemples de code HTML complets et fonctionnels

## Structure du projet

```
dsfr-skill/
│
├── README.md                    # Ce fichier - guide du projet
├── LICENSE.md                   # Licence Ouverte 2.0 (Etalab)
│
├── .claude-plugin/
│   └── plugin.json              # Métadonnées du plugin Claude Code
│
├── ressources/                  # Templates pour génération automatique
│   ├── README.md                # Documentation du dossier ressources
│   ├── SKILL_HEADER.md          # En-tête du SKILL.md (frontmatter, guide)
│   └── SKILL_FOOTER.md          # Pied de page (ressources, support)
│
├── scripts de synchronisation
│   ├── sync-component.sh        # Synchroniser un composant individuel
│   ├── sync-all.sh              # Synchroniser tous les composants
│   └── generate-skill-md.sh     # Générer SKILL.md depuis templates
│
└── skills/dsfr/                 # Contenu du skill (lu par Claude Code)
    │
    ├── SKILL.md                 # Point d'entrée - documentation complète
    ├── VERSION.md               # Informations de version et historique
    │
    └── composants/              # 15 composants documentés
        │
        ├── accordion/
        │   ├── index.md         # Présentation, cas d'usage, règles éditoriales
        │   ├── accessibilite.md # RGAA, ARIA, interactions clavier
        │   ├── code.md          # HTML, CSS, JavaScript, API
        │   ├── design.md        # Variantes, états, anatomie, personnalisation
        │   ├── examples/        # Fichiers HTML complets et fonctionnels
        │   │   ├── example-1.html
        │   │   ├── example-2.html
        │   │   └── ...
        │   └── assets/          # Images (do/dont, anatomie, etc.)
        │       ├── use/
        │       ├── edit/
        │       └── ...
        │
        ├── alert/
        ├── badge/
        ├── breadcrumb/
        ├── button/
        ├── card/
        ├── checkbox/
        ├── footer/
        ├── header/
        ├── input/
        ├── link/
        ├── modal/
        ├── navigation/
        ├── radio/
        └── select/
```

## Composants disponibles

**15 composants** actuellement documentés :

| Composant | Description | Fichiers |
|-----------|-------------|----------|
| **accordion** | Masquer ou révéler du contenu textuel | 4 docs + 4 exemples + 9 images |
| **alert** | Relayer une information importante | 4 docs + 3 exemples + 13 images |
| **badge** | Affichage d'un statut informatif | 4 docs + 2 exemples + 13 images |
| **breadcrumb** | Se repérer dans l'arborescence | 4 docs + 3 exemples + 10 images |
| **button** | Déclenchement d'une action | 4 docs + 4 exemples + 27 images |
| **card** | Carte cliquable avec aperçu | 4 docs + 5 exemples + 9 images |
| **checkbox** | Sélection multiple | 4 docs + 2 exemples + 7 images |
| **footer** | Informations en bas de page | 4 docs + 2 exemples + 3 images |
| **header** | Identification et navigation | 4 docs + 3 exemples + 5 images |
| **input** | Saisie de données | 4 docs + 3 exemples + 0 images |
| **link** | Navigation entre pages | 4 docs + 9 exemples + 9 images |
| **modal** | Contenu en fenêtre superposée | 4 docs + 3 exemples + 2 images |
| **navigation** | Menu de navigation principal | 4 docs + 7 exemples + 10 images |
| **radio** | Sélection unique | 4 docs + 7 exemples + 10 images |
| **select** | Liste déroulante | 4 docs + 6 exemples + 3 images |

**Total** : 60 fichiers markdown + 63 exemples HTML + ~130 images

## Gestion du projet

### Synchroniser les composants

#### Synchroniser un seul composant

```bash
./sync-component.sh <nom-du-composant>

# Exemples
./sync-component.sh button
./sync-component.sh modal
```

**Ce que fait le script :**
1. Télécharge les 4 fichiers markdown depuis le dépôt DSFR officiel
   - `doc/index.md` → `index.md`
   - `doc/accessibility/index.md` → `accessibilite.md`
   - `doc/code/index.md` → `code.md`
   - `doc/design/index.md` → `design.md`
2. Nettoie le frontmatter YAML
3. Supprime les directives DSFR spécifiques (`:::dsfr-doc-*`)
4. Extrait les métadonnées (titre, description)
5. Crée une navigation vers les autres fichiers dans `index.md`
6. Extrait les blocs HTML depuis `code.md`
7. Crée des exemples HTML complets (avec `<!DOCTYPE>`, imports DSFR)
8. Télécharge toutes les images référencées
9. Met à jour les chemins d'images (`./assets/`)

#### Synchroniser tous les composants

```bash
./sync-all.sh
```

Synchronise les 15 composants définis dans `PRIORITY_COMPONENTS` du script.

**Quand synchroniser :**
- Après une mise à jour du DSFR officiel
- Pour corriger des problèmes dans la documentation
- Lors de l'ajout de nouveaux composants

### Ajouter un nouveau composant

**Étapes complètes :**

1. **Identifier le composant dans le DSFR**
   - Vérifier qu'il existe dans https://github.com/GouvernementFR/dsfr
   - Trouver son nom technique (ex: `toggle`, `tag`, `table`)

2. **Synchroniser le composant**
   ```bash
   ./sync-component.sh <nom-du-composant>
   ```

3. **Vérifier la synchronisation**
   ```bash
   ls -la skills/dsfr/composants/<nom-du-composant>/
   # Doit contenir : index.md, accessibilite.md, code.md, design.md, examples/, assets/

   # Vérifier que index.md a la bonne structure
   head -10 skills/dsfr/composants/<nom-du-composant>/index.md
   # Doit afficher : titre (H1), description (blockquote), navigation
   ```

4. **Ajouter aux composants prioritaires**

   Éditer `sync-all.sh` :
   ```bash
   PRIORITY_COMPONENTS=(
       "alert"
       "badge"
       # ... autres composants existants
       "<nom-du-composant>"  # Ajouter ici
   )
   ```

5. **Régénérer SKILL.md**
   ```bash
   ./generate-skill-md.sh
   ```

6. **Vérifier que le composant apparaît dans SKILL.md**
   ```bash
   grep -A 6 "### <nom-du-composant>" skills/dsfr/SKILL.md
   ```

7. **Mettre à jour VERSION.md**

   Ajouter une entrée dans l'historique :
   ```markdown
   ## 2025-XX-XX - Version X.X.X
   - Ajout du composant <nom-du-composant>
   ```

8. **Commit et push**
   ```bash
   git add .
   git commit -m "feat: ajout du composant <nom-du-composant>"
   git push
   ```

### Mettre à jour le SKILL.md

Le fichier `SKILL.md` est **généré automatiquement** depuis les templates.

#### Générer/régénérer SKILL.md

```bash
./generate-skill-md.sh
```

**Ce que fait le script :**
1. Charge `ressources/SKILL_HEADER.md` (en-tête, guide d'utilisation)
2. Compte les composants dans `skills/dsfr/composants/`
3. Pour chaque composant :
   - Extrait la description depuis `index.md` (ligne `> **...**`)
   - Génère la section avec liens vers les fichiers
4. Ajoute `ressources/SKILL_FOOTER.md` (ressources, support)
5. Écrit le résultat dans `skills/dsfr/SKILL.md`

**Quand régénérer :**
- Après ajout d'un nouveau composant
- Après modification des templates dans `ressources/`
- Après resynchronisation des composants

### Modifier le contenu du SKILL.md

Le SKILL.md est composé de 3 parties :

#### 1. Header (intro, guide, standards)

**Fichier** : `ressources/SKILL_HEADER.md`

**Contenu** :
- Frontmatter YAML (name, description, version, tags)
- Introduction au DSFR
- Guide d'utilisation de la documentation
- Structure des fichiers (index, accessibilite, code, design, examples)
- Standards et conformité (RGAA, ARIA, compatibilité)
- Architecture technique (imports, classes CSS, JavaScript)

**Pour modifier** :
```bash
# Éditer le fichier
nano ressources/SKILL_HEADER.md  # ou vim, code, etc.

# Régénérer SKILL.md
./generate-skill-md.sh

# Vérifier le résultat
head -100 skills/dsfr/SKILL.md
```

#### 2. Liste des composants (générée automatiquement)

**Générée par** : `generate-skill-md.sh`

**Source des descriptions** : première ligne `> **...**` dans chaque `composants/*/index.md`

**Ne PAS éditer manuellement** - modifier plutôt les `index.md` et resynchroniser :
```bash
./sync-component.sh <composant>
./generate-skill-md.sh
```

#### 3. Footer (exemples, ressources, notes)

**Fichier** : `ressources/SKILL_FOOTER.md`

**Contenu** :
- Guide de réponse aux questions utilisateur
- Exemples de questions et approches
- Principes à respecter
- Ressources externes (DSFR, RGAA, outils)
- Notes importantes (composants non inclus, limites)
- Support et contribution

**Pour modifier** :
```bash
# Éditer le fichier
nano ressources/SKILL_FOOTER.md  # ou vim, code, etc.

# Régénérer SKILL.md
./generate-skill-md.sh

# Vérifier le résultat
tail -100 skills/dsfr/SKILL.md
```

#### Workflow complet de modification du SKILL.md

```bash
# 1. Modifier le header si nécessaire
nano ressources/SKILL_HEADER.md

# 2. Modifier le footer si nécessaire
nano ressources/SKILL_FOOTER.md

# 3. Régénérer
./generate-skill-md.sh

# 4. Vérifier
less skills/dsfr/SKILL.md

# 5. Commit
git add ressources/ skills/dsfr/SKILL.md
git commit -m "docs: mise à jour du SKILL.md"
```

## Architecture des fichiers

### Fichiers de chaque composant

Chaque composant suit la même structure :

#### `index.md` - Présentation générale
- Titre et description courte
- Navigation vers autres fichiers
- Présentation du composant
- Quand l'utiliser / ne pas l'utiliser
- Règles éditoriales
- Exemples visuels (do/don't avec images)

#### `accessibilite.md` - Conformité RGAA
- Interactions clavier obligatoires
- Attributs ARIA requis
- Critères RGAA applicables
- Tests avec lecteurs d'écran
- Versions testées (navigateurs, lecteurs)

#### `code.md` - Documentation technique
- Structure HTML complète
- Classes CSS (obligatoires et optionnelles)
- Dépendances JavaScript
- API JavaScript (`window.dsfr`)
- Événements personnalisés
- Exemples de code

#### `design.md` - Spécifications design
- Anatomie du composant (éléments constitutifs)
- Variantes disponibles (tailles, couleurs, styles)
- États visuels (défaut, hover, focus, disabled, error, success)
- Personnalisation autorisée
- Guidelines design (espacement, alignement)

#### `examples/` - Exemples HTML
- Fichiers HTML autonomes (`example-1.html`, `example-2.html`, ...)
- Structure HTML5 complète avec `<!DOCTYPE>`
- Imports DSFR CSS et JS depuis CDN
- Code prêt à copier-coller et tester
- Un fichier par variante ou cas d'usage

#### `assets/` - Images et ressources
- Sous-dossiers par catégorie :
  - `use/` : exemples d'usage
  - `edit/` : règles éditoriales
  - `custom/` : personnalisation
  - `anatomy/` : anatomie du composant
  - etc.
- Formats : PNG, SVG, JPG

## Scripts disponibles

### `sync-component.sh`

**Usage** : `./sync-component.sh <nom-du-composant>`

**Description** : Synchronise un composant depuis le dépôt DSFR officiel

**Paramètres** :
- `<nom-du-composant>` : nom technique du composant (ex: `button`, `modal`)

**Variables d'environnement** :
- `DSFR_REPO` : URL du dépôt DSFR (par défaut : GitHub raw)
- `BASE_PATH` : chemin dans le dépôt DSFR
- `LOCAL_PATH` : destination locale

**Fonctions principales** :
- `download_file()` : télécharge un fichier
- `extract_title()` : extrait le titre du frontmatter
- `extract_short_description()` : extrait la description courte
- `clean_frontmatter()` : supprime le frontmatter YAML
- `clean_dsfr_directives()` : supprime les directives `:::dsfr-doc-*`
- `extract_html_blocks()` : extrait les blocs HTML
- `create_complete_html()` : crée des fichiers HTML complets
- `download_images()` : télécharge les images référencées

### `sync-all.sh`

**Usage** : `./sync-all.sh`

**Description** : Synchronise tous les composants définis dans `PRIORITY_COMPONENTS`

**Configuration** :
```bash
PRIORITY_COMPONENTS=(
    "alert"
    "badge"
    # ... liste des composants
)
```

### `generate-skill-md.sh`

**Usage** : `./generate-skill-md.sh`

**Description** : Génère `skills/dsfr/SKILL.md` depuis les templates

**Sources** :
- `ressources/SKILL_HEADER.md` : en-tête
- `skills/dsfr/composants/*/index.md` : descriptions
- `ressources/SKILL_FOOTER.md` : pied de page

**Fonction principale** :
- `get_description()` : extrait la description depuis `index.md`

## Licence

Ce projet est publié sous [Licence Ouverte 2.0 (Etalab-2.0)](LICENSE.md).

**Droits** : réutilisation libre et gratuite, y compris à des fins commerciales.

**Obligation** : mentionner la paternité (source + date de mise à jour).

**Compatibilité** : CC-BY, OGL (UK), ODC-BY.

---

## Références

- [Design System Français](https://www.systeme-de-design.gouv.fr/)
- [DSFR sur GitHub](https://github.com/GouvernementFR/dsfr)
- [RGAA 4.1.2](https://accessibilite.numerique.gouv.fr/)
- [Licence Ouverte 2.0](https://github.com/etalab/licence-ouverte/)

## Support

**Questions sur le skill** : ouvrir une issue sur ce dépôt

**Questions sur le DSFR** :
- [Forum DSFR](https://github.com/GouvernementFR/dsfr/discussions)
- [Issues DSFR](https://github.com/GouvernementFR/dsfr/issues)

---

**Version** : 1.0.0 | **Dernière mise à jour** : 2025-10-22
