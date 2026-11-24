# Page de connexion

> Modèle de page de connexion à un service

Voir aussi : [Extraits](extraits.md) · [Exemples](exemples.md)

Le modèle de “page de connexion” permet de demander à l’utilisateur de se connecter à un service.

Il doit être utilisé lorsque vous souhaitez que l’utilisateur accède à un espace privé/personnel. Il doit être placé juste avant l’accès à cet espace.

De manière générale, permettez aux utilisateurs d'accéder à autant de services ou contenus possibles sans avoir à se connecter, les formulaires de connexion étant une barrière entre l’utilisateur et les contenus qu’il est souhaitable de limiter au maximum.

## Structure

Ce modèle propose une page de référence prête à l’emploi et directement réutilisable.

La page de connexion est composée des éléments suivants :
- Un header et un footer par défaut - obligatoires (à remplacer par le header et footer réels de votre site).
- Un titre et un chapô - obligatoires (à ajuster en fonction du contexte pour présenter et contextualiser ce à quoi permet d'accéder la session connectée).
- Le formulaire de connexion :
    - La connexion avec FranceConnect - obligatoire.
    - La connexion avec identifiants - obligatoire.
- Un accès à la connexion - obligatoire (textes à ajuster en fonction du contexte).

## Règles d’utilisation

## Structure du formulaire de connexion

L’ordre et la structure des modalités de connexion sont à respecter comme présenter dans le modèle :
- 1\) Le formulaire de connexion avec :
    - La connexion avec FranceConnect en premier
    - Le "ou"
    - La connexion avec identifiants en second
- 2\) L’accès à la connexion

Extrait de code : [Structure du formulaire de connexion](extraits.md#structure-du-formulaire-de-connexion)

### Bloc de connexion FranceConnect

La connexion avec FranceConnect est un impératif pour tous les service de l’Etat. C’est la première modalité de connexion qui doit être présentée à l’utilisateur. Les éléments de connexion FranceConnect (textes, bouton, lien) sont à reprendre en l'état. La mise en place de l’identification FranceConnect doit suivre une implantation technique précise à mener directement avec le service FranceConnect via [leur plateforme ici](https://franceconnect.gouv.fr/partenaires)

### Bloc de connexion par identifiants

- La connexion avec identifiants est proposée avec une structure minimale avec la demande du couple “adresse électronique” et “mot de passe”, et reprend le “modèle de demande d’adresse mail” et le “modèle de demande de mot passe”
- Si votre service nécessite de demander d’autres informations, des champs peuvent être ajoutés/remplacés les champs proposés.
- De manière générale, limiter le nombre d’information demandées lors de la connexion.
- Le lien “mot de passe oublié” doit rediriger vers le système de récupération de mot de passe de votre service.
- La récupération de mot de passe ne doit pas se faire par l’envoi en clair du mot de passe, mais par un système de réinitialisation.
- Éviter les questions secrètes pour récupérer le mot de passe.

### Messages d'erreurs

- Dans le cas d’erreur de saisie, ne pas reprendre l’affichage d’erreur du champ input. En effet, le message d’erreur ne doit pas préciser directement si le mot de passe a été mal saisi.
- Il faut utiliser dans ce cas le bloc alerte et mettre un message spécifiant une erreur pour “le couple mot de passe/identifiant”.

## Bonnes pratiques

- Privilégier la demande d’adresse email plutôt qu’un identifiant pour la connexion avec identifiants. Les utilisateurs se rappellent plus facilement de leur email que d’un identifiant unique.
- Mettre en place un système de double authentification quand cela est nécessaire.

## Accessibilité

La structure des contenus de la page doit être cohérente et le code html conforme [aux standards](https://validator.w3.org/). Chaque composant du DSFR doit respecter les règles qui lui sont propres : contraste, intitulé, cohérence du contexte, pertinence, attributs aria, etc.

La page doit être structurée comme les autres pages correctement ([ARIA Authoring Practices Guide](https://www.w3.org/TR/wai-aria-practices/examples/landmarks/HTML5.html)) et avoir une hiérarchie de titre correcte.
