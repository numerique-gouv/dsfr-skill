# Interrupteur

> **Basculer entre deux états opposés**

## Navigation

- [Accessibilité](./accessibilite.md) - Guide d'accessibilité RGAA
- [Code](./code.md) - Documentation technique et API
- [Design](./design.md) - Spécifications design
- [Exemples](./examples/) - Exemples de code HTML

## Interrupteur

L’interrupteur est un élément d’interaction avec l’interface qui permet à l’usager de faire un choix entre deux états opposés (activé / désactivé).


- Présentation
- [Démo](./demo/index.md)
- [Design](./design/index.md)
- [Code](./code/index.md)
- [Accessibilité](./accessibility/index.md)



### Quand utiliser ce composant ?

Privilégier l’usage des interrupteurs pour paramétrer des fonctionnalités transverses (exemple : activation / désactivation des notifications). Le changement d'état de l’interrupteur doit avoir un effet immédiat et ne nécessite pas de validation.

### Comment utiliser ce composant ?

- **Prioriser la composition interrupteur avec statut Activé/désactivé** qui est la plus accessible et la plus intelligible.
- **Utiliser l’interrupteur en groupe** pour constituer une liste d’actions de même nature.



![](./assets/_asset/use/do-1.png)

Utiliser l’interrupteur en groupe pour constituer une liste d’actions de même nature.



![](./assets/_asset/use/dont-1.png)

Ne pas regrouper des interrupteurs qui n’ont rien à voir.



- **Respecter un format unique pour tous les interrupteurs d’un même groupe** (ajout d’une description, d'un statut etc.) ****



![](./assets/_asset/use/do-2.png)

Respecter un format unique pour tous les interrupteurs d’un même groupe.



![](./assets/_asset/use/dont-2.png)

Ne pas proposer des formats différents entre les interrupteurs d’un même groupe.



### Règles éditoriales

- **Rédiger un libellé clair, explicite et concis** pour faciliter la compréhension de l’usager.
- **Accompagner le libellé d’une description** lorsque celui-ci ne permet pas, à lui seul, de comprendre l’action requise par l’usager.



![](./assets/_asset/edit/do-1.png)

Accompagner le libellé d’une description lorsqu’il ne permet pas, à lui seul, de comprendre l’action requise par l’usager.



- **Ajouter un titre au composant** pour clarifier le cadre dans lequel il est utilisé.



![](./assets/_asset/edit/do-2.png)

Ajouter un titre au composant pour clarifier le cadre dans lequel il est utilisé.


