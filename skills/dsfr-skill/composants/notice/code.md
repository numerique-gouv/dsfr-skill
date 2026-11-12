# Bandeau d'information importante : Code

## HTML

### Structure du composant

Le **bandeau d’information importante** permet aux utilisateurs de voir ou d’accéder à une information importante et temporaire.

Sa structure comprend les éléments suivants :

- Un conteneur principal est un élément HTML `<div>` défini par les classe `fr-notice` et `fr-notice--info`, représentant le bandeau lui-même.
- Un conteneur est un élément HTML `<div>` défini par la classe `fr-container`.
- Le corps du bandeau est un élément HTML `<div>` défini par la classe `fr-notice__body`.
- Une balise `<div>` qui contient le texte du message dont :
  - Le titre du bandeau d’information importante, obligatoire, défini par la classe `fr-notice__title` et un niveau de titre ajustable (h2, h3, h4, h5, h6 ou p).
  - Le texte du bandeau, optionnel, dans un élément HTML `<p>` défini par la classe `fr-notice__desc`.
  - Un lien, optionnel, dans un élément HTML `<a>` défini par la classe `fr-notice__link`.
- Un bouton de fermeture, optionnel, dans un élément HTML `<button>` de type `button` et défini par les classes `fr-btn--close` et `fr-btn` pour permettre à l'utilisateur de fermer le bandeau.
  - Il doit être lié à une fonction JavaScript pour supprimer le bandeau du DOM lorsque celui-ci est cliqué.

**Exemple de structure HTML**

Balises officielles : [Bandeau d'information cas max](exemples.md#bandeau-dinformation-cas-max)

---

## CSS

### Installation du CSS

Les styles du composant et de ses dépendances s'importent dans le `<head>`, de préférence en fichiers minifiés. Import global ou par composant : [démarrage](../../demarrage.md).

**Dépendances CSS**

| Dépendance | Obligatoire | Remarque |
|------------|-------------| ---------|
| Core       | Oui         |          |
| notice     | Oui         |          |
| Button     | Non         | Uniquement sur la variation refermable |

```html
<link href="dist/core/core.min.css" rel="stylesheet">
<link href="dist/component/notice/notice.min.css" rel="stylesheet">
```

### Variante avec bouton de fermeture

Le composant Bandeau d'information importante peut comporter un bouton de fermeture pour permettre à l'utilisateur de fermer le bandeau.

**Exemple de variante avec bouton de fermeture**

Balises officielles : [Bandeau d'information avec bouton fermer](exemples.md#bandeau-dinformation-avec-bouton-fermer)

### Variante avec avec icône personnalisée

Le composant Bandeau d'information importante comporte une icone par defaut qui peut être personnalisée avec l'utilisation d'une classe utilitaire d'icône `fr-icon--NOM-ICONE` (voir [Icônes](../../fondamentaux/icon/index.md)) sur le conteneur du titre du bandeau.

**Exemple de variante avec icône personnalisée**

```html
<div class="fr-notice fr-notice--info">
    <div class="fr-container">
        <div class="fr-notice__body">
            <p>
                <span class="fr-notice__title fr-icon-virus-fill">Titre du bandeau</span>
            </p>
        </div>
    </div>
</div>
```

### Déclinaisons de bandeaux génériques

Le composant Bandeau d'information importante propose 3 variations de bandeaux génériques utilisables en fonction du niveau de gravité de l'information.

L'icône peut être modifiée et seul le titre est obligatoire :

- **Bandeau d'information importante** (par défaut)
- **Bandeau d'avertissement**
- **Bandeau d'alerte**

Ces variations sont définies par l'ajout de classes correspondantes sur le conteneur principal :

- `fr-notice--info`
- `fr-notice--warning`
- `fr-notice--alert`

**Exemple de structure HTML du bandeau d'information**

Balises officielles : [Bandeau d'information cas max](exemples.md#bandeau-dinformation-cas-max)

**Exemple de structure HTML du bandeau d'avertissement**

Balises officielles : [Bandeau d'avertissement](exemples.md#bandeau-davertissement)

**Exemple de structure HTML du bandeau d'alerte**

Balises officielles : [Bandeau d'alerte](exemples.md#bandeau-dalerte)

### Déclinaisons de bandeaux vigilance météo

Le composant Bandeau d'information importante propose 3 variations de bandeaux météo utilisables en fonction du niveau d'alerte météo.

L'icône peut être modifiée et seul le titre est obligatoire :

- **Vigilance météo orange**
- **Vigilance météo rouge**
- **Vigilance météo violette**

Ces variations sont définies par l'ajout de classes correspondantes sur le conteneur principal :

- `fr-notice--weather-orange`
- `fr-notice--weather-red`
- `fr-notice--weather-purple`

**Exemple de structure HTML du bandeau Vigilance météo orange**

Balises officielles : [Vigilance météo orange](exemples.md#vigilance-météo-orange)

**Exemple de structure HTML du bandeau Vigilance météo rouge**

Balises officielles : [Vigilance météo rouge](exemples.md#vigilance-météo-rouge)

**Exemple de structure HTML du bandeau Vigilance météo violette**

Balises officielles : [Vigilance météo violette](exemples.md#vigilance-météo-violette)

### Déclinaisons de bandeaux d'alertes

Le composant Bandeau d'information importante propose 3 variations de bandeaux d'alertes utilisables en fonction du type d'alerte.

L'icône ne peut pas être modifiée et les intitulés officiels doivent être utilisés :

- **Alerte attentat**
- **Appel à témoins**
- **Alerte technologique**

Ces variations sont définies par l'ajout de classes correspondantes sur le conteneur principal :

- `fr-notice--attack`
- `fr-notice--witness`
- `fr-notice--cyberattack`

**Exemple de structure HTML du bandeau Alerte attentat**

Balises officielles : [Alerte attentat](exemples.md#alerte-attentat)

**Exemple de structure HTML du bandeau Appel à témoins**

Balises officielles : [Appel à témoins](exemples.md#appel-à-témoins)

**Exemple de structure HTML du bandeau Alerte technologique**

Balises officielles : [Alerte technologique](exemples.md#alerte-technologique)

---

## JavaScript

Le composant **Bandeau d'information importante** nécessite un JavaScript minimal pour la gestion de la fermeture du bandeau. En cliquant sur le bouton de fermeture, le bandeau est retiré du DOM grâce à un événement JavaScript. Le DSFR ne gère pas cette fonctionnalité car trop dépendant de la technologie utilisée.

### Fermeture du bandeau

Le bouton de fermeture doit être lié à une fonction JavaScript pour supprimer le bandeau du DOM. Voici un exemple de code en javascript vanilla pour gérer la suppression du bandeau :

```javascript
document.querySelector('.fr-notice__close').addEventListener('click', function() {
  this.closest('.fr-notice').remove();
});
```

Dans l'exemple HTML fourni, cette fonction est déjà intégrée directement dans l'attribut `onclick` du bouton de fermeture.

---

## Note de version

[Voir les évolutions sur github](https://github.com/GouvernementFR/dsfr/pulls?q=is%3Apr+is%3Aclosed+is%3Amerged+notice+)
