# Mot de passe : Code

## HTML

### Structure du composant

Le composant **Mot de passe** permet à l'utilisateur de masquer ou révéler le texte du mot de passe.
Sa structure est la suivante :

- Le Conteneur du mot de passe, obligatoire, est un élément HTML `<div>` défini par la classe `fr-password`.
- Le libellé du mot de passe, obligatoire, doit être un élément HTML `<label>` avec les classe `fr-label` et `fr-password__label`, associé au mot de passe par son attribut `for` dont la valeur est égale à l'attribut `id` du mot de passe.
- Une description additionnelle du mot de passe, optionnelle, peut être ajoutée dans le libellé, elle est définie par un élément `<span>` et la classe utilitaire `fr-hint-text`.
- Le champ de mot de passe est contenu dans un élément HTML `<div>` défini par la classe `fr-input-wrap`.
- Le mot de passe est un élément HTML `<input>` de type `password`, obligatoire, défini par la classe `fr-password__input`.
  - Il dispose d'un attribut `autocomplete` dont la valeur varie selon l'usage du mot de passe entre `new-password` pour la création et `current-password` pour la connexion.
  - Les attributs `autocapitalize` et `autocorrect` ont pour valeur `false` par défaut.
- Un message d'information, d'erreur ou de succès peut être associé au mot de passe en utilisant un élément HTML `<div>` avec la classe `fr-messages-group` dans lequel on peut ajouter un message `fr-message`.
  - Son attribut `id` doit être associé à l'attribut `aria-describedby` du mot de passe.
  - Ce bloc peut être placé vide et être rempli dynamiquement, auquel cas il doit être annoncé à l'utilisateur en utilisant l'attribut `aria-live="polite"`.
- Une Fonctionnalité d’affichage du mot de passe, obligatoire, est contenue dans un élément `<div>` défini par les classes `fr-password__checkbox`, `fr-checkbox-group`, et `fr-checkbox-group--sm`, contenant :
  - La case à cocher pour révéler ou masquer le mot de passe est un élément `<input>` de type `checkbox`.
  - Le libellé de la case à cocher, obligatoire, doit être un élément HTML `<label>` avec la classe `fr-label` associé à la case à cocher par son attribut `for` dont la valeur est égale à l'attribut `id` de la case à cocher.

**Exemple de structure HTML**

```html
<div class="fr-password">
    <label class="fr-password__label fr-label" for="password-input">
        Mot de passe
        <span class="fr-hint-text">Texte de description additionnel</span>
    </label>
    <div class="fr-input-wrap">
        <input id="password-input" class="fr-password__input fr-input" autocapitalize="off" autocorrect="off" aria-describedby="password-input-messages" aria-required="true" name="password" autocomplete="new-password" type="password">
    </div>
    <div class="fr-messages-group" id="password-input-messages" aria-live="polite">
        <p class="fr-message">Votre mot de passe doit contenir :</p>
        <p class="fr-message fr-message--info" data-fr-valid="validé" data-fr-error="en erreur">12 caractères minimum</p>
        <p class="fr-message fr-message--info" data-fr-valid="validé" data-fr-error="en erreur">1 caractère spécial minimum</p>
        <p class="fr-message fr-message--info" data-fr-valid="validé" data-fr-error="en erreur">1 chiffre minimum</p>
    </div>
    <div class="fr-password__checkbox fr-checkbox-group fr-checkbox-group--sm">
        <input aria-label="Afficher le mot de passe" id="password-show" type="checkbox">
        <label class="fr-label" for="password-show">
            Afficher
        </label>
    </div>
</div>
```

---

## CSS

### Installation du CSS

Les styles du composant et de ses dépendances s'importent dans le `<head>`, de préférence en fichiers minifiés. Import global ou par composant : [démarrage](../../demarrage.md).

**Dépendances CSS**

| Dépendance | Obligatoire | Remarque |
|------------|-------------| ---------|
| Core       | Oui         |          |
| Form       | Oui         |          |
| Input      | Oui         |          |
| checkbox   | Oui         |          |
| Password   | Oui         |          |
| Link       | Non         | Uniquement pour le lien de récupération du mot de passe |

```html
<link href="dist/core/core.min.css" rel="stylesheet">
<link href="dist/component/form/form.min.css" rel="stylesheet">
<link href="dist/component/input/input.min.css" rel="stylesheet">
<link href="dist/component/checkbox/checkbox.min.css" rel="stylesheet">
<link href="dist/component/password/password.min.css" rel="stylesheet">
```

### Variantes de validation

Un message d'information complémentaire, d'erreur ou de succès doit être ajouté dans un bloc `fr-messages-group` à la fin du groupe du mot de passe et doit être lié à la liste déroulante via un attribut `aria-describedby`.

Pour ajouter un état de validation à un message, ajoutez une des classes suivantes sur le paragraphe comportant le message `<p class="fr-message">` :

- Par défaut le message indique une information.
- La classe `fr-message--error` : Indique une erreur.
- La classe `fr-message--valid` : Indique un succès.

**Exemple de mot de passe après validation**

**Déplier pour voir le code**

Balises officielles : [Mot de passe après validation](exemples.md#mot-de-passe-après-validation)

### Variante de mot de passe de connexion

Le composant mot de passe peut être utilisé dans un contexte de connexion et proposer un lien vers une page de récupération du mot de passe.

**Exemple de mot de passe de connexion**

**Déplier pour voir le code**

Balises officielles : [Mot de passe de connexion](exemples.md#mot-de-passe-de-connexion)

---

## JavaScript

### Installation du JavaScript

Le composant s'initialise au chargement du JavaScript du DSFR : [démarrage](../../demarrage.md). Imports par composant (core + composant) :

```html
<script type="module" src="dist/core/core.module.min.js"></script>
<script type="module" src="dist/component/password/password.module.min.js"></script>
```

Une fois le JavaScript chargé, le composant fonctionne automatiquement.

### Instances

Sur le mot de passe, les éléments suivants sont instanciés :

- Le conteneur, via la classe : `fr-password`
- Le champs de mot de passe, via la classe : `password__input`
- Le libellé, via la classe : `fr-password__label`
- La case à cocher pour révéler ou masquer le mot de passe, via la classe : `fr-password__checkbox` et l'élément `<input>` de type `checkbox`

Une fois chargé, le JS ajoute un attribut `data-fr-js-NOM_INSTANCE="true"` sur chacun des éléments instanciés.

### API

Il est possible d'interagir avec les instances du composant en JavaScript via une API.

Cette API est disponible depuis la méthode `window.dsfr(instance)` du core.

Exemple :
```js
const elem = document.getElementById('ID_TAB');
dsfr(elem).passwordInput.isEnabled;
```

L'ensemble des propriétés et méthodes disponibles sont définies ci-après :

#### password

**isEnabled**

| | |
|------|-----|
| **Description** | Défini si le fonctionnement du mot de passe est activé ou non |
| **Type** | property |
| **Retour** | Boolean |
| **Exemple** | `dsfr(elem).password.isEnabled = false` |

**node**

| | |
|------|-----|
| **Description** | Renvoie le noeud HTML de l'élément. |
| **Type** | property |
| **Retour** | DOMElement |
| **Exemple** | `dsfr(elem).password.node` |

#### passwordInput

**isEnabled**

| | |
|------|-----|
| **Description** | Défini si le fonctionnement du mot de passe est activé ou non |
| **Type** | property |
| **Retour** | Boolean |
| **Exemple** | `dsfr(elem).passwordInput.isEnabled = false` |

**node**

| | |
|------|-----|
| **Description** | Renvoie le noeud HTML de l'élément. |
| **Type** | property |
| **Retour** | DOMElement |
| **Exemple** | `dsfr(elem).passwordInput.node` |

#### passwordLabel

**isEnabled**

| | |
|------|-----|
| **Description** | Défini si le fonctionnement du libellé du mot de passe est activé ou non |
| **Type** | property |
| **Retour** | Boolean |
| **Exemple** | `dsfr(elem).passwordLabel.isEnabled = false` |

**node**

| | |
|------|-----|
| **Description** | Renvoie le noeud HTML de l'élément. |
| **Type** | property |
| **Retour** | DOMElement |
| **Exemple** | `dsfr(elem).passwordLabel.node` |

#### passwordToggle

**isEnabled**

| | |
|------|-----|
| **Description** | Défini si le fonctionnement d'affichage du mot de passe est activé ou non |
| **Type** | property |
| **Retour** | Boolean |
| **Exemple** | `dsfr(elem).passwordToggle.isEnabled = false` |

**node**

| | |
|------|-----|
| **Description** | Renvoie le noeud HTML de l'élément. |
| **Type** | property |
| **Retour** | DOMElement |
| **Exemple** | `dsfr(elem).passwordToggle.node` |

---

## Note de version

[Voir les évolutions sur github](https://github.com/GouvernementFR/dsfr/pulls?q=is%3Apr+is%3Aclosed+is%3Amerged+password+)
