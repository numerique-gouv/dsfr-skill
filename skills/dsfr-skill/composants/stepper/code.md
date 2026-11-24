# Indicateur d’étapes : Code

## HTML

### Structure du composant

Le composant **Indicateur d'étapes** est un élément permettant de visualiser les étapes d'un processus.

Sa structure est la suivante :

- Le conteneur du stepper est un élément HTML `<div>` défini par la classe `fr-stepper`.
- Le titre de l'étape en cours, obligatoire, est contenu dans un niveau d'entête `<hx>`, variable en fonction de sa hiérarchie dans la page (par défaut h2), et possède la classe `fr-stepper__title`.
  - Le numéro de l'étape et le nombre d'étapes total, obligatoires, sont précisés à l'intérieur du titre dans un élément HTML `<span>` défini par la classe `fr-stepper__state`.
- La barre de progression, obligatoire, un élément HTML `<div>` défini par la classe `fr-stepper__steps`.
  - La balise possède des attributs `data-fr-steps` et `data-fr-current-step` pour définir le nombre total d'étapes et l'étape actuelle.
- Les détails de l'étape sont un élément HTML `<p>` défini par la classe `fr-stepper__details` et contiennent :
  - Le titre de l'étape suivante, obligatoire, dans un élément HTML `<span>`.

**Exemple de structure HTML**

Balises officielles : [Exemple d'indicateur d'étape 1 sur 3](exemples.md#exemple-dindicateur-détape-1-sur-3)

## CSS

### Installation du CSS

Les styles du composant et de ses dépendances s'importent dans le `<head>`, de préférence en fichiers minifiés. Import global ou par composant : [démarrage](../../demarrage.md).

**Dépendances CSS**

| Dépendance | Obligatoire |
|------------|-------------|
| Core       | Oui         |
| Stepper    | Oui         |

```html
<link href="dist/core/core.min.css" rel="stylesheet">
<link href="dist/component/stepper/stepper.min.css" rel="stylesheet">
```

## JavaScript

Le composant Indicateur d'étapes **ne nécessite pas l'utilisation de JavaScript** pour son fonctionnement de base.

---

## Note de version

[Voir les évolutions sur github](https://github.com/GouvernementFR/dsfr/pulls?q=is%3Apr+is%3Aclosed+is%3Amerged+stepper+)
