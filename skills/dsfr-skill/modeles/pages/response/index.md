# Page d’erreurs

> Modèles standardisés de pages d’erreurs 404, 500 et 503

Voir aussi : [Extraits](extraits.md) · [Exemples](exemples.md)

Les modèles de page d’erreur permettent d’informer l’utilisateur qu’un problème est rencontré sur le site pendant sa navigation.

Nous vous proposons 3 modèles de “page erreur” prêtes à l’emploi. Pour chaque variante, il existe un modèle de référence avec des contenus à adapter en fonction des cas rencontrés.

La structure peut être réutilisée pour les autres pages d’erreur non traitées par ces 3 modèles, à condition de respecter les bonnes pratiques préciser dans le paragraphe “Règles d’utilisation”.

## Erreur 404, Page non trouvée

Ce modèle permet d’informer l’utilisateur que la page qu’il recherche n’existe pas. Celui-ci, “Page non trouvée - Erreur 404” est le modèle de référence pour les erreurs 404, “Page non trouvée”.

La page d’erreur 404 est composée de :

- Une en-tête et un pied de page par défaut : à remplacer par l’en-tête et le pied de page réel du site
- Une navigation : si elle est présente sur l’ensemble des pages du site.
- Un titre : titre de la page 404, “Page non trouvée” (Texte fixe)
- Un sous titre : permet d’afficher le code d’erreur http, “Erreur 404”
- Un chapô : permet de s’excuser du problème rencontrée (Texte fixe)
- Un texte qui aide l’utilisateur à trouver des solutions pour trouver la page initialement recherché et qui lui propose des portes de sortie . Le texte proposé dans le modèle à réutiliser par défaut.Si pas de moteur de recherche : supprimer la mention “ou effectuer une recherche avec notre moteur de recherche en haut de page”Si pas de solution de contact : supprimer la mention “Sinon contactez-nous pour que l’on puisse vous rediriger vers la bonne information.”
- Si pas de moteur de recherche : supprimer la mention “ou effectuer une recherche avec notre moteur de recherche en haut de page”
- Si pas de solution de contact : supprimer la mention “Sinon contactez-nous pour que l’on puisse vous rediriger vers la bonne information.”
- Des boutons d’action qui mettent en avant les actions de sortie.
- Page d’accueil (redirection vers la page d’accueil)
- Contactez-nous : ouverture de la solution de contact si cette dernière existe.

Extrait de code : [Erreur 404, Page non trouvée](extraits.md#erreur-404-page-non-trouvée)

## **Erreur 500, Erreur inattendue**

Ce modèle permet d’informer l’utilisateur que le service auquel il souhaite accéder rencontre un problème. Celui-ci “Erreur inattendue - Erreur 500” est le page de référence pour les erreurs 500.

La page d’erreur 500 est composée de :

- Une en-tête et un pied de page par défaut : à remplacer par l’en-tête et le pied de page réel du site
- Une navigation : si elle est présente sur l’ensemble des pages du site.
- Un titre : titre de la page erreur 500, “Erreur inattendue” (Texte fixe)
- Un sous titre : permet d’afficher le code d’erreur http, “Erreur 500”
- Un chapô : permet de s’excuser du problème rencontrée (Texte fixe)
- Un texte qui aide l’utilisateur à trouver des solutions pour trouver la page initialement recherchée et qui lui propose des portes de sortie Texte par défaut : “Essayez de rafraîchir la page, sinon merci de réessayer plus tard.”Si avec solution de contact ajouter : “Si vous avez besoin d’une aide immédiate, merci de nous contacter directement.”
- Texte par défaut : “Essayez de rafraîchir la page, sinon merci de réessayer plus tard.”
- Si avec solution de contact ajouter : “Si vous avez besoin d’une aide immédiate, merci de nous contacter directement.”
- Si solution de contact, un bouton “Contact” permettant l'ouverture de la solution de contact

Extrait de code : [Erreur 500, Erreur inattendue](extraits.md#erreur-500-erreur-inattendue)

## Erreur 503, Service indisponible

Ce modèle permet d’informer l’utilisateur que le service est temporairement indisponible. Celui-ci, “Service indisponible - Erreur 503” est le modèle de référence pour les erreurs 503, quand le service est indisponible ou mis en maintenance.

La page 503 est composée de :

- Un titre : titre de la page erreur 503, “Service indisponible” (Texte fixe) ;
- Un chapo : qui permet de s’excuser du problème rencontré ;
- Un texte qui redirige l’utilisateur vers des solutons alternatives. Texte par défaut : “Merci de réessayer plus tard, vous serez en mesure de réutiliser le service très rapidement.” Texte si solution de contact : “Merci de réessayer plus tard, vous serez en mesure de réutiliser le service très rapidement. Si vous avez besoin d’une aide immédiate, merci de nous contacter directement.”
- Un ou plusieurs liens (ou boutons d'action tertiaires pour signifier l'aspect dégradé) pour rediriger l'utilisateur vers les solutions alternatives (formulaire de contact, réseaux sociaux, etc.).

Puisque cette page s'affiche en cas d'erreur serveur et que le DSFR ne peut être chargé dans ce cas de figure, cette page doit être une page statique : son contenu est disponible dans le dossier "standalone" à la racine du DSFR.

Extrait de code : [Erreur 503, Service indisponible](extraits.md#erreur-503-service-indisponible)

## Règles d’utilisation

Lorsqu’une erreur est rencontrée par un utilisateur, il est important :

- d’utiliser un langage clair pour expliquer ce qu’il se passe et donc éviter le jargon technique
- d'être précis pour définir clairement ce qui ne va pas
- de proposer un contenu constructif qui permet accompagner l’utilisateur vers une solution et ne pas le laisser dans l’impasse

Concrètement il s’agit pour les pages d’erreur :

- d’afficher les éléments de navigation sur les pages d’erreur pour éviter aux utilisateurs les ruptures de navigation et l'arrivée sur des pages cul-de-sac ou l'obligation. L’en-tête et le pied de page doivent ainsi être présents, ainsi que des liens dans le contenu de la page d’erreur vers des contenus/fonctionnalités adaptés à la nature de l’erreur.
- d’informer sur la nature de l’erreur de décrire le fonctionnement du service et lever le doute sur un éventuel problème lié à sa connexion.

## Accessibilité

- La page doit être structurée correctement comme les autres pages ([ARIA Authoring Practices Guide](https://www.w3.org/WAI/ARIA/apg/)) et avoir une hiérarchie de titre correcte.

Exemple :
Extrait de code : [Accessibilité](extraits.md#accessibilité)

- Les éventuels “boutons” pointant vers les pages d’accueil et de contact doivent être des balises `<a>` utilisant les classes `.fr-btn`.
- La structure des contenus de la page doit être cohérente et le code html conforme aux standards. Chaque composant du DSFR doit respecter les règles qui lui sont propres : contraste, intitulé, cohérence du contexte, pertinence, attributs aria, etc.
