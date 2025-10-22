---
name: Design System Français (DSFR)
description: Documentation et accessibilité concernant le Design System Français (DSFR), un ensemble de composants et de bonnes pratiques pour créer des interfaces utilisateur conformes aux standards du gouvernement français.
version: 1.0
author: skelz0r
tags: [design system, DSFR, accessibilité, documentation, interface utilisateur, gouvernement français]
---

# Design System Français (DSFR)

Le Design System Français (DSFR) est le système de conception de référence de l'État français. Il fournit des composants réutilisables et des règles pour créer des interfaces utilisateur cohérentes, accessibles et conformes aux standards du gouvernement français.

## À propos de ce skill

Ce skill contient la documentation complète de 15 composants essentiels du DSFR. Chaque composant est documenté avec :
- Une présentation générale et des règles d'usage
- Des spécifications d'accessibilité conformes au RGAA 4.1
- Une documentation technique complète (HTML, CSS, JavaScript)
- Des spécifications design détaillées
- Des exemples de code HTML complets et fonctionnels

## Comment utiliser cette documentation

### Structure des fichiers

Chaque composant dispose de 5 types de ressources :

1. **index.md** - Vue d'ensemble du composant
   - Présentation et cas d'usage
   - Quand utiliser / ne pas utiliser ce composant
   - Règles éditoriales et bonnes pratiques
   - Exemples visuels (do/don't)

2. **accessibilite.md** - Conformité RGAA
   - Interactions clavier requises
   - Attributs ARIA nécessaires
   - Critères RGAA applicables
   - Tests avec lecteurs d'écran
   - Compatibilité navigateurs/technologies d'assistance

3. **code.md** - Documentation technique
   - Structure HTML complète et détaillée
   - Classes CSS obligatoires et optionnelles
   - Dépendances JavaScript
   - API JavaScript (window.dsfr)
   - Événements personnalisés disponibles
   - Exemples d'implémentation

4. **design.md** - Spécifications design
   - Anatomie du composant (éléments constitutifs)
   - Variantes disponibles (tailles, couleurs, états)
   - États visuels (défaut, hover, focus, disabled, error, success)
   - Personnalisation possible
   - Guidelines design et espacement

5. **examples/** - Exemples HTML complets
   - Fichiers HTML autonomes et fonctionnels
   - Imports DSFR CSS et JS depuis CDN
   - Code prêt à copier-coller
   - Démonstration de différentes variantes

### Répondre aux demandes utilisateur

**Pour une question générale sur un composant :**
→ Consulter d'abord `index.md` pour la présentation et les cas d'usage

**Pour une question d'accessibilité :**
→ Consulter `accessibilite.md` pour les spécifications RGAA, ARIA et interactions clavier

**Pour une question d'implémentation :**
→ Consulter `code.md` pour la structure HTML, classes CSS et API JavaScript
→ Consulter `examples/` pour des exemples complets

**Pour une question de design ou d'apparence :**
→ Consulter `design.md` pour les variantes, états et spécifications visuelles

**Pour créer un exemple de code :**
→ Toujours inclure les imports DSFR CSS et JS
→ S'inspirer des exemples dans `examples/`
→ Respecter la structure HTML de `code.md`
→ Mentionner les contraintes d'accessibilité importantes

## Standards et conformité

### RGAA 4.1
Tous les composants sont conçus pour respecter le Référentiel Général d'Amélioration de l'Accessibilité version 4.1. Les critères RGAA applicables sont détaillés dans les fichiers `accessibilite.md`.

### ARIA
Les attributs ARIA nécessaires sont documentés pour chaque composant. Ils sont essentiels pour l'accessibilité et doivent être implémentés correctement.

### Compatibilité navigateurs
Les composants sont testés et compatibles avec :
- Chrome/Edge (versions récentes)
- Firefox (versions récentes)
- Safari (versions récentes)
- Internet Explorer 11 (support limité)

### Technologies d'assistance
Les composants sont testés avec :
- NVDA (Windows)
- JAWS (Windows)
- VoiceOver (macOS/iOS)
- TalkBack (Android)

## Architecture technique du DSFR

### Imports requis

Pour utiliser les composants DSFR, il faut toujours inclure :

```html
<!-- CSS du DSFR -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@gouvfr/dsfr/dist/dsfr.min.css">

<!-- JavaScript du DSFR (si le composant a des interactions) -->
<script type="module" src="https://cdn.jsdelivr.net/npm/@gouvfr/dsfr/dist/dsfr.module.min.js"></script>
```

### Classes CSS

Les classes suivent une convention de nommage stricte :
- Préfixe `fr-` pour tous les composants
- Pattern : `fr-{composant}`, `fr-{composant}__{élément}`, `fr-{composant}--{variante}`
- Exemples : `fr-btn`, `fr-btn--secondary`, `fr-accordion__title`

### JavaScript

Les composants interactifs utilisent l'API JavaScript du DSFR :
- Initialisation automatique au chargement de la page
- API globale accessible via `window.dsfr`
- Événements personnalisés pour les interactions
- Pas de dépendance externe (pas de jQuery requis)

## Liste des composants disponibles

**23 composants disponibles**


### Accordéon (`accordion`)
**Description** : Masquer ou révéler du contenu textuel

**Fichiers disponibles** :
- [`composants/accordion/index.md`](composants/accordion/index.md) - Présentation générale, quand utiliser, règles éditoriales
- [`composants/accordion/accessibilite.md`](composants/accordion/accessibilite.md) - Interactions clavier, ARIA, RGAA, lecteurs d'écran
- [`composants/accordion/code.md`](composants/accordion/code.md) - Structure HTML, CSS, JavaScript, API
- [`composants/accordion/design.md`](composants/accordion/design.md) - Anatomie, variantes, états, personnalisation
- [`composants/accordion/examples/`](composants/accordion/examples/) - Exemples HTML complets et fonctionnels


### Alerte (`alert`)
**Description** : Relayer une information importante

**Fichiers disponibles** :
- [`composants/alert/index.md`](composants/alert/index.md) - Présentation générale, quand utiliser, règles éditoriales
- [`composants/alert/accessibilite.md`](composants/alert/accessibilite.md) - Interactions clavier, ARIA, RGAA, lecteurs d'écran
- [`composants/alert/code.md`](composants/alert/code.md) - Structure HTML, CSS, JavaScript, API
- [`composants/alert/design.md`](composants/alert/design.md) - Anatomie, variantes, états, personnalisation
- [`composants/alert/examples/`](composants/alert/examples/) - Exemples HTML complets et fonctionnels


### Badge (`badge`)
**Description** : Affichage d’un statut informatif

**Fichiers disponibles** :
- [`composants/badge/index.md`](composants/badge/index.md) - Présentation générale, quand utiliser, règles éditoriales
- [`composants/badge/accessibilite.md`](composants/badge/accessibilite.md) - Interactions clavier, ARIA, RGAA, lecteurs d'écran
- [`composants/badge/code.md`](composants/badge/code.md) - Structure HTML, CSS, JavaScript, API
- [`composants/badge/design.md`](composants/badge/design.md) - Anatomie, variantes, états, personnalisation
- [`composants/badge/examples/`](composants/badge/examples/) - Exemples HTML complets et fonctionnels


### Fil d'Ariane (`breadcrumb`)
**Description** : Se repérer dans l’arborescence avec le fil d’Ariane.

**Fichiers disponibles** :
- [`composants/breadcrumb/index.md`](composants/breadcrumb/index.md) - Présentation générale, quand utiliser, règles éditoriales
- [`composants/breadcrumb/accessibilite.md`](composants/breadcrumb/accessibilite.md) - Interactions clavier, ARIA, RGAA, lecteurs d'écran
- [`composants/breadcrumb/code.md`](composants/breadcrumb/code.md) - Structure HTML, CSS, JavaScript, API
- [`composants/breadcrumb/design.md`](composants/breadcrumb/design.md) - Anatomie, variantes, états, personnalisation
- [`composants/breadcrumb/examples/`](composants/breadcrumb/examples/) - Exemples HTML complets et fonctionnels


### Bouton (`button`)
**Description** : Déclenchement d’une action dans l’interface

**Fichiers disponibles** :
- [`composants/button/index.md`](composants/button/index.md) - Présentation générale, quand utiliser, règles éditoriales
- [`composants/button/accessibilite.md`](composants/button/accessibilite.md) - Interactions clavier, ARIA, RGAA, lecteurs d'écran
- [`composants/button/code.md`](composants/button/code.md) - Structure HTML, CSS, JavaScript, API
- [`composants/button/design.md`](composants/button/design.md) - Anatomie, variantes, états, personnalisation
- [`composants/button/examples/`](composants/button/examples/) - Exemples HTML complets et fonctionnels


### Carte (`card`)
**Description** : Carte cliquable redirigeant vers une page éditoriale avec aperçu.

**Fichiers disponibles** :
- [`composants/card/index.md`](composants/card/index.md) - Présentation générale, quand utiliser, règles éditoriales
- [`composants/card/accessibilite.md`](composants/card/accessibilite.md) - Interactions clavier, ARIA, RGAA, lecteurs d'écran
- [`composants/card/code.md`](composants/card/code.md) - Structure HTML, CSS, JavaScript, API
- [`composants/card/design.md`](composants/card/design.md) - Anatomie, variantes, états, personnalisation
- [`composants/card/examples/`](composants/card/examples/) - Exemples HTML complets et fonctionnels


### Case à cocher (`checkbox`)
**Description** : Sélection multiple dans une liste

**Fichiers disponibles** :
- [`composants/checkbox/index.md`](composants/checkbox/index.md) - Présentation générale, quand utiliser, règles éditoriales
- [`composants/checkbox/accessibilite.md`](composants/checkbox/accessibilite.md) - Interactions clavier, ARIA, RGAA, lecteurs d'écran
- [`composants/checkbox/code.md`](composants/checkbox/code.md) - Structure HTML, CSS, JavaScript, API
- [`composants/checkbox/design.md`](composants/checkbox/design.md) - Anatomie, variantes, états, personnalisation
- [`composants/checkbox/examples/`](composants/checkbox/examples/) - Exemples HTML complets et fonctionnels


### Pied de page (`footer`)
**Description** : Informations complémentaires en bas de page

**Fichiers disponibles** :
- [`composants/footer/index.md`](composants/footer/index.md) - Présentation générale, quand utiliser, règles éditoriales
- [`composants/footer/accessibilite.md`](composants/footer/accessibilite.md) - Interactions clavier, ARIA, RGAA, lecteurs d'écran
- [`composants/footer/code.md`](composants/footer/code.md) - Structure HTML, CSS, JavaScript, API
- [`composants/footer/design.md`](composants/footer/design.md) - Anatomie, variantes, états, personnalisation
- [`composants/footer/examples/`](composants/footer/examples/) - Exemples HTML complets et fonctionnels


### En-tête (`header`)
**Description** : Identification du site et accès rapides

**Fichiers disponibles** :
- [`composants/header/index.md`](composants/header/index.md) - Présentation générale, quand utiliser, règles éditoriales
- [`composants/header/accessibilite.md`](composants/header/accessibilite.md) - Interactions clavier, ARIA, RGAA, lecteurs d'écran
- [`composants/header/code.md`](composants/header/code.md) - Structure HTML, CSS, JavaScript, API
- [`composants/header/design.md`](composants/header/design.md) - Anatomie, variantes, états, personnalisation
- [`composants/header/examples/`](composants/header/examples/) - Exemples HTML complets et fonctionnels


### Champ de saisie (`input`)
**Description** : Saisie de données dans une interface.

**Fichiers disponibles** :
- [`composants/input/index.md`](composants/input/index.md) - Présentation générale, quand utiliser, règles éditoriales
- [`composants/input/accessibilite.md`](composants/input/accessibilite.md) - Interactions clavier, ARIA, RGAA, lecteurs d'écran
- [`composants/input/code.md`](composants/input/code.md) - Structure HTML, CSS, JavaScript, API
- [`composants/input/design.md`](composants/input/design.md) - Anatomie, variantes, états, personnalisation
- [`composants/input/examples/`](composants/input/examples/) - Exemples HTML complets et fonctionnels


### Lien (`link`)
**Description** : Navigation secondaire vers d’autres contenus

**Fichiers disponibles** :
- [`composants/link/index.md`](composants/link/index.md) - Présentation générale, quand utiliser, règles éditoriales
- [`composants/link/accessibilite.md`](composants/link/accessibilite.md) - Interactions clavier, ARIA, RGAA, lecteurs d'écran
- [`composants/link/code.md`](composants/link/code.md) - Structure HTML, CSS, JavaScript, API
- [`composants/link/design.md`](composants/link/design.md) - Anatomie, variantes, états, personnalisation
- [`composants/link/examples/`](composants/link/examples/) - Exemples HTML complets et fonctionnels


### Modale (`modal`)
**Description** : Affichage focalisé d’un contenu secondaire

**Fichiers disponibles** :
- [`composants/modal/index.md`](composants/modal/index.md) - Présentation générale, quand utiliser, règles éditoriales
- [`composants/modal/accessibilite.md`](composants/modal/accessibilite.md) - Interactions clavier, ARIA, RGAA, lecteurs d'écran
- [`composants/modal/code.md`](composants/modal/code.md) - Structure HTML, CSS, JavaScript, API
- [`composants/modal/design.md`](composants/modal/design.md) - Anatomie, variantes, états, personnalisation
- [`composants/modal/examples/`](composants/modal/examples/) - Exemples HTML complets et fonctionnels


### Navigation principale (`navigation`)
**Description** : Orienter l’usager dans les sections du site.

**Fichiers disponibles** :
- [`composants/navigation/index.md`](composants/navigation/index.md) - Présentation générale, quand utiliser, règles éditoriales
- [`composants/navigation/accessibilite.md`](composants/navigation/accessibilite.md) - Interactions clavier, ARIA, RGAA, lecteurs d'écran
- [`composants/navigation/code.md`](composants/navigation/code.md) - Structure HTML, CSS, JavaScript, API
- [`composants/navigation/design.md`](composants/navigation/design.md) - Anatomie, variantes, états, personnalisation
- [`composants/navigation/examples/`](composants/navigation/examples/) - Exemples HTML complets et fonctionnels


### Bandeau d'information importante (`notice`)
**Description** : Afficher une alerte temporaire prioritaire.

**Fichiers disponibles** :
- [`composants/notice/index.md`](composants/notice/index.md) - Présentation générale, quand utiliser, règles éditoriales
- [`composants/notice/accessibilite.md`](composants/notice/accessibilite.md) - Interactions clavier, ARIA, RGAA, lecteurs d'écran
- [`composants/notice/code.md`](composants/notice/code.md) - Structure HTML, CSS, JavaScript, API
- [`composants/notice/design.md`](composants/notice/design.md) - Anatomie, variantes, états, personnalisation
- [`composants/notice/examples/`](composants/notice/examples/) - Exemples HTML complets et fonctionnels


### Pagination (`pagination`)
**Description** : Navigation entre plusieurs pages d’une liste

**Fichiers disponibles** :
- [`composants/pagination/index.md`](composants/pagination/index.md) - Présentation générale, quand utiliser, règles éditoriales
- [`composants/pagination/accessibilite.md`](composants/pagination/accessibilite.md) - Interactions clavier, ARIA, RGAA, lecteurs d'écran
- [`composants/pagination/code.md`](composants/pagination/code.md) - Structure HTML, CSS, JavaScript, API
- [`composants/pagination/design.md`](composants/pagination/design.md) - Anatomie, variantes, états, personnalisation
- [`composants/pagination/examples/`](composants/pagination/examples/) - Exemples HTML complets et fonctionnels


### Bouton radio (`radio`)
**Description** : Sélection d’une option unique

**Fichiers disponibles** :
- [`composants/radio/index.md`](composants/radio/index.md) - Présentation générale, quand utiliser, règles éditoriales
- [`composants/radio/accessibilite.md`](composants/radio/accessibilite.md) - Interactions clavier, ARIA, RGAA, lecteurs d'écran
- [`composants/radio/code.md`](composants/radio/code.md) - Structure HTML, CSS, JavaScript, API
- [`composants/radio/design.md`](composants/radio/design.md) - Anatomie, variantes, états, personnalisation
- [`composants/radio/examples/`](composants/radio/examples/) - Exemples HTML complets et fonctionnels


### Barre de recherche (`search`)
**Description** : Accès rapide à un contenu par mot clé

**Fichiers disponibles** :
- [`composants/search/index.md`](composants/search/index.md) - Présentation générale, quand utiliser, règles éditoriales
- [`composants/search/accessibilite.md`](composants/search/accessibilite.md) - Interactions clavier, ARIA, RGAA, lecteurs d'écran
- [`composants/search/code.md`](composants/search/code.md) - Structure HTML, CSS, JavaScript, API
- [`composants/search/design.md`](composants/search/design.md) - Anatomie, variantes, états, personnalisation
- [`composants/search/examples/`](composants/search/examples/) - Exemples HTML complets et fonctionnels


### Liste déroulante (`select`)
**Description** : Sélectionner une option dans une liste.

**Fichiers disponibles** :
- [`composants/select/index.md`](composants/select/index.md) - Présentation générale, quand utiliser, règles éditoriales
- [`composants/select/accessibilite.md`](composants/select/accessibilite.md) - Interactions clavier, ARIA, RGAA, lecteurs d'écran
- [`composants/select/code.md`](composants/select/code.md) - Structure HTML, CSS, JavaScript, API
- [`composants/select/design.md`](composants/select/design.md) - Anatomie, variantes, états, personnalisation
- [`composants/select/examples/`](composants/select/examples/) - Exemples HTML complets et fonctionnels


### Onglet (`tab`)
**Description** : Structuration de contenu avec des onglets

**Fichiers disponibles** :
- [`composants/tab/index.md`](composants/tab/index.md) - Présentation générale, quand utiliser, règles éditoriales
- [`composants/tab/accessibilite.md`](composants/tab/accessibilite.md) - Interactions clavier, ARIA, RGAA, lecteurs d'écran
- [`composants/tab/code.md`](composants/tab/code.md) - Structure HTML, CSS, JavaScript, API
- [`composants/tab/design.md`](composants/tab/design.md) - Anatomie, variantes, états, personnalisation
- [`composants/tab/examples/`](composants/tab/examples/) - Exemples HTML complets et fonctionnels


### Tableau (`table`)
**Description** : Présentation du composant Tableau pour organiser et comparer des données.

**Fichiers disponibles** :
- [`composants/table/index.md`](composants/table/index.md) - Présentation générale, quand utiliser, règles éditoriales
- [`composants/table/accessibilite.md`](composants/table/accessibilite.md) - Interactions clavier, ARIA, RGAA, lecteurs d'écran
- [`composants/table/code.md`](composants/table/code.md) - Structure HTML, CSS, JavaScript, API
- [`composants/table/design.md`](composants/table/design.md) - Anatomie, variantes, états, personnalisation
- [`composants/table/examples/`](composants/table/examples/) - Exemples HTML complets et fonctionnels


### Tag (`tag`)
**Description** : Le tag sert à classer ou filtrer les contenus.

**Fichiers disponibles** :
- [`composants/tag/index.md`](composants/tag/index.md) - Présentation générale, quand utiliser, règles éditoriales
- [`composants/tag/accessibilite.md`](composants/tag/accessibilite.md) - Interactions clavier, ARIA, RGAA, lecteurs d'écran
- [`composants/tag/code.md`](composants/tag/code.md) - Structure HTML, CSS, JavaScript, API
- [`composants/tag/design.md`](composants/tag/design.md) - Anatomie, variantes, états, personnalisation
- [`composants/tag/examples/`](composants/tag/examples/) - Exemples HTML complets et fonctionnels


### Tuile (`tile`)
**Description** : Rediriger l’usager vers du contenu via des tuiles.

**Fichiers disponibles** :
- [`composants/tile/index.md`](composants/tile/index.md) - Présentation générale, quand utiliser, règles éditoriales
- [`composants/tile/accessibilite.md`](composants/tile/accessibilite.md) - Interactions clavier, ARIA, RGAA, lecteurs d'écran
- [`composants/tile/code.md`](composants/tile/code.md) - Structure HTML, CSS, JavaScript, API
- [`composants/tile/design.md`](composants/tile/design.md) - Anatomie, variantes, états, personnalisation
- [`composants/tile/examples/`](composants/tile/examples/) - Exemples HTML complets et fonctionnels


### Interrupteur (`toggle`)
**Description** : Basculer entre deux états opposés

**Fichiers disponibles** :
- [`composants/toggle/index.md`](composants/toggle/index.md) - Présentation générale, quand utiliser, règles éditoriales
- [`composants/toggle/accessibilite.md`](composants/toggle/accessibilite.md) - Interactions clavier, ARIA, RGAA, lecteurs d'écran
- [`composants/toggle/code.md`](composants/toggle/code.md) - Structure HTML, CSS, JavaScript, API
- [`composants/toggle/design.md`](composants/toggle/design.md) - Anatomie, variantes, états, personnalisation
- [`composants/toggle/examples/`](composants/toggle/examples/) - Exemples HTML complets et fonctionnels


## Comment répondre aux questions utilisateur

### Exemples de questions et approches recommandées

**"Comment créer un bouton ?"**
1. Consulter `composants/button/code.md` pour la structure HTML du composant Bouton (`button`)
2. Montrer un exemple simple avec les imports DSFR
3. Mentionner les variantes disponibles (primaire, secondaire, tertiaire)

**"Mon bouton n'est pas accessible, comment le corriger ?"**
1. Consulter `composants/button/accessibilite.md` du composant Bouton (`button`)
2. Vérifier les attributs ARIA requis
3. Vérifier les interactions clavier
4. Proposer les corrections nécessaires

**"Quelle est la différence entre un bouton primaire et secondaire ?"**
1. Consulter `composants/button/index.md` du composant Bouton (`button`) pour la hiérarchie d'usage
2. Consulter `composants/button/design.md` pour les différences visuelles
3. Expliquer les cas d'usage de chaque variante

**"Donne-moi un exemple complet d'accordéon"**
1. Lire un fichier dans `composants/accordion/examples/` du composant Accordéon (`accordion`)
2. Présenter le code complet
3. Expliquer les éléments clés (structure, classes, attributs)

**"Comment personnaliser la couleur d'un badge ?"**
1. Consulter `composants/badge/design.md` du composant Badge (`badge`) pour les variantes de couleur disponibles
2. Montrer les classes CSS correspondantes depuis `code.md`
3. Avertir si une personnalisation n'est pas recommandée par le DSFR

### Principes à respecter

**Toujours privilégier l'accessibilité :**
- Mentionner les contraintes ARIA et RGAA importantes
- Rappeler les interactions clavier nécessaires
- Inclure les attributs d'accessibilité dans les exemples de code

**Fournir du code complet et fonctionnel :**
- Inclure les imports CSS et JS du DSFR
- Respecter la structure HTML documentée
- Utiliser les classes CSS exactes du DSFR
- Ne pas inventer de classes ou attributs non documentés

**Être précis sur les variantes :**
- Utiliser les noms exacts des variantes (ex: `fr-btn--secondary` et non "bouton-secondaire")
- Consulter `design.md` pour les variantes disponibles
- Ne pas suggérer de variantes non documentées

**Contextualiser les recommandations :**
- Expliquer pourquoi une approche est recommandée
- Mentionner les cas où un composant ne doit pas être utilisé
- Référencer les bonnes pratiques du DSFR

## Ressources externes

### Documentation officielle DSFR
- Site web : https://www.systeme-de-design.gouv.fr/
- GitHub : https://github.com/GouvernementFR/dsfr
- NPM : @gouvfr/dsfr

### Standards et références
- RGAA 4.1 : https://accessibilite.numerique.gouv.fr/
- WAI-ARIA : https://www.w3.org/WAI/ARIA/
- Documentation MDN (HTML/CSS/JS) : https://developer.mozilla.org/

### Outils de test d'accessibilité
- NVDA (lecteur d'écran Windows)
- JAWS (lecteur d'écran Windows)
- VoiceOver (lecteur d'écran macOS/iOS)
- Axe DevTools (extension navigateur)
- WAVE (extension navigateur)

## Notes importantes

### Ce qui N'EST PAS dans ce skill

Ce skill contient uniquement 15 composants de base. Le DSFR complet contient plus de 60 composants. Si un utilisateur demande un composant non documenté ici, indiquer qu'il faut consulter la documentation officielle du DSFR.

### Composants NON inclus dans ce skill
- Tuile (tile)
- Tag
- Tableau (table)
- Onglets (tabs)
- Stepper
- Toggle
- Notice
- Quote
- Highlight
- Pagination
- Recherche (search)
- Upload
- Range
- Sidemenu
- Transcription
- Et environ 40 autres composants...

Pour ces composants, rediriger vers : https://www.systeme-de-design.gouv.fr/composants-et-modeles/

### Versions et mises à jour

Ce skill est synchronisé avec la version du DSFR disponible dans le dépôt GitHub officiel à la date de dernière synchronisation. Consulter le fichier [`VERSION.md`](VERSION.md) pour connaître :
- La date de dernière synchronisation
- Le commit/tag DSFR source
- L'historique des mises à jour

### Personnalisation du DSFR

Le DSFR est conçu pour garantir une cohérence visuelle des services de l'État. Certaines personnalisations ne sont pas autorisées :
- Modification des couleurs de marque
- Changement des espacements standardisés
- Modification de la typographie (Marianne)

Les personnalisations autorisées sont documentées dans les fichiers `design.md` de chaque composant.

## Support et contribution

Pour toute question non couverte par cette documentation :
1. Consulter la documentation officielle : https://www.systeme-de-design.gouv.fr/
2. Poser une question sur le forum DSFR : https://github.com/GouvernementFR/dsfr/discussions
3. Signaler un bug : https://github.com/GouvernementFR/dsfr/issues
