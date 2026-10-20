---
name: Design System Français (DSFR)
description: Documentation et accessibilité concernant le Design System Français (DSFR), un ensemble de composants et de bonnes pratiques pour créer des interfaces utilisateur conformes aux standards du gouvernement français. Use when user wants to implement DSFR components, needs DSFR documentation, asks about French government design system, requires RGAA accessibility guidelines, works with French government websites, or needs HTML/CSS examples for accessible components.
version: 1.0
author: skelz0r
tags: [design system, DSFR, accessibilité, documentation, interface utilisateur, gouvernement français]
---

# Design System Français (DSFR)

Le Design System Français (DSFR) est le système de conception de référence de l'État français. Il fournit des composants réutilisables et des règles pour créer des interfaces utilisateur cohérentes, accessibles et conformes aux standards du gouvernement français.

## À propos de ce skill

Ce skill contient la documentation complète de 23 composants essentiels du DSFR. Chaque composant est documenté avec :
- Une présentation générale et des règles d'usage
- Des spécifications d'accessibilité conformes au RGAA 4.1
- Une documentation technique complète (HTML, CSS, JavaScript)
- Des spécifications design détaillées
- Des exemples de code HTML complets et fonctionnels

## Comment utiliser cette documentation

### Structure des fichiers

**IMPORTANT :** Chaque composant dispose **systématiquement** de ces 5 fichiers :

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

**Ces fichiers existent toujours.** Dans la liste des composants ci-dessous, seul le chemin vers `index.md` est indiqué. Les 4 autres fichiers sont toujours présents dans le même dossier.

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

- `accordion` [Accordéon](composants/accordion/index.md) : Masquer ou révéler du contenu textuel
- `alert` [Alerte](composants/alert/index.md) : Relayer une information importante
- `badge` [Badge](composants/badge/index.md) : Affichage d’un statut informatif
- `breadcrumb` [Fil d'Ariane](composants/breadcrumb/index.md) : Se repérer dans l’arborescence avec le fil d’Ariane.
- `button` [Bouton](composants/button/index.md) : Déclenchement d’une action dans l’interface
- `callout` [Mise en avant](composants/callout/index.md) : Mettre en valeur une information secondaire.
- `card` [Carte](composants/card/index.md) : Carte cliquable redirigeant vers une page éditoriale avec aperçu.
- `checkbox` [Case à cocher](composants/checkbox/index.md) : Sélection multiple dans une liste
- `combobox` [Liste déroulante riche](composants/combobox/index.md) : Composant de sélection multiple enrichi avec fonctions de recherche.
- `composition` [Zone d'expression visuelle](composants/composition/index.md) : Une section riche et impactante pour mettre en avant un message ou une action.
- `connect` [Boutons FranceConnect et ProConnect](composants/connect/index.md) : Authentification avec FranceConnect et/ou ProConnect
- `consent` [Gestionnaire de consentement](composants/consent/index.md) : Gérer le consentement des usagers sur les cookies et données personnelles.
- `content` [Contenu médias](composants/content/index.md) : Structurer visuellement une page avec des contenus média.
- `display` [Paramètres d'affichage](composants/display/index.md) : Choisir le thème clair ou sombre d’un site.
- `download` [Téléchargement de fichier](composants/download/index.md) : Composant obsolète remplacé par les variations des composants carte, lien et tuile.
- `dropdown` [Menu déroulant](composants/dropdown/index.md) : Afficher des actions contextuelles sans encombrer l’interface
- `follow` [Lettre d'information et réseaux sociaux](composants/follow/index.md) : Inscription à une lettre d’info et accès aux réseaux sociaux.
- `footer` [Pied de page](composants/footer/index.md) : Informations complémentaires en bas de page
- `form` [Formulaire](composants/form/index.md) : Gestion de l'agencement des éléments de formulaire.
- `header` [En-tête](composants/header/index.md) : Identification du site et accès rapides
- `highlight` [Mise en exergue](composants/highlight/index.md) : Mettre en évidence une information essentielle.
- `input` [Champ de saisie](composants/input/index.md) : Saisie de données dans une interface.
- `link` [Lien](composants/link/index.md) : Navigation secondaire vers d’autres contenus
- `logo` [Bloc marque](composants/logo/index.md) : Élément de la charte graphique de l'État français utilisé pour représenter l'identité visuelle de l'État.
- `modal` [Modale](composants/modal/index.md) : Affichage focalisé d’un contenu secondaire
- `navigation` [Navigation principale](composants/navigation/index.md) : Orienter l’usager dans les sections du site.
- `notice` [Bandeau d'information importante](composants/notice/index.md) : Afficher une alerte temporaire prioritaire.
- `pagination` [Pagination](composants/pagination/index.md) : Navigation entre plusieurs pages d’une liste
- `password` [Mot de passe](composants/password/index.md) : Saisie ou création de mot de passe, avec affichage masqué et recommandations de sécurité.
- `quote` [Citation](composants/quote/index.md) : Citer un texte dans un contenu éditorial.
- `radio` [Bouton radio](composants/radio/index.md) : Sélection d’une option unique
- `range` [Curseur](composants/range/index.md) : Sélection d’une valeur sur une échelle
- `search` [Barre de recherche](composants/search/index.md) : Accès rapide à un contenu par mot clé
- `segmented` [Contrôle segmenté](composants/segmented/index.md) : Sélection de vues avec un contrôle segmenté.
- `select` [Liste déroulante](composants/select/index.md) : Sélectionner une option dans une liste.
- `share` [Partage](composants/share/index.md) : Partager un contenu via différents canaux
- `sidemenu` [Menu latéral](composants/sidemenu/index.md) : Naviguer entre pages liées avec un menu latéral.
- `skiplink` [Liens d'évitement](composants/skiplink/index.md) : Accéder rapidement au contenu avec le clavier.
- `stepper` [Indicateur d’étapes](composants/stepper/index.md) : Suivi d’un parcours en plusieurs étapes
- `summary` [Sommaire](composants/summary/index.md) : Navigation entre les sections d’une page
- `tab` [Onglet](composants/tab/index.md) : Structuration de contenu avec des onglets
- `table` [Tableau](composants/table/index.md) : Présentation du composant Tableau pour organiser et comparer des données.
- `tabnav` [Navigation tertiaire](composants/tabnav/index.md) : Composant de navigation de 3e niveau en complément du menu latéral
- `tag` [Tag](composants/tag/index.md) : Le tag sert à classer ou filtrer les contenus.
- `tile` [Tuile](composants/tile/index.md) : Rediriger l’usager vers du contenu via des tuiles.
- `toggle` [Interrupteur](composants/toggle/index.md) : Basculer entre deux états opposés
- `tooltip` [Infobulle](composants/tooltip/index.md) : Afficher une aide contextuelle discrète.
- `transcription` [Transcription](composants/transcription/index.md) : Affichage de texte lié à un contenu média
- `translate` [Sélecteur de langues](composants/translate/index.md) : Choisir la langue d’affichage du site.
- `upload` [Ajout de fichier](composants/upload/index.md) : Sélection et envoi de fichiers
- `user` [En-tête connectée](composants/user/index.md) : Variante de l’En-tête dédiée aux usagers connectés

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

Ce skill contient 23 composants prioritaires. Le DSFR complet contient plus de 60 composants. Si un utilisateur demande un composant non documenté ici (ex: stepper, sidemenu, quote, highlight, callout, upload, password, range, etc.), indiquer qu'il faut consulter la documentation officielle du DSFR : https://www.systeme-de-design.gouv.fr/composants-et-modeles/

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
