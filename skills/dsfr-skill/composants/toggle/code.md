# Interrupteur : Code

## HTML

### Structure du composant

Le composant **Interrupteur**, est un élément interactif permettant de basculer entre deux états.

Sa structure est la suivante :

- L'Interrupteur doit être contenu dans un élément HTML `<div>` défini par la classe `fr-toggle`.
- L'interrupteur est un élément HTML `<input>` de type `checkbox` défini par la classe `fr-toggle__input`.
- L'interrupteur doit être associé à un libellé `<label>` avec la classe `fr-toggle__label`.
  - L'interrupteur peut afficher de manière optionnelle un état par l'utilisation des attributs `data-fr-checked-label` et `data-fr-unchecked-label` dont les valeurs seront affichées si l'interrupteur est coché ou non.
- Une description additionnelle de l'option - optionnelle - peut être ajoutée après le libellé, elle est définie par un élément `<p>` et la classe utilitaire `fr-hint-text`.
- Un message d'erreur ou de succès peut être associé à l'interrupteur en utilisant un élément `<div>` avec la classe `fr-messages-group` dans lequel on peut ajouter un message `fr-message`. Son attribut `id` doit être associé à l'attribut `aria-describedby` de l'interrupteur. Ce bloc peut être placé vide et être rempli dynamiquement, auquel cas il doit être annoncé à l'utilisateur en utilisant l'attribut `aria-live="polite"`.

**Exemple de structure HTML simple**

Balises officielles : [Toggle simple avec bouton + texte d’aide](exemples.md#toggle-simple-avec-bouton--texte-daide)

### Groupe d'interrupteurs

Pour **regrouper plusieurs interrupteurs liées**, utilisez un élément `<fieldset>` avec une légende `<legend>`. Cela permet de structurer les options de manière accessible.

- L'élément `<fieldset>` est défini par la classe `fr-fieldset`.
- La légende `<legend>` est définie par la classe `fr-fieldset__legend`. Par défaut une légende sera en gras car le fieldset est utilisé pour regroupé plusieurs champs ayant chacun un label. Dans le cas des interrupteurs la légende est visuellement perçue comme le label du groupe d'interrupteurs. On ajoutera donc la classe `fr-fieldset__legend--regular` pour repasser la légende sur une graisse standard.
- Une description additionnelle pour la légende - optionnelle - peut être ajoutée dans la légende, elle est définie par un élément `<span>` et la classe utilitaire `fr-hint-text`.
- Chaque élément interrupteur est contenu dans un élément `<div>` défini par la classe `fr-fieldset__element`. Ces éléments peuvent être placés en ligne avec la classe `fr-fieldset__element--inline`.
- Comme pour chaque interrupteur, le groupe d'interrupteurs, représenté par un fieldset, peut contenir un message d'erreur/information/succès via un bloc `fr-messages-group`.

**Exemple de groupe d'interrupteurs**

**Déplier pour voir le code**

```html
<fieldset class="fr-fieldset" aria-labelledby="toggles-legend toggles-messages">
    <legend class="fr-fieldset__legend" id="toggles-legend">
        Légende pour l’ensemble des éléments
    </legend>
    <div class="fr-fieldset__element">
        <ul class="fr-toggle__list">
            <li>
                <div class="fr-toggle">
                    <input type="checkbox" class="fr-toggle__input" id="toggle-01" aria-describedby="toggle-01-messages">
                    <label class="fr-toggle__label" for="toggle-01">Libellé de l'interrupteur</label>
                    <div class="fr-messages-group" id="toggle-01-messages" aria-live="polite">
                    </div>
                </div>
            </li>
            <li>
                <div class="fr-toggle">
                    <input type="checkbox" class="fr-toggle__input" id="toggle-02" aria-describedby="toggle-02-messages">
                    <label class="fr-toggle__label" for="toggle-02">Libellé de l'interrupteur</label>
                    <div class="fr-messages-group" id="toggle-02-messages" aria-live="polite">
                    </div>
                </div>
            </li>
            <li>
                <div class="fr-toggle">
                    <input type="checkbox" class="fr-toggle__input" id="toggle-03" aria-describedby="toggle-03-messages">
                    <label class="fr-toggle__label" for="toggle-03">Libellé de l'interrupteur</label>
                    <div class="fr-messages-group" id="toggle-03-messages" aria-live="polite">
                    </div>
                </div>
            </li>
        </ul>
    </div>
    <div class="fr-messages-group" id="toggles-messages" aria-live="polite">
    </div>
</fieldset>
```

---

## CSS

### Installation du CSS

Les styles du composant et de ses dépendances s'importent dans le `<head>`, de préférence en fichiers minifiés. Import global ou par composant : [démarrage](../../demarrage.md).

**Dépendances CSS**

| Dépendance | Obligatoire |
|------------|-------------|
| Core       | Oui         |
| Form       | Oui         |
| Toggle     | Oui         |

```html
<link href="dist/core/core.min.css" rel="stylesheet">
<link href="dist/component/form/form.min.css" rel="stylesheet">
<link href="dist/component/toggle/toggle.min.css" rel="stylesheet">
```

### Variante d’interrupteurs avec statut

Il est conseillé d’afficher un statut sous l'interrupteur pour signifier textuellement l'activation et la désactivation du champ. Des attributs placés sur le `label` permettent d'ajouter ces textes, de cette manière ils peuvent être traduits. Utiliser l'attribut `data-fr-checked-label` pour le status "Activer" et `data-fr-unchecked-label` pour le status "Désactivé".

**Exemple de variante d’interrupteur avec statut**

Balises officielles : [Toggle simple avec bouton](exemples.md#toggle-simple-avec-bouton)

### Variante d’interrupteurs avec séparateur

Il est possible d’afficher un séparateur horizontal sous l’interrupteur, avec l'utilisation de la classe `fr-toggle--border-bottom`.

**Exemple de variante d’interrupteur avec séparateur**

Balises officielles : [Toggle simple avec bouton + état + séparateur](exemples.md#toggle-simple-avec-bouton--état--séparateur)

### Variantes d'états

L’interrupteur est disponible en plusieurs variantes d'états :

- L’interrupteur avec **erreur** : défini par la classe `fr-toggle----error`.
- L’interrupteur avec **succès** : défini par la classe `fr-toggle----valid`.
- L’interrupteur **désactivé** : défini par l'attribut `disabled` sur l'élément `<input>`.

Dans le cas d'utilisation d'un groupe d’interrupteurs, ces états sont définis sur le groupe (le fieldset), et non sur chaque interrupteur.

- Groupe en **erreur** : défini par la classe `fr-fieldset--error`.
- Groupe en **succès** : défini par la classe `fr-fieldset--valid`.
- Groupe **désactivé** : défini par l'attribut `disabled`.

**Exemples de variantes d'états**

**Déplier pour voir le code**

**Erreur**

Balises officielles : [Toggle simple en erreur](exemples.md#toggle-simple-en-erreur)

**Succès**

Balises officielles : [Toggle simple valide](exemples.md#toggle-simple-valide)

**Désactivé**

Balises officielles : [Toggle simple avec bouton](exemples.md#toggle-simple-avec-bouton)

**Exemple de variante d'état au niveau du groupe**

**Déplier pour voir le code**

**Erreur**

```html
<fieldset class="fr-fieldset fr-fieldset--error" aria-labelledby="toggles-error-legend toggles-error-messages">
    <legend class="fr-fieldset__legend" id="toggles-error-legend">
        Légende pour l’ensemble des éléments en erreur
    </legend>
    <div class="fr-fieldset__element">
        <ul class="fr-toggle__list">
            <li>
                <div class="fr-toggle fr-toggle--border-bottom">(...)</div>
            </li>
            <li>
                <div class="fr-toggle fr-toggle--border-bottom">(...)</div>
            </li>
            <li>
                <div class="fr-toggle fr-toggle--border-bottom">(...)</div>
            </li>
        </ul>
    </div>
    <div class="fr-messages-group" id="toggles-error-messages" aria-live="polite">
        <p class="fr-message fr-message--error" id="toggles-error-message-error">Texte d’erreur globale</p>
    </div>
</fieldset>
```

**Succès**

```html
<fieldset class="fr-fieldset fr-fieldset--valid" aria-labelledby="toggles-valid-legend toggles-valid-messages">
    <legend class="fr-fieldset__legend" id="toggles-valid-legend">
        Légende pour l’ensemble des éléments en succès
    </legend>
    <div class="fr-fieldset__element">
        <ul class="fr-toggle__list">
            <li>
                <div class="fr-toggle fr-toggle--border-bottom">(...)</div>
            </li>
            <li>
                <div class="fr-toggle fr-toggle--border-bottom">(...)</div>
            </li>
            <li>
                <div class="fr-toggle fr-toggle--border-bottom">(...)</div>
            </li>
        </ul>
    </div>
    <div class="fr-messages-group" id="toggles-valid-messages" aria-live="polite">
        <p class="fr-message fr-message--error" id="toggles-valid-message-error">Texte de succès global</p>
    </div>
</fieldset>
```

**Désactivé**

```html
<fieldset class="fr-fieldset" disabled aria-labelledby="toggles-disabled-legend toggles-disabled-messages">
    <legend class="fr-fieldset__legend" id="toggles-disabled-legend">
        Légende pour l’ensemble des éléments désactivés
    </legend>
    <div class="fr-fieldset__element">
        <ul class="fr-toggle__list">
            <li>
                <div class="fr-toggle fr-toggle--border-bottom">(...)</div>
            </li>
            <li>
                <div class="fr-toggle fr-toggle--border-bottom">(...)</div>
            </li>
            <li>
                <div class="fr-toggle fr-toggle--border-bottom">(...)</div>
            </li>
        </ul>
    </div>
    <div class="fr-messages-group" id="toggles-disabled-messages" aria-live="polite">
    </div>
</fieldset>
```

---

## JavaScript

### Installation du JavaScript

Le composant s'initialise au chargement du JavaScript du DSFR : [démarrage](../../demarrage.md). Imports par composant (core + composant) :

```html
<script type="module" src="dist/core/core.module.min.js"></script>
<script type="module" src="dist/component/toggle/toggle.module.min.js"></script>
```

Une fois le JavaScript chargé, le composant fonctionne automatiquement.

### Instances

Sur l'interrupteur, les éléments suivants sont instanciés :

- L'interrupteur, via la classe : `fr-toggle__input`.
- Le libellé, via la classe `fr-toggle__label` et les attributs `checked-label` ou `unchecked-label`.

Une fois chargé, le Js ajoute un attribut `data-fr-js-NOM_INSTANCE="true"` sur chacun des éléments instanciés.

### API

Il est possible d'interagir avec les instances du composants en JavaScript via une API.

Cette API est disponible depuis la méthode `window.dsfr(instance)` du core.

Exemple :

```js
const elem = document.getElementById('ID_COLLAPSE');
dsfr(elem).toggleInput.isEnabled;
```

L'ensemble des propriétés et méthodes disponibles sont définies ci-après :

#### toggleInput

**isEnabled**

| | |
|------|-----|
| **Description** | Défini si le fonctionnement de l'interrupteur est activé ou non |
| **Type** | property |
| **Retour** | Boolean |
| **Exemple** | `dsfr(elem).toggleInput.isEnabled = false` |

**node**

| | |
|------|-----|
| **Description** | Renvoie le noeud HTML de l'élément. |
| **Type** | property |
| **Retour** | DOMElement |
| **Exemple** | `dsfr(elem).toggleInput.node` |

#### toggleStatusLabel

**isEnabled**

| | |
|------|-----|
| **Description** | Défini si le fonctionnement de l'interrupteur est activé ou non |
| **Type** | property |
| **Retour** | Boolean |
| **Exemple** | `dsfr(elem).toggleStatusLabel.isEnabled = false` |

**node**

| | |
|------|-----|
| **Description** | Renvoie le noeud HTML de l'élément. |
| **Type** | property |
| **Retour** | DOMElement |
| **Exemple** | `dsfr(elem).toggleStatusLabel.node` |

**update**

| | |
|:------|:-----|
| **Description** | Met a jour la taille de l'emplacement de l'état de l'interrupteur |
| **Type** | function |
| **Arguments** | none |
| **Retour** | none |
| **Exemple** | `dsfr(elem).toggleStatusLabel.update()` |

---

## Note de version

[Voir les évolutions sur github](https://github.com/GouvernementFR/dsfr/pulls?q=is%3Apr+is%3Aclosed+is%3Amerged+toggle+)
