# Champ de saisie

> **Saisie de données dans une interface.**

## Navigation

- [Accessibilité](./accessibilite.md) - Guide d'accessibilité RGAA
- [Code](./code.md) - Documentation technique et API
- [Design](./design.md) - Spécifications design
- [Exemples](./examples/) - Exemples de code HTML

## Champ de saisie

Le champ de saisie est un élément d’interaction avec l’interface permettant à l’usager d’entrer du contenu et/ou des données.


- Présentation
- [Démo](./demo/index.md)
- [Design](./design/index.md)
- [Code](./code/index.md)
- [Accessibilité](./accessibility/index.md)



### Quand utiliser ce composant ?

Utiliser le champ de saisie pour permettre à un usager de saisir du contenu et/ou des données.

> [!NOTE]
> N’utiliser pas un champ de saisie pour des **choix fermés**. Préférer plutôt une [liste déroulante](../../../select/_part/doc/index.md), des [boutons radio](../../../radio/_part/doc/index.md) ou des [cases à cocher](../../../checkbox/_part/doc/index.md).
>
> Pour les champs de recherche spécifiquement, utiliser la [barre de recherche](../../../search/_part/doc/index.md).

### Comment utiliser ce composant ?

- **Placer le libellé au-dessus du champ de saisie**, pour faciliter la lecture.
- **Ajouter un texte d’aide sous le libellé** afin de faciliter la saisie par l’usager, notamment pour clarifier la nature du contenu attendu. Si un format précis est requis, il faut l’indiquer de la manière la plus claire possible (et y inclure des exemples lorsque c’est possible).
- **Rendre visible toute information essentielle à la saisie**. Ne pas cacher du contenu dans un tooltip ou une infobulle.
- **Limiter l’utilisation de placeholder** car il peut créer de la confusion chez l’usager. Si toutefois vous souhaitez l’utiliser, il est nécessaire de respecter la couleur proposée afin de rester accessible, et son contenu doit présenter des informations non indispensables à la compréhension du champ. En aucun cas il ne peut remplacer un libellé et il est uniquement à réserver pour des aides à la saisie secondaires.
- **Afficher les champs en liste verticale** pour faciliter la lecture et optimiser l’ergonomie. L’oeil lit spontanément de bas en haut.
- **Utiliser un bouton primaire** pour valider un champ de saisie ou un formulaire. Le bouton secondaire sera quant à lui utilisé pour réinitialiser le formulaire ou abandonner la saisie.
- **Indiquer systématiquement la réussite ou non de la soumission d’un champ** à l’aide d’un message de succès ou d’erreur.

### Règles éditoriales

- **Conserver le même libellé pour les champs demandant la même information**.
