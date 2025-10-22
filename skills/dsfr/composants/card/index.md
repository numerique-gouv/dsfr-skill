
## Carte

La carte est un élément d’interaction avec l’interface permettant de rediriger l’usager vers une page éditoriale donc elle donne un aperçu.


- Présentation
- [Démo](./demo/index.md)
- [Design](./design/index.md)
- [Code](./code/index.md)
- [Accessibilité](./accessibility/index.md)



### Quand utiliser ce composant ?

Proposer la carte pour créer un raccourci ou un point d’entrée vers des pages de contenu, en permettant un aperçu.

La carte n’a pas d’usage imposé mais elle fait généralement partie d'une collection de contenus similaires. Elle peut en effet servir à construire des listes de liens, des grilles de contenus, des blocs de mise en avant ou des boutons d’actions habillés, par exemple.

> [!NOTE]
> Depuis la version 1.5.0, il n’y a plus de différence d’usage entre la carte et la tuile. La différence entre les deux composants est donc uniquement visuelle.

### Comment utiliser ce composant ?

- **Utiliser les cartes pour créer des collections ou listes d’éléments similaires**. La carte est rarement présentée de manière isolée.
- **Harmoniser la hauteur des cartes par ligne**, en prenant la plus importante comme référence, lorsque celles-ci sont disposées au sein d’une liste. Au sein d’une grille (plusieurs lignes), les hauteurs peuvent varier mais l’ensemble doit garder une cohérence visuelle.



![](./assets/_asset/use/do-1.png)

Contraindre toutes les cartes d’une même ligne à la même hauteur.





![](./assets/_asset/use/dont-1.png)

Ne pas créer de disparité dans la hauteur des cartes d’une même ligne.



- **Proposer des cartes de même structure** lorsque celles-ci composent une liste ou une collection.



![](./assets/_asset/use/do-2.png)

Conserver un contenu commun au sein des cartes qui forment un même ensemble.





![](./assets/_asset/use/dont-2.png)

Ne pas proposer des contenus différents entre chacune des cartes d’un même ensemble.



- **Conserver l’intégralité de la carte cliquable** lorsque vous proposez cette variation.



![](./assets/_asset/use/do-3.png)

Proposer un titre sans soulignement et une zone d’action pour signifier que le lien est étendu à toute la carte.



![](./assets/_asset/use/dont-3.png)

Ne pas souligner le titre si le lien est étendu à toute la carte. Cela apporte de la confusion pour l’usager.



- **Respecter la structure de la carte telle qu’existante**, les différentes zones qui la constituent ayant un rôle défini.



![](./assets/_asset/use/do-4.png)

Proposer les liens et actions dans la zone d’action, prévue à cet effet.



![](./assets/_asset/use/dont-4.png)

Ne pas mettre de liens ou actions dans la zone de détail.



### Règles éditoriales

- **Rédiger des titres et descriptions synthétiques**.
- **Proposer des contenus distincts pour chaque carte**, en évitant de réutiliser plusieurs fois la même image d’illustration.
- **Être vigilant sur les dimensions des images d’illustration utilisées** afin de garantir leur adaptation aux différents types d’affichages responsive.
