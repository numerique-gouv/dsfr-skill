# Nom et prénom : extraits de la documentation

Extraits de code de la documentation du DSFR 1.15.4. Les `id` sont à rendre uniques dans la page qui les reprend. L’alternative d’une image (attribut `alt`) doit toujours être présente : vide si l’image est illustrative, renseignée si elle porte du sens.

## Structure

```html
<fieldset class="fr-fieldset" aria-label="Demande de nom et prénom" aria-describedby="name-1-fieldset-messages">
    <div class="fr-fieldset__element">
        <div class="fr-input-group">
            <label class="fr-label" for="input-family-name-1">
                Nom
            </label>
            <input class="fr-input" spellcheck="false" autocomplete="family-name" name="family-name" id="input-family-name-1" type="text">
        </div>
    </div>
    <div class="fr-fieldset__element">
        <div class="fr-input-group">
            <label class="fr-label" for="input-firstname-1">
                Prénom
            </label>
            <input class="fr-input" spellcheck="false" autocomplete="given-name" name="given-name" id="input-firstname-1" type="text">
        </div>
    </div>
    <div class="fr-messages-group" aria-live="polite" id="name-1-fieldset-messages">
    </div>
</fieldset>
```

## Structure

```html
<fieldset class="fr-fieldset" aria-label="Demande de nom et prénom" id="name-1510-fieldset" aria-labelledby="name-1510-fieldset-messages">
    <div class="fr-fieldset__element">
        <div class="fr-input-group">
            <label class="fr-label" for="input-family-name-1512">
                Nom
            </label>
            <input class="fr-input" spellcheck="false" autocomplete="family-name" aria-describedby="input-family-name-1512-messages" name="family-name" id="input-family-name-1512" type="text">
            <div class="fr-messages-group" id="input-family-name-1512-messages" aria-live="polite">
            </div>
        </div>
    </div>
    <div class="fr-fieldset__element">
        <fieldset class="fr-fieldset" id="firstname-fieldset-1517" aria-labelledby="firstname-fieldset-1517-messages">
            <div class="fr-fieldset__element">
                <div class="fr-input-group">
                    <label class="fr-label" for="input-firstname-1516">
                        Prénom
                    </label>
                    <input class="fr-input" spellcheck="false" autocomplete="given-name" aria-describedby="input-firstname-1516-messages" name="given-name" id="input-firstname-1516" type="text">
                    <div class="fr-messages-group" id="input-firstname-1516-messages" aria-live="polite">
                    </div>
                </div>
            </div>
            <div class="fr-fieldset__element">
                <button class="fr-btn fr-btn--sm fr-btn--secondary" onclick="if (this.firstnamesCount === undefined) this.firstnamesCount = 1;
                else this.firstnamesCount++;
                const getFieldsetElement = (node) => {
                  const parent = node.parentNode;
                  if (parent.className.indexOf('fr-fieldset__element') > -1) return parent;
                  return getFieldsetElement(parent);
                };
                const firstname = getFieldsetElement(document.getElementById('input-firstname-1516'));
                const reference = getFieldsetElement(this);
                const copy = firstname.cloneNode(true);
                copy.innerHTML = copy.innerHTML.replace(/input-firstname-1516/g, `input-firstname-1516-added-${this.firstnamesCount}`).replace('name=\"firstname\"', `name=\"firstname-${this.firstnamesCount}\"`);
                const container = reference.parentNode;
                container.insertBefore(copy, reference);
                " type="button">
                    Ajouter un prénom
                </button>
            </div>
            <div class="fr-messages-group" id="firstname-fieldset-1517-messages" aria-live="polite">
            </div>
        </fieldset>
    </div>
    <div class="fr-fieldset__element">
        <div class="fr-checkbox-group fr-checkbox-group--sm">
            <input onclick="const fieldset = document.getElementById('firstname-fieldset-1517');
if (this.checked) fieldset.setAttribute('disabled', '');
else fieldset.removeAttribute('disabled');
" name="firstname-disabled" id="checkbox-name-1518" type="checkbox" aria-describedby="checkbox-name-1518-messages">
            <label class="fr-label" for="checkbox-name-1518">
                Je n'ai pas de prénom
            </label>
            <div class="fr-messages-group" id="checkbox-name-1518-messages" aria-live="polite">
            </div>
        </div>
    </div>
    <div class="fr-messages-group" id="name-1510-fieldset-messages" aria-live="polite">
    </div>
</fieldset>
```
