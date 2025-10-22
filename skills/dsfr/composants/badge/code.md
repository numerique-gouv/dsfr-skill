
## Badge

Le badge est un élément d’indication permettant de valoriser une information liée à un élément précis du site.


- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- Code
- [Accessibilité](../accessibility/index.md)


### HTML

#### Structure du composant

Le composant **Badge** est un élément visuel destiné à fournir des informations contextuelles ou des indicateurs d'état.
Sa structure est la suivante :

- Le Badge est un élément HTML `<p>` avec la classe `fr-badge`.
- Son contenu est textuel et doit être succinct (exemple : "Libellé badge").

**Exemple de structure HTML**

```HTML
<p class="fr-badge">Libellé badge</p>
```

#### Groupe de badges

Lorsque plusieurs badges sont utilisés ensemble, ils doivent être regroupés dans un conteneur, de classe `fr-badges-group`, afin de maintenir une cohérence visuelle et fonctionnelle.

```HTML
<ul class="fr-badges-group">
  <li>
      <p class="fr-badge">Badge 1</p>
  </li>
  <li>
      <p class="fr-badge">Badge 2</p>
  </li>
</ul>
```


### JavaScript

Le composant Badge **ne nécessite pas l'utilisation de JavaScript** pour son fonctionnement de base.

