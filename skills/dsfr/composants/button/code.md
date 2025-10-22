
## Bouton

Le bouton est un élément d’interaction avec l’interface permettant à l’usager d’effectuer une action.


- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- Code
- [Accessibilité](../accessibility/index.md)


### HTML

#### Structure du composant

Le composant **Bouton** est un élément interactif permettant de déclencher des actions. Sa structure est la suivante :

- Le Bouton est un élément HTML `<button>` de type "button" défini par la classe `fr-btn`.
- Son contenu est textuel, il doit être succinct et indiquer clairement son action.

**Exemple de structure HTML**

```HTML
<button class="fr-btn" type="button">
    Libellé bouton
</button>
```

#### Groupes de boutons

Les boutons peuvent être regroupés pour former des ensembles d'actions. Le groupe est formé par la succession de boutons structurés sous forme de liste par l'élément HTML `<ul>` et la classe `fr-btns-group`.
Un groupe est dit **hiérarchisé** s'il dispose d'un bouton primaire et de boutons secondaires. Sauf cas exceptionnel, n'utiliser qu'un seul bouton primaire dans un groupe. Un groupe **non hiérarchisé** est lui constitué uniquement de boutons secondaires, tertiaires, et/ou tertiaires sans contours.

**Exemple de groupe de boutons**

```HTML
<ul class="fr-btns-group">
  <li>
    <button class="fr-btn" type="button">
        Bouton 1
    </button>
  </li>
  <li>
    <button class="fr-btn fr-btn--secondary" type="button">
        Bouton 2
    </button>
  </li>
</ul>
```


### JavaScript

Le composant Bouton nécessite l'utilisation de JavaScript uniquement dans le cas de l'utilisation d'une fonctionnalité avancée : **les groupes de boutons "equisized"**.<br>
Cette fonctionnalité permet de d'adapter automatiquement la taille des boutons d'un groupe à celle du bouton le plus large.<br>
**En dehors de cette fonctionnalité l'inclusion du JS du bouton n'est pas utile.**

#### Installation du JavaScript

Chaque composant utilisant JavaScript possède un fichier JS spécifique et requiert le fichier JS du core.

Il est donc nécessaire d'importer ces fichiers à la fin de la page (avant `</body>`) :

```HTML
<script type="module" src="dist/core/core.module.min.js"></script>
<script type="module" src="dist/component/button/button.module.min.js"></script>
```

<small>NB: Il est aussi possible d'importer le Js global du DSFR `dsfr.module.min.js`</small>

Pour fonctionner sur Internet Explorer 11, un fichier legacy, en version nomodule ES5, peut aussi être importé :

```HTML
<script type="text/javascript" nomodule src="dist/legacy/legacy.nomodule.min.js"></script>
<script type="text/javascript" nomodule src="dist/core/core.nomodule.min.js"></script>
<script type="text/javascript" nomodule src="dist/component/button/button.nomodule.min.js"></script>
```

Une fois le JavaScript chargé, la classe `fr-btn--equisized` fonctionne automatiquement.

#### Instances

Sur le bouton, les éléments suivants sont instanciés :

- Le groupe de boutons, via la classe : `fr-btns-group--equisized`
- Les boutons, dans un groupe "equisized", via la classe : `fr-btn`

Une fois chargé, le JS ajoute un attribut `data-fr-js-NOM_INSTANCE="true"` sur chacun des éléments instanciés.

#### API

Il est possible d'interagir avec les instances du composant en JavaScript via une API.

Cette API est disponible depuis la méthode `window.dsfr(instance)` du core.

L'ensemble des propriétés et méthodes disponibles sont définies ci-après :

##### equisizedsGroup

> [!NOTE]
> L'activation ou la désactivation de la fonction equisize n'est pas disponible en JS, elle se fait via l'ajout ou le retrait de la classe `fr-btns-group--equisized` sur le groupe.

:::fr-table[node]{valign=top multiline=true}

| | |
|------|-----|
| **Description** | Renvoie le noeud HTML de l'élément. |
| **Type** | property |
| **Retour** | DOMElement |
| **Exemple** | `dsfr(btnGroup).equisizedsGroup.node` |


##### equisized

:::fr-table[node]{valign=top multiline=true}

| | |
|------|-----|
| **Description** | Renvoie le noeud HTML de l'élément. |
| **Type** | property |
| **Retour** | DOMElement |
| **Exemple** | `dsfr(btn).equisized.node` |


### Note de version

- [Voir les évolutions sur github](https://github.com/GouvernementFR/dsfr/pulls?q=is%3Apr+is%3Aclosed+is%3Amerged+button+)

