# Version du DSFR Skill

## Informations de version

- **Version du Skill** : 1.0.0
- **Version du DSFR source** : main (latest)
- **Date de dernière synchronisation** : 2025-10-22
- **Repository source** : [GouvernementFR/dsfr](https://github.com/GouvernementFR/dsfr)

## Composants inclus

**Total : 23 composants**

| Composant | Statut | Description |
|-----------|--------|-------------|
| accordion | ✅ Complet | Accordéon : masquer ou révéler du contenu textuel |
| alert | ✅ Complet | Alerte : afficher des messages d'information, de succès, d'erreur ou d'avertissement |
| badge | ✅ Complet | Badge : afficher des informations courtes et importantes |
| breadcrumb | ✅ Complet | Fil d'Ariane : navigation secondaire montrant le chemin de la page actuelle |
| button | ✅ Complet | Bouton : déclencher des actions ou naviguer |
| card | ✅ Complet | Carte : présenter du contenu de manière structurée |
| checkbox | ✅ Complet | Case à cocher : sélectionner une ou plusieurs options |
| footer | ✅ Complet | Pied de page : informations et liens en bas de page |
| header | ✅ Complet | En-tête : navigation principale et identité du site |
| input | ✅ Complet | Champ de saisie : collecter des données textuelles |
| link | ✅ Complet | Lien : navigation entre les pages |
| modal | ✅ Complet | Modale : afficher du contenu dans une fenêtre superposée |
| navigation | ✅ Complet | Navigation : menu de navigation principal |
| notice | ✅ Complet | Notice : message d'information important |
| pagination | ✅ Complet | Pagination : navigation entre pages de résultats |
| radio | ✅ Complet | Bouton radio : sélectionner une seule option parmi plusieurs |
| search | ✅ Complet | Barre de recherche : rechercher du contenu |
| select | ✅ Complet | Liste déroulante : sélectionner une option dans une liste |
| tab | ✅ Complet | Onglet : structurer le contenu en onglets |
| table | ✅ Complet | Tableau : afficher des données tabulaires |
| tag | ✅ Complet | Étiquette : catégoriser ou filtrer du contenu |
| tile | ✅ Complet | Tuile : présenter du contenu cliquable en tuiles |
| toggle | ✅ Complet | Interrupteur : bouton on/off |

## Statistiques

- **Composants** : 23
- **Fichiers markdown** : 92 (4 par composant : index, accessibilité, code, design)
- **Exemples HTML** : ~100 exemples complets et fonctionnels
- **Assets** : ~200 images téléchargées localement
- **Scripts** : 3 scripts bash (sync-component.sh, sync-all.sh, generate-skill-md.sh)

## Structure de chaque composant

Chaque composant inclut :
- ✅ **index.md** - Présentation générale, quand utiliser, règles éditoriales
- ✅ **accessibilite.md** - Interactions clavier, ARIA, RGAA, lecteurs d'écran
- ✅ **code.md** - Structure HTML, CSS, JavaScript, API
- ✅ **design.md** - Anatomie, variantes, états, personnalisation
- ✅ **examples/** - Exemples HTML complets avec imports DSFR CDN
- ✅ **assets/** - Images et ressources visuelles (stockées localement)

## Historique des synchronisations

### 2025-10-22 - Version 1.0.0 (Release)
- ✅ Initialisation du skill
- ✅ Ajout du composant accordion (prototype Phase 1)
- ✅ Création des scripts d'automatisation (Phase 2)
- ✅ Synchronisation de 14 composants principaux supplémentaires (Phase 3)
- ✅ Documentation complète (Phase 4)

**Composants ajoutés** : accordion, alert, badge, breadcrumb, button, card, checkbox, footer, header, input, link, modal, navigation, radio, select

## Scripts disponibles

### sync-component.sh
Script pour synchroniser un composant individuel depuis le dépôt DSFR.

```bash
./sync-component.sh <nom-du-composant>
# Exemple : ./sync-component.sh button
```

### sync-all.sh
Script pour synchroniser tous les composants listés dans `components.json`.

```bash
./sync-all.sh
```

## Notes techniques

- Les images sont stockées localement dans le dossier `assets/` de chaque composant
- Les exemples HTML sont complets et fonctionnels (avec imports DSFR CDN)
- La documentation est adaptée pour être facilement utilisable avec Claude Code
- Les directives markdown spécifiques au site DSFR ont été nettoyées
- Les frontmatter YAML ont été supprimés
- Les chemins d'images ont été mis à jour (`./_asset/` → `./assets/`)

## Prochaines étapes possibles

- Ajouter plus de composants (60+ disponibles dans le DSFR)
- Ajouter un système de versioning automatique
- Créer un script de mise à jour incrémentale
- Ajouter des tests de validation des exemples HTML
