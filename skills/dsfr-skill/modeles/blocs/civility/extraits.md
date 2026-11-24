# Civilité : extraits de la documentation

Extraits de code de la documentation du DSFR 1.15.4. Les `id` sont à rendre uniques dans la page qui les reprend. L’alternative d’une image (attribut `alt`) doit toujours être présente : vide si l’image est illustrative, renseignée si elle porte du sens.

## Demande du sexe

```html
<fieldset class="fr-fieldset" role="group" aria-describedby="sex-1427-fieldset-legend sex-1427-fieldset-messages" id="sex-1427-fieldset">
    <legend class="fr-fieldset__legend" id="sex-1427-fieldset-legend">
        Sexe
    </legend>
    <div class="fr-fieldset__element">
        <div class="fr-radio-group">
            <input type="radio" id="sex-female-1428" name="sex">
            <label class="fr-label" for="sex-female-1428">
                Feminin
            </label>
        </div>
    </div>
    <div class="fr-fieldset__element">
        <div class="fr-radio-group">
            <input type="radio" id="sex-male-1429" name="sex">
            <label class="fr-label" for="sex-male-1429">
                Masculin
            </label>
        </div>
    </div>
    <div class="fr-messages-group" aria-live="polite" id="sex-1427-fieldset-messages">
    </div>
</fieldset>
```

## Demande d'une situation familiale

```html
<fieldset class="fr-fieldset" aria-label="Demande de situation familiale" aria-describedby="civility-family-1432-fieldset-messages">
    <div class="fr-fieldset__element">
        <div class="fr-select-group">
            <label for="family-select-1" class="fr-label">
                Situation familiale
            </label>
            <select class="fr-select" id="family-select-1" name="family">
                <option value="" selected disabled hidden>Sélectionner une option</option>
                <option value="1">Célibataire</option>
                <option value="2">Concubinage</option>
                <option value="3">Pacsé</option>
                <option value="4">Marié</option>
                <option value="5">Veuf</option>
                <option value="6">Divorcé</option>
                <option value="7">Sans réponse</option>
            </select>
        </div>
    </div>
    <div class="fr-messages-group" aria-live="polite" id="civility-family-1432-fieldset-messages">
    </div>
</fieldset>
```

## Demande du titre d'appel

```html
<fieldset class="fr-fieldset" aria-label="Demande du titre d’appel" aria-describedby="civility-honorific-1-messages">
    <div class="fr-fieldset__element">
        <div class="fr-radio-group">
            <input type="radio" id="honorific-1438" name="honorific">
            <label class="fr-label" for="honorific-1438">
                Docteur
            </label>
        </div>
    </div>
    <div class="fr-fieldset__element">
        <div class="fr-radio-group">
            <input type="radio" id="honorific-1439" name="honorific">
            <label class="fr-label" for="honorific-1439">
                Inspecteur
            </label>
        </div>
    </div>
    <div class="fr-fieldset__element">
        <div class="fr-radio-group">
            <input type="radio" id="honorific-1440" name="honorific">
            <label class="fr-label" for="honorific-1440">
                Sans réponse
            </label>
        </div>
    </div>
    <div class="fr-messages-group" aria-live="polite" id="civility-honorific-1-messages">
    </div>
</fieldset>
```

## Demande du titre d'appel

```html
<fieldset class="fr-fieldset" aria-label="Demande du titre d’appel" aria-describedby="civility-honorific-2-messages">
    <div class="fr-fieldset__element">
        <div class="fr-select-group">
            <label for="honorific-select-1" class="fr-label">
                Titre d’appel
            </label>
            <select class="fr-select" id="honorific-select-1" name="honorific">
                <option value="" selected disabled hidden>Sélectionner une option</option>
                <option value="1">Recteur</option>
                <option value="2">Inspecteur</option>
                <option value="3">Proviseur</option>
                <option value="4">Professeur</option>
                <option value="5">Docteur</option>
                <option value="6">Principal</option>
                <option value="7">Sans réponse</option>
            </select>
        </div>
    </div>
    <div class="fr-messages-group" aria-live="polite" id="civility-honorific-2-messages">
    </div>
</fieldset>
```
