
## En-tête

L’en-tête est un élément de navigation permettant aux usagers d’identifier sur quel site ils se trouvent et de leur donner un accès simplifié au moteur de recherche et à certaines pages ou fonctionnalités clés du site.


- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- Code
- [Accessibilité](../accessibility/index.md)


### HTML

#### Structure du composant

Le composant **En-tête** permet aux utilisateurs d’identifier sur quel site ils se trouvent. Il peut donner accès à la recherche et à certaines pages ou fonctionnalités clés.

Il est constitué d'un élément HTML `<header>` de classe `fr-header`, avec l'attribut `role="banner"` contenant :

- Un premier conteneur du corps de l'en-tête, est un élément HTML `<div>` défini par la classe `fr-header__body`.
  - Ce bloc doit contenir un élément HTML `<div>` de classe `fr-container` qui permet de centrer le contenu.
  - Un bloc de ligne de corps de l'en-tête, un élément HTML `<div>` défini par la classe `fr-header__body-row`, contenant :
    - Un conteneur du bloc marque (voir [Marque de l'état](https://www.info.gouv.fr/marque-de-letat)), un élément HTML `<div>` de classes `fr-header__brand` et `fr-enlarge-link` pour étendre le lien à l’ensemble du bloc-marque et pouvant comporter deux sous-conteneurs :
      - Un conteneur de la partie supérieure, obligatoire, un élément HTML `<div>` de classes `fr-header__brand-top` contenant :
        - À minima le bloc marque dans un élément HTML `<div>` de classes `fr-header__logo`, il s'agit du composant [Bloc-marque de l'état](../../../../logo/_part/doc/code/index.md) de classe `fr-logo`.
        - Il peut aussi contenir un logo opérateur de l'État, une image (ou SVG) contenue dans un élément HTML `<div>` de classe `fr-header__operator`.
          - Utiliser un attribut `style="max-width:10rem;"`, avec comme valeur la largeur max du logo en fonction de son format (10rem pour du 16:9).
          - L'attribut `alt` doit être renseigné avec le nom de l'opérateur.
          - Le lien pointant vers l'accueil est alors positionné au niveau du logo de l'opérateur, il est automatiquement étendu à toute la zone du bloc marque.
          - L'attribut `title` du lien doit être renseigné sous la forme "Retour à l’accueil du site - [texte alternatif de l’image (nom de l'opérateur ou du site serviciel)] - République Française".
      - Et un bloc nom de service et description, optionnel, dans un élément HTML `<div>` de classe `fr-header__service`.
            - Le lien `<a>` dont l'attribut `title` doit être renseigné sous la forme "Accueil - [À MODIFIER - Nom du site / service] - Nom de l’entité (ministère, secrétariat d‘état, gouvernement)" est alors placé sur le paragraphe `<p>` défini par la classe `fr-header__service-title` contenant le "nom de service".
            - Une description, optionnelle, dans un paragraphe `<p>` défini par la classe `fr-header__service-tagline`.
    - Un bloc d'accès rapides, optionnel, dans un élément HTML `<div>` de classes `fr-header__tools` et pouvant contenir :
      - La liste de liens d'accès rapides, optionnelle, est placée dans un élément HTML `<div>` de classes `fr-header__tools-links`, il s'agit d'un élément HTML `<ul>` de classes `fr-btns-group` (voir [Groupes de boutons](../../../../button/_part/doc/code/index.md#groupes-de-boutons)) contenant des liens, comme par exemple la connexion à un espace sécurisé et limité à 3 accès rapides maximum.
      - La barre de recherche, optionnelle, est placée dans un élément HTML `<div>` de classes `fr-header__search` (voir [Barre de recherche](../../../../search/_part/doc/code/index.md)) et `fr-modal` pour s'afficher dans une modale en mobile (voir [Modale](../../../../modal/_part/doc/code/index.md)).
      - Le sélecteur de langue, optionnel, est placé à la suite des liens d'accès rapides (voir [Sélecteur de langue](../../../../translate/_part/doc/code/index.md)).
      - Le bouton des paramètres d'affichage, optionnels, est placé à la suite des liens d'accès rapides et avant le sélecteur de langue (voir [Paramètre d'affichage](../../../../display/_part/doc/code/index.md)).
    - Le conteneur de la navigation principale mobile, dans un élément HTML `<div>` de classes `fr-header__navbar` pouvant contenir :
      - Le bouton d'ouverture, obligatoire, du menu principale en mobile, un élément HTML `<button>` de type `button` défini par les classes `fr-btn` et `fr-btn--menu`.
        - Le bouton dispose d'un attribut `data-fr-opened`, sa valeur [true|false] défini si le bloc refermable de la navigation est ouvert ou fermé.
        - Le bouton est lié au bloc refermable via l'attribut `aria-controls`, sa valeur doit correspondre à l'attribut `id` du bloc refermable.
      - Le bouton d'ouverture de la modale de recherche en mobile, optionnel, un élément HTML `<button>` de type `button` défini par les classes `fr-btn` et `fr-btn--search`.
        - Le bouton dispose d'un attribut `data-fr-opened`, sa valeur [true|false] défini si la modale de recherche est ouverte ou fermée.
        - Le bouton est lié à la modale de recherche via l'attribut `aria-controls`, sa valeur doit correspondre à l'attribut `id` de la modale de recherche.
- Un second conteneur, de la navigation principale de l'en-tête dans un élément HTML `<div>` défini par les classes `fr-header__menu` et `fr-modal`, pour s'afficher dans une modale en mobile (voir [Modale](../../../../modal/_part/doc/code/index.md)).
  - La modale de la navigation principale de l'en-tête contient un premier conteneur des liens d'accès rapides, un élément HTML `<div>` défini par la classe `fr-header__menu-links`, laissée vide et servant à dupliquer en Javascript pour le mobile les liens contenus dans la balise définie par la classe `fr-header__tools-links`.
  - La navigation principale de l'en-tête est contenue dans un élément HTML `<nav>` défini par la classe `fr-nav` (voir [Navigation principale](../../../../navigation/_part/doc/code/index.md)).

**Exemple de structure minimale**

:::fr-accordion[Déplier pour voir le code]{id=header-structure-minimale}

```html
<header role="banner" class="fr-header">
    <div class="fr-header__body">
        <div class="fr-container">
            <div class="fr-header__body-row">
                <div class="fr-header__brand fr-enlarge-link">
                    <div class="fr-header__brand-top">
                        <div class="fr-header__logo">
                            <a href="/" title="Accueil - Nom de l’entité (ministère, secrétariat d‘état, gouvernement)">
                                <p class="fr-logo">
                                    Intitulé
                                    <br>officiel
                                </p>
                            </a>
                        </div>
                        <div class="fr-header__navbar">
                            <button data-fr-opened="false" aria-controls="modal-header" title="Menu" type="button" id="button-header" class="fr-btn--menu fr-btn">Menu</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="fr-header__menu fr-modal" id="modal-header" aria-labelledby="button-header">
        <div class="fr-container">
            <button aria-controls="modal-header" title="Fermer" type="button" id="button-2168" class="fr-btn--close fr-btn">Fermer</button>
            <div class="fr-header__menu-links">
            </div>
            <nav class="fr-nav" role="navigation" aria-label="Menu principal">
                <ul class="fr-nav__list">
                    <li class="fr-nav__item">
                        <a type="link" href="#" class="fr-nav__link">accès direct</a>
                    </li>
                    <li class="fr-nav__item">
                        <a type="link" href="#" class="fr-nav__link">accès direct</a>
                    </li>
                    <li class="fr-nav__item">
                        <a type="link" href="#" class="fr-nav__link">accès direct</a>
                    </li>
                    <li class="fr-nav__item">
                        <a type="link" href="#" class="fr-nav__link">accès direct</a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</header>
```



### JavaScript

En dehors de la version minimal, les versions avec navigation, avec liens d'accès rapides, avec barre de recherche, ou avec sélecteur de langues, nécessitent l'utilisation de JavaScript pour l'ouverture de modales en mobile.

#### Installation du JavaScript

Pour fonctionner correctement, le JavaScript du composant et de ses dépendances doivent être importés. L'import doit se faire à la fin de la page, avant la balise `</body>`, et de préférence avec les fichiers minifiés, car plus légers.

:::fr-table[Dépendances JS]{valign=top scroll=false}

| Dépendance | Obligatoire |
|------------|-------------|
| Core       | Oui         |
| Navigation | Oui         |
| Modal      | Oui         |
| Header     | Oui         |


**Exemple d'imports JavaScript**

```HTML
<script type="module" src="dist/core/core.module.min.js"></script>
<script type="module" src="dist/component/navigation/navigation.module.min.js"></script>
<script type="module" src="dist/component/modal/modal.module.min.js"></script>
<script type="module" src="dist/component/header/header.module.min.js"></script>
```

<small>NB: Il est aussi possible d'importer le Js global du DSFR `dsfr.module.min.js`</small>

Pour fonctionner sur Internet Explorer 11, des fichiers legacy, en version nomodule ES5, peuvent aussi être importés :

```HTML
<script type="text/javascript" nomodule src="dist/legacy/legacy.nomodule.min.js"></script>
<script type="text/javascript" nomodule src="dist/core/core.nomodule.min.js"></script>
<script type="text/javascript" nomodule src="dist/component/navigation/navigation.nomodule.min.js"></script>
<script type="text/javascript" nomodule src="dist/component/modal/modal.nomodule.min.js"></
<script type="text/javascript" nomodule src="dist/component/header/header.nomodule.min.js"></script>
```

Une fois le JavaScript chargé, le composant fonctionne automatiquement.

#### SPA

Afin d'éviter une duplication du code HTML et d'alourdir les snippets de code, le DSFR duplique et injecte automatiquement en JavaScript les éléments d'accès rapide présents dans le conteneur `fr-header__tools-links` vers le conteneur `fr-header__menu-links` de la modale de navigation principale en mobile.

Dans le cadre de l'utilisation du DSFR dans un contexte de Single-page application (Angular, Vue, React, etc..), il peut être nécessaire d'effectuer la recopie des éléments placés dans `fr-header__tools-links` au sein de la modale de navigation principale en mobile **avant** d’exécuter les scripts du DSFR, afin que ces éléments soient pris en compte par votre Framework. Les modes `vue`, `angular`, `react` de [l'API Javascript du DSFR](path:/getting-started/developer/javascript#mode) permettent de désactiver les manipulation du DOM par le DSFR et de lancer manuellement le script du DSFR après le chargement de la SPA avec `dsfr.start()`.

#### Instances

Sur l'en-tête', les éléments suivants sont instanciés :

- Le conteneur principal, via la classe : `fr-header`.
- Le conteneur des liens d'accès direct, via la classe : `fr-header__tools-links`.
- Le conteneur des liens d'accès direct dans la modale de la navigation principale en mobile, via la classe : `fr-header__menu-links`.
- Les boutons et liens d'accès direct, via les classes `fr-header__tools-links` et `fr-btns-group` ou `fr-links-group`.
- Les modales de la barre de recherche et de la navigation principale en mobile, via les classes `fr-header__search` plus `fr-modal` et `fr-header__menu` plus `fr-modal`.

Une fois chargé, le Js ajoute un attribut `data-fr-js-NOM_INSTANCE="true"` sur chacun des éléments instanciés.

#### API

Il est possible d'interagir avec les instances du composants en JavaScript via une API.

Cette API est disponible depuis la méthode `window.dsfr(instance)` du core.

Exemple :

```js
const elem = document.getElementById('ID_SOUS_SECTION');
dsfr(elem).collapse.disclose();
```

L'ensemble des propriétés et méthodes disponibles sont définies ci-après :

###### headerModal

:::fr-table[isEnabled]{valign=top multiline=true}

| | |
|------|-----|
| **Description** | Défini si le fonctionnement de la modale de navigation principale mobile est activé ou non |
| **Type** | property |
| **Retour** | Boolean |
| **Exemple** | `dsfr(elem).headerModal.isEnabled = false` |


:::fr-table[node]{valign=top multiline=true}

| | |
|------|-----|
| **Description** | Renvoie le noeud HTML de l'élément. |
| **Type** | property |
| **Retour** | DOMElement |
| **Exemple** | `dsfr(elem).headerModal.node` |


###### modal & modalButton

voir [Modale](../../../../modal/_part/doc/code/index.md#api)

#### Événements

Le Système de Design fournit des événements personnalisés pour les actions uniques de la part de certains composants réactifs listés sur la page de l'[API Javascript](path:/getting-started/developer/javascript).

En version mobile, sur la modale de navigation principale, les événements suivants sont disponibles :

:::fr-table[événements]{valign=top multiline=true caption=false}

| Événement | Action | Élément | Attribut |
|------|------|------|------|
| `dsfr.conceal` | Fermeture de la modale | Modal | `data-fr-js-modal` |
| `dsfr.disclose` | Ouverture de la modale | Modal | `data-fr-js-modal` |
| `dsfr.click` | Click sur le bouton d'ouverture | ModalButton | `data-fr-js-modal-button` |


