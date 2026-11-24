# Mise en avant : Code

## HTML

### Structure du composant

Le composant **Mise en avant** permet de mettre en évidence des informations importantes. Sa structure est conçue pour s’adapter aux écrans mobiles et comprend les éléments suivants :

1. Un conteneur principal sous la balise `<div>` :
    - Doit avoir la classe `fr-callout`.
    - Peut avoir une classe `fr-icon-NOM-ICONE` pour ajouter une icône avant le titre.
2. Un titre pour la mise en avant :
    - Représenté par un élément `<hx>`, suivant le niveau d'entête voulu, avec la classe `fr-callout__title`.
3. Une zone de contenu pour le texte de la mise en avant :
    - Représentée par un élément `<p>` avec la classe `fr-callout__text`.
4. D'autres éléments facultatifs comme un lien ou un bouton.

**Exemple de structure HTML**

Balises officielles : [Mise en avant avec titre, bouton et texte](exemples.md#mise-en-avant-avec-titre-bouton-et-texte)

---

## CSS

### Installation du CSS

Les styles du composant et de ses dépendances s'importent dans le `<head>`, de préférence en fichiers minifiés. Import global ou par composant : [démarrage](../../demarrage.md).

**Dépendances CSS**

| Dépendance | Obligatoire | Remarque |
|------------|-------------| ---------|
| Core       | Oui         |          |
| Callout    | Oui         |          |
| Button     | Non         | Uniquement si ajout d'un bouton à l'intérieur |
| Utility    | Non         | Uniquement pour l'ajout d'icône |

```html
<link href="dist/core/core.min.css" rel="stylesheet">
<link href="dist/component/callout/callout.min.css" rel="stylesheet">
```

### Variantes de style

- **Ajout d'icône** : Le composant Mise en avant peut intégrer une icône, il suffit pour cela d'ajouter la classe `fr-icon-NOM-ICON` au même niveau que la classe `fr-callout`.
- **Accentuation** : Le composant est accentuable, permettant le changement de la couleur de fond et de la bordure latérale. Pour cela, ajouter la classe `fr-callout-NOM-COULEUR` au même niveau que la classe `fr-callout`.

**Exemple de variante de style**

```html
<div class="fr-callout fr-callout--green-emeraude">
```

## JavaScript

Le composant Mise en avant **ne nécessite pas l'utilisation de JavaScript** pour son fonctionnement de base.

---

## Note de version

[Voir les évolutions sur github](https://github.com/GouvernementFR/dsfr/pulls?q=is%3Apr+is%3Aclosed+is%3Amerged+callout+)
