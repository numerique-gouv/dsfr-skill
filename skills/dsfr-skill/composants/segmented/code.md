# Contrôle segmenté : Code

## HTML

### Structure du composant

Le composant **Contrôle segmenté** permet à l'utilisateur de choisir une option parmi plusieurs segments.
Sa structure est la suivante :

- Le conteneur du contrôle segmenté doit être un élément HTML `<fieldset>` défini par la classe `fr-segmented`.
- La légende du contrôle segmenté est un élément HTML `<legend>` défini par la classe `fr-segmented__legend`.
- La liste des segments est un élément HTML `<div>` défini par la classe `fr-segmented__elements`.
- Chaque segment est contenu dans un élément HTML `<div>` défini par la classe `fr-segmented__element`.
- Chaque segment est un élément `<input>` de type `radio` associé à un `<label>` avec la classe `fr-label`.
- Une description additionnelle, optionnelle, peut être ajoutée dans la légende, elle est définie par un élément `<span>` et la classe utilitaire `fr-hint-text`.

**Exemple de structure HTML simple**

Balises officielles : [Contrôle segmenté avec texte d'aide](exemples.md#contrôle-segmenté-avec-texte-daide)

## CSS

### Installation du CSS

Les styles du composant et de ses dépendances s'importent dans le `<head>`, de préférence en fichiers minifiés. Import global ou par composant : [démarrage](../../demarrage.md).

**Dépendances CSS**

| Dépendance | Obligatoire | Remarque |
|------------|-------------|----------|
| Core       | Oui         |          |
| Form       | Oui         |          |
| Segmented  | Oui         |          |
| Utility    | Non         | Uniquement pour l'ajout d'icône |

```html
<link href="dist/core/core.min.css" rel="stylesheet">
<link href="dist/component/form/form.min.css" rel="stylesheet">
<link href="dist/component/segmented/segmented.min.css" rel="stylesheet">
```

### Variante de taille

Le contrôle segmenté est disponible en deux variantes de tailles pour s'adapter à différents contextes d'utilisation.
Pour appliquer une variante de taille, ajoutez une des classes suivantes à l'élément `<fieldset class="fr-segmented">` :

- En taille MD : par défaut.
- En taille SM : définie par la classe `fr-segmented--sm`.

**Exemple de variante de taille**

```html
<fieldset class="fr-segmented fr-segmented--sm">
  <!-- Contenu du contrôle segmenté -->
</fieldset>
```

### Variante avec légende en ligne

Le contrôle segmenté par défaut est affiché en dessous de sa légende mais il est possible de les afficher sur une même ligne avec l'utilisation de la classe `fr-segmented__legend--inline` sur l'élément `<legend>`.

**Exemple de contrôle segmenté avec légende en ligne**

```html
<fieldset class="fr-segmented">
    <legend class="fr-segmented__legend fr-segmented__legend--inline">
        Légende
    </legend>
    <div class="fr-segmented__elements">
        <!-- Contenu du contrôle segmenté -->
    </div>
</fieldset>
```

### Variante sans légende visible

La légende `<legend>` du contrôle segmenté est obligatoire mais peut être positionné hors écran avec l'utilisation de la classe `fr-segmented--no-legend` sur l'élément `<fieldset>`.

**Exemple de contrôle segmenté sans légende visible**

```html
<fieldset class="fr-segmented fr-segmented--no-legend">
    <!-- Contenu du contrôle segmenté -->
</fieldset>
```

### Variante avec icônes

Les libellés des segment du contrôle segmenté peuvent avoir une icône juxtaposée à gauche, elle est ajoutée via la **classe utilitaire d'icône** `fr-icon--NOM-ICONE` (voir [Icônes](../../fondamentaux/icon/index.md)).

**Exemple de variante avec icônes**

**Déplier pour voir le code**

Balises officielles : [Contrôle segmenté avec icônes](exemples.md#contrôle-segmenté-avec-icônes)

---

## JavaScript

Le composant Contrôle segmenté nécessite l'utilisation de JavaScript pour son fonctionnement de base, notamment pour gérer le passage à la ligne des éléments lorsque l'espace disponible est insuffisant. La classe `fr-segmented--vertical` est ainsi ajoutée par le JavaScript lorsqu'il est nécessaire de passer en mode vertical.

### Installation du JavaScript

Le composant s'initialise au chargement du JavaScript du DSFR : [démarrage](../../demarrage.md). Imports par composant (core + composant) :

```html
<script type="module" src="dist/core/core.module.min.js"></script>
<script type="module" src="dist/component/segmented/segmented.module.min.js"></script>
```

Une fois le JavaScript chargé, le comportement fonctionne automatiquement.

### Instances

Sur le contrôle segmenté, l'élément suivant est instancié :

- Le composant "segmented", via la classe : `fr-segmented`
- Chaque "segmentedElement" du composant, via le sélecteur : `fr-segmented__element input`

Une fois chargé, le JS ajoute l'attribut `data-fr-js-segmented="true"` sur les éléments instanciés.

### API

Il est possible d'interagir avec les instances du composant en JavaScript via une API.

Cette API est disponible depuis la méthode `window.dsfr(instance)` du core.

L'ensemble des propriétés et méthodes disponibles sont définies ci-après :

#### segmented

**resize**

| | |
|------|-----|
| **Description** | Permet de mettre à jour le composant après un changement de libellé. |
| **Type** | property |
| **Retour** | DOMElement |
| **Exemple** | `dsfr(segmented).segmented.resize()` |

**node**

| | |
|------|-----|
| **Description** | Renvoie le noeud HTML de l'élément. |
| **Type** | property |
| **Retour** | DOMElement |
| **Exemple** | `dsfr(segmented).segmented.node` |

#### segmentedElement

**node**

| | |
|------|-----|
| **Description** | Renvoie le noeud HTML de l'élément. |
| **Type** | property |
| **Retour** | DOMElement |
| **Exemple** | `dsfr(segmentedElement).segmentedElement.node` |

---

## Note de version

[Voir les évolutions sur github](https://github.com/GouvernementFR/dsfr/pulls?q=is%3Apr+is%3Aclosed+is%3Amerged+segmented+)
