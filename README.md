# DSFR Skill pour agents IA

Skill qui donne aux agents de développement (Claude Code, Codex CLI, Cursor, OpenCode, GitHub Copilot…) la documentation du [Système de design de l'État](https://www.systeme-de-design.gouv.fr/) (DSFR) : tous les composants documentés, les fondamentaux (grille, couleurs, typographie, icônes…), les modèles de pages et de formulaires, les règles d'accessibilité RGAA et le HTML officiel de chaque variante.

Le contenu est généré depuis le paquet npm `@gouvfr/dsfr` à une version précise (voir [`VERSION.md`](skills/dsfr-skill/VERSION.md)). Le skill suit le format ouvert `SKILL.md` et se trouve dans [`skills/dsfr-skill/`](skills/dsfr-skill/).

## Installation

### Claude Code : via le système de plugins

```bash
/plugin marketplace add numerique-gouv/dsfr-skill
/plugin install dsfr-skill@dsfr-skill
```

### Tout agent : clone et lien symbolique

Clonez le dépôt une fois, puis liez le dossier `skills/dsfr-skill` dans le répertoire de skills de vos agents :

```bash
git clone https://github.com/numerique-gouv/dsfr-skill.git ~/.local/share/dsfr-skill

mkdir -p ~/.agents/skills ~/.claude/skills
ln -s ~/.local/share/dsfr-skill/skills/dsfr-skill ~/.agents/skills/dsfr-skill
ln -s ~/.local/share/dsfr-skill/skills/dsfr-skill ~/.claude/skills/dsfr-skill
```

Pour mettre à jour le skill dans tous les agents :

```bash
git -C ~/.local/share/dsfr-skill pull
```

Répertoires lus par chaque agent :

| Agent | Global | Projet |
|---|---|---|
| Claude Code | `~/.claude/skills` | `.claude/skills` |
| Codex CLI | `~/.agents/skills` | `.agents/skills` |
| Cursor | `~/.agents/skills`, `~/.cursor/skills` | `.agents/skills`, `.cursor/skills` |
| OpenCode | `~/.agents/skills`, `~/.config/opencode/skills` | `.agents/skills`, `.opencode/skills` |
| GitHub Copilot | `~/.agents/skills`, `~/.copilot/skills` | `.agents/skills`, `.github/skills` |

Les deux liens `~/.agents/skills` et `~/.claude/skills` suffisent donc à couvrir tous ces agents.

### Installation dans un projet

Pour partager le skill avec les autres contributeurs d'un projet, copiez le dossier plutôt que de créer un lien symbolique (un lien vers votre dossier personnel ne fonctionnerait pas chez eux) :

```bash
mkdir -p .agents/skills
cp -R ~/.local/share/dsfr-skill/skills/dsfr-skill .agents/skills/
```

Utilisez `.claude/skills` à la place de `.agents/skills` pour Claude Code.

### Vérifier l'installation

Le skill est actif si votre agent répond avec précision à des questions sur le DSFR :
```
"Montre-moi comment créer un bouton avec le DSFR"
"Quelles sont les règles d'accessibilité pour un accordéon ?"
"Donne-moi un exemple de modale accessible"
```

## Utilisation

Le skill se déclenche dès qu'on parle de DSFR, de RGAA, de site en .gouv.fr ou de classes `fr-*` :

```
"Fais-moi une page de connexion DSFR"
"Ajoute un formulaire avec gestion des erreurs conforme au DSFR"
"Audite cette page : respecte-t-elle le DSFR et le RGAA ?"
```

Pour auditer une page, l'agent s'appuie sur [`audit.md`](skills/dsfr-skill/audit.md) et sur un vérificateur sans dépendance, utilisable aussi à la main :

```bash
node skills/dsfr-skill/scripts/verifier.mjs page.html
```

## Contenu du skill

```
skills/dsfr-skill/
├── SKILL.md            # Règles, aiguillage et index (généré)
├── demarrage.md        # Imports, squelette de page, thème, JS, frameworks
├── audit.md            # Démarche d'audit
├── composants/<nom>/   # index, design, code, accessibilite, exemples (+ exemples/*.html)
├── fondamentaux/<nom>/ # grille, couleurs, typographie, espacements, icônes…
├── modeles/pages/      # connexion, création de compte, erreurs
├── modeles/blocs/      # blocs de formulaire : nom, adresse, date, email…
├── reference/          # classes CSS, icônes et pictogrammes existants
└── scripts/verifier.mjs
```

Tout le contenu sauf `scripts/` est généré : ne pas le modifier à la main, il serait écrasé à la synchronisation suivante.

## Synchroniser avec une nouvelle version du DSFR

Prérequis : Node 20 ou plus récent et npm.

```bash
node scripts/sync.mjs          # dernière version publiée sur npm
node scripts/sync.mjs 1.15.4   # version précise
```

Le script télécharge le paquet `@gouvfr/dsfr`, qui contient à la fois la documentation markdown (`src/**/_part/doc`) et les pages d'exemple (`example/`), puis :

- convertit les directives propres au site du DSFR (`:::dsfr-doc-*`, `:::fr-table`…) en markdown simple et retire les images ;
- réécrit les liens internes vers les fichiers générés ;
- extrait les extraits de code des pages d'exemple avec leur titre dans `exemples.md` ;
- liste les classes, icônes et pictogrammes de la version dans `reference/` ;
- génère `SKILL.md`, `demarrage.md` et `audit.md` depuis `ressources/*.template.md` (`{{VERSION}}` et les index y sont remplacés).

Pour modifier les consignes du skill, éditer les templates de `ressources/` puis relancer la synchronisation.

Tout changement visible par les utilisateurs du skill (contenu, consignes, vérificateur, installation, nouvelle version du DSFR) s'accompagne d'une entrée dans [`CHANGELOG.md`](CHANGELOG.md) et de la montée de `version` dans `.claude-plugin/plugin.json` et `marketplace.json`.

Le workflow `Sync DSFR` fait la même chose chaque lundi (ou à la demande, avec une version au choix) et ouvre une pull request quand le résultat change. Il demande d'autoriser GitHub Actions à créer des pull requests (Settings > Actions > General). Sur les pull requests créées avec le jeton du workflow, le workflow `Check` attend une approbation : cliquer sur « Approve workflows to run » dans la pull request.

## Évals

[`evals/`](evals/) contient 11 prompts types (page de connexion, formulaire en erreur, modale, en-tête avec navigation, composant inexistant…) et un runner qui fait générer le HTML par un agent puis le vérifie. Voir [`evals/README.md`](evals/README.md).

## Licence

[Licence Ouverte 2.0 (Etalab)](LICENSE.md). La documentation et les exemples proviennent du [DSFR](https://github.com/GouvernementFR/dsfr), lui aussi sous Licence Ouverte 2.0 mais dont l'usage est réservé aux sites de l'administration (voir ses [modalités d'utilisation](https://github.com/GouvernementFR/dsfr/blob/main/doc/legal/cgu.md)).
