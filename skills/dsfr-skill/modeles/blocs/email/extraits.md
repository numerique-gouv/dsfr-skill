# Adresse électronique : extraits de la documentation

Extraits de code de la documentation du DSFR 1.15.4. Les `id` sont à rendre uniques dans la page qui les reprend. L’alternative d’une image (attribut `alt`) doit toujours être présente : vide si l’image est illustrative, renseignée si elle porte du sens.

## Structure

```html
<div class="fr-input-group">
    <label class="fr-label" for="email-1">
        Adresse électronique
        <span class="fr-hint-text">Format attendu : nom@example.com</span>
    </label>
    <input class="fr-input" name="email" autocomplete="on" id="email-1" type="email">
</div>
```
