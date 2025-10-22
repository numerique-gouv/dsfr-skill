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
