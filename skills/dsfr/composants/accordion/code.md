# Code de l'Accordéon

Documentation technique du composant Accordéon : structure HTML, CSS, JavaScript et API.

## HTML

### Structure du composant

Le composant **Accordéon** est composé de deux parties : son titre qui contient le bouton d'ouverture, et un bloc de contenu libre refermable, dit "collapse".
Sa structure est la suivante :

- Le conteneur de l'accordéon est une balise `<section>` avec la classe `fr-accordion`.
- Son titre est contenu dans un niveau d'entête `<hx>`, variable en fonction de sa hiérarchie dans la page (par défaut h3), et possède la classe `fr-accordion__title`.
- Un `<button>` est placé dans cette balise `<hx>`, et son libellé constitue le titre.
  - Le bouton doit être de type "button".
  - Le bouton dispose d'un attribut `aria-expanded`, sa valeur [true|false] défini si le collapse est ouvert ou fermé
  - Le bouton est lié au collapse via l'attribut `aria-controls`, sa valeur doit correspondre à l'attribut `id` du collapse.
- Le bloc refermable, défini par la classe `fr-collapse`, est une `<div>` placée après le titre. Il s'agit d'un élément générique du core utilisé par d'autres composants tels que la navigation ou la transcription.
  - Il dispose d'un attribut `id` obligatoire, pour être lié au bouton d'ouverture.
  - Son contenu est libre, mais nécessite l'utilisation des balises adéquates, il n'est pas correcte de placer du texte directement dans une `<div>`.

**Exemple de structure HTML**

```html
<section class="fr-accordion">
    <h3 class="fr-accordion__title">
        <button type="button" class="fr-accordion__btn" aria-expanded="false" aria-controls="accordion-1">Libellé accordéon</button>
    </h3>
    <div id="accordion-1" class="fr-collapse">
        <!-- données de l'accordéon -->
    </div>
</section>
```

### Groupe d'accordéons

L'accordéon peut être utilisé en groupe de plusieurs éléments, liés ou non entre eux.
Les accordéons sont disposés à la suite dans un conteneur.

- Le conteneur est une `<div>` défini par la classe `fr-accordions-group`
- Le conteneur peut posséder un attribut `data-fr-group`, sa valeur [true|false] permet de lier les accordéons entre eux ou non. Si `true`, lorsqu'un accordion est ouvert les autres se referment. Si `false`, il est possible d'en ouvrir plusieurs. Si l'attribut n'est pas défini les accordéons sont groupés par défaut.

**Exemple de structure HTML**

```html
<div class="fr-accordions-group" data-fr-group="true">
  <section class="fr-accordion">
    ...
  </section>
  <section class="fr-accordion">
    ...
  </section>
</div>
```

## CSS

### Installation du CSS

Pour fonctionner correctement le style CSS du composant et de ses dépendances doivent être importés. L'import doit se faire avant le contenu de la page dans la partie `<head>`, et de préférence avec les fichiers minifiés, car plus légers.

Il est possible d'importer les fichiers CSS avec un niveau de granularité adapté à vos besoins.

**Dépendances CSS**

| Dépendance | Obligatoire |
|------|-----|
| Core | Oui |
| Accordéon | Oui |

**Exemple d'imports CSS**

```html
<link href="dist/core/core.min.css" rel="stylesheet">
<link href="dist/component/accordion/accordion.min.css" rel="stylesheet">
```

### Variante de style

Sur l'accordéon, aucune variation ni accentuation n'est possible.

Quand le JavaScript est activé, le bloc refermable (collapse) reçoit la classe `fr-collapse--expanded` lorsque le bouton lié possède l'attribut `aria-expanded="true"`. C'est cette classe qui ouvre le collapse.

## JavaScript

Pour fonctionner le composant accordéon nécessite l'utilisation de JavaScript.

### Installation du JavaScript

Chaque composant utilisant javascript possède un fichier Js spécifique et requiert le fichier Js du core.

Il est donc nécessaire d'importer ces fichiers à la fin de la page (avant `</body>`) :

```html
<script type="module" src="dist/core/core.module.min.js"></script>
<script type="module" src="dist/component/accordion/accordion.module.min.js"></script>
```

<small>NB: Il est aussi possible d'importer le Js global du DSFR `dsfr.module.min.js`</small>

Pour fonctionner sur Internet Explorer 11, un fichier legacy, en version nomodule ES5, peut aussi être importé :

```html
<script type="text/javascript" nomodule src="dist/legacy/legacy.nomodule.min.js" ></script>
<script type="text/javascript" nomodule src="dist/core/core.nomodule.min.js"></script>
<script type="text/javascript" nomodule src="dist/component/accordion/accordion.nomodule.min.js"></script>
```

Une fois le JavaScript chargé, le composant fonctionne automatiquement.

### Instances

Sur l'accordéon, les éléments suivants sont instanciés :

- Le groupe, via la classe : `fr-accordions-group`
- L'accordéon, via la classe : `fr-accordion`
- Le bouton d'ouverture, via la classe `fr-accordion__btn`
- Le collapse, via la classe `fr-collapse`

Une fois chargé, le Js ajoute un attribut `data-fr-js-NOM_INSTANCE="true"` sur chacun des éléments instanciés

### API

Il est possible d'interagir avec les instances du composants en JavaScript via une API.

Cette API est disponible depuis la méthode `window.dsfr(instance)` du core.

Exemple :

```javascript
const elem = document.getElementById('ID_COLLAPSE');
dsfr(elem).collapse.disclose();
```

L'ensemble des propriétés et méthodes disponibles sont définies ci-après :

#### accordion

**node**
- **Description** : Renvoie le noeud HTML de l'élément.
- **Type** : property
- **Retour** : DOMElement
- **Exemple** : `dsfr(elem).accordion.node`

**isEnabled**
- **Description** : Défini si le fonctionnement de l'accordéon est activé ou non
- **Type** : property
- **Retour** : Boolean
- **Exemple** : `dsfr(elem).accordion.isEnabled = false`

#### accordionGroup

**current**
- **Description** : Retourne l'API du collapse ouvert. Si aucun collapse n'est ouvert, ou si plusieurs collapses sont ouverts, renvoie `null`.
- **Type** : property
- **Retour** : object | null
- **Exemple** : `dsfr(elem).accordionsGroup.current`

**hasFocus**
- **Description** : Renvoie `true` si le focus est sur un des éléments du groupe.
- **Type** : property
- **Retour** : Boolean
- **Exemple** : `dsfr(elem).accordionsGroup.hasFocus`

**index**
- **Description** : Retourne ou modifie l'index de l'accordéon courant. Si aucun collapse n'est ouvert, l'index vaut 0.
- **Type** : property
- **Retour** : Number
- **Exemple** : `dsfr(elem).accordionsGroup.index` ou `dsfr(elem).accordionsGroup.index = 2`

**isGrouped**
- **Description** : Défini si les accordéons du groupe sont liés en eux ou non. Si `true`, lorsqu'un accordion est ouvert les autres se referment. Si `false`, il est possible d'en ouvrir plusieurs. Si l'attribut n'est pas défini les accordéons sont groupés par défaut.
- **Type** : property
- **Retour** : Boolean
- **Exemple** : `dsfr(elem).accordionsGroup.isGrouped` ou `dsfr(elem).accordionsGroup.isGrouped = true`

**length**
- **Description** : Retourne le nombre d'accordéons dans le groupe.
- **Type** : property
- **Retour** : Number
- **Exemple** : `dsfr(elem).accordionsGroup.length`

**members**
- **Description** : Renvoie un tableau d'objets correspondant aux collapses des accordéons du groupe.
- **Type** : property
- **Retour** : Array
- **Exemple** : `dsfr(elem).accordionsGroup.members`

**node**
- **Description** : Renvoie le noeud HTML de l'élément.
- **Type** : property
- **Retour** : DOMElement
- **Exemple** : `dsfr(elem).accordionsGroup.node`

#### collapseButton

**focus**
- **Description** : Replace le focus sur le bouton
- **Type** : function
- **Arguments** : none
- **Retour** : Boolean
- **Exemple** : `dsfr(elem).collapseButton.focus()`

**parent**
- **Description** : Retourne l'instance du dsfr parente, ici l'accordéon
- **Type** : property
- **Retour** : object | null
- **Exemple** : `dsfr(elem).parent`

**node**
- **Description** : Renvoie le noeud HTML de l'élément.
- **Type** : property
- **Retour** : DOMElement
- **Exemple** : `dsfr(elem).collapseButton.node`

#### collapse

**conceal**
- **Description** : Ferme le collapse
- **Type** : function
- **Arguments** : none
- **Retour** : none
- **Exemple** : `dsfr(elem).collapse.conceal()`

**disclose**
- **Description** : Ouvre le collapse
- **Type** : function
- **Arguments** : none
- **Retour** : none
- **Exemple** : `dsfr(elem).collapse.disclose()`

**isDisclosed**
- **Description** : Retourne vrai si le collapse est ouvert
- **Type** : property
- **Retour** : Boolean
- **Exemple** : `dsfr(elem).collapse.isDisclosed`

**isEnabled**
- **Description** : Défini si le fonctionnement de l'accordéon est activé ou non
- **Type** : property
- **Retour** : Boolean
- **Exemple** : `dsfr(elem).collapse.isEnabled = false`

**group**
- **Description** : Retourne l'API du groupe, ou null s'il n'y a pas de groupe
- **Type** : property
- **Retour** : object | null
- **Exemple** : `dsfr(elem).collapse.group`

**buttons**
- **Description** : Retourne un tableau de boutons d'ouverture du collapse
- **Type** : property
- **Retour** : Array
- **Exemple** : `dsfr(elem).collapse.buttons`

**focus**
- **Description** : Replace le focus sur le bouton du collapse
- **Type** : function
- **Arguments** : none
- **Retour** : Boolean
- **Exemple** : `dsfr(elem).collapse.focus()`

**parent**
- **Description** : Retourne l'instance du dsfr parent, ici l'accordéon
- **Type** : property
- **Retour** : object | null
- **Exemple** : `dsfr(elem).parent`

**children**
- **Description** : Renvoie un tableau d'instances enfants
- **Type** : property
- **Retour** : Array
- **Exemple** : `dsfr(elem).children`

**node**
- **Description** : Renvoie le noeud HTML de l'élément.
- **Type** : property
- **Retour** : DOMElement
- **Exemple** : `dsfr(elem).collapse.node`

### Événements

Le Système de Design fournit des événements personnalisés pour les actions uniques de la part de certains composants réactifs.

Sur l'accordéon et le groupe d'accordéons, les événements suivants sont disponibles :

| Événement | Action | Élément | Attribut |
|------|------|------|------|
| `dsfr.conceal` | Fermeture de l'élément | Collapse | `data-fr-js-collapse` |
| `dsfr.disclose` | Ouverture de l'élément | Collapse | `data-fr-js-collapse` |
| `dsfr.click` | Click sur le bouton d'ouverture | CollapseButton | `data-fr-js-collapse-button` |

## Exemples

Voir le dossier [examples/](./examples/) pour des exemples de code HTML complets et fonctionnels.
