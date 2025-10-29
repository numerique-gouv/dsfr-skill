
## Tableau

Le tableau permet de présenter une liste structurée de données textuelles et/ou numériques dans le but de simplifier l’analyse et la comparaison d’informations pour l’usager.


- [Présentation](../index.md)
- [Démo](../demo/index.md)
- Design
- [Code](../code/index.md)
- [Accessibilité](../accessibility/index.md)



![Anatomie du tableau](../_asset/anatomy/anatomy-1.png)













### Variations

**Tableau non scrollable**


**Tableau avec retour à la ligne automatique dans les cellules**


**Tableau avec largeur de colonnes minimales**


**Tableau avec première colonne fixée**


**Tableau complexe avec cellules fusionnées**


**Tableau avec filtre et différents types de données**


### Variantes esthétiques

**Bordures horizontales (par défaut)**


**Bordures horizontales et verticales**


### Densité

Le tableau prend automatiquement la taille de son conteneur.

Ce conteneur peut être scrollable horizontalement. Ceci est courant sur les écrans plus petits où il peut être impossible d'afficher le tableau complet sur l'écran de l'appareil. Le conteneur est donc responsive par défaut.

Toutefois, prenez garde à ce que les informations clés soient visibles au premier coup d’œil même sur un écran de petite taille.

Par défaut, la largeur des cellules s’adapte automatiquement à leur contenu. En revanche, il existe 3 niveaux de densité :

**SM pour small**


**MD pour medium**


**LG pour large**


Ainsi si la taille des composants intégrés dans les cellules ne change pas, cela vous permet toutefois de varier la densité d’affichage de votre tableau en fonction de son contenu.

### Ligne sélectionnable


> [!NOTE]
> Les états désactivé, focus et cliqué sont propres aux composants intégrés au sein des cellules.

### Personnalisation

Le tableau n’est pas personnalisable.

Toutefois, l’ensemble des composants imbriqués (icône, pictogramme, tag, badge, bouton, lien, champ de saisie, infobulle, interrupteur et liste déroulante) peuvent être personnalisés selon leurs propres règles de personnalisation.

Par ailleurs, certains éléments sont optionnels - voir [la structure du composant](#tableau).
