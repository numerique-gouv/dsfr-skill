# Ressources pour la génération de SKILL.md

Ce dossier contient les fichiers template utilisés par le script `generate-skill-md.sh`.

## Fichiers

### SKILL_HEADER.md
Contient l'en-tête du fichier SKILL.md avec :
- Les métadonnées (frontmatter YAML)
- La section "Fonctionnalités"
- La section "Architecture"
- Le début de la section "Liste des composants"

### SKILL_FOOTER.md
Contient le pied de page du fichier SKILL.md avec :
- La section "Utilisation avec Claude Code"
- Des exemples de requêtes
- Un lien vers VERSION.md

## Utilisation

Pour modifier le contenu du SKILL.md :
1. Éditez `SKILL_HEADER.md` ou `SKILL_FOOTER.md` selon vos besoins
2. Exécutez `./generate-skill-md.sh` pour régénérer SKILL.md

Les descriptions des composants sont extraites automatiquement depuis les fichiers `skills/dsfr/composants/*/index.md`.
