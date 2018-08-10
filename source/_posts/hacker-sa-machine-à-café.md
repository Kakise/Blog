---
title: Hacker sa machine à café !?
date: '2018-08-10'
author: Kakise
tags:
  - news
layout: post
---
Coucou, aujourd'hui on se retrouve pour un nouveau billet sur "Comment hacker ma machine à café Tassimo? 🤔🤔".

En effet, grand amateur de café, j'adore le préparer moi-même mais je n'ai pas souvent le temps de le filtrer parfaitement (et je n'ai pas de machine à café capable de le faire à ma place, désolé mais 500€ dans une machine à café, c'est pas pour tout de suite). Du coup, quand j'ai appris que ma toute dernière machine à café utilisait un code barre afin de déterminer comment préparer une dosette, j'ai sauté sur l'occasion.

# La machine à café

Je me suis acheté une machine à café Tassimo Bosch afin de réaliser ce petit reverse engineering. Disponible sur le commerce à environ 80€. N'importe quelle autre machine devrait faire le taf, à partir du moment où elle n'est pas trop vieille. Certains modèles de machines utilisent un code barre différent et qui n'est pas standard, je n'ai pas réussi à l'étudier.

## Comment elle fonctionne?

Déjà, il faut comprendre comment fonctionne une machine à café Tassimo classique. Pour cela, ça passe par l'étude de quelques documentation trouvées sur des sites web un peu bizarre.

![Fonctionnement d'une machine à café tassimo bosch - thermodynamique](/images/screenshot-2018-08-10-at-11.44.07.png)

Ici, on a le plan de fonctionnement de la partie thermodynamique du système. Oui parce que je ne l'ai pas précisé mais en réalité, on peut découper le système \`{machine à café}\` en deux parties, un sous-système "thermodynamique" qui va s'occuper de réguler la température et la pression du café (mais pas la conception du café, c'est à l'intérieur de la dosette qu'à lieu le filtrage !). Et une seconde partie électronique qui va lire la code barre.

![Dosette de type "T-Disc"](/images/image.jpg)

Seulement, comme vous avez pu le remarquer, il y a deux codes barres sur cette dosette. Le code barre que j'ai entouré avec du marqueur noir est le code barre qui est utilisé par ma machine à café, il est du format `Standard2of5`. Le second est utilisé sur des modèles plus anciens et n'est pas standard. Donc je n'en ai pas fait l'étude.

![Lecteur de code barre](/images/screenshot-2018-08-10-at-12.06.44.png)

Ci-dessus une image montrant à quoi ressemble un des lecteurs de code barres utilisés sur les différentes machines à café Tassimo.
