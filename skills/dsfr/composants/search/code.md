
## Barre de recherche

La barre de recherche est un système de navigation permettant à l'usager d’accéder rapidement à un contenu en lançant une recherche sur un mot clé ou une phrase.


- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- Code
- [Accessibilité](../accessibility/index.md)


### HTML

#### Structure du composant

Le composant **Barre de recherche** est un système de navigation qui permet à l'utilisateur d’accéder rapidement à un contenu en lançant une recherche sur un mot clé ou une expression.
Sa structure est la suivante :

- Le conteneur de la barre de recherche doit être un élément HTML `<div>` avec le rôle `search` défini par la classe `fr-search-bar`.
- Le champ de recherche est un élément HTML `<input>` de type `search` défini par la classe `fr-input`.
- Le champ de recherche doit être associée à un libellé `<label>` avec la classe `fr-label`.
- Le bouton de recherche est un élément HTML `<button>` de type `button` défini par la classe `fr-btn` et dispose d'un attribut `title` indiquant son action.
- Un message d'erreur ou de succès peut être associé au champ de recherche en utilisant un élément HTML `<div>` avec la classe `fr-messages-group` dans lequel on peut ajouter un message `fr-message`.
  - Son attribut`id` doit être associé à l'attribut `aria-describedby` du champ de recherche.
  - Ce bloc peut être placé vide et être rempli dynamiquement, auquel cas il doit être annoncé à l'utilisateur en utilisant l'attribut `aria-live="polite"`.

**Exemple de structure HTML**

```HTML
<div class="fr-search-bar" role="search">
    <label class="fr-label" for="search-input">
        Rechercher
    </label>
    <input class="fr-input" aria-describedby="search-input-messages" placeholder="Rechercher" id="search-input" type="search">
    <div class="fr-messages-group" id="search-input-messages" aria-live="polite">
    </div>
    <button title="Rechercher" type="button" class="fr-btn">Rechercher</button>
</div>
```


### JavaScript

Le composant Barre de recherche **ne nécessite pas l'utilisation de JavaScript** pour son fonctionnement de base.

