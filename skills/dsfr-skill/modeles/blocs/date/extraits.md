# Date unique : extraits de la documentation

Extraits de code de la documentation du DSFR 1.15.4. Les `id` sont à rendre uniques dans la page qui les reprend. L’alternative d’une image (attribut `alt`) doit toujours être présente : vide si l’image est illustrative, renseignée si elle porte du sens.

## Structure du bloc

```html
<fieldset class="fr-fieldset" id="date-default-1578-fieldset" role="group" aria-labelledby="date-default-1578-fieldset-legend date-default-1578-fieldset-messages">
    <legend class="fr-fieldset__legend" id="date-default-1578-fieldset-legend">
        Date de naissance
        <span class="fr-hint-text">Texte de description additionnel</span>
    </legend>
    <div class="fr-fieldset__element fr-fieldset__element--inline fr-fieldset__element--number">
        <div class="fr-input-group">
            <label class="fr-label" for="date-default-1578-bday-day">
                Jour
                <span class="fr-hint-text">Exemple : 14</span>
            </label>
            <input class="fr-input" name="day" id="date-default-1578-bday-day" type="text">
        </div>
    </div>
    <div class="fr-fieldset__element fr-fieldset__element--inline fr-fieldset__element--number">
        <div class="fr-input-group">
            <label class="fr-label" for="date-default-1578-bday-month">
                Mois
                <span class="fr-hint-text">Exemple : 12</span>
            </label>
            <input class="fr-input" name="month" id="date-default-1578-bday-month" type="text">
        </div>
    </div>
    <div class="fr-fieldset__element fr-fieldset__element--inline fr-fieldset__element--inline-grow fr-fieldset__element--year">
        <div class="fr-input-group">
            <label class="fr-label" for="date-default-1578-bday-year">
                Année
                <span class="fr-hint-text">Exemple : 1984</span>
            </label>
            <input class="fr-input" name="year" id="date-default-1578-bday-year" type="text">
        </div>
    </div>
    <div class="fr-messages-group" id="date-default-1578-fieldset-messages" aria-live="polite">
    </div>
</fieldset>
```
