# Infobulle : Code

## HTML

### Structure du composant

Il existe deux types d’**Infobulles** suivant son déclenchement.

#### Déclenchement au survol

L’infobulle au survol se compose des éléments suivants :

1. Une zone de déclenchement :
    - Doit être un element focusable (`<a>`, `<input>`, `<select>`, `<textarea>`, etc) pour déclencher l'affichage du conteneur à la prise de focus.
    - Elle est liée au conteneur via l'attribut `aria-describedby`, sa valeur doit correspondre à l'attribut `id` du conteneur.
2. Un conteneur pour le texte de l'infobulle :
    - Représenté par un élément `<span>`.
    - Doit avoir un attribut `id` obligatoire, pour être lié à la zone de déclenchement.
    - Doit avoir un attribut `role="tooltip"`.
    - Doit avoir les classes `fr-tooltip` et `fr-placement`.

**Exemple de structure HTML**

Balises officielles : [Information contextuelle](exemples.md#information-contextuelle)

#### Déclenchement au clic

L’infobulle au clic se compose des éléments suivants :

1. Une zone de déclenchement :
    - La zone de déclenchement est une balise `<button type="button">`.
    - Elle est liée au conteneur via l'attribut `aria-describedby`, sa valeur doit correspondre à l'attribut `id` du conteneur.
    - Doit avoir les classes `fr-btn--tooltip fr-btn`.
2. Un conteneur pour le texte de l'infobulle :
    - Représenté par un élément `<span>`.
    - Doit avoir un attribut `id` obligatoire, pour être lié à la zone de déclenchement.
    - Doit avoir un attribut `role="tooltip"`.
    - Doit avoir les classes `fr-tooltip` et `fr-placement`.

**Exemple de structure HTML**

Balises officielles : [Infobulle](exemples.md#infobulle)

---

## CSS

### Installation du CSS

Les styles du composant et de ses dépendances s'importent dans le `<head>`, de préférence en fichiers minifiés. Import global ou par composant : [démarrage](../../demarrage.md).

**Dépendances CSS**

| Dépendance | Obligatoire | Remarque |
|------------|-------------| ---------|
| Core       | Oui         |          |
| tooltip    | Oui         |          |
| Button     | Non         | Pour la version avec ouverture au clic |
| Link       | Non         | Pour la version avec ouverture au survol |

```html
<link href="dist/core/core.min.css" rel="stylesheet">
<link href="dist/component/tooltip/tooltip.min.css" rel="stylesheet">
```

## JavaScript

L'infobulle est un composant qui nécessite l'importation de fichiers JavaScript spécifiques pour son fonctionnement de base.

### Installation du JavaScript

Le composant s'initialise au chargement du JavaScript du DSFR : [démarrage](../../demarrage.md). Imports par composant (core + composant) :

```html
<script type="module" src="dist/core/core.module.min.js"></script>
<script type="module" src="dist/component/tooltip/tooltip.module.min.js"></script>
```

Une fois le JavaScript chargé, le composant fonctionne automatiquement.

### Instances

Sur le tooltip, les éléments suivants sont instanciés :

- Le conteneur, via la classe : `fr-tooltip`
- Le déclencheur, via l'attribut : `aria-describedby` lié à l'`id` du conteneur

Une fois chargé, le Js ajoute un attribut `data-fr-js-NOM_INSTANCE="true"` sur chacun des éléments instanciés

### API

Il est possible d'interagir avec les instances du composants en JavaScript via une API.

Cette API est disponible depuis la méthode `window.dsfr(instance)` du core.

Exemple :

```js
const elem = document.getElementById('ID_TOOLTIP');
dsfr(elem).tooltip.show();
```

L'ensemble des propriétés et méthodes disponibles sont définies ci-après :

##### tooltip

**parent**

| | |
|:-----|:-----|
| **Description** | Retourne l'instance du dsfr parente |
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
| **Exemple** | `dsfr(elem).tooltip.node` |

**isEnabled**

| | |
|------|-----|
| **Description** | Défini si le fonctionnement de l'infobulle est activé ou non |
| **Type** | property |
| **Retour** | Boolean |
| **Exemple** | `dsfr(elem).tooltip.isEnabled = false` |

**isShown**

| | |
|------|-----|
| **Description** | Défini si l'infobulle est affichée ou non |
| **Type** | property |
| **Retour** | Boolean |
| **Exemple** | `dsfr(elem).tooltip.isShown = false` |

**show**

| | |
|:-----|:-----|
| **Description** | Affiche l'infobulle |
| **Type** | function |
| **Arguments** | none |
| **Retour** | none |
| **Exemple** | `dsfr(elem).tooltip.show()` |

**hide**

| | |
|:-----|:-----|
| **Description** | Cache l'infobulle |
| **Type** | function |
| **Arguments** | none |
| **Retour** | none |
| **Exemple** | `dsfr(elem).tooltip.hide()` |

**mode**

| | |
|------|-----|
| **Description** | Défini le mode de placement de l'infobulle |
| **Type** | property |
| **Retour** | 'placement_auto' \| 'placement_manual' |
| **Exemple** | `dsfr(elem).tooltip.mode = 'placement_manual'` |

**align**

| | |
|------|-----|
| **Description** | Défini l'alignement vertical de l'infobulle en `mode='placement_manual'` |
| **Type** | property |
| **Retour** | 'align_start' \| 'align_center' \| 'align_end' |
| **Exemple** | `dsfr(elem).tooltip.align = 'align_start'` |

**place**

| | |
|------|-----|
| **Description** | Définit le placement horizontal de l'infobulle par rapport au déclencheur en `mode='placement_manual'` |
| **Type** | property |
| **Retour** | 'place_top' \| 'place_bottom' \| 'place_left' \| 'place_right' |
| **Exemple** | `dsfr(elem).tooltip.place = 'place_top'` |

##### tooltipReferent

**parent**

| | |
|:-----|:-----|
| **Description** | Retourne l'instance du dsfr parente |
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
| **Exemple** | `dsfr(elem).tooltipReferent.node` |

**isEnabled**

| | |
|------|-----|
| **Description** | Défini si le fonctionnement du déclencheur est activé ou non |
| **Type** | property |
| **Retour** | Boolean |
| **Exemple** | `dsfr(elem).tooltipReferent.isEnabled = false` |

### Événements

Le Système de Design fournit des événements personnalisés pour les actions uniques de la part de certains composants réactifs listés sur la page de l'[API Javascript](../../demarrage.md).

Sur l’infobulle, les événements suivants sont disponibles :

**événements**

| Événement | Action | Élément | Attribut |
|------|------|------|------|
| `dsfr.show` | Affichage de l’infobulle | tooltip | `data-fr-js-tab-tooltip` |
| `dsfr.hide` | Masquage de l’infobulle | tooltip | `data-fr-js-tab-tooltip` |

---

## Note de version

[Voir les évolutions sur github](https://github.com/GouvernementFR/dsfr/pulls?q=is%3Apr+is%3Aclosed+is%3Amerged+tooltip+)
