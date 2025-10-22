
## Pagination

La pagination est un système de navigation qui permet à l’usager de naviguer entre les différentes pages d’une liste d’éléments.


- [Présentation](../index.md)
- [Démo](../demo/index.md)
- Design
- [Code](../code/index.md)
- [Accessibilité](../accessibility/index.md)



![Anatomie du bouton](../_asset/anatomy/anatomy-1.png)







### Variations

**Responsive**


- Conserver le même fonctionnel sur les différentes tailles d'écran.
- Cacher certains numéros de page pour alléger l'affichage sur les écrans mobiles.
- Limiter le nombre de pages visibles pour pouvoir idéalement afficher l’ensemble des éléments de la pagination sur une seule ligne.
- Privilégier les icônes “<“ et “>” pour les actions “Précédent” et “Suivant”.

### Tailles

La largeur de la pagination s’adapte à la taille de son conteneur.

### États

**État désactivé**

L’état désactivé indique que l'usager ne peut pas interagir avec un lien.


- Appliquer cet état aux liens “Précédent” et "première page" lorsque vous êtes sur la première page et sur les liens “Suivant” et "dernière page" lorsque vous êtes sur la dernière page.

**État au survol**

L’état au survol correspond au comportement constaté par l’usager lorsqu’il survole un des liens avec sa souris.

**État courant**

L’état courant permet d’indiquer à l’usager la page active, soit celle sur laquelle il se situe.


### Personnalisation

La pagination n’est pas personnalisable.

Toutefois, certains éléments sont optionnels - voir [la structure du composant](#pagination).



![](./assets/_asset/custom/do-1.png)

Mettre en évidence la page active en appliquant un fond bleu derrière le numéro de page.



![](./assets/_asset/custom/dont-1.png)

Ne pas personnaliser la couleur du fond qui indique la page active.


