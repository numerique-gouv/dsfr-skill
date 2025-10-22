
## Tag

Le tag est un élément d’indication ou d’interaction (selon les contextes) permettant de catégoriser, classer, organiser les contenus d’un site à l’aide de mots clés. Il aide les usagers à rechercher et à trouver facilement une information.


- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- [Code](../code/index.md)
- Accessibilité


Le composant **Tag** est conçu pour être accessible et respecter les critères du RGAA. Voici les points clés à prendre en compte pour en garantir l’accessibilité.

### Interactions clavier

Aucune interaction au clavier spécifique au composant.

### Règles d’accessibilité

#### Tag non cliquable

- Par défaut, utiliser un élément `<p>` lorsque le tag est utilisé seul.
- Si le tag est utilisé à l’intérieur d’un élément qui possède une sémantique (`<p>`, `li`), utiliser un élément `<span>`.
- En cas d’utilisation de plusieurs tags à la suite, les structurer dans une liste.

#### Tag cliquable

- Un tag cliquable doit être un lien (élément `<a href>`).
- En cas d’utilisation de plusieurs tags cliquables à la suite, les structurer dans une liste.

Voir les [règles d'accessibilité du composant Lien](../../../../link/_part/doc/accessibility/index.md#regles-d-accessibilite).

#### Tag sélectionnable / supprimable

- Un tag sélectionnable ou supprimable doit être un bouton (élément `<button>`).
- Le tag sélectionnable possède un attribut `aria-pressed` avec les valeurs `false` ou `true` pour transmettre son état aux personnes aveugles.
- Le tag supprimable possède un attribut `aria-label` pour donner un libellé explicite au bouton. La valeur de l’attribut doit obligatoirement contenir l’intitulé visible du tag. Ex. `aria-label="Retirer le filtre [label tag]"`.
- Attention à repositionner le focus à un endroit pertinent lors de la suppression du tag.

Voir les [règles d’accessibilité du composant Bouton](../../../../button/_part/doc/accessibility/index.md#regles-d-accessibilite).

### Contrastes de couleurs

Le composant Tag est suffisamment contrasté en thème clair. Il l’est également en thème sombre dans sa version par défaut.

:::fr-table[Contrastes de couleurs]{valign=top multiline=true caption=false}
| Élément|  Thème clair | Thème sombre |
|------|-----|-----|
|**Tag par défaut**| 15,6:1 | 15,52:1 |
|**Tag cliquable / Tag non sélectionné**| 11,83:1 | 4,55:1 |
|**Tag cliquable / Tag non sélectionné au survol**| 8,72:1 | 2,6:1 |
|**Tag sélectionné / Tag supprimable**| 13,75:1 | 4,74:1 |
|**Tag sélectionné / Tag supprimable au survol**| 7,58:1 | 7,47:1 |


### Critères RGAA applicables

- **Couleurs** : 3.2, 3.3
- **Liens** : 6.1, 6.2
- **Scripts** : 7.1, 7.3
- **Éléments obligatoires** : 8.9
- **Structuration** : 9.3
- **Présentation de l’information** : 10.1, 10.2, 10.4, 10.5, 10.7, 10.11, 10.12
- **Navigation** : 12.8, 12.9
- **Consultation&nbsp;:** 13.9, 13.11

### Références

- [Référentiel général d’amélioration de l’accessibilité (RGAA 4.1.2)](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/)
