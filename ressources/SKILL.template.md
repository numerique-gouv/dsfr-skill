---
name: dsfr-skill
description: Système de design de l'État français (DSFR) {{VERSION}} - {{NOMBRE_COMPOSANTS}} composants, fondamentaux (grille, couleurs, typographie, icônes, espacements), modèles de pages et de formulaires, règles d'accessibilité RGAA, avec le HTML officiel. À utiliser pour créer, modifier ou auditer l'interface d'un site ou service public français, écrire du HTML avec des classes `fr-*`, ou quand l'utilisateur mentionne le DSFR, le design system de l'État, systeme-de-design.gouv.fr, Marianne, le RGAA ou un site en .gouv.fr. Also use for French government design system / DSFR / RGAA questions in English.
---

# DSFR {{VERSION}}

Documentation officielle convertie depuis `@gouvfr/dsfr@{{VERSION}}`. Les classes et la structure HTML changent d'une version à l'autre : lire le fichier du composant avant d'écrire son HTML, ne pas se fier à sa mémoire.

Le DSFR est réservé aux sites en .gouv.fr et aux applications de l'État (conditions d'utilisation du DSFR) : pour un autre projet, le signaler avant de l'utiliser.

## Règles

1. Partir du balisage de `exemples.md` du composant et l'adapter, plutôt que de l'écrire de mémoire.
2. Ne jamais inventer de classe : toute classe `fr-*` doit figurer dans `reference/classes.txt`, toute icône dans `reference/icones.md`.
3. Rendre les `id` uniques dans la page : les exemples réutilisent les mêmes. Chaque `aria-controls`, `aria-labelledby`, `aria-describedby` et `for` doit pointer vers un `id` existant.
4. Versionner le CDN (`@gouvfr/dsfr@{{VERSION}}`), jamais `@gouvfr/dsfr` sans version.
5. Un seul bouton primaire par groupe d'actions, les autres en secondaire ou tertiaire.
6. Formulaires : champ dans `fr-input-group`, `<label class="fr-label">` lié par `for`, aide dans un `<span class="fr-hint-text">` à l'intérieur du label, messages dans `fr-messages-group` relié par `aria-describedby`, erreur avec `fr-input-group--error` et `fr-message--error`.
7. Icônes décoratives en `aria-hidden="true"`. Lien qui ouvre une nouvelle fenêtre : `target="_blank" rel="noopener"` et `title="Libellé - nouvelle fenêtre"`.
8. Ne pas surcharger couleurs, typographie ou espacements en CSS : passer par les variantes, tokens et classes utilitaires documentés. Couleurs et thème sombre : `fondamentaux/color`.

## Où chercher

| Besoin | Fichier |
|---|---|
| Créer une page (imports, squelette, thème, JS, frameworks) | [demarrage.md](demarrage.md) |
| Quand utiliser un composant, règles éditoriales | `composants/<nom>/index.md` |
| HTML, classes, dépendances CSS, API et événements JS | `composants/<nom>/code.md` |
| Clavier, ARIA, critères RGAA | `composants/<nom>/accessibilite.md` |
| Anatomie, variantes, tailles, états | `composants/<nom>/design.md` |
| HTML officiel prêt à adapter | `composants/<nom>/exemples.md` |
| Grille, couleurs, typographie, espacements, icônes | `fondamentaux/<nom>/` |
| Pages complètes et blocs de formulaire | `modeles/pages/<nom>/`, `modeles/blocs/<nom>/` |
| Auditer une page existante | [audit.md](audit.md) et `node scripts/verifier.mjs page.html` |

Les fichiers `exemples.md` sont longs : lister les variantes avec `grep -n '^###' composants/<nom>/exemples.md` puis ne lire que la section utile.

Avec `@codegouvfr/react-dsfr` ou `@gouvminint/vue-dsfr`, utiliser les composants de la bibliothèque ; ce skill sert alors de référence pour les règles d'usage et d'accessibilité.

Les composants marqués *(sans code)* n'existent qu'en maquette ou sont dépréciés : ne pas les implémenter avec des classes inventées, proposer l'alternative indiquée dans leur `index.md`. Le marquage analytics (Eulerian) n'est pas couvert : renvoyer vers https://www.systeme-de-design.gouv.fr/.

## Composants

{{COMPOSANTS}}

## Fondamentaux

{{FONDAMENTAUX}}

## Modèles de pages

{{PAGES}}

## Modèles de blocs de formulaire

{{BLOCS}}
