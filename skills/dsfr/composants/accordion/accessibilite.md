# Accessibilité de l'Accordéon

Le composant Accordéon est conçu pour être accessible et respecter les critères du RGAA. Voici les points clés à prendre en compte pour en garantir l'accessibilité.

## Interactions clavier

Lorsque le focus est sur le bouton d'ouverture de l'accordéon :

- `Entrée` : ouvre ou ferme la zone de contenu associée.
- `Espace` : ouvre ou ferme la zone de contenu associée.

Navigation entre les accordéons :

- `Tab` : déplace le focus sur le bouton suivant.
- `Maj` + `Tab` : déplace le focus sur le bouton précédent.

Si une zone de contenu de l'accordéon est ouverte, tous les éléments interactifs à l'intérieur sont inclus dans le parcours de navigation au clavier.

## Règles d'accessibilité

Le composant **Accordéon** s'appuie sur le motif de conception ARIA <span lang="en">Accordion</span> de l'<a href="https://www.w3.org/WAI/ARIA/apg/about/introduction/" target="_blank" rel="noopener external" title="Authoring Practices Guide - nouvelle fenêtre" lang="en">Authoring Practices Guide</a> (APG).

### Titre de l'accordéon

- Le titre de l'accordéon doit être explicite et permettre de comprendre le contenu proposé.
- Le niveau titre de l'accordéon doit être cohérent avec le reste de la page.

### Bouton de l'accordéon

- Il est placé à l'intérieur de la balise `hx`, autour du texte.
- Il possède deux attributs ARIA :
  - `aria-expanded` défini à :
    - `true` lorsque la zone de contenu contrôlée est affichée,
    - `false` lorsque la zone de contenu contrôlée est masquée.
  - `aria-controls` qui relie le bouton à la zone contrôlée et dont la valeur doit correspondre à l'attribut `id` de la zone de contenu.

### Groupe d'accordéons

Le comportement par défaut du « Groupe d'accordéons » (ouverture d'un accordéon à la fois seulement) peut poser des problèmes d'utilisabilité pour certaines personnes handicapées.

L'option « Groupe d'accordéons dissociés » est à privilégier par défaut.

### Contrastes de couleurs

Le composant Accordéon est suffisamment contrasté en thème clair.

Au survol du bouton en thème sombre, le ratio de contraste entre le texte et le fond du bouton est insuffisant.

Le chevron est insuffisamment contrasté au survol uniquement lorsque l'accordéon est ouvert.

**Contraste du texte et du chevron de l'accordéon**

| État du bouton | Thème clair | Thème sombre |
|------|-----|-----|
|**fermé - par défaut**| 14,9:1 | 5,76:1 |
|**fermé - au survol**| 13,79:1| 4:1 |
|**ouvert - par défaut**| 11,83:1| 4,55:1 |
|**ouvert - au survol**| 13,79:1| 2,6:1 |

## Restitution par les lecteurs d'écran

L'attribut `aria-expanded` est restitué différemment selon les lecteurs d'écran.

- Lorsque l'accordéon est fermé (`aria-expanded="false"`) : « réduit » ou « condensé » (VoiceOver macOS)
- Lorsque l'accordéon est ouvert : « développé » (NVDA, Narrateur, VoiceOver iOS) ou « étendu » (JAWS, VoiceOver macOS, Talkback).

> **⚠️ Attention**
> - Selon la version de macOS, un [bug de VoiceOver](https://bugs.webkit.org/show_bug.cgi?id=284804) fait qu'il ne restitue pas le changement d'état lorsque le bouton est actionné.
> - Narrateur vocalise le changement d'état lorsque le bouton est actionné **uniquement avec Microsoft Edge**. Sur Chrome et Firefox, le changement d'état n'est pas vocalisé lorsque le bouton est actionné.
>
> Ce sont des bugs des lecteurs d'écran et non un problème avec le composant.

### Versions navigateurs et lecteurs d'écran

Les tests de restitution ont été effectués en ajoutant le lecteur d'écran intégré à Windows 11 (Narrateur) et le navigateur web Chrome à l'environnement de tests du RGAA.

Versions des navigateurs web :

- Firefox 137
- Chrome 135
- Safari 18.4 (sur macOS uniquement)
- Microsoft Edge 135 (sur Windows 11 uniquement)

Version des lecteurs d'écran :
- NVDA 2024.4.2
- JAWS 2024
- VoiceOver macOS 15.4
- Narrateur (Windows 11)
- VoiceOver iOS

## Critères RGAA applicables

- **Couleurs :** 3.2, 3.3
- **Scripts :** 7.1, 7.3
- **Structuration :** 9.1
- **Présentation de l'information :** 10.1, 10.2, 10.3, 10.4, 10.5, 10.7, 10.8, 10.11, 10.12
- **Navigation :** 12.8, 12.9, 12.11
- **Consultation :** 13.9, 13.11

## Références

- [Référentiel général d'amélioration de l'accessibilité (RGAA 4.1.2)](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/)
- [Attribut aria-expanded — spécification ARIA](https://www.w3.org/TR/wai-aria-1.3/#aria-expanded)
- [Attribut aria-controls — spécification ARIA](https://www.w3.org/TR/wai-aria-1.3/#aria-controls)
- [Motif de conception WAI-ARIA Accordion](https://www.w3.org/WAI/ARIA/apg/patterns/accordion/)
