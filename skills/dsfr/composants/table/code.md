
## Tableau

Le tableau permet de présenter une liste structurée de données textuelles et/ou numériques dans le but de simplifier l’analyse et la comparaison d’informations pour l’usager.


- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- Code
- [Accessibilité](../accessibility/index.md)


### HTML

#### Structure du composant

Le composant **Tableau** permet de présenter des données tabulaires. Sa structure est conçue pour s’adapter aux écrans mobiles et comprend les éléments suivants :

- Un conteneur principal sous la balise `<div>` :
  - Doit avoir la classe `fr-table`.
- Un premier sous-conteneur sous la balise `<div>` :
  - Doit avoir la classe `fr-table__wrapper`.
- Un deuxième sous-conteneur sous la balise `<div>` :
  - Doit avoir la classe `fr-table__container`.
- Un troisième sous-conteneur sous la balise `<div>` :
  - Doit avoir la classe `fr-table__content`.
- Une zone de contenu pour le tableau :
  - Représentée par un élément `<table>`.
- Un titre, obligatoire, qui peut être positionné en haut (par défaut), en bas ou hors écran :
  - Représenté par un élément `<caption>`.
- Une ligne d’en-tête de colonne, obligatoire :
  - Représentée par un élément `<thead>`.
- Plusieurs ligne de corps, obligatoires :
  - Regroupées dans un ou plusieurs éléments `<tbody>`.
  - Représentées par un élément `<tr>`.
- Plusieurs cellules de contenu, obligatoires :
  - Représentées par un élément `<th>` ou `<td>`.

**Exemple de structure HTML**

:::fr-accordion[Déplier pour voir le code]{id=code-tableau}

```HTML
<div class="fr-table">
    <div class="fr-table__wrapper">
        <div class="fr-table__container">
            <div class="fr-table__content">
                <table>
                    <caption>
                        Titre du tableau (caption)
                    </caption>
                    <thead>
                        <tr>
                            <th scope="col">
                                th0
                            </th>
                            <th scope="col">
                                th1
                            </th>
                            <th scope="col">
                                th2
                            </th>
                            <th scope="col">
                                th3
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                Lorem [...] elit ut.
                            </td>
                            <td>
                                Lorem [...] elit ut.
                            </td>
                            <td>
                                Lorem [...] elit ut.
                            </td>
                            <td>
                                Lorem [...] elit ut.
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Lorem [...] elit ut.
                            </td>
                            <td>
                                Lorem [...] elit ut.
                            </td>
                            <td>
                                Lorem [...] elit ut.
                            </td>
                            <td>
                                Lorem [...] elit ut.
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Lorem [...] elit ut.
                            </td>
                            <td>
                                Lorem [...] elit ut.
                            </td>
                            <td>
                                Lorem [...] elit ut.
                            </td>
                            <td>
                                Lorem [...] elit ut.
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Lorem [...] elit ut.
                            </td>
                            <td>
                                Lorem [...] elit ut.
                            </td>
                            <td>
                                Lorem [...] elit ut.
                            </td>
                            <td>
                                Lorem [...] elit ut.
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
```



### JavaScript

Un script est disponible pour ajouter des fonctionnalités interactives au tableau, comme le placement du caption, la gestion des ombres sur la version dépréciée, et la sélection de lignes via les checkbox.

#### Installation du JavaScript

Pour fonctionner le composant tableau nécessite l'utilisation de JavaScript.

Le JavaScript du composant et de ses dépendances doivent être importés. L'import doit se faire à la fin de la page, avant la balise `</body>`, et de préférence avec les fichiers minifiés, car plus légers.

:::fr-table[Dépendances JS]{valign=top multiline=true}

| Dépendance | Obligatoire | Remarque |
|------------|-------------|----------|
| Core       | Oui         |          |
| checkbox   | Non         | Uniquement pour la version avec lignes sélectionnables |
| Table      | Oui         |          |


**Exemple d'imports JS**

```HTML
<script type="module" src="dist/core/core.module.min.js"></script>
<script type="module" src="dist/component/checkbox/checkbox.module.min.js"></script>
<script type="module" src="dist/component/table/table.module.min.js"></script>
```

<small>NB: Il est aussi possible d'importer le Js global du DSFR `dsfr.module.min.js`</small>

Pour fonctionner sur Internet Explorer 11, un fichier legacy, en version nomodule ES5, peut aussi être importé :

```HTML
<script type="text/javascript" nomodule src="dist/legacy/legacy.nomodule.min.js" ></script>
<script type="text/javascript" nomodule src="dist/core/core.nomodule.min.js"></script>
<script type="text/javascript" nomodule src="dist/component/checkbox/checkbox.nomodule.min.js"></script>
<script type="text/javascript" nomodule src="dist/component/table/table.nomodule.min.js"></script>
```

Une fois le JavaScript chargé, le composant fonctionne automatiquement.

#### Instances

Sur le tableau, les éléments suivants sont instanciés :

- Le composant "table", via la classe : `fr-table`
- L'élément `<table` du composant, via le sélecteur : `fr-table table` (pour la version dépréciée)
- Les lignes du tableau, via le sélecteur : `fr-table tr` (pour la version avec lignes sélectionnables)
- Les checkboxes du tableau, via le sélecteur : `fr-table td` (pour la version avec lignes sélectionnables)

Une fois chargé, le Js ajoute un attribut `data-fr-js-NOM_INSTANCE="true"` sur chacun des éléments instanciés

#### API

Il est possible d'interagir avec les instances du composants en JavaScript via une API.

Cette API est disponible depuis la méthode `window.dsfr(instance)` du core.

Exemple :

```javascript
const elem = document.getElementById('ID_TABLE');
dsfr(elem).table.isEnabled;
```

L'ensemble des propriétés et méthodes disponibles sont définies ci-après :

##### table

:::fr-table[isEnabled]{valign=top multiline=true}

| | |
|------|-----|
| **Description** | Défini si le fonctionnement du tableau est activé ou non |
| **Type** | property |
| **Retour** | Boolean |
| **Exemple** | `dsfr(elem).table.isEnabled = false` |


:::fr-table[parent]{valign=top multiline=true}

| | |
|:-----|:-----|
| **Description** | Retourne l'instance du dsfr parent |
| **Type** | property |
| **Retour** | object \| null |
| **Exemple** | `dsfr(elem).parent` |


:::fr-table[children]{valign=top multiline=true}

| | |
|:-----|:-----|
| **Description** | Renvoie un tableau d'instances enfants |
| **Type** | property |
| **Retour** | Array |
| **Exemple** | `dsfr(elem).children` |


:::fr-table[node]{valign=top multiline=true}

| | |
|------|-----|
| **Description** | Renvoie le noeud HTML de l'élément. |
| **Type** | property |
| **Retour** | DOMElement |
| **Exemple** | `dsfr(elem).table.node` |


##### tableCaption

:::fr-table[resize]{valign=top scroll=false}

| | |
|------|-----|
| **Description** | Permet de mettre à jour la taille du caption après un changement de libellé. |
| **Type** | property |
| **Retour** | DOMElement |
| **Exemple** | `dsfr(tableCaption).tableCaption.resize()` |


