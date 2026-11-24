# Numéro de téléphone : extraits de la documentation

Extraits de code de la documentation du DSFR 1.15.4. Les `id` sont à rendre uniques dans la page qui les reprend. L’alternative d’une image (attribut `alt`) doit toujours être présente : vide si l’image est illustrative, renseignée si elle porte du sens.

## Structure

```html
<div class="fr-input-group">
    <label class="fr-label" for="tel-1">
        Numéro de téléphone
        <span class="fr-hint-text">Format attendu : (+33) 5 36 49 68 27</span>
    </label>
    <input class="fr-input" autocomplete="tel" aria-describedby="tel-1-message-error" id="tel-1422" type="tel">
    <div class="fr-messages-group" aria-live="polite" id="tel-1-messages">
    </div>
</div>
```

## Structure

```html
<div class="fr-input-group fr-input-group--error">
    <label class="fr-label" for="tel-1">
        Numéro de téléphone
        <span class="fr-hint-text">Format attendu : (+33) 5 36 49 68 27</span>
    </label>
    <input class="fr-input" autocomplete="tel" aria-describedby="tel-1-message-error" id="tel-1422" type="tel">
    <div class="fr-messages-group" aria-live="polite" id="tel-1-messages">
        <p class="fr-message fr-message--error">Le format de numéro de téléphone saisie n’est pas valide. Le format attendu est : (+33) 5 36 49 68 27</p>
    </div>
</div>
```
