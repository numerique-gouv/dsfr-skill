# Liste déroulante : Code

## HTML

### Structure du composant

Le composant **Liste déroulante** permet à l'utilisateur de choisir une option parmi une liste déroulante.
Sa structure est la suivante :

- La liste déroulante doit être contenue dans un élément HTML `<div>` défini par la classe `fr-select-group`.
- La liste déroulante est un élément HTML `<select>` défini par la classe `fr-select`.
- La liste déroulante doit être associée à un libellé `<label>` avec la classe `fr-label`.
- Une description additionnelle de l'option - optionnelle - peut être ajoutée dans le libellé, elle est définie par un élément `<span>` et la classe utilitaire `fr-hint-text`.
- Chaque option est un élément `<option>` contenu dans le `<select>`.
- Un message d'erreur ou de succès peut être associé à la liste déroulante en utilisant un élément HTML `<div>` avec la classe `fr-messages-group` dans lequel on peut ajouter un message `fr-message`.
  - Son attribut `id` doit être associé à l'attribut `aria-describedby` de la liste déroulante.
  - Ce bloc peut être placé vide et être rempli dynamiquement, auquel cas il doit être annoncé à l'utilisateur en utilisant l'attribut `aria-live="polite"`.

**Exemple de structure HTML simple**

Balises officielles : [Liste déroulante avec texte de description](exemples.md#liste-déroulante-avec-texte-de-description)

## CSS

### Installation du CSS

Les styles du composant et de ses dépendances s'importent dans le `<head>`, de préférence en fichiers minifiés. Import global ou par composant : [démarrage](../../demarrage.md).

**Dépendances CSS**

| Dépendance | Obligatoire |
|------------|-------------|
| Core       | Oui         |
| Form       | Oui         |
| Select     | Oui         |

```html
<link href="dist/core/core.min.css" rel="stylesheet">
<link href="dist/component/form/form.min.css" rel="stylesheet">
<link href="dist/component/select/select.min.css" rel="stylesheet">
```

### Variantes d'états

Les états d'erreur/succès/désactivé sont gérés au niveau du groupe.
Pour ajouter un état à une liste déroulante, ajoutez une des classes suivantes :

- La classe `fr-select-group--error` : Indique une erreur.
- La classe `fr-select-group--valid` : Indique un succès.
- L'attribut `fr-select-group--disabled` : Indique un état désactivé.

Un message d'erreur ou de succès doit être ajouté dans un bloc `fr-messages-group` à la fin du groupe de la liste déroulante et doit être lié à la liste déroulante via un attribut `aria-describedby`.

**Exemple de liste déroulante avec erreur**

**Déplier pour voir le code**

Balises officielles : [Liste déroulante erreur](exemples.md#liste-déroulante-erreur)

**Exemple de liste déroulante avec succès**

**Déplier pour voir le code**

Balises officielles : [Liste déroulante valide](exemples.md#liste-déroulante-valide)

**Exemple de liste déroulante désactivée**

**Déplier pour voir le code**

Balises officielles : [Liste déroulante désactivée](exemples.md#liste-déroulante-désactivée)

### Variantes de liste déroulante avec groupe d'options

L'élément HTML `<optgroup>` est utilisé pour regrouper les options associées dans une liste déroulante.

Si vous disposez d’une longue liste d’options, les groupes d’options associées sont plus faciles à gérer pour un utilisateur.

**Exemple de liste déroulante avec groupe d'options**

**Déplier pour voir le code**

Balises officielles : [Liste déroulante par défaut](exemples.md#liste-déroulante-par-défaut)

---

## JavaScript

Le composant Liste déroulante **ne nécessite pas l'utilisation de JavaScript** pour son fonctionnement de base.

---

## Note de version

[Voir les évolutions sur github](https://github.com/GouvernementFR/dsfr/pulls?q=is%3Apr+is%3Aclosed+is%3Amerged+select+)
