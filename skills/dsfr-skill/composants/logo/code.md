# Bloc marque : Code

## HTML

Le **Bloc marque** de l'état est constitué d'un bloc Marianne, d'un intitulé officiel, et de la devise républicaine. Le bloc Marianne et la devise républicaine sont ajouté automatiquement par le composant.
Le composant est composé d'un élément `<p>` avec la classe `.fr-logo`. Seul l'intitulé officiel doit être ajouté dans cet élément.

**Exemple de structure HTML**

Balises officielles : [Logo MD (par défaut)](exemples.md#logo-md-par-défaut)

---

## CSS

### Installation du CSS

Les styles du composant et de ses dépendances s'importent dans le `<head>`, de préférence en fichiers minifiés. Import global ou par composant : [démarrage](../../demarrage.md).

**Dépendances CSS**

| Dépendance | Obligatoire |
|------------|-------------|
| Core       | Oui         |
| Logo       | Oui         |

```html
<link href="dist/core/core.min.css" rel="stylesheet">
<link href="dist/component/logo/logo.min.css" rel="stylesheet">
```

### Variantes de taille

Le composant Bloc marque (logo) est disponible en 3 tailles différentes via les classes suivantes :

- Par défaut : Taille `medium`
- `fr-logo--sm` : Taille `small`
- `fr-logo--lg` : Taille `large`

```html
<p class="fr-logo fr-logo--sm">
    Intitulé
    <br>officiel
</p>

<p class="fr-logo fr-logo--lg">
    Intitulé
    <br>officiel
</p>
```

---

## JavaScript

Le composant Bloc marque **ne nécessite pas l'utilisation de JavaScript** pour son fonctionnement de base.

Un Javascript disponible dans le **core** permet de gérer le passage **en berne** des blocs marque lors des périodes de deuil national. Le fond bleu et rouge du bloc Marianne est alors remplacé par un fond noir.

### Installation du JavaScript

Le composant s'initialise au chargement du JavaScript du DSFR : [démarrage](../../demarrage.md). Imports par composant (core + composant) :

```html
<script type="module" src="dist/core/core.module.min.js"></script>
```

### Utilisation du JavaScript

Le script permet de passer les blocs marque en berne lors des deuils nationaux. Pour cela, il suffit d'ajouter l'attribut `data-fr-mourning` sur l'élément `<html>`.

```html
<html lang="fr" data-fr-mourning>
```

---

## Note de version

[Voir les évolutions sur github](https://github.com/GouvernementFR/dsfr/pulls?q=is%3Apr+is%3Aclosed+is%3Amerged+logo+)
