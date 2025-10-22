# DSFR Skill pour Claude Code

Ce dépôt contient un skill personnalisé pour l'agent Claude Code, permettant d'intégrer le Design System Français (DSFR) dans vos projets de développement web. Le DSFR est un ensemble de composants et de bonnes pratiques pour créer des interfaces utilisateur conformes aux standards du gouvernement français.

## Description

Le DSFR Skill fournit une documentation complète et structurée sur les composants du Design System Français, incluant :

- **15 composants** documentés et prêts à l'emploi
- **Documentation complète** : présentation, accessibilité, code, design
- **Des exemples HTML** complets et fonctionnels
- **Scripts d'automatisation** pour synchroniser avec le dépôt DSFR officiel

## Installation

### Pour utiliser le skill avec Claude Code

1. Cloner ce dépôt dans votre répertoire Claude Code skills :

```bash
cd ~/.config/claude-code/skills  # ou le chemin approprié pour votre OS
git clone <url-de-ce-depot> dsfr
```

2. Redémarrer Claude Code ou recharger les skills

### Pour contribuer ou synchroniser les composants

1. Cloner le dépôt :

```bash
git clone <url-de-ce-depot>
cd dsfr-skill
```

2. Les scripts sont prêts à l'emploi (bash + curl + jq requis)

## 📖 Utilisation avec Claude Code

Une fois le skill installé, vous pouvez demander à Claude Code de vous aider avec le DSFR :

**Exemples de requêtes :**

```
"Montre-moi comment utiliser un accordion"
"Quelles sont les règles d'accessibilité pour les modals ?"
"Donne-moi un exemple de code pour un groupe d'accordéons"
"Comment créer un bouton primaire avec le DSFR ?"
"Quelles sont les spécifications design d'un accordéon ?"
```

Claude Code aura accès à :
- La documentation technique complète
- Les guides d'accessibilité RGAA
- Les spécifications design
- Des exemples de code HTML prêts à l'emploi

## 🎨 Composants disponibles

Le skill inclut actuellement **15 composants** :

| Composant | Description |
|-----------|-------------|
| **accordion** | Accordéon : masquer ou révéler du contenu textuel |
| **alert** | Alerte : afficher des messages d'information, de succès, d'erreur ou d'avertissement |
| **badge** | Badge : afficher des informations courtes et importantes |
| **breadcrumb** | Fil d'Ariane : navigation secondaire montrant le chemin de la page actuelle |
| **button** | Bouton : déclencher des actions ou naviguer |
| **card** | Carte : présenter du contenu de manière structurée |
| **checkbox** | Case à cocher : sélectionner une ou plusieurs options |
| **footer** | Pied de page : informations et liens en bas de page |
| **header** | En-tête : navigation principale et identité du site |
| **input** | Champ de saisie : collecter des données textuelles |
| **link** | Lien : navigation entre les pages |
| **modal** | Modale : afficher du contenu dans une fenêtre superposée |
| **navigation** | Navigation : menu de navigation principal |
| **radio** | Bouton radio : sélectionner une seule option parmi plusieurs |
| **select** | Liste déroulante : sélectionner une option dans une liste |

## 📁 Structure du projet

```
dsfr-skill/
├── README.md                    # Ce fichier
├── plan.md                      # Plan d'implémentation détaillé
├── feature.md                   # Spécifications initiales
├── components.json              # Configuration des composants
├── sync-component.sh           # Script de synchronisation individuelle
├── sync-all.sh                 # Script de synchronisation globale
└── skills/
    └── dsfr/
        ├── SKILL.md            # Métadonnées du skill
        ├── VERSION.md          # Informations de version
        └── composants/
            ├── accordion/
            │   ├── index.md          # Présentation générale
            │   ├── accessibilite.md  # Guide d'accessibilité
            │   ├── code.md           # Documentation technique
            │   ├── design.md         # Spécifications design
            │   ├── examples/         # Exemples HTML complets
            │   │   ├── example-1-simple.html
            │   │   ├── example-2-group.html
            │   │   └── ...
            │   └── assets/           # Images locales
            │       ├── use/
            │       ├── edit/
            │       └── ...
            ├── alert/
            ├── badge/
            └── ... (autres composants)
```

## 🔧 Scripts de synchronisation

### Synchroniser un composant individuel

```bash
./sync-component.sh <nom-du-composant>

# Exemple :
./sync-component.sh button
```

Ce script va :
1. Télécharger les fichiers markdown depuis le dépôt DSFR officiel
2. Nettoyer les frontmatter YAML et directives spécifiques
3. Extraire les blocs de code HTML
4. Télécharger toutes les images
5. Créer des exemples HTML complets et fonctionnels
6. Mettre à jour les chemins d'images

### Synchroniser tous les composants

```bash
./sync-all.sh
```

Ce script synchronise tous les composants listés dans `components.json`.

## 🛠️ Structure de chaque composant

Chaque composant inclut 4 fichiers markdown principaux :

### index.md
- Présentation générale du composant
- Quand l'utiliser / ne pas l'utiliser
- Règles éditoriales
- Guidelines visuels (à faire / à ne pas faire)

### accessibilite.md
- Interactions clavier
- Règles ARIA
- Critères RGAA applicables
- Restitution par les lecteurs d'écran
- Versions des navigateurs et lecteurs d'écran testés

### code.md
- Structure HTML complète
- Classes CSS requises
- Dépendances JavaScript
- API JavaScript (window.dsfr())
- Événements personnalisés
- Exemples de code

### design.md
- Anatomie du composant
- Variantes et états
- Tailles et personnalisation
- Guidelines design

### examples/
Dossier contenant des exemples HTML complets avec :
- DOCTYPE et structure HTML5 complète
- Imports DSFR CSS et JS depuis CDN
- Code du composant prêt à l'emploi
- Commentaires explicatifs

### assets/
Images et ressources visuelles du composant, organisées par catégorie (use/, edit/, custom/, anatomy/, etc.)

## 📊 Statistiques

- **Composants** : 15
- **Fichiers markdown** : 60 (4 par composant)
- **Exemples HTML** : ~60 exemples complets et fonctionnels
- **Assets** : ~150 images stockées localement
- **Scripts** : 2 scripts bash d'automatisation

## 🔗 Références

- [Design System Français - Site officiel](https://www.systeme-de-design.gouv.fr/)
- [DSFR - Dépôt GitHub](https://github.com/GouvernementFR/dsfr)
- [RGAA 4.1.2 - Référentiel d'accessibilité](https://accessibilite.numerique.gouv.fr/)

## 📝 Licence

Ce skill utilise la documentation du Design System Français, qui est sous licence MIT.

## 🤝 Contribution

Les contributions sont les bienvenues ! Pour ajouter de nouveaux composants :

1. Utiliser le script `sync-component.sh` avec le nom du composant
2. Vérifier que la synchronisation s'est bien passée
3. Mettre à jour `components.json`
4. Mettre à jour `SKILL.md` et `VERSION.md`
5. Créer une pull request

## 📧 Support

Pour toute question ou problème :
- Ouvrir une issue sur ce dépôt
- Consulter la documentation officielle du DSFR

## 🗓️ Historique

### Version 1.0.0 (2025-10-22)
- ✅ Initialisation du skill
- ✅ 15 composants principaux synchronisés
- ✅ Scripts d'automatisation créés
- ✅ Documentation complète

---

Créé avec ❤️ pour faciliter l'utilisation du Design System Français avec Claude Code
