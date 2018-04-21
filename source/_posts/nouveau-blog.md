---
title: Mon nouveau blog statique propulsé par netlify !
tags: seo
id: 2079
categories:
  - Code
date: 2018-04-21 15:21:03
---


Bon bah voilà. J'ai fini par en avoir marre de Wordpress et de ses résultats passables niveau vitesse et SEO. Du coup j'ai décidé de changer pour quelque chose qui me semblait plus proches de mes besoins: un site statique généré par *[Hexo](https://hexo.io)*.

## Pourquoi un site statique?

Et bien la réponse à cette question est assez simple. Après tout, *pourquoi* un site web dynamique quand la seule utilité qu'on a c'est: showcase mes différents projets et, publier des billets de blogs de temps à autres.

Bon, après que mon choix a été fait, une autre question s'est posée. Quel hébergeur utiliser? Initialement, je voulais rester sous OVH et son bon vieux CDN mais les performances n'étaient pas celles que j'attendais. Alors certes, je ne vais certainement pas "target" des utilisateurs aux quatres coins du monde mais, il n'empêche que tout de même, je voulais la meilleure expérience au maximum et pour tous. Lorsque j'ai découvert les temps de chargements qui n'allaient jamais en dessous de 500ms et ceux, quelque soit mes optimisations, j'ai décidé de me tourner vers un autre prestateur de service, gratuit et ultra performant: [Netlify](https://www.netlify.com/).

## Comment s'en sortir avec un site statique sans compiler chez soi?

Bon, la question est très... "Cryptique" et originale, mais je voulais m'assurer que les sources de mon site web soient bien gardées, n'importe où et n'importe quand, et que je n'ai jamais à me soucier de les perdre et devoir tout recommencer. Du coup, j'avais d'abord penser à faire usage d'Heroku.

J'avais le workflow suivant utilisant Heroku et Github:

```flow
st=>start: Github Repo
e=>end
op1=>operation: Nouveau Commit
cond=>condition: Oui
ou Non?
io=>subroutine: hexo generate --deploy
sub1=>subroutine: Mise à jour du ftp OVH

st->op1->cond
cond(yes)->io->sub1->e
cond(no)->op1
```  

Dans la pratique, ça fonctionnait très très bien. Je faisais un petit push en direction de mon repo Github et tada ! Mise à jour de mon site web dans les 5 minutes. Mais ça a rapidement amené quelques problèmes:
 - Je ne pouvais avoir une "preview" des changements, en effet, le but de pouvoir mettre à jour, compiler et deploy automatiquement, c'était surtout pour pouvoir être en itinérance, et juste grâce à mon navigateur, publier un nouveau billet.
 - Cela me forcait à avoir un repo github privé (ce que je n'aime pas faire).

Et pire encore, ça ne changeait rien à mes problèmes de performances.

C'est ainsi que j'ai fini par découvrir [Netlify](https://netlify.com).

## Netlify?
Bon, je vous fait une petite présentation rapide: Netlify est un service d'hébergement de sites web statiques. Il supporte plusieurs générateurs de sites web statiques (jekyll, etc...) et plusieurs languages de programmation (node.js, ruby, ...). L'avantage de Netlify c'est surtout la qualité du service. L'hébergement est 100% gratuit (et inclus même 100h d'Amazon Lambda), inclus un CDN, un certificat SSL (via Let's Encrypt mais je ne l'utilise pas) et la possiblité de customiser son NDD. Bref, un service de grande qualité et gratuitement. Que demander de plus?

Dans mon cas, le switch a été très rapide. Je me suis connecté via github pour créer un compte gratuit, j'ai setup les paramètres de "deploy" comme suit: 

![Screenshot de mes paramètres](/images/Screenshot-2018-4-21 Build deploy Settings.png)

Et voilà, le tour était joué ! Je suis maintenant en possession d'un blog ultra rapide, statique et disponible hors ligne. Elle est pas belle la vie?

Si vous voulez vous aussi faire comme moi, j'ai laissé le code source publiquement, [juste ici](https://github.com/Kakise/Blog). J'ai laissé le *Procfile* Heroku qui permettait de deploy. Vous n'avez qu'à modifier le *_config.yml* pour y ajouter vos paramètres de deploy, lier votre repo à Heroku et le tour est joué.