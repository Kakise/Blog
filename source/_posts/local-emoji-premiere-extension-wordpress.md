---
title: 'Local Emoji, ma première extension Wordpress !'
id: 220
categories:
  - Code
date: 2017-07-27 00:29:00
tags:
---

### Local Emoji ou comment servir les emojis depuis son propre serveur web.

Aujourd'hui, je vais vous conter l'histoire de Local Emoji, la première extension Wordpress que j'ai faites dans ma vie. Tout a commencé <del>un soir d'orage</del> alors que je m'amusais à faire des benchmarks. "Mon site est-il assez rapide?" me demandais-je alors. "Comment faire pour utiliser un max le [cdn](https://www.ovh.com/fr/cdn/) que je venais de commander?". 🤔. Ce sont de très bonne questions, jeune padawan ! Et bien je vais vous dire comment ! Après un petit passage sur [pingdom](https://tools.pingdom.com/#!/lmEmK/https://kakise.xyz) (455ms héhé) et [pagespeed](https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Fkakise.xyz&amp;tab=desktop), je me suis rendu compte d'un truc: "Tiens, les emojis, elles viennent pas de chez moi en fait !". "Bof, osef, c'est un cdn de toute façon". Mais _non_, pas osef !

<!--more-->

### Moi aussi j'ai un cdn en fait ! 😉

C'est exactement ce que je me suis dit quand j'ai vu que wp ne voulait pas me laisser tranquille et envoyer les emojis depuis mon serveur à moi (à moins que ce soit du tracking, qui sait? 😈). Enfin bref, ne doutons pas des intentions de wordpress qui ne sont pas forcément mauvaises après tout _shrug_. Et puis Wordpress c'est cool. Mais je divague (vague). Ce que je voulais, c'était envoyer chacun de mes fichiers via mon cdn commandé chez OVH. Et pour cela, il fallait absolument passer par <u>mon</u> serveur, et aucun autre. Déjà que j'étais forcé d'utiliser Google Fonts, Gravatar et JSDelivr, je ne voulais pas encombrer mes visiteurs d'autres domaines sombres qui gagnent leur argent sur les données personnelles d'honnêtes auteurs.

### Réflexe numéro 1: chercher une extension qui fait le taf'.

Et c'est là où la recherche dans le repo d'extensions fait office de loi. C'était la première chose que j'ai faite. "local emoji". Plein d'espoirs, j'étais _persuadé_ que je trouverais ce que je cherchais. Pauvre de moi, j'avais tort.... Pourtant, l'extension "WP Local Emoji" semblait prometteuse ! Mais non, elle ne fonctionnait pas. Mais je n'allais pas abandonner si simplement ! Je suis parti voir sur [wordpress.org](https://wordpress.org) pour voir si il était possible de commit quelque chose, voir si l'auteur n'avait pas disparu comme cela arrive dans bon nombre de projets free software ! Mais non, il avait bel et bien disparu.

### Local Emoji ou comment se résoudre à reprendre le développement web.

![sad cat local emoji](https://kakise.xyz/wp-content/uploads/2017/07/qv8cu.jpg)_[J'avais promis](https://kakise.xyz/2017/07/jabandonne-le-dev-web-ca-tourne-mal-explications/)._ J'ai trahis ma promesse. Commis l'irréparable. J'ai lancé** CodeRunner** (quoi, vous pensiez qu'en plus, j'allais coder sous Brackets, Atom ou une autre hérésie du même genre? Nan mais ça va pas...). Et là, j'ai cloner le repo svn de WP Local Emoji et je me suis attelé à la tache de débug et en faire une vraie extension qui fonctionne bien comme il faut. (Comment ça j'ai seulement ajouté deux lignes !?). Et le tour était joué.

Et c'est ainsi qu'est né Local Emoji. Incroyable, non?