
## Bouton radio

Le bouton radio est un élément d’interaction avec l’interface permettant à l’usager de réaliser un choix unique parmi plusieurs options.


- [Présentation](../index.md)
- [Démo](../demo/index.md)
- Design
- [Code](../code/index.md)
- [Accessibilité](../accessibility/index.md)



![Anatomie du bouton](../_asset/anatomy/anatomy-1.png)







### Variations

**Liste horizontale**

Privilégier les listes verticales aux listes horizontales, plus difficiles à lire pour l’utilisateur.


Cette variation horizontale est donc à utiliser uniquement lorsqu’il n’y a que 2 options possibles ou que les libellés des entrées sont courts.

**Liste avec texte d’aide**

Il est recommandé d’ajouter un texte d’aide qui accompagne les boutons radio afin de faciliter le choix de l’utilisateur. Ces précisions peuvent être apportées de deux façons :

- Par l’ajout d’un texte sous le titre du groupe de boutons radio, afin d’apporter une précision à l’intitulé du groupe.


- Par l’ajout d’un texte sous le libellé de chaque bouton radio, afin d’apporter une précision à chaque élément.


**Boutons radio riches**

Utiliser les boutons radio riches pour permettre à l’usager de sélectionner une option unique dans une liste d’options illustrées.

À la différence des boutons radio simples, le [pictogramme](../../../../../core/_part/doc/pictogram/index.md) du bouton radio riche permet d’illustrer et d’accompagner l’usager dans son choix.

Celui-ci est personnalisable.

**Liste horizontale**

- Avec description


- Sans description


- Sans pictogramme


**Liste verticale**

- Avec description


- Sans description


- Sans pictogramme


### Tailles

Le bouton radio est proposé en taille MD par défaut (24px) afin d’optimiser son ergonomie et son accessibilité en ayant une zone cliquable confortable.


Il existe également une version en taille SM (16 px) correspondant à la taille standard proposée par les navigateurs.


### États

**Etat d’erreur**

L'état d’erreur est signalé par un changement de couleur ainsi que l’affichage d’une ligne rouge (cf. couleurs fonctionnelles : le rouge est la couleur de l’état erreur) et d’un message d’erreur en-dessous du composant.


**Etat de succès**

L'état de succès est signalé par un changement de couleur ainsi que l’affichage d’une ligne verte (cf. couleurs fonctionnelles : le vert est la couleur de l’état succès) et d’un message de succès en-dessous du composant.


**Etat désactivé**

L'état désactivé indique que l’utilisateur ne peux pas interagir avec le bouton radio.


### **Personnalisation**

Les boutons radio ne sont pas personnalisables. Toutefois, certains éléments sont optionnels - voir [la structure du composant](#bouton-radio).



![](./assets/_asset/custom/do-1.png)

Utiliser uniquement la couleur bleu pour les boutons radio.



![](./assets/_asset/custom/dont-1.png)

Ne pas personnaliser la couleur des boutons radio.





![](./assets/_asset/custom/do-2.png)

Utiliser uniquement une typographie noire.



![](./assets/_asset/custom/dont-2.png)

Ne pas personnaliser la couleur des textes.


