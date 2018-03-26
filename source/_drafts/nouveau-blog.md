---
title: 'Mon nouveau blog statique propulsé par netlify !'
id: 2079
categories:
  - Code
tags: seo
---

Bon bah voilà. J'ai fini par en avoir marre de Wordpress et de ses résultats passables niveau vitesse et SEO. Du coup j'ai décidé de changer pour quelque chose qui me semblait plus proches de mes besoins: un site statique généré par *[Hexo](https://hexo.io)*.

## Pourquoi un site statique?

Et bien la réponse à cette question est assez simple. Après tout, *pourquoi* un site web dynamique quand la seule utilité qu'on a c'est: showcase mes différents projets et, publier des billets de blogs de temps à autres.

Bon, après que mon choix a été fait, une autre question s'est posée. Quel hébergeur utiliser? Initialement, je voulais rester sous OVH et son bon vieux CDN mais les performances n'étaient pas celles que j'attendais. Alors certes, je ne vais certainement pas "target" des utilisateurs aux quatres coins du monde mais, il n'empêche que tout de même, je voulais la meilleure expérience au maximum et pour tous. Lorsque j'ai découvert les temps de chargements qui n'allaient jamais en dessous de 500ms et ceux, quelque soit mes optimisations, j'ai décidé de me tourner vers un autre prestateur de service, gratuit et ultra performant: [Netlify](https://www.netlify.com/).

## Comment s'en sortir avec un site statique sans compiler chez soi?

Bon, la question est très... "Cryptique" et originale, mais je voulais m'assurer que les sources de mon site web soient bien gardées, n'importe où et n'importe quand, et que je n'ai jamais à me soucier de les perdre et devoir tout recommencer. Du coup, j'avais d'abord penser à faire usage d'Heroku.

J'avais le workflow suivant utilisant Heroku et Github:

```flow
st=>start: Repo github
```  
