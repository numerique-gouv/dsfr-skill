# Mise en exergue : Code

## HTML

### Structure du composant

Le composant **Mise en exergue** permet de mettre en évidence des informations importantes. Sa structure est conçue pour s’adapter aux écrans mobiles et comprend les éléments suivants :

1. Un conteneur principal sous la balise `<div>` :
    - Doit avoir la classe `fr-highlight`.
2. Une zone de contenu pour le texte de la mise en exergue :
    - Représentée par un élément `<p>`.

**Exemple de structure HTML**

Balises officielles : [Exergue taille md](exemples.md#exergue-taille-md)

---

## CSS

### Installation du CSS

Les styles du composant et de ses dépendances s'importent dans le `<head>`, de préférence en fichiers minifiés. Import global ou par composant : [démarrage](../../demarrage.md).

**Dépendances CSS**

| Dépendance | Obligatoire |
|------------|-------------|
| Core       | Oui         |
| Highlight  | Oui         |

```html
<link href="dist/core/core.min.css" rel="stylesheet">
<link href="dist/component/highlight/highlight.min.css" rel="stylesheet">
```

### Variantes de taille

Le texte de la mise en exergue peut être de différentes tailles :

- Par défaut en taille md.
- `fr-text--sm` : Petit texte.
- `fr-text--lg` : Grand texte.

**Exemple de texte de différentes tailles**

Balises officielles : [Exergue taille lg](exemples.md#exergue-taille-lg)

### Variantes d'accentuation

Le composant Mise en exergue est accentuable, permettant le changement de la couleur de la bordure latérale. Pour cela, ajouter la classe `fr-highlight--NOM-COULEUR` au même niveau que la classe `fr-highlight`.

**Exemple de structure accentuée**

Balises officielles : [Exergue accentué](exemples.md#exergue-accentué)

## JavaScript

Le composant Mise en exergue **ne nécessite pas l'utilisation de JavaScript** pour son fonctionnement de base.

---

## Note de version

[Voir les évolutions sur github](https://github.com/GouvernementFR/dsfr/pulls?q=is%3Apr+is%3Aclosed+is%3Amerged+highlight+)
