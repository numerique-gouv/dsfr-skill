
## Modale

La modale est un élément de mise en forme de contenu permettant de concentrer l’attention de l’usager exclusivement sur une tâche ou un élément d’information, sans perdre le contexte de la page en cours.


- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- Code
- [Accessibilité](../accessibility/index.md)


## HTML

### Structure du composant

Le composant **Modale** permet d'afficher du contenu en plein écran.

Sa structure est la suivante :

- Le bouton d'ouverture de la modale est défini par la classe `fr-btn` et l'attribut `aria-controls` lié à l'ID de la modale.
  - Le bouton doit être de type "button".
  - Le bouton dispose d'un attribut `data-fr-opened`, sa valeur [true|false] défini si la modale est ouverte ou fermée.
- La modale, définie par la classe `fr-modal`, est un élément HTML `<dialog>`.
  - Elle dispose d'un attribut `id` obligatoire, pour être lié au bouton d'ouverture.
  - La modale est liée à son titre via l'attribut `aria-labelledby`, dont la valeur doit correspondre à l'attribut `id` du titre.
- Son contenu est structuré :
  - D'un premier conteneur défini par la classe `fr-container`.
  - D'une grille définie par les classes `fr-grid-row` et `fr-grid-row--center`.
  - D'un bloc de colonne définie par les classes `fr-col-12 fr-col-md-8 fr-col-lg-6` pouvant varier en fonction de la taille de la modale désirée.
  - Le corps de la modale défini par la classe `fr-modal__body`, contenant :
    - L'entête de la modale, obligatoire, défini par la classe `fr-modal__header`, contenant :
      - Le bouton de fermeture de la modale, obligatoire, est un élément HTML `<button>`, défini par les classes `fr-btn` et `fr-btn--close`, dont le titre est "Fermer".
      - Le bouton doit être de type "button".
      - Le bouton est lié à la modale via l'attribut `aria-controls`, sa valeur doit correspondre à l'attribut `id` de la modale.
    - D'un bloc de contenu, obligatoire, défini par la classe `fr-modal__content`, contenant :
      - Le titre de la modale, obligatoire, dans un niveau d'entête `<hx>` ou un paragraphe `<p>` et défini par la classe `fr-modal__title`.
      - Le contenu de la modale, obligatoire et libre, mais nécessitant l'utilisation de balises adéquates, il n'est pas correcte par exemple de placer du texte directement dans une `<div>`.
    - Le pied de page de la modale, optionnel défini par la classe `fr-modal__footer`, contenant :
      - Un groupe de boutons d'action défini par les classes `fr-btns-group fr-btns-group--right fr-btns-group--inline-reverse fr-btns-group--inline-lg fr-btns-group--icon-left` pouvant varier en fonction de l'affichage désiré des boutons, contenant :
        - Soit un bouton primaire ([Bouton](../../../../button/_part/doc/code/index.md)).
        - Soit un groupe de boutons hiérarchisé.

> [!NOTE]
> La balise `<dialog>` peut être placée n'importe où sur la page, toutefois nous vous conseillons, si vous en avez la possibilité, d'en faire un enfant direct de la balise `<body>`.

**Exemple de structure HTML**

```HTML
<button data-fr-opened="false" aria-controls="modal" type="button" class="fr-btn">Modale simple</button>
<dialog id="modal" class="fr-modal" aria-labelledby="modal-title" aria-modal="true">
    <div class="fr-container fr-container--fluid fr-container-md">
        <div class="fr-grid-row fr-grid-row--center">
            <div class="fr-col-12 fr-col-md-8 fr-col-lg-6">
                <div class="fr-modal__body">
                    <div class="fr-modal__header">
                        <button aria-controls="modal" title="Fermer" type="button" class="fr-btn--close fr-btn">Fermer</button>
                    </div>
                    <div class="fr-modal__content">
                        <h2 id="modal-title" class="fr-modal__title">
                            <span class="fr-icon-arrow-right-line fr-icon--lg" aria-hidden="true"></span>
                            Titre de la modale
                        </h2>
                        <p>
                          <!-- contenu de la modale -->
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</dialog>
```


### JavaScript

#### Installation du JavaScript

Pour fonctionner le composant modale nécessite l'utilisation de JavaScript. Chaque composant utilisant javascript possède un fichier Js spécifique et requiert le fichier Js du core.

Il est donc nécessaire d'importer ces fichiers à la fin de la page (avant `</body>`) :

```HTML
<script type="module" src="dist/core/core.module.min.js"></script>
<script type="module" src="dist/component/modal/modal.module.min.js"></script>
```

<small>NB: Il est aussi possible d'importer le Js global du DSFR `dsfr.module.min.js`</small>

Pour fonctionner sur Internet Explorer 11, un fichier legacy, en version nomodule ES5, peut aussi être importé :

```HTML
<script type="text/javascript" nomodule href="dist/legacy/legacy.nomodule.min.js" ></script>
<script type="text/javascript" nomodule src="dist/core/core.nomodule.min.js"></script>
<script type="text/javascript" nomodule src="dist/component/modal/modal.nomodule.min.js"></script>
```

Une fois le JavaScript chargé, le composant fonctionne automatiquement.

#### Instances

Sur la modale, les éléments suivants sont instanciés :

- La modale, via la classe : `fr-modal`
- Le bouton d'ouverture de la modale, via l'attribut `aria-controls`

Une fois chargé, le Js ajoute un attribut `data-fr-js-NOM_INSTANCE="true"` sur chacun des éléments instanciés

#### API

Il est possible d'interagir avec les instances du composants en JavaScript via une API.

Cette API est disponible depuis la méthode `window.dsfr(instance)` du core.

Exemple :

```js
const elem = document.getElementById('modal');
dsfr(elem).modal.disclose();
```

L'ensemble des propriétés et méthodes disponibles sont définies ci-après :

##### modal

:::fr-table[isEnabled]{valign=top multiline=true}
| | |
|------|-----|
| **Description** | Défini si le fonctionnement de la modale est activé ou non |
| **Type** | property |
| **Retour** | Boolean |
| **Exemple** | `dsfr(elem).modal.isEnabled = false` |


:::fr-table[conceal]{valign=top multiline=true}
| | |
|:-----|:-----|
| **Description** | Ferme la modale |
| **Type** | function |
| **Arguments** | none |
| **Retour** | none |
| **Exemple** | `dsfr(elem).modal.conceal()` |


:::fr-table[disclose]{valign=top multiline=true}
| | |
|:-----|:-----|
| **Description** | Ouvre la modale |
| **Type** | function |
| **Arguments** | none |
| **Retour** | none |
| **Exemple** | `dsfr(elem).modal.disclose()` |


:::fr-table[isDisclosed]{valign=top multiline=true}
| | |
|:-----|:-----|
| **Description** | Retourne vrai si la modale est ouverte |
| **Type** | property |
| **Retour** | Boolean |
| **Exemple** | `dsfr(elem).modal.isDisclosed` |


:::fr-table[node]{valign=top multiline=true}
| | |
|------|-----|
| **Description** | Renvoie le noeud HTML de l'élément. |
| **Type** | property |
| **Retour** | DOMElement |
| **Exemple** | `dsfr(elem).modal.node` |


###### modalButton

:::fr-table[focus]{valign=top multiline=true}
| | |
|:------|:-----|
| **Description** | Replace le focus sur le bouton |
| **Type** | function |
| **Arguments** | none |
| **Retour** | Boolean |
| **Exemple** | `dsfr(elem).modalButton.focus()` |


:::fr-table[parent]{valign=top multiline=true}
| | |
|:-----|:-----|
| **Description** | Retourne l'instance du dsfr parente, ici la modale |
| **Type** | property |
| **Retour** | object \| null |
| **Exemple** | `dsfr(elem).parent` |


:::fr-table[node]{valign=top multiline=true}
| | |
|------|-----|
| **Description** | Renvoie le noeud HTML de l'élément. |
| **Type** | property |
| **Retour** | DOMElement |
| **Exemple** | `dsfr(elem).modalButton.node` |


#### Événements

Le Système de Design fournit des événements personnalisés pour les actions uniques de la part de certains composants réactifs listés sur la page de l'[API Javascript](path:/getting-started/developer/javascript).

Sur la modale, les événements suivants sont disponibles :

:::fr-table[événements]{valign=top multiline=true caption=false}

| Événement | Action | Élément | Attribut |
|------|------|------|------|
| `dsfr.conceal` | Fermeture de la modale | Modal | `data-fr-js-modal` |
| `dsfr.disclose` | Ouverture de la modale | Modal | `data-fr-js-modal` |
| `dsfr.click` | Click sur le bouton d'ouverture | ModalButton | `data-fr-js-modal-button` |


