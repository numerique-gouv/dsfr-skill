
## Case à cocher

La case à cocher est un élément d’interaction avec l’interface permettant à l’usager de sélectionner une ou plusieurs options dans une liste.


- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- Code
- [Accessibilité](../accessibility/index.md)


### HTML

#### Structure du composant

Le composant **Case à cocher**, ci-après nommée **Checkbox**, est un élément interactif permettant de sélectionner une ou plusieurs options. Sa structure est la suivante :

- La checkbox doit être **contenu** dans un élément HTML `<div>` défini par la classe `fr-checkbox-group`.
- La checkbox est un élément HTML `<input>` de type `checkbox` défini par la classe `fr-checkbox`.
- La checkbox doit être associée à un **label** `<label>` avec la classe `fr-label`.
- Une **description additionnelle** de l'option - optionnelle - peut être ajoutée dans le label, elle est définie par un élément `<span>` et la classe utilitaire `fr-hint-text`.
- Un **message** d'erreur ou de succès peut être associé à la checkbox en utilisant un élément `<div>` avec la classe `fr-messages-group` dans lequel on peut ajouter un message `fr-message`. Son attribut`id` doit être associé à l'attribut `aria-describedby` de la checkbox. Ce bloc peut être placé vide et être rempli dynamiquement, auquel cas il doit être annoncé à l'utilisateur en utilisant l'attribut `aria-live="polite"`.

**Exemple de structure HTML simple**

```HTML
<div class="fr-checkbox-group">
    <input id="checkbox" type="checkbox" aria-describedby="checkbox-messages">
    <label class="fr-label" for="checkbox">
        Libellé checkbox
        <span class="fr-hint-text">Description optionnelle</span>
    </label>
    <div class="fr-messages-group" id="checkbox-messages" aria-live="polite">
    </div>
</div>
```

#### Groupe de checkboxes

Pour **regrouper plusieurs checkboxes liées**, utilisez un élément `<fieldset>` avec une légende `<legend>`. Cela permet de structurer les options de manière accessible.

- L'élément `<fieldset>` est défini par la classe `fr-fieldset`.
- La légende `<legend>` est définie par la classe `fr-fieldset__legend`. Par défaut une légende sera en gras car le fieldset est utilisé pour regroupé plusieurs champs ayant chacun un label. Dans le cas des checkboxes la légende est visuellement perçue comme le label du groupe de checkboxes. On ajoutera donc la classe `fr-fieldset__legend--regular` pour repasser la légende sur une graisse standard.
- Une description additionnelle pour la légende - optionnelle - peut être ajoutée dans la légende, elle est définie par un élément `<span>` et la classe utilitaire `fr-hint-text`.
- Chaque élément de checkbox est contenu dans un élément `<div>` défini par la classe `fr-fieldset__element`. Ces éléments peuvent être placés en ligne avec la classe `fr-fieldset__element--inline`.
- Comme pour chaque checkbox, le groupe de checkbox, représenté par un fieldset, peut contenir un message d'erreur/information/succès via un bloc `fr-messages-group`.

**Exemple de groupe de checkboxes**

:::fr-accordion[Déplier pour voir le code]{id=checkboxes-structure}

```HTML
<fieldset class="fr-fieldset" aria-labelledby="checkboxes-legend checkboxes-messages">
    <legend class="fr-fieldset__legend--regular fr-fieldset__legend" id="checkboxes-legend">
        Légende pour l’ensemble des éléments
    </legend>
    <div class="fr-fieldset__element">
        <div class="fr-checkbox-group">
            <input name="checkboxes-1" id="checkboxes-1" type="checkbox">
            <label class="fr-label" for="checkboxes-1">
                Libellé case à cocher
            </label>
        </div>
    </div>
    <div class="fr-fieldset__element">
        <div class="fr-checkbox-group">
            <input checked name="checkboxes-2" id="checkboxes-2" type="checkbox">
            <label class="fr-label" for="checkboxes-2">
                Libellé case à cocher
            </label>
        </div>
    </div>
    <div class="fr-fieldset__element">
        <div class="fr-checkbox-group">
            <input name="checkboxes-3" id="checkboxes-3" type="checkbox">
            <label class="fr-label" for="checkboxes-3">
                Libellé case à cocher
            </label>
        </div>
    </div>
    <div class="fr-messages-group" id="checkboxes-messages" aria-live="polite">
    </div>
</fieldset>
```



### JavaScript

Le composant Case à cocher **ne nécessite pas l'utilisation de JavaScript** pour son fonctionnement de base.

Un script est disponible pour faire remonter les évènements de changement d'état des checkboxes, mais il n'est pas nécessaire pour le fonctionnement du composant.
Ce script est notamment utilisé pour gérer la selection des lignes d'un tableau.

