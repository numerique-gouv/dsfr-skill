# Paramètres d'affichage : exemples officiels

Extraits de code des pages d'exemple du DSFR 1.15.4. Les `id` sont à rendre uniques dans la page qui les reprend. L’alternative d’une image (attribut `alt`) doit toujours être présente : vide si l’image est illustrative, renseignée si elle porte du sens. Les extraits de plus de 4 ko sont dans des fichiers à part.

### Bouton ouverture thèmes

```html
<button aria-controls="fr-theme-modal" data-fr-opened="false" title="Paramètres d'affichage" type="button" id="button-6793" class="fr-btn--display fr-btn fr-btn--display fr-btn">Paramètres d'affichage</button>
```

### Snippet modale de paramètres d'affichage

Extrait complet : [exemples/snippet-modale-de-parametres-d-affichage-1.html](exemples/snippet-modale-de-parametres-d-affichage-1.html) (5 ko)

## Dépréciation

### Bouton ouverture thèmes

Sauf mention contraire, tous les contenus de ce site sont sous licence etalab-2.0

Les exemples suivants sont dépréciés, ne pas utiliser comme référence Pour support des versions précédentes

```html
<button aria-controls="fr-theme-modal-deprecated" data-fr-opened="false" id="link-6964" class="fr-link fr-icon-theme-fill fr-link--icon-left">Paramètres d'affichage</button>
```

### Snippet modale de paramètres d'affichage

```html
<dialog id="fr-theme-modal-deprecated" class="fr-modal" aria-labelledby="fr-theme-modal-deprecated-title">
    <div class="fr-container fr-container--fluid fr-container-md">
        <div class="fr-grid-row fr-grid-row--center">
            <div class="fr-col-12 fr-col-md-6 fr-col-lg-4">
                <div class="fr-modal__body">
                    <div class="fr-modal__header">
                        <button aria-controls="fr-theme-modal-deprecated" title="Fermer" type="button" id="button-6967" class="fr-btn--close fr-btn">Fermer</button>
                    </div>
                    <div class="fr-modal__content">
                        <h2 id="fr-theme-modal-deprecated-title" class="fr-modal__title">
                            Paramètres d’affichage
                        </h2>
                        <div id="fr-display-deprecated" class="fr-form-group fr-display">
                            <div class="fr-form-group">
                                <fieldset class="fr-fieldset">
                                    <legend class="fr-fieldset__legend fr-text--regular" id='-legend'>
                                        Choisissez un thème pour personnaliser l’apparence du site.
                                    </legend>
                                    <div class="fr-fieldset__content">
                                        <div class="fr-radio-group fr-radio-rich">
                                            <input value="light" type="radio" id="fr-radios-theme-light" name="fr-radios-theme">
                                            <label class="fr-label" for="fr-radios-theme-light">
                                                Thème clair
                                            </label>
                                            <div class="fr-radio-rich__img" data-fr-inject-svg>
                                                <img src="../../../dist/artwork/light.svg" alt="" />

                                            </div>
                                        </div>
                                        <div class="fr-radio-group fr-radio-rich">
                                            <input value="dark" type="radio" id="fr-radios-theme-dark" name="fr-radios-theme">
                                            <label class="fr-label" for="fr-radios-theme-dark">
                                                Thème sombre
                                            </label>
                                            <div class="fr-radio-rich__img" data-fr-inject-svg>
                                                <img src="../../../dist/artwork/dark.svg" alt="" />

                                            </div>
                                        </div>
                                        <div class="fr-radio-group fr-radio-rich">
                                            <input value="system" type="radio" id="fr-radios-theme-system" name="fr-radios-theme">
                                            <label class="fr-label" for="fr-radios-theme-system">
                                                Système
                                                <span class="fr-hint-text">Utilise les paramètres système.</span>
                                            </label>
                                            <div class="fr-radio-rich__img" data-fr-inject-svg>
                                                <img src="../../../dist/artwork/system.svg" alt="" />

                                            </div>
                                        </div>
                                    </div>
                                </fieldset>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</dialog>
```
