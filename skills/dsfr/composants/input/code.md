
## Champ de saisie

Le champ de saisie est un élément d’interaction avec l’interface permettant à l’usager d’entrer du contenu et/ou des données.


- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- Code
- [Accessibilité](../accessibility/index.md)


### HTML

Un **champ de saisie** permet à l'utilisateur de saisir des données. Il existe plusieurs types de champs de saisie en fonction du type de données à saisir.

#### Champ de saisie simple

La structure HTML d'un champ de saisie de base est la suivante :

- Un conteneur `<div>` de classe `fr-input-group`, contenant :
  - Un intitulé, obligatoire, dans un élément `<label>` de classe `fr-label` et lié au champ via un attribut `for` pour décrire le champ de saisie
  - Une description additionnelle, optionnelle, dans un élément `<span>` de classe `fr-hint-text` à placer dans le `<label>`. Cette description peut être utilisée pour donner des indications sur le format attendu.
  - Un champ `<input>` de classe `fr-input` pour saisir les données. Pour une plus grande zone de saisie, il est possible d'utiliser un élément `<textarea>`.
  - Un message d'erreur/information/avertissement/succès, optionnel, dans un bloc `fr-messages-group`, lié au `aria-describedby` du champ de saisie

**Exemple de structure simple**

```html
<div class="fr-input-group">
    <label class="fr-label" for="text-input">
        Libellé champ de saisie
        <span class="fr-hint-text">Texte de description additionnel</span>
    </label>
    <input class="fr-input" aria-describedby="input-messages" id="text-input" type="text">
    <div class="fr-messages-group" id="input-messages" aria-live="polite">
    </div>
</div>
```

#### Champ de saisie avec bouton

Un champ de saisie peut être associé à un bouton pour déclencher une action. La structure HTML est la suivante :

- La structure du champ de saisie avec bouton est identique à celle du champ de saisie simple.
- La différence réside dans l'ajout d'un bouton `<button>` de classe `fr-btn` à la suite du champ de saisie `<input>`. Le champ de saisie et le bouton doivent être enveloppé dans un élément `<div>` de classe `fr-input-wrap` et une des classes suivantes :
  - `fr-input-wrap--addon` : Pour accoler un bouton d'envoi et ajouter une bordure bleue sous le champ de saisie (s'utilise avec un bouton primaire).
  - `fr-input-wrap--action` : Pour placer un bouton d'action à coté (s'utilise avec un bouton secondaire).

**Exemple de structure avec bouton d'envoi**

```html
<div class="fr-input-group">
    <label class="fr-label" for="text-input-button">
        Libellé champ de saisie
    </label>
    <div class="fr-input-wrap fr-input-wrap--addon">
        <input class="fr-input" aria-describedby="text-input-button-messages" id="text-input-button" type="text">
        <button type="button" class="fr-btn">Envoyer</button>
    </div>
    <div class="fr-messages-group" id="text-input-button-messages" aria-live="polite">
    </div>
</div>
```

**Exemple de structure avec bouton d'action**

```html
<div class="fr-input-group">
    <label class="fr-label" for="text-input-action">
        Libellé champ de saisie
    </label>
    <div class="fr-input-wrap fr-input-wrap--action">
        <input class="fr-input" aria-describedby="text-input-action-messages" id="text-input-action" type="text">
        <button type="button" class="fr-btn fr-icon-delete-line fr-btn--secondary">Supprimer le champ</button>
    </div>
    <div class="fr-messages-group" id="text-input-action-messages" aria-live="polite">
    </div>
</div>
```

#### Groupes de champs de saisie

Voir la documentation sur les [formulaires](../../../../form/_part/doc/code/index.md).

#### Attributs du champs de saisie

Les champs de saisie peuvent être enrichis avec des attributs HTML pour améliorer l'accessibilité et l'expérience utilisateur.

- `aria-describedby` : Permet d'associer un message d'erreur/information/avertissement/succès au champ de saisie. Cet attribut doit contenir l'ID du bloc de message associé.
- `spellcheck` : Permet de définir si le navigateur doit vérifier les fautes orthographiques. A désactiver, notamment, sur les champs de connexion et d'inscription. La valeur par défaut dépend du type d'élément et des navigateurs. Les valeurs possibles sont :
  - `true` pour activer la vérification orthographique.
  - `false` pour désactiver la vérification orthographique.
- `autocapitalize` : Permet de définir si le navigateur doit automatiquement capitaliser les mots saisis dans le champ. A désactivé, notamment, sur les champs d'identifiant et mot de passe. La valeur par défaut dépend de d'élément et des navigateurs. Seuls les navigateurs mobiles, et les données vocales, sont impactés. Les valeurs possibles sont :
  - `off` pour désactiver la capitalisation automatique.
  - `on` pour activer la capitalisation automatique de chaque phrase.
  - `words` pour activer la capitalisation automatique de chaque mot.
  - `characters` pour activer la capitalisation automatique de chaque caractère.
- `autocomplete` : Permet de définir si le navigateur doit proposer des suggestions de saisie pour le champ. Les valeurs possibles sont :
  - `on` (par défaut)
  - `off` pour désactiver l'autocompletion qui pourrait être ajouté automatiquement par le navigateur.
  - Des valeurs en fonction du type de données. [Voir l'ensemble des valeurs disponibles](https://developer.mozilla.org/fr/docs/Web/HTML/Attributes/autocomplete).


### JavaScript

Le composant Champ de saisie **ne nécessite pas l'utilisation de JavaScript** pour son fonctionnement de base.

