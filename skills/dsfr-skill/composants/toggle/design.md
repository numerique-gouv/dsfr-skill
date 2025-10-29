
## Interrupteur

L’interrupteur est un élément d’interaction avec l’interface qui permet à l’usager de faire un choix entre deux états opposés (activé / désactivé).


- [Présentation](../index.md)
- [Démo](../demo/index.md)
- Design
- [Code](../code/index.md)
- [Accessibilité](../accessibility/index.md)



![Anatomie de l'interrupteur](../_asset/anatomy/anatomy-1.png)









### Variations

**Interrupteur simple**


**Interrupteur avec description**


**Interrupteur avec état**


**Groupe d’interrupteurs**

Utiliser l’interrupteur en groupe pour constituer une liste d’actions de même nature.


Lorsqu’il est utilisé en groupe, l’interrupteur doit toujours respecter le même format. Si le premier interrupteur affiche l'état, une description, ou le séparateur optionnel, alors l’ensemble des interrupteurs du groupe devront également afficher ces éléments.

**Groupe d’interrupteurs avec séparateurs**


### Tailles

La largeur de l’interrupteur s’adapte à la taille de son conteneur. Si l’interrupteur se trouve dans un conteneur large avec le bouton à droite du libellé, attention à ce qu’il ne s’en détache pas visuellement.

### États

**État d’erreur**

L'état d’erreur est signalé par un changement de couleur ainsi que l’affichage d’une ligne rouge (cf. couleurs système : le rouge est la couleur de l’état erreur) et d’un message d’erreur en-dessous du composant.


**Etat de succès**

L'état de succès est signalé par un changement de couleur ainsi que l’affichage d’une ligne verte (cf. couleurs système : le vert est la couleur de l’état succès) et d’un message de succès en-dessous du composant.


**État désactivé**

L’état désactivé indique que l'usager ne peut pas interagir avec le bouton.


Dans le cas d’un interrupteur, il permet d’afficher un choix déjà effectué et/ou ne pouvant être modifié par l’usager.

### Personnalisation

Les interrupteurs ne sont pas personnalisables.

Toutefois, certains éléments sont optionnels - voir [la structure du composant](../../../../toggle/_part/doc/index.md).



![](./assets/_asset/custom/do-1.png)

Utiliser uniquement la couleur bleu pour les interrupteurs.



![](./assets/_asset/custom/dont-1.png)

Ne pas personnaliser la couleur des interrupteurs.





![](./assets/_asset/custom/do-2.png)

Conserver la coche lorsque l’interrupteur est activé.



![](./assets/_asset/custom/dont-2.png)

Ne pas supprimer ou personnaliser l’icône de l’interrupteur.


