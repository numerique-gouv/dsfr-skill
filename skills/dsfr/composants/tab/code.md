
## Onglet

Le système d’onglets permet de structurer et de présenter plusieurs sections de contenu liées, en affichant une seule section à la fois dans un espace limité.


- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- Code
- [Accessibilité](../accessibility/index.md)


### HTML

#### Structure du composant

Le composant **Onglet** est un élément interactif permettant de basculer entre plusieurs sections de contenu.

Sa structure est la suivante :

- Le conteneur des onglets est une balise `<div>` avec la classe `fr-tabs`.
- Les onglets sont contenus dans une liste `<ul>` avec la classe `fr-tabs__list`.
  - La liste possède un rôle `tablist` et attribut `aria-label` précisant le nom du système d'onglets.
- Chaque onglet est un élément `<li>` avec le rôle `presentation` contenant :
  - Un élément `<button>` avec la classe `fr-tabs__tab` et le rôle `tab`.
    - Le bouton doit être de type "button".
    - Le bouton dispose d'un attribut `aria-selected`, sa valeur [true|false] défini si l'onglet est actif.
    - Le bouton dispose d'un attribut `tabindex`, sa valeur [0|-1] défini si l'onglet est actif [0] ou inactif [-1].
    - Le bouton est lié au panneau de contenu via l'attribut `aria-controls`, sa valeur doit correspondre à l'attribut `id` du panneau.
- Chaque contenu d'onglet est un élément `<div>` avec la classe `fr-tabs__panel` et le rôle `tabpanel`.
  - Le panneau actif possède la classe `fr-tabs__panel--selected`.
  - Le panneau est lié au bouton de l'onglet via l'attribut `aria-labelledby`, sa valeur doit correspondre à l'attribut `id` du bouton.
  - Son contenu est libre, mais nécessite l'utilisation des balises adéquates, il n'est pas correcte de placer du texte directement dans une `<div>`.

**Exemple de structure HTML**

```HTML
<div class="fr-tabs">
    <ul class="fr-tabs__list" role="tablist" aria-label="[A modifier | nom du système d'onglet]">
        <li role="presentation">
            <button type="button" id="tab-1" class="fr-tabs__tab" tabindex="0" role="tab" aria-selected="true" aria-controls="tab-1-panel">Libellé onglet 1</button>
        </li>
        <li role="presentation">
            <button type="button" id="tab-2" class="fr-tabs__tab" tabindex="-1" role="tab" aria-selected="false" aria-controls="tab-2-panel">Libellé onglet 2</button>
        </li>
        <li role="presentation">
            <button type="button" id="tab-3" class="fr-tabs__tab" tabindex="-1" role="tab" aria-selected="false" aria-controls="tab-3-panel">Libellé onglet 3</button>
        </li>
    </ul>
    <div id="tab-1-panel" class="fr-tabs__panel fr-tabs__panel--selected" role="tabpanel" aria-labelledby="tab-1" tabindex="0">
        <!-- Contenu du panneau 1 -->
    </div>
    <div id="tab-2-panel" class="fr-tabs__panel" role="tabpanel" aria-labelledby="tab-2" tabindex="0">
        <!-- Contenu du panneau 2 -->
    </div>
    <div id="tab-3-panel" class="fr-tabs__panel" role="tabpanel" aria-labelledby="tab-3" tabindex="0">
        <!-- Contenu du panneau 3 -->
    </div>
</div>
```

### CSS

#### Installation du CSS

Pour fonctionner correctement le style CSS du composant et de ses dépendances doivent être importés. L'import doit se faire avant le contenu de la page dans la partie `<head>`, et de préférence avec les fichiers minifiés, car plus légers.

Il est possible d'importer les fichiers CSS avec un niveau de granularité adapté à vos besoins. Voir le découpage des fichiers CSS du DSFR dans la [documentation dédiée](path:/getting-started/developer/get-started#les-css).

:::fr-table[Dépendances CSS]{valign=top multiline=true}

| Dépendance | Obligatoire | Remarque |
|------------|-------------|----------|
| Core       | Oui         |          |
| Tab        | Oui         |          |
| Utility    | Non         | Uniquement pour l'ajout d'icône |


**Exemple d'imports CSS**

```HTML
<link href="dist/core/core.min.css" rel="stylesheet">
<link href="dist/component/tab/tab.min.css" rel="stylesheet">
```

#### Variante avec icônes

Les onglets peuvent avoir une icône juxtaposée à gauche, elle est ajoutée via la **classe utilitaire d'icône** `fr-icon--NOM-ICONE` (voir [Icônes](../../../../../core/_part/doc/icon/index.md)), associée à une **classe de positionnement** de l'icône `fr-tag--icon-left`.

**Exemple de variante avec icônes**

:::fr-accordion[Déplier pour voir le code]{id=code-tabs-icons}

```HTML
<div class="fr-tabs">
    <ul class="fr-tabs__list" role="tablist" aria-label="[A modifier | nom du système d'onglet]">
        <li role="presentation">
            <button type="button" id="tab-1" class="fr-tabs__tab fr-icon-checkbox-circle-line fr-tabs__tab--icon-left" tabindex="0" role="tab" aria-selected="true" aria-controls="tab-1-panel">Libellé onglet 1</button>
        </li>
        <li role="presentation">
            <button type="button" id="tab-2" class="fr-tabs__tab fr-icon-checkbox-circle-line fr-tabs__tab--icon-left" tabindex="-1" role="tab" aria-selected="false" aria-controls="tab-2-panel">Libellé onglet 2</button>
        </li>
        <li role="presentation">
            <button type="button" id="tab-3" class="fr-tabs__tab fr-icon-checkbox-circle-line fr-tabs__tab--icon-left" tabindex="-1" role="tab" aria-selected="false" aria-controls="tab-3-panel">Libellé onglet 3</button>
        </li>
    </ul>
    <div id="tab-1-panel" class="fr-tabs__panel fr-tabs__panel--selected" role="tabpanel" aria-labelledby="tab-1" tabindex="0">
        <!-- Contenu du panneau 1 -->
    </div>
    <div id="tab-2-panel" class="fr-tabs__panel" role="tabpanel" aria-labelledby="tab-2" tabindex="0">
        <!-- Contenu du panneau 2 -->
    </div>
    <div id="tab-3-panel" class="fr-tabs__panel" role="tabpanel" aria-labelledby="tab-3" tabindex="0">
        <!-- Contenu du panneau 3 -->
    </div>
</div>
```


#### Variantes 100% largeur du viewport en mobile

Les onglets peuvent s'afficher em mobile sur la totalité de la largeur du viewport avec l'utilisation de la classe `fr-tabs--viewport-width`.

**Exemple de variante 100% largeur du viewport en mobile**

```HTML
<div class="fr-tabs fr-tabs--viewport-width">
    <!-- Contenu des onglets -->
</div>
```


### Note de version

[Voir les évolutions sur github](https://github.com/GouvernementFR/dsfr/pulls?q=is%3Apr+is%3Aclosed+is%3Amerged+tab+)

