# Évals

Demandes types (`cas.json`), surtout des pages complètes, dont la réponse HTML est vérifiée automatiquement. Un cas échoue sur :

- tout constat du [vérificateur](../skills/dsfr-skill/scripts/verifier.mjs), avertissements compris : dans une éval rien n'est regroupé dans un bundle, donc un CDN dans une autre version, une classe inventée ou un squelette incomplet sont des fautes. Seules les classes absentes du CSS mais présentes dans les exemples officiels (`fr-footer__content-item`…) restent des avertissements ;
- une classe attendue absente (`classesRequises`, un tableau imbriqué pour accepter l'une des variantes), une classe interdite présente (`classesInterdites`, composant obsolète ou inexistant), un attribut attendu absent (`attributsRequis`) ;
- avec `--navigateur`, le rendu dans Chromium : erreur JS, JS ou CSS du DSFR qui ne se chargent pas, icônes vides, composant non initialisé, bouton qui n'ouvre pas sa modale, son panneau ou son onglet. Un fragment est rendu dans une page qui charge le DSFR.

```bash
# avec le skill, copié dans .claude/skills et .agents/skills du dossier de travail de l'agent
node evals/run.mjs --avec-skill --agent "claude -p --allowedTools 'Read Grep Glob Skill'"

# sans le skill, pour comparer
node evals/run.mjs --agent "claude -p --disallowedTools Skill" --sorties evals/sorties-sans

# revérifier des sorties existantes sans relancer l'agent
node evals/run.mjs --sorties evals/sorties

# avec le rendu navigateur, après une installation de Playwright
npm install --prefix evals
npx --prefix evals playwright install chromium-headless-shell
node evals/run.mjs --sorties evals/sorties --navigateur
```

L'agent reçoit le prompt sur l'entrée standard et doit répondre par un bloc ```html sur la sortie standard : toute commande qui fait ça convient (`codex exec`, `opencode run`…). Options : `--cas id1,id2` pour un sous-ensemble, `--parallele N` (3 par défaut). Chaque agent est tué, avec ses sous-processus, après 15 minutes (`EVAL_TIMEOUT_MS` pour changer), et tous les agents encore en cours sont arrêtés si le runner s'interrompt.

Si une autre version du skill est installée globalement (plugin, `~/.claude/skills`), l'agent peut charger celle-là plutôt que la copie du dépôt : la désactiver le temps des évals.

Lancer les évals avant et après une modification des templates de `ressources/` pour vérifier qu'elle améliore le résultat.
