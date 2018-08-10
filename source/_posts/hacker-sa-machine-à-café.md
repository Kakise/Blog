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
