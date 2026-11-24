# Boutons FranceConnect et ProConnect : Code

## HTML

### Structure du composant

Les composants **Bouton FranceConnect et ProConnect** permettent de proposer une connexion en utilisant l’identité numérique d’un fournisseur agréé. Leur structure est la suivante :

- Un élément `<div>` de classe `fr-connect-group` contient le bouton FranceConnect ou ProConnect et un lien d'information.
  - Le bouton FranceConnect ou ProConnect est un élément HTML `<button>` défini par la classe `fr-connect`. Il doit contenir deux éléments `<span>` :
    - Un texte de connexion "S'identifier avec", un `<span>` avec la classe `fr-connect__login`. Ce texte peut être traduit mais ne doit pas être modifié.
    - L'intitulé du service "FranceConnect" ou "ProConnect", un `<span>` avec la classe `fr-connect__brand`.
  - Le bouton doit être accompagné d'un lien d'information. Il s'agit d'un élément `<p>` contenant un lien `<a>` vers le service dédié.
    - Le lien doit être ouvert dans une nouvelle fenêtre.
    - L'intitulé du lien peut être traduit mais ne doit pas être modifié.

Pour plus de clarté, le bouton FranceConnect peut être accompagné de la phrase :
« FranceConnect est la solution proposée par l’État pour sécuriser et simplifier la connexion à vos services en ligne ».

**Structure HTML du bouton FranceConnect**

Balises officielles : [Bouton FranceConnect](exemples.md#bouton-franceconnect)

**Structure HTML du bouton FranceConnect+**

Balises officielles : [Bouton FranceConnect+](exemples.md#bouton-franceconnect-1)

**Structure HTML du bouton ProConnect**

Balises officielles : [Bouton ProConnect](exemples.md#bouton-proconnect)

---

## CSS

### Installation du CSS

Les styles du composant et de ses dépendances s'importent dans le `<head>`, de préférence en fichiers minifiés. Import global ou par composant : [démarrage](../../demarrage.md).

**Dépendances CSS**

| Dépendance | Obligatoire |
|------------|-------------|
| Core       | Oui         |
| Connect    | Oui         |

```html
<link href="dist/core/core.min.css" rel="stylesheet">
<link href="dist/component/connect/connect.min.css" rel="stylesheet">
```

### Variantes de style

Le composant Bouton FranceConnect ou ProConnect est stylisé par les classes CSS suivantes :

- `.fr-connect-group` : Conteneur du bouton et du lien d'information.
- `.fr-connect` : Bouton FranceConnect ou ProConnect.
- `.fr-connect__login` : Texte "S'identifier avec".
- `.fr-connect__brand` : Intitulé du service
- `.fr-connect-group p` : Conteneur du lien d'information.
- `.fr-connect-group a` : Lien d'information.

Une classe supplémentaire peut être ajoutée au bouton pour proposer une connexion via un autre service :
- `.fr-connect--plus` : FranceConnect+.
- `.fr-connect--pro` : ProConnect.

---

## JavaScript

La documentation technique pour la mise en place du service souhaité peut être consultée sur leur site dédié :
- [FranceConnect](https://partenaires.franceconnect.gouv.fr/fcp/fournisseur-service)
- [ProConnect](https://partenaires.proconnect.gouv.fr/)

---

## Note de version

[Voir les évolutions sur github](https://github.com/GouvernementFR/dsfr/pulls?q=is%3Apr+is%3Aclosed+is%3Amerged+connect+)
