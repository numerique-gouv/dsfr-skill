
## Comment répondre aux questions utilisateur

### Exemples de questions et approches recommandées

**"Comment créer un bouton ?"**
1. Consulter `composants/button/code.md` pour la structure HTML du composant Bouton (`button`)
2. Montrer un exemple simple avec les imports DSFR
3. Mentionner les variantes disponibles (primaire, secondaire, tertiaire)

**"Mon bouton n'est pas accessible, comment le corriger ?"**
1. Consulter `composants/button/accessibilite.md` du composant Bouton (`button`)
2. Vérifier les attributs ARIA requis
3. Vérifier les interactions clavier
4. Proposer les corrections nécessaires

**"Quelle est la différence entre un bouton primaire et secondaire ?"**
1. Consulter `composants/button/index.md` du composant Bouton (`button`) pour la hiérarchie d'usage
2. Consulter `composants/button/design.md` pour les différences visuelles
3. Expliquer les cas d'usage de chaque variante

**"Donne-moi un exemple complet d'accordéon"**
1. Lire un fichier dans `composants/accordion/examples/` du composant Accordéon (`accordion`)
2. Présenter le code complet
3. Expliquer les éléments clés (structure, classes, attributs)

**"Comment personnaliser la couleur d'un badge ?"**
1. Consulter `composants/badge/design.md` du composant Badge (`badge`) pour les variantes de couleur disponibles
2. Montrer les classes CSS correspondantes depuis `code.md`
3. Avertir si une personnalisation n'est pas recommandée par le DSFR

### Principes à respecter

**Toujours privilégier l'accessibilité :**
- Mentionner les contraintes ARIA et RGAA importantes
- Rappeler les interactions clavier nécessaires
- Inclure les attributs d'accessibilité dans les exemples de code

**Fournir du code complet et fonctionnel :**
- Inclure les imports CSS et JS du DSFR
- Respecter la structure HTML documentée
- Utiliser les classes CSS exactes du DSFR
- Ne pas inventer de classes ou attributs non documentés

**Être précis sur les variantes :**
- Utiliser les noms exacts des variantes (ex: `fr-btn--secondary` et non "bouton-secondaire")
- Consulter `design.md` pour les variantes disponibles
- Ne pas suggérer de variantes non documentées

**Contextualiser les recommandations :**
- Expliquer pourquoi une approche est recommandée
- Mentionner les cas où un composant ne doit pas être utilisé
- Référencer les bonnes pratiques du DSFR

## Ressources externes

### Documentation officielle DSFR
- Site web : https://www.systeme-de-design.gouv.fr/
- GitHub : https://github.com/GouvernementFR/dsfr
- NPM : @gouvfr/dsfr

### Standards et références
- RGAA 4.1 : https://accessibilite.numerique.gouv.fr/
- WAI-ARIA : https://www.w3.org/WAI/ARIA/
- Documentation MDN (HTML/CSS/JS) : https://developer.mozilla.org/

### Outils de test d'accessibilité
- NVDA (lecteur d'écran Windows)
- JAWS (lecteur d'écran Windows)
- VoiceOver (lecteur d'écran macOS/iOS)
- Axe DevTools (extension navigateur)
- WAVE (extension navigateur)

## Notes importantes

### Ce qui N'EST PAS dans ce skill

Ce skill contient uniquement 15 composants de base. Le DSFR complet contient plus de 60 composants. Si un utilisateur demande un composant non documenté ici, indiquer qu'il faut consulter la documentation officielle du DSFR.

### Composants NON inclus dans ce skill
- Tuile (tile)
- Tag
- Tableau (table)
- Onglets (tabs)
- Stepper
- Toggle
- Notice
- Quote
- Highlight
- Pagination
- Recherche (search)
- Upload
- Range
- Sidemenu
- Transcription
- Et environ 40 autres composants...

Pour ces composants, rediriger vers : https://www.systeme-de-design.gouv.fr/composants-et-modeles/

### Versions et mises à jour

Ce skill est synchronisé avec la version du DSFR disponible dans le dépôt GitHub officiel à la date de dernière synchronisation. Consulter le fichier [`VERSION.md`](VERSION.md) pour connaître :
- La date de dernière synchronisation
- Le commit/tag DSFR source
- L'historique des mises à jour

### Personnalisation du DSFR

Le DSFR est conçu pour garantir une cohérence visuelle des services de l'État. Certaines personnalisations ne sont pas autorisées :
- Modification des couleurs de marque
- Changement des espacements standardisés
- Modification de la typographie (Marianne)

Les personnalisations autorisées sont documentées dans les fichiers `design.md` de chaque composant.

## Support et contribution

Pour toute question non couverte par cette documentation :
1. Consulter la documentation officielle : https://www.systeme-de-design.gouv.fr/
2. Poser une question sur le forum DSFR : https://github.com/GouvernementFR/dsfr/discussions
3. Signaler un bug : https://github.com/GouvernementFR/dsfr/issues
