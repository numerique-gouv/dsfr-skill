
## Case à cocher

La case à cocher est un élément d’interaction avec l’interface permettant à l’usager de sélectionner une ou plusieurs options dans une liste.


- [Présentation](../index.md)
- [Démo](../demo/index.md)
- Design
- [Code](../code/index.md)
- [Accessibilité](../accessibility/index.md)



![Anatomie de la case à cocher](../_asset/anatomy/anatomy-1.png)







### Variations

**Liste verticale**


La variation verticale d’une liste de cases à cocher est la plus courante et la plus facile à lire pour l’utilisateur.

**Liste horizontale**


La variation horizontale d’une liste de cases à cocher est à utiliser uniquement lorsqu’il n’y a 2 options ou que les libellés des entrées sont courts.

**Liste avec texte d’aide**

Il est recommandé d’ajouter un texte d’aide qui accompagne les cases à cocher afin de faciliter le choix de l’utilisateur. Ces précisions peuvent être apportées de deux façons :

- Par l’ajout d’un texte sous le titre du groupe de cases à cocher, afin d’apporter une précision à l’intitulé du groupe.


- Par l’ajout d’un texte sous le libellé de chaque case à cocher, afin d’apporter une précision à chaque élément.


### Tailles

La case à cocher est proposée en taille MD par défaut (24px) afin d’optimiser son ergonomie et son accessibilité en ayant une zone cliquable confortable.


Il existe également une version en taille SM (16 px) correspondant à la taille standard proposée par les navigateurs.


### États

**État d’erreur**

L'état d’erreur est signalé par un changement de couleur ainsi que l’affichage d’une ligne rouge (cf. couleurs fonctionnelles : le rouge est la couleur de l’état erreur) et d’un message d’erreur en-dessous du composant.


**État de succès**

L'état de succès est signalé par un changement de couleur ainsi que l’affichage d’une ligne verte (cf. couleurs fonctionnelles : le vert est la couleur de l’état succès) et d’un message de succès en-dessous du composant.


**État désactivé**

L'état désactivé indique que l’utilisateur ne peut pas interagir avec la case à cocher.


> [!NOTE]
> L'état “Indeterminate” n’est pas géré actuellement par le Système de Design de l'Etat.

### Personnalisation

Les cases à cocher ne sont pas personnalisables. Toutefois, certains éléments sont optionnels - voir [la structure du composant](#case-à-cocher).



![](./assets/_asset/custom/do-1.png)

Utiliser uniquement la couleur bleu pour les cases à cocher.



![](./assets/_asset/custom/dont-1.png)

Ne pas personnaliser la couleur des cases à cocher.





![](./assets/_asset/custom/do-2.png)

Utiliser uniquement une typographie noire.



![](./assets/_asset/custom/dont-2.png)

Ne pas personnaliser la couleur des textes.


