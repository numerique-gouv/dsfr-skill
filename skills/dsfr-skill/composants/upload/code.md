# Ajout de fichier : Code

## HTML

### Structure du composant

Le composant **Ajout de fichier** permet aux utilisateurs de sélectionner et envoyer un ou plusieurs fichiers.

Sa structure est la suivante :

- Le composant ajout de fichier est un élément HTML `<div>` défini par la classe `fr-upload-group` et contenant :
  - Le libellé est un élément HTML de type `<label>`, obligatoire :
    - Défini par la classe `fr-label`.
    - Il dispose de l'attribut `for` dont la valeur est égale à l'ID du champ de fichier.
    - Il doit inclure un texte explicatif, obligatoire, dans un élément HTML `<span>` défini par la classe `fr-hint-text`.
  - Le champ de fichier est un élément HTML `<input>` de type `file`, obligatoire :
    - Défini par la classe `fr-upload`.
    - Il dispose d'un attribut `id` obligatoire, pour être lié au libellé et d'un attribut `name` dont la valeur est libre.
    - Il peut disposer d'un attribut `aria-describedby` dont la valeur est égale à l'ID du groupe de messages.
    - Il peut disposer d'un attribut `multiple` dans le cas d'un composant ajout de fichiers multiples.
  - Le groupe de messages est un élément HTML `<div>` défini par la classe `fr-messages-group`.
    - Il dispose d'un attribut `id` pour être lié au champ de fichier et d'un attribut `aria-live="polite"`.
    - Le groupe de messages peut contenir un message d'erreur de type `<p>` défini par les classes `fr-message` et `fr-message--error`.

**Exemple de structure HTML**

Balises officielles : [Bouton upload 1 seul fichier](exemples.md#bouton-upload-1-seul-fichier)

> [!NOTE]
> L'ajout d'un attribut `accept` sur l'`<input>` permet de restreindre les formats de fichiers sélectionnables par l'usager. Il est recommandé d'utiliser cet attribut pour indiquer les formats attendus (par exemple, `accept=".jpg,.png,.pdf"`). Cet attribut ne peut se substituer à la validation côté serveur, mais il améliore l'expérience utilisateur en filtrant les fichiers proposés.

---

## CSS

### Installation du CSS

Les styles du composant et de ses dépendances s'importent dans le `<head>`, de préférence en fichiers minifiés. Import global ou par composant : [démarrage](../../demarrage.md).

**Dépendances CSS**

| Dépendance | Obligatoire |
|------------|-------------|
| Core       | Oui         |
| Form       | Oui         |
| Upload     | Oui         |

```html
<link href="dist/core/core.min.css" rel="stylesheet">
<link href="dist/component/form/form.min.css" rel="stylesheet">
<link href="dist/component/upload/upload.min.css" rel="stylesheet">
```

### Variante d'ajout de fichier avec erreur

Le composant Ajout de fichier peut être affiché en état d'erreur avec l'utilisation de la classe `fr-upload-group--error` et comporter dans le groupe de messages un message d'erreur.

**Exemple de variante d'ajout de fichier avec erreur**

Balises officielles : [Bouton upload avec erreur](exemples.md#bouton-upload-avec-erreur)

### Variante d'ajout de fichiers multiples

Afin de pouvoir sélectionner plusieurs fichiers, il faut ajouter l'attribut `multiple` à la balise input

**Exemple de variante d'ajout de fichiers multiples**

Balises officielles : [Bouton upload 1 seul fichier](exemples.md#bouton-upload-1-seul-fichier)

### Variante d'ajout de fichier désactivé

Le composant Ajout de fichier peut être désactivé avec l'utilisation de la classe `fr-upload-group--disabled` et comporter dans le groupe de messages un message d'erreur.

**Exemple de variante d'ajout de fichier désactivé**

```html
<div class="fr-upload-group fr-upload-group--disabled">
    <!-- Contenu de l'ajout de fichier désactivé -->
</div>
```

---

## JavaScript

Le composant Ajout de fichier **ne nécessite pas l'utilisation de JavaScript** pour son fonctionnement de base.

---

## Note de version

[Voir les évolutions sur github](https://github.com/GouvernementFR/dsfr/pulls?q=is%3Apr+is%3Aclosed+is%3Amerged+upload)
