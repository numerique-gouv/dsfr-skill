# Page de création de compte

> Modèle et règles pour une page de création de compte

Voir aussi : [Extraits](extraits.md) · [Exemples](exemples.md)

Le modèle de “page de création de compte” permet de demander à l’utilisateur de créer un compte.

Ce modèle est à utiliser lorsque vous souhaitez que l’utilisateur se crée un compte. De manière générale, permettez aux utilisateurs d'accéder à autant de services ou contenus possibles sans avoir à se connecter, les formulaires de connexion étant une barrière entre l’utilisateur et les contenus qu’il est souhaitable de limiter au maximum.

## Structure

Ce modèle propose une page de référence prête à l’emploi et directement réutilisable.

La page de création de compte est composée des éléments suivants :

- Un header et un footer par défaut - obligatoires (à remplacer par le header et footer réels de votre site).
- Un titre et un chapô - obligatoires (à ajuster en fonction du contexte pour présenter et contextualiser la procédure de création de compte et les éventuelles pièces à fournir).
- Le formulaire de création de compte :
  - La création de compte avec FranceConnect - obligatoire.
  - La création de compte avec identifiants - obligatoire.
- Les actions : cases à cocher mentions CNIL + bouton “Créer un compte” - obligatoires.

Extrait de code : [Structure](extraits.md#structure)

## Règles d’utilisation

**Structure du formulaire de création de compte :**

L’ordre et la structure des modalités de création de compte sont à respecter comme présentées dans le modèle :

- 1\) Le formulaire de création de compte avec :
  - La création de compte avec FranceConnect en premier
  - Le “ou”
  - La création de compte avec identifiants en second
- 2\) L’accès à la création de compte

**Création de compte avec FranceConnect :**

La connexion avec FranceConnect est un impératif pour tous les service de l’Etat. C’est la première modalité de connexion qui doit être présentée à l’utilisateur. Les éléments de connexion FranceConnect (textes, bouton, lien) sont à reprendre en l'état. La mise en place de l’identification FranceConnect doit suivre une implantation technique précise à mener directement avec le service FranceConnect via [leur plateforme ici](https://franceconnect.gouv.fr/partenaires)

- La création de compte avec identifiants est proposée dans une structure minimale avec la demande du couple “adresse électronique” et “mot de passe”, et reprend le “modèle de demande d’adresse mail” et le “modèle de demande de mot passe”.
- Si votre service nécessite de demander d’autres informations, des champs peuvent être ajoutés/remplacés les champs proposés.
- De manière générale, limiter le nombre d’informations demandées lors de la création de compte en les réduisant au strict nécessaire pour l’utilisation du service.

**Mentions CNIL**

Les mentions CNIL permettent de :

- Préciser comment seront utilisées les données recueillies auprès de l’utilisateur.
- Demander le consentement de l’utilisateur.

**Message d'erreur**

- Dans le cas d’erreur de saisie, afficher les erreurs directement au niveau de chaque champ input en reprenant le style de message d’erreur associé au champ input text.

**Étapes**
Si vous souhaitez demander des informations supplémentaires sur l’utilisateur dès la phase de création de compte, lors d’une phase de validation de compte, ou bien dans un espace connecté, vous pouvez “découper” le formulaire en plusieurs étapes, en utilisant l’indicateur d'étapes ainsi que des boutons de validation en bas de formulaire. Limitez vos demandes aux champs strictement nécessaires à vos traitements.

## Étape 1 - Identifiant

Extrait de code : [Étape 1 - Identifiant](extraits.md#étape-1---identifiant)

## Étape 2 - Identité

Extrait de code : [Étape 2 - Identité](extraits.md#étape-2---identité)

## Étape 3 - Coordonnées

Extrait de code : [Étape 3 - Coordonnées](extraits.md#étape-3---coordonnées)

## Confirmation de création et d’activation

Un modèle de confirmation de création et d’activation de compte est aussi mis à disposition.

Le modèle est composé des composants suivant :

- Un header et un footer par défaut - obligatoires (à remplacer par les header et footer réels de votre site).
- Un titre et chapô - obligatoires.
- Un bloc gris contenant une alerte et un texte additionnel.

Extrait de code : [Confirmation de création et d’activation](extraits.md#confirmation-de-création-et-dactivation)

## Accessibilité

La structure des contenus de la page doit être cohérente et le code html conforme [aux standards](https://validator.w3.org/). Chaque composant du DSFR doit respecter les règles qui lui sont propres : contraste, intitulé, cohérence du contexte, pertinence, attributs aria, etc.

La page doit être structurée comme les autres pages correctement ([ARIA Authoring Practices Guide](https://www.w3.org/TR/wai-aria-practices/examples/landmarks/HTML5.html)) et avoir une hiérarchie de titre correcte.
