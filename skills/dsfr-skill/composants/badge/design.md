
## Badge

Le badge est un élément d’indication permettant de valoriser une information liée à un élément précis du site.


- [Présentation](../index.md)
- [Démo](../demo/index.md)
- Design
- [Code](../code/index.md)
- [Accessibilité](../accessibility/index.md)



![Anatomie du badge](../_asset/anatomy/anatomy-1.png)





### Variations

**Badge standard**


**Badge système avec icône**

- Succès
- Avertissement
- Erreur
- Information
- Nouveauté


Utiliser cette variation pour préciser l’information donnée par le texte du badge avec l’icône correspondante.

L’ajout d’une icône est autorisée, et automatique en code, uniquement pour les badges système.

**Badge système sans icône**

Il est possible d’utiliser un badge système sans icône.


### Tailles

Le badge est disponible en 2 tailles :

- SM pour small


- MD pour medium - taille par défaut


### États

Le badge n’est sujet à aucun changement d’état.

### Personnalisation

Les badges systèmes ne sont pas personnalisables.



![](./assets/_asset/custom/do-1.png)

Utiliser l’icône et la couleur système correspondantes à l’information fournie.



![](./assets/_asset/custom/dont-1.png)

Ne pas changer l’icône et la couleur d’un badge système.



La couleur des badges standard peut être personnalisée, parmi les couleurs illustratives autorisées uniquement.

:::fr-table[Tableau personnalisation design]{valign=top multiline=true caption=false}
| Éléments | Indice thème clair | Indice thème sombre |
|:-----|:-----|:-----|
| **Fond** | Indice **950**<br>_exemple : `$pink-tuile-950`_ | Indice **100**<br>_exemple : `$pink-tuile-100`_ |
| **Texte** | Indice **sun**<br>_exemple : `$pink-tuile-sun-425`_ | Indice **moon**<br>_exemple : `$pink-tuile-moon-750`_ |



![](./assets/_asset/custom/do-2.png)

Utiliser une couleur illustrative sur un badge standard (exemple : `$Pink-tuile`).



![](./assets/_asset/custom/dont-2.png)

Ne pas utiliser une icône dans un badge standard.





![](./assets/_asset/custom/dont-3.png)

Ne pas utiliser une couleur système pour un badge standard.


