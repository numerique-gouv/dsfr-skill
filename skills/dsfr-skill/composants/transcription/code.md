# Transcription : Code

## HTML

### Structure du composant

Le composant **Transcription** permet d'afficher et de masquer du contenu textuel.

Sa structure est la suivante :

- Le conteneur de la transcription est un élément HTML `<div>` défini par la classe `fr-transcription`.
- Le bouton pour afficher/masquer le contenu est défini par la classe `fr-transcription__btn`, et son libellé constitue le titre.
  - Le bouton doit être de type "button".
  - Le bouton dispose d'un attribut `aria-expanded`, sa valeur [true|false] défini si le collapse est ouvert ou fermé
  - Le bouton est lié au collapse via l'attribut `aria-controls`, sa valeur doit correspondre à l'attribut `id` du collapse.
- Le bloc refermable, défini par la classe `fr-collapse`, est une `<div>` placée après le bouton. Il s'agit d'un élément générique du core utilisé par d'autres composants tels que la navigation ou l'accordéon.
  - Il dispose d'un attribut `id` obligatoire, pour être lié au bouton d'ouverture.
  - Le bloc refermable contient le pied de page de la transcription, élément HTML `<div>`, défini par la classe `fr-transcription__footer`.
    - Le pied de page contient un conteneur, élément HTML `<div>`, défini par la classe `fr-transcription__actions-group` pour inclure les boutons d'action.
      - Le bouton d'ouverture de la modale est un élément HTML `<button>`, défini par les classes `fr-btn` et `fr-btn--fullscreen`, et son titre est "Agrandir".
        - Le bouton doit être de type "button".
        - Le bouton dispose d'un attribut `aria-label`, dont la valeur est "Agrandir la transcription".
        - Le bouton dispose d'un attribut `data-fr-opened`, sa valeur [true|false] défini si le collapse est ouvert ou fermé
        - Le bouton est lié à la modale via l'attribut `aria-controls`, sa valeur doit correspondre à l'attribut `id` de la modale.
  - Le bloc refermable contient une modale, élément HTML `<div>` définie par la classe `fr-modal`, pour afficher le contenu en plein écran.
    - Elle dispose d'un attribut `id` obligatoire, pour être lié au bouton d'ouverture.
    - la modale est lié à son titre via l'attribut `aria-labelledby`, dont la valeur doit correspondre à l'attribut `id` du titre.
    - Le contenu de la modale reprend la structure du composant [Modale](../modal/index.md) et son contenu est libre, mais nécessite l'utilisation des balises adéquates, il n'est pas correcte de placer du texte directement dans une `<div>`.

**Exemple de structure HTML**

Balises officielles : [Transcription avec zone d’action](exemples.md#transcription-avec-zone-daction)

---

## CSS

### Installation du CSS

Les styles du composant et de ses dépendances s'importent dans le `<head>`, de préférence en fichiers minifiés. Import global ou par composant : [démarrage](../../demarrage.md).

**Dépendances CSS**

| Dépendance | Obligatoire |
|------------|-------------|
| Core       | Oui         |
| Button     | Oui         |
| Modal      | Oui         |
| Transcription | Oui         |

```html
<link href="dist/core/core.min.css" rel="stylesheet">
<link href="dist/component/button/button.min.css" rel="stylesheet">
<link href="dist/component/modal/modal.min.css" rel="stylesheet">
<link href="dist/component/transcription/transcription.min.css" rel="stylesheet">
```

## JavaScript

### Installation du JavaScript

Le composant s'initialise au chargement du JavaScript du DSFR : [démarrage](../../demarrage.md). Imports par composant (core + composant) :

```html
<script type="module" src="dist/core/core.module.min.js"></script>
<script type="module" src="dist/component/modal/modal.module.min.js"></script>
<script type="module" src="dist/component/transcription/transcription.module.min.js"></script>
```

Une fois le JavaScript chargé, le composant fonctionne automatiquement.

### Instances

Sur la transcription, les éléments suivants sont instanciés :

- La transcription, via la classe : `fr-transcription`
- Le bouton d'ouverture de l'accordéon, via la classe `fr-transcription__btn`
- Le collapse, via la classe `fr-collapse`
- Le bouton d'ouverture de la modale, via l'attribut' `aria-controls`
- La modale, via la classe `fr-modal`

Une fois chargé, le Js ajoute un attribut `data-fr-js-NOM_INSTANCE="true"` sur chacun des éléments instanciés

### API

Il est possible d'interagir avec les instances du composants en JavaScript via une API.

Cette API est disponible depuis la méthode `window.dsfr(instance)` du core.

Exemple :

```js
const elem = document.getElementById('ID_COLLAPSE');
dsfr(elem).collapse.disclose();
```

L'ensemble des propriétés et méthodes disponibles sont définies ci-après :

##### transcription

**isEnabled**

| | |
|------|-----|
| **Description** | Défini si le fonctionnement de la transcription est activé ou non |
| **Type** | property |
| **Retour** | Boolean |
| **Exemple** | `dsfr(elem).transcription.isEnabled = false` |

##### collapseButton

**focus**

| | |
|:------|:-----|
| **Description** | Replace le focus sur le bouton |
| **Type** | function |
| **Arguments** | none |
| **Retour** | Boolean |
| **Exemple** | `dsfr(elem).collapseButton.focus()` |

**parent**

| | |
|:-----|:-----|
| **Description** | Retourne l'instance du dsfr parente, ici la transcription |
| **Type** | property |
| **Retour** | object \| null |
| **Exemple** | `dsfr(elem).parent` |

**node**

| | |
|------|-----|
| **Description** | Renvoie le noeud HTML de l'élément. |
| **Type** | property |
| **Retour** | DOMElement |
| **Exemple** | `dsfr(elem).collapseButton.node` |

##### collapse

**conceal**

| | |
|:-----|:-----|
| **Description** | Ferme le collapse |
| **Type** | function |
| **Arguments** | none |
| **Retour** | none |
| **Exemple** | `dsfr(elem).collapse.conceal()` |

**disclose**

| | |
|:-----|:-----|
| **Description** | Ouvre le collapse |
| **Type** | function |
| **Arguments** | none |
| **Retour** | none |
| **Exemple** | `dsfr(elem).collapse.disclose()` |

**isDisclosed**

| | |
|:-----|:-----|
| **Description** | Retourne vrai si le collapse est ouvert |
| **Type** | property |
| **Retour** | Boolean |
| **Exemple** | `dsfr(elem).collapse.isDisclosed` |

**isEnabled**

| | |
|------|-----|
| **Description** | Défini si le fonctionnement de l'accordéon est activé ou non |
| **Type** | property |
| **Retour** | Boolean |
| **Exemple** | `dsfr(elem).collapse.isEnabled = false` |

**group**

| | |
|:-----|:-----|
| **Description** | Retourne l'API du groupe, ou null s'il n'y a pas de groupe |
| **Type** | property |
| **Retour** | object \| null |
| **Exemple** | `dsfr(elem).collapse.group` |

**buttons**

| | |
|:-----|:-----|
| **Description** | Retourne un tableau de boutons d'ouverture du collapse |
| **Type** | property |
| **Retour** | Array |
| **Exemple** | `dsfr(elem).collapse.buttons` |

**focus**

| | |
|:------|:-----|
| **Description** | Replace le focus sur le bouton du collapse |
| **Type** | function |
| **Arguments** | none |
| **Retour** | Boolean |
| **Exemple** | `dsfr(elem).collapse.focus()` |

**parent**

| | |
|:-----|:-----|
| **Description** | Retourne l'instance du dsfr parent, ici la transcription |
| **Type** | property |
| **Retour** | object \| null |
| **Exemple** | `dsfr(elem).parent` |

**children**

| | |
|:-----|:-----|
| **Description** | Renvoie un tableau d'instances enfants |
| **Type** | property |
| **Retour** | Array |
| **Exemple** | `dsfr(elem).children` |

**node**

| | |
|------|-----|
| **Description** | Renvoie le noeud HTML de l'élément. |
| **Type** | property |
| **Retour** | DOMElement |
| **Exemple** | `dsfr(elem).collapse.node` |

##### modalButton

**focus**

| | |
|:------|:-----|
| **Description** | Replace le focus sur le bouton |
| **Type** | function |
| **Arguments** | none |
| **Retour** | Boolean |
| **Exemple** | `dsfr(elem).modalButton.focus()` |

**parent**

| | |
|:-----|:-----|
| **Description** | Retourne l'instance du dsfr parente, ici la transcription |
| **Type** | property |
| **Retour** | object \| null |
| **Exemple** | `dsfr(elem).parent` |

**node**

| | |
|------|-----|
| **Description** | Renvoie le noeud HTML de l'élément. |
| **Type** | property |
| **Retour** | DOMElement |
| **Exemple** | `dsfr(elem).modalButton.node` |

##### modal

**conceal**

| | |
|:-----|:-----|
| **Description** | Ferme la modale |
| **Type** | function |
| **Arguments** | none |
| **Retour** | none |
| **Exemple** | `dsfr(elem).modal.conceal()` |

**disclose**

| | |
|:-----|:-----|
| **Description** | Ouvre la modale |
| **Type** | function |
| **Arguments** | none |
| **Retour** | none |
| **Exemple** | `dsfr(elem).modal.disclose()` |

**isDisclosed**

| | |
|:-----|:-----|
| **Description** | Retourne vrai si la modale est ouverte |
| **Type** | property |
| **Retour** | Boolean |
| **Exemple** | `dsfr(elem).modal.isDisclosed` |

**isEnabled**

| | |
|------|-----|
| **Description** | Défini si le fonctionnement de la modale est activé ou non |
| **Type** | property |
| **Retour** | Boolean |
| **Exemple** | `dsfr(elem).modal.isEnabled = false` |

**group**

| | |
|:-----|:-----|
| **Description** | Retourne l'API du groupe, ou null s'il n'y a pas de groupe |
| **Type** | property |
| **Retour** | object \| null |
| **Exemple** | `dsfr(elem).modal.group` |

**buttons**

| | |
|:-----|:-----|
| **Description** | Retourne un tableau de boutons d'ouverture de la modal |
| **Type** | property |
| **Retour** | Array |
| **Exemple** | `dsfr(elem).modal.buttons` |

**focus**

| | |
|:------|:-----|
| **Description** | Replace le focus sur le bouton de la modale |
| **Type** | function |
| **Arguments** | none |
| **Retour** | none |
| **Exemple** | `dsfr(elem).modal.focus()` |

**parent**

| | |
|:-----|:-----|
| **Description** | Retourne l'instance du dsfr parent, ici la transcription |
| **Type** | property |
| **Retour** | object \| null |
| **Exemple** | `dsfr(elem).parent` |

**children**

| | |
|:-----|:-----|
| **Description** | Renvoie un tableau d'instances enfants |
| **Type** | property |
| **Retour** | Array |
| **Exemple** | `dsfr(elem).children` |

**node**

| | |
|------|-----|
| **Description** | Renvoie le noeud HTML de l'élément. |
| **Type** | property |
| **Retour** | DOMElement |
| **Exemple** | `dsfr(elem).collapse.node` |

---

## Note de version

[Voir les évolutions sur github](https://github.com/GouvernementFR/dsfr/pulls?q=is%3Aclosed+is%3Amerged+transcription)
