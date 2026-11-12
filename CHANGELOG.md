# Changelog

Ce fichier liste les changements de chaque version du plugin (`version` de `.claude-plugin/plugin.json` et `marketplace.json`). Le mettre à jour dans la même pull request que tout changement visible par les utilisateurs du skill : contenu, consignes, vérificateur, installation, ou nouvelle version du DSFR.

## 2.1.0

Réduction de la masse de documentation lue par les agents, sans perte de contenu : tout est corrigé dans le générateur (`scripts/sync.mjs`) et les gabarits (`ressources/`), donc reconduit à chaque montée de version du DSFR.

### Contenu

- Les modèles de pages et de blocs suivent le découpage des composants : la présentation reste dans `index.md`, les gabarits HTML de la documentation partent dans un nouveau fichier `extraits.md` lié depuis `index.md`. `modeles/pages/response/index.md` passe de 50 à 7 Ko, `register` de 45 à 5 Ko.
- Dans `code.md`, un exemple dont la structure de classes existe déjà dans `exemples.md` est remplacé par un lien vers la variante officielle (80 exemples dédupliqués) ; le HTML vit une seule fois. Les exemples de structure propres au composant sont conservés.
- Les sections « Installation du CSS » et « Installation du JavaScript » ne répètent plus le texte commun : elles gardent les dépendances et les chemins propres au composant et renvoient à `demarrage.md`.
- Le commentaire générique sur l'alternative d'image, répété dans les extraits, est énoncé une seule fois en tête de chaque `exemples.md` et `extraits.md`.

### Consignes

- Règle 2 : renvoi vers `scripts/verifier.mjs` (ou `grep -x` pour une classe isolée) plutôt que la lecture des registres `reference/classes.txt` et `reference/icones.md`.
- Table de routage : `code.md` décrit les classes, dépendances et API ; le balisage est dans `exemples.md` ; les modèles pointent vers `index.md` (règles) et `extraits.md` / `exemples.md` (gabarits).

## 2.0.1

- Description du skill recentrée sur le HTML et le CSS : elle ne se déclenche plus sur le seul mot RGAA et renvoie vers un skill dédié pour React (`@codegouvfr/react-dsfr`) ou pour un audit de conformité RGAA, afin de cohabiter avec les skills `react-dsfr` et `rgaa` d'etalab-ia/skills.

## 2.0.0

Le skill est régénéré depuis le paquet npm `@gouvfr/dsfr@1.15.4`, au lieu de la branche `main` du dépôt DSFR d'octobre 2025.

### Contenu

- 51 composants au lieu de 23, plus 11 fondamentaux (couleurs, grille, icônes, typographie…), les modèles de pages et les blocs de formulaire.
- Les extraits de code officiels de chaque composant, dans un `exemples.md` par composant.
- Une référence des classes CSS, icônes et pictogrammes de la version dans `reference/`.
- Plus d'images cassées (216), de liens morts (88) ni de directives propres au site du DSFR dans la documentation.

### Consignes

- `SKILL.md` réécrit autour des erreurs que font réellement les agents : 8 règles et un index des fichiers.
- Rappel que l'usage du DSFR est réservé aux sites de l'État.
- Dans un projet qui intègre déjà le DSFR, partir de son installation (version, chemins, gabarits) ; si sa version diffère, proposer une montée de version plutôt que de mélanger.
- `demarrage.md` : squelette de page, imports versionnés, thème, JS, et pictogrammes servis depuis le site (un `<use>` vers le CDN est bloqué par les navigateurs).
- Mode audit (`audit.md`) avec un vérificateur HTML sans dépendance (`scripts/verifier.mjs`) : identifiants en double, références ARIA, champs sans libellé, CDN non versionné, classes inconnues.

### Maintenance

- Un générateur Node (`scripts/sync.mjs`) remplace les scripts bash ; les consignes s'éditent dans `ressources/*.template.md`.
- CI : le contenu généré doit correspondre au générateur et les liens doivent résoudre.
- Workflow hebdomadaire qui ouvre une pull request à chaque nouvelle version du DSFR.
- Évals (`evals/`) : 10 demandes types vérifiées statiquement et, en option, rendues dans Chromium. Claude Code réussit 10 cas sur 10 avec le skill et 0 sans.

## 1.0.0

Première version : 23 composants issus de la branche `main` du dépôt DSFR, synchronisés par des scripts bash.
