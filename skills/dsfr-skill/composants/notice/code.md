
## Bandeau d'information importante

Le bandeau d’information importante est un élément éditorial permettant d’attirer l’attention des usagers sur une information importante et temporaire.


- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- Code
- [Accessibilité](../accessibility/index.md)


### HTML

#### Structure du composant

Le **bandeau d’information importante** permet aux utilisateurs de voir ou d’accéder à une information importante et temporaire.

Sa structure comprend les éléments suivants :

- Un conteneur principal est un élément HTML `<div>` défini par les classe `fr-notice` et `fr-notice--info`, représentant le bandeau lui-même.
- Un conteneur est un élément HTML `<div>` défini par la classe `fr-container`.
- Le corps du bandeau est un élément HTML `<div>` défini par la classe `fr-notice__body`.
- Un paragraphe `<p>` qui contient le texte du message dont :
  - Le titre du bandeau d’information importante, obligatoire, dans un élément HTML `<span>` défini par la classe `fr-notice__title`.
  - Le texte du bandeau, optionnel, dans un élément HTML `<span>` défini par la classe `fr-notice__desc`.
  - Un lien, optionnel, dans un élément HTML `<a>` défini par la classe `fr-notice__link`.
- Un bouton de fermeture, optionnel, dans un élément HTML `<button>` de type `button` et défini par les classes `fr-btn--close` et `fr-btn` pour permettre à l'utilisateur de fermer le bandeau.
  - Il doit être lié à une fonction JavaScript pour supprimer le bandeau du DOM lorsque celui-ci est cliqué.

**Exemple de structure HTML**

```HTML
<div class="fr-notice fr-notice--info">
    <div class="fr-container">
        <div class="fr-notice__body">
            <p>
                <span class="fr-notice__title">Titre du bandeau assez long</span>
                <span class="fr-notice__desc">Texte de description plutot long lorem ipsum sit consectetur adipiscing elit. Sed</span>
                <a title="Lien de consultation - nouvelle fenêtre" href="#" target="_blank" rel="noopener external" class="fr-notice__link">Lien de consultation</a>
            </p>
            <button title="Masquer le message" onclick="const notice = this.parentNode.parentNode.parentNode; notice.parentNode.removeChild(notice)" type="button" class="fr-btn--close fr-btn">Masquer le message</button>
        </div>
    </div>
</div>
```


### JavaScript

Le composant **Bandeau d'information importante** nécessite un JavaScript minimal pour la gestion de la fermeture du bandeau. En cliquant sur le bouton de fermeture, le bandeau est retiré du DOM grâce à un événement JavaScript. Le DSFR ne gère pas cette fonctionnalité car trop dépendant de la technologie utilisée.

#### Fermeture du bandeau

Le bouton de fermeture doit être lié à une fonction JavaScript pour supprimer le bandeau du DOM. Voici un exemple de code en javascript vanilla pour gérer la suppression du bandeau :

```javascript
document.querySelector('.fr-notice__close').addEventListener('click', function() {
  this.closest('.fr-notice').remove();
});
```

Dans l'exemple HTML fourni, cette fonction est déjà intégrée directement dans l'attribut `onclick` du bouton de fermeture.

