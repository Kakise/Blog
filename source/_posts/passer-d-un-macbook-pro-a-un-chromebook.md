---
title: Passer d'un Macbook Pro à un Chromebook
id: 2141
categories:
  - Ma vie
date: 2018-04-20 01:45:30
tags:
photos: /images/scr_colab.png
---

Oui, vous avez bien lu. J'ai décidé de passer d'un Macbook Pro à un Chromebook. Mais pourquoi me diriez-vous? La robustesse, entre autres. L'éco-système Google que je préfère à celui d'Apple. Et d'autres raisons plus ou moins similaires.

## Chromebook? Qu'est-ce que c'est?

Un Chromebook est tout simplement le nom donné à un ordinateur _portable_ tournant sous [Chrome OS](https://fr.wikipedia.org/wiki/Chrome_OS). La principale différence avec les autres ordinateurs portables, indépendamment de leur système d'exploitation, est que Chrome OS est un PC "dans le cloud". La plus grosse différence est surtout que les applications tournant sous Chrome OS sont en réalité des applications web. Des [_Chrome Web Apps_](https://www.google.fr/chrome/webstore/apps.html). Avec la nouvelle bibliothèque un peu salée de Google ([NaCl](https://developer.chrome.com/native-client)), de toutes façon, les _Web Apps_ peuvent fonctionner aussi bien que des applications natives. (Logique vu que ce sont des applications natives....).

## Pourquoi le Chromebook?

Et bien, honnêtement, j'ai mis du temps à me décider sur ma future machine. Après plusieurs recherche et après avoir découvert que les chromebooks pouvaient faire tourner Linux (plutôt facilement d'ailleurs), mon choix s'est tourné sur un *Acer Chromebook 14 for Work*. Le clavier est étanche, l'ordinateur tourne très bien avec 8go de ram et un intel core i5 skylake et surtout, c'est très solide. Et avec les cours et le taf, j'avais besoin de quelque chose de solide, puissant avec une grande autonomie (et une prise USB-C car powerbanks).

Mais sincèrement, ce qui m'a fait switch, c'était surtout la qualité du clavier. Passer des touches papillons qui se bloquaient toutes les 30 secondes à un vrai clavier, c'est le bonheur. Au moins sur mon Chromebook, je ne plus le soucis des touches qui se bloquent sans raisons et, surtout, il est confortable et légèrement rétro éclairé.

## Dans la pratique...

... C'est très minimaliste. C'est clair que ça change du *Windows* ou du *Mac*. Mais au moins, on a tout ce qu'il nous faut. Au démarrage, on est systématiquement accueilli avec Chrome qui se lance (logique, c'est surtout fait pour internet). Mais le plus intéressant reste toutes les possibilités offertes par Chrome OS et son écosystème.

#### Productivité:

On peut faire beaucoup seulement avec Google Chrome. On a accès à la suite Google Docs:

![Screen de Google Docs](/images/scr_gdocs.png)

![Google Sheets](/images/scr_sheets.png)

Et même coder et faire de la recherche grâce à Colaboratory !

![Colaboratory](/images/scr_colab.png)

#### Jeux:

Contrairement à ce que l'on peut penser, il n'y a pas que les jeux flash sur Chrome OS. La plupart des Chromebook font maintenant tourner Android, ce qui permet de jouer à une multitude de jeux mobiles sur son PC !

## Mon Chromebook

Je vous ai déjà présenté à de multiples reprises mon Chromebook. Seulement, je n'ai jamais vraiment précisé ce que j'en ai fait. 

Après avoir reçu et déballé mon Chromebook, j'ai fait ce que tout le monde aurait fait. J'ai installé les maj, me suis connecté et j'ai commencé à découvrir le monde de Chrome OS. Seulement, c'était sans compter sur le Developper Mode. J'ai donc activé ce fameux Developper Mode et je suis passer sur le channel beta de Chrome OS afin d'avoir une version un peu mieux màj. Et ensuite, je suis passé par la case [crouton](https://github.com/dnschneid/crouton) qui permet de créer très simplement un chroot sous Chrome OS. J'ai donc installé un petit chroot sous kali-rolling minimal avant d'installer mes outils de dév et de sec préférés et c'était parti ! Aussi simple que ça. Maintenant que j'ai backup mon chroot, même en cas de changement de Chromebook, je n'ai cas brancher ma clé USB, restaurer le backup et y aller !

Voilà qui conclut mon article sur mon nouveau Chromebook. Stay tuned pour plus d'articles intéressants.
