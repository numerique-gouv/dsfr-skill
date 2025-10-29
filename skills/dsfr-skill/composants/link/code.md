
## Lien

Le lien est un système de navigation secondaire qui permet à l’usager de se déplacer au sein d’une même page, entre deux pages d’un même site ou vers un site externe.


- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- Code
- [Accessibilité](../accessibility/index.md)


### HTML

#### Structure du composant

Le composant **Lien** est un élément interactif permettant de naviguer vers une autre page ou section. Sa structure est la suivante :

- Le Lien est un élément HTML `<a>` défini par la classe `fr-link`.
- Son contenu est textuel, il doit indiquer clairement sa destination.

**Exemple de structure HTML**

```HTML
<a href="#" class="fr-link">
  Libellé lien
</a>
```

#### Lien externe

Lorsque le lien redirige vers un site externe, celui-ci doit s'ouvrir dans un nouvelle fenêtre. Pour cela, il convient d'ajouter l'attribut `target="blank"` ainsi qu'un attribut `title="[intitulé du lien à modifier] - nouvelle fenêtre"` pour indiquer au survol que la page s'ouvrira dans un nouvelle fenêtre.
L'ajout d'un attribut `rel="noopener external"` sera aussi recommandé pour des raisons de sécurité.

**Exemple de lien externe**

```HTML
<a href="#" target="_blank" rel="noopener external" title="Libellé lien - nouvelle fenêtre" class="fr-link">
  Libellé lien
</a>
```

#### Lien de téléchargement

La variante lien de téléchargement permet de télécharger un fichier.

- Il est formé par un élément HTML `<a>` défini par la classe `fr-link` et la classe `fr-link--download`.
- Son contenu est constitué de :
  - un texte commençant par "Télécharger ..."
  - les détails du fichier : un élément HTML `<span>` avec la classe `fr-link__detail` et décrivant le type, le poids, et la langue du fichier (si différente).

**Exemples de lien de téléchargement**

```HTML
<a download="true" href="image.jpg" class="fr-link fr-link--download">
  Télécharger le document lorem ipsum
  <span class="fr-link__detail">JPG – 61,88 ko</span>
</a>
```

Dans le cas d'un fichier en langue étrangère, l'attribut `hreflang` avec le code langue doit être ajouté, et la langue doit être indiquée dans le détail.

```HTML
<a hreflang="en" download="true" href="exemple.pdf" class="fr-link fr-link--download">
  Télécharger le document lorem ipsum
  <span class="fr-link__detail">PDF – 1,81 Mo - Anglais</span>
</a>
```

Il est possible de remplir automatiquement le détail en JS grâce à l'attribut `data-fr-assess-file` (Voir section [Javascript](#javascript)).

#### Lien au fil du texte

Au sein d'un texte, ne pas utiliser le composant Lien. Préférer l'ajout d'un lien standard sans la classe `fr-link`, celui-ci reprend les caractéristiques typographiques du texte (font, couleur, taille) tout en étant souligné.

**Exemples de liens au fil du texte**

```HTML
<p>Lorem ipsum <a href="#">lien dans le texte</a> dolor sit amet</p>
```

#### Groupes de liens

Les liens peuvent être regroupés pour former des ensembles de navigation. Le groupe est formé par la succession de liens enveloppés par un conteneur de classe `fr-links-group`. Utiliser une liste de `<ul>` `<li>` dans le cas d'une liste de liens. Insérer les liens directement dans un conteneur `<div>` lorsque qu'une liste n'est pas nécessaire, par exemple : deux liens indépendants qui ne forment pas un ensemble logique.

**Exemple de groupe de liens**

```HTML
<ul class="fr-links-group">
  <li>
    <a href="#" class="fr-link">Lien 1</a>
  </li>
  <li>
    <a href="#" class="fr-link">Lien 2</a>
  </li>
</ul>
```


### JavaScript

Le composant Lien **ne nécessite pas l'utilisation de JavaScript** pour son fonctionnement de base.

Une fonctionnalité disponible dans le core, permet de remplir automatiquement le détail des **liens de téléchargement**.
Pour instancier le javascript de remplissage automatique du détail sur le lien de téléchargement, ajouter l'attribut `data-fr-assess-file` sur le lien.
Les propriétés de type, poids, et langue sont récupérées depuis le fichier. Le texte de détail est automatiquement remplacé au chargement du JS. Il est conseillé de tout de même remplir les infos connues dans le détail en solution de repli.
Si la page est en Anglais, l'attribut `data-fr-assess-file` doit prendre la valeur "bytes", pour afficher le poids en Bytes plutôt qu'en Octet.

Pour fonctionner le fichier à télécharger doit être sur le même cross-domain que le site.

**Exemple des details du lien de téléchargement automatiques**

```HTML
<a data-fr-assess-file download="true" href="image.jpg" class="fr-link fr-link--download">
  Télécharger le document lorem ipsum
  <span class="fr-link__detail">CE TEXTE EST REMPlACÉ</span>
</a>
```

#### Installation du Javascript

Pour fonctionner, le **remplissage automatique du détail des liens de téléchargement** nécessite l'utilisation de JavaScript.
Cette fonctionnalité est disponible dans le core.

Il est donc nécessaire d'importer les fichiers js du core à la fin de la page (avant `</body>`) :

```HTML
<script type="module" src="dist/core/core.module.min.js"></script>
```

<small>NB: Il est aussi possible d'importer le Js global du DSFR `dsfr.module.min.js`</small>

Pour fonctionner sur Internet Explorer 11, un fichier legacy, en version nomodule ES5, peut aussi être importé :

```HTML
<script type="text/javascript" nomodule src="dist/legacy/legacy.nomodule.min.js" ></script>
<script type="text/javascript" nomodule src="dist/core/core.nomodule.min.js"></script>
```

#### API

> [!NOTE]
> L'activation ou la désactivation de la fonction de remplissage automatique du détail des liens de téléchargement (assess-file) n'est pas disponible via l'API JS, elle se fait via l'ajout ou le retrait de l'attribut `data-fr-assess-file` sur le lien.

