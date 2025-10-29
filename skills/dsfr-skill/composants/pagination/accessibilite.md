
## Pagination

La pagination est un système de navigation qui permet à l’usager de naviguer entre les différentes pages d’une liste d’éléments.


- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- [Code](../code/index.md)
- Accessibilité


Le composant **Pagination** est conçu pour être accessible et respecter les critères du RGAA. Voici les points clés à prendre en compte pour en garantir l’accessibilité.

### Interactions clavier

Aucune interaction au clavier spécifique au composant.

### Règles d’accessibilité

#### Structuration

- La pagination est un système de navigation secondaire. Elle doit être structurée dans un élément `nav role="navigation"`.
- L’attribut `aria-label="pagination"` est utilisé pour donner un contexte explicite à la navigation.

Liens de la pagination&nbsp;:

- Les liens de la pagination sont structurés dans une liste `<ul><li>`.
- La page en cours dans la pagination est identifiée avec l’attribut `aria-current="page"` et n’est pas cliquable.
- Les liens (numéro de page) disposent d’un attribut `title` pour expliciter leur fonction.
- Les liens désactivés n’ont pas d’attribut `href` et possèdent les attributs `aria-disabled="true"` et `role="link"`.

#### Contrastes de couleurs

Le composant Pagination est suffisamment contrasté en thème clair et en thème sombre.

