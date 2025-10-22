
## Interrupteur

L’interrupteur est un élément d’interaction avec l’interface qui permet à l’usager de faire un choix entre deux états opposés (activé / désactivé).


- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- Code
- [Accessibilité](../accessibility/index.md)


### HTML

#### Structure du composant

Le composant **Interrupteur**, est un élément interactif permettant de basculer entre deux états.

Sa structure est la suivante :

- L'Interrupteur doit être contenu dans un élément HTML `<div>` défini par la classe `fr-toggle`.
- L'interrupteur est un élément HTML `<input>` de type `checkbox` défini par la classe `fr-toggle__input`.
- L'interrupteur doit être associé à un libellé `<label>` avec la classe `fr-toggle__label`.
  - L'interrupteur peut afficher de manière optionnelle un état par l'utilisation des attributs `data-fr-checked-label` et `data-fr-unchecked-label` dont les valeurs seront affichées si l'interrupteur est coché ou non.
- Une description additionnelle de l'option - optionnelle - peut être ajoutée après le libellé, elle est définie par un élément `<p>` et la classe utilitaire `fr-hint-text`.
- Un message d'erreur ou de succès peut être associé à l'interrupteur en utilisant un élément `<div>` avec la classe `fr-messages-group` dans lequel on peut ajouter un message `fr-message`. Son attribut `id` doit être associé à l'attribut `aria-describedby` de l'interrupteur. Ce bloc peut être placé vide et être rempli dynamiquement, auquel cas il doit être annoncé à l'utilisateur en utilisant l'attribut `aria-live="polite"`.

**Exemple de structure HTML simple**

```HTML
<div class="fr-toggle">
    <input type="checkbox" class="fr-toggle__input" id="toggle" aria-describedby="toggle-messages toggle-hint">
    <label class="fr-toggle__label" for="toggle" data-fr-checked-label="Activé" data-fr-unchecked-label="Désactivé">Libellé de l'interrupteur</label>
    <p class="fr-hint-text" id="toggle-hint">Texte de description additionnel</p>
    <div class="fr-messages-group" id="toggle-messages" aria-live="polite">
    </div>
</div>
```

#### Groupe d'interrupteurs

Pour **regrouper plusieurs interrupteurs liées**, utilisez un élément `<fieldset>` avec une légende `<legend>`. Cela permet de structurer les options de manière accessible.

- L'élément `<fieldset>` est défini par la classe `fr-fieldset`.
- La légende `<legend>` est définie par la classe `fr-fieldset__legend`. Par défaut une légende sera en gras car le fieldset est utilisé pour regroupé plusieurs champs ayant chacun un label. Dans le cas des interrupteurs la légende est visuellement perçue comme le label du groupe d'interrupteurs. On ajoutera donc la classe `fr-fieldset__legend--regular` pour repasser la légende sur une graisse standard.
- Une description additionnelle pour la légende - optionnelle - peut être ajoutée dans la légende, elle est définie par un élément `<span>` et la classe utilitaire `fr-hint-text`.
- Chaque élément interrupteur est contenu dans un élément `<div>` défini par la classe `fr-fieldset__element`. Ces éléments peuvent être placés en ligne avec la classe `fr-fieldset__element--inline`.
- Comme pour chaque interrupteur, le groupe d'interrupteurs, représenté par un fieldset, peut contenir un message d'erreur/information/succès via un bloc `fr-messages-group`.

**Exemple de groupe d'interrupteurs**

:::fr-accordion[Déplier pour voir le code]{id=toggles-structure}

```HTML
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



### JavaScript

#### Installation du JavaScript

Pour fonctionner le composant interrupteur nécessite l'utilisation de JavaScript uniquement pour la variante avec état affiché.
Chaque composant utilisant javascript possède un fichier Js spécifique et requiert le fichier Js du core.

Il est donc nécessaire d'importer ces fichiers à la fin de la page (avant `</body>`) :

```HTML
<script type="module" src="dist/core/core.module.min.js"></script>
<script type="module" src="dist/component/toggle/toggle.module.min.js"></script>
```

<small>NB: Il est aussi possible d'importer le Js global du DSFR `dsfr.module.min.js`</small>

Pour fonctionner sur Internet Explorer 11, un fichier legacy, en version nomodule ES5, peut aussi être importé :

```HTML
<script type="text/javascript" nomodule src="dist/legacy/legacy.nomodule.min.js" ></script>
<script type="text/javascript" nomodule src="dist/core/core.nomodule.min.js"></script>
<script type="text/javascript" nomodule src="dist/component/toggle/toggle.nomodule.min.js"></script>
```

Une fois le JavaScript chargé, le composant fonctionne automatiquement.

#### Instances

Sur l'interrupteur, les éléments suivants sont instanciés :

- L'interrupteur, via la classe : `fr-toggle__input`.
- Le libellé, via la classe `fr-toggle__label` et les attributs `checked-label` ou `unchecked-label`.

Une fois chargé, le Js ajoute un attribut `data-fr-js-NOM_INSTANCE="true"` sur chacun des éléments instanciés.

#### API

Il est possible d'interagir avec les instances du composants en JavaScript via une API.

Cette API est disponible depuis la méthode `window.dsfr(instance)` du core.

Exemple :

```js
const elem = document.getElementById('ID_COLLAPSE');
dsfr(elem).toggleInput.isEnabled;
```

L'ensemble des propriétés et méthodes disponibles sont définies ci-après :

##### toggleInput

:::fr-table[isEnabled]{valign=top multiline=true}

| | |
|------|-----|
| **Description** | Défini si le fonctionnement de l'interrupteur est activé ou non |
| **Type** | property |
| **Retour** | Boolean |
| **Exemple** | `dsfr(elem).toggleInput.isEnabled = false` |


:::fr-table[node]{valign=top multiline=true}

| | |
|------|-----|
| **Description** | Renvoie le noeud HTML de l'élément. |
| **Type** | property |
| **Retour** | DOMElement |
| **Exemple** | `dsfr(elem).toggleInput.node` |


##### toggleStatusLabel

:::fr-table[isEnabled]{valign=top multiline=true}

| | |
|------|-----|
| **Description** | Défini si le fonctionnement de l'interrupteur est activé ou non |
| **Type** | property |
| **Retour** | Boolean |
| **Exemple** | `dsfr(elem).toggleStatusLabel.isEnabled = false` |


:::fr-table[node]{valign=top multiline=true}

| | |
|------|-----|
| **Description** | Renvoie le noeud HTML de l'élément. |
| **Type** | property |
| **Retour** | DOMElement |
| **Exemple** | `dsfr(elem).toggleStatusLabel.node` |


:::fr-table[update]{valign=top multiline=true}

| | |
|:------|:-----|
| **Description** | Met a jour la taille de l'emplacement de l'état de l'interrupteur |
| **Type** | function |
| **Arguments** | none |
| **Retour** | none |
| **Exemple** | `dsfr(elem).toggleStatusLabel.update()` |


