# Pagination : Code

## HTML

### Structure du composant

Le composant **Pagination** permet aux utilisateurs de naviguer entre les différentes pages d’une liste d'éléments.

Sa structure comprend les éléments suivants :

1. Un conteneur principal sous la balise `<nav>` :
    - Doit avoir l’attribut `role="navigation"` pour indiquer sa fonction.
    - Utilise l’attribut `aria-label` pour fournir une description contextuelle, par exemple `aria-label="pagination"`.
2. Une liste `<ul>` avec la classe `fr-pagination__list`, contenant les éléments de pagination :
    - Chaque segment est un élément `<li>` :
      - Les segments avec des liens utilisent une balise `<a>` avec la classe `fr-pagination__link` et disposent d'un attribut `title` de façon à ce qu’ils indiquent explicitement leur fonction.
      - Le lien de la page actuelle utilise l'attribut `aria-current="page"` pour indiquer la page courante.
      - Les liens vers la première page ou la dernière page sont définis par les classes `fr-pagination__link--first` et `fr-pagination__link--last`.
      - Les liens vers la page précédente ou la page suivante sont définis par les classes `fr-pagination__link--prev` et `fr-pagination__link--next`, ils disposent d'un libellé caché par défaut qui peut être affiché avec l'utilisation de la classe `fr-pagination__link--label` ou uniquement à partir du breakpoint LG avec la classe `fr-pagination__link--lg-label`.
      - L'utilisation des classes utilitaires `fr-hidden` et `fr-unhidden-lg` peut permettre de n'afficher qu'un nombre réduit de résultats en dessous du breakpoint LG dans un soucis de gain d'espace.

**Exemple de structure HTML**

Balises officielles : [Pagination première page](exemples.md#pagination-première-page)

## CSS

### Installation du CSS

Les styles du composant et de ses dépendances s'importent dans le `<head>`, de préférence en fichiers minifiés. Import global ou par composant : [démarrage](../../demarrage.md).

**Dépendances CSS**

| Dépendance | Obligatoire |
|------------|-------------|
| Core       | Oui         |
| Pagination | Oui         |

```html
<link href="dist/core/core.min.css" rel="stylesheet">
<link href="dist/component/pagination/pagination.min.css" rel="stylesheet">
```

## JavaScript

Le composant Pagination **ne nécessite pas l'utilisation de JavaScript** pour son fonctionnement de base.

---

## Note de version

[Voir les évolutions sur github](https://github.com/GouvernementFR/dsfr/pulls?q=is%3Apr+is%3Aclosed+is%3Amerged+pagination+)
