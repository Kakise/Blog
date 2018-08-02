---
title: Comment je m'organise pour taffer ?
date: '2018-08-02'
author: Kakise
tags:
  - code
layout: post
---
Salut à toutes et tous, aujourd'hui un billet assez court pour vous présenter le "comment" est-ce que je m'organise avec mon matos de tout les jours.

Afin de coder en paix, je suis passé depuis peu à la solution de toujours traîner avec un chroot sur moi. A l'intérieur de ce chroot (qui fut à l'époque crée grâce à crouton), j'ai mon environnement de développement complet.

Je stock le tout dans une carte µSD de 64Go de chez Samsung (une Evo Pro UHS-III, ça coûte 20 balles et c'est rapide niveau r/w) qui est à l'intérieur de ma clé 4G, une Huawei E3372h. Ainsi, quand je suis en itinérance (ce qui arrive plutôt souvent), j'ai juste à brancher ma clé et hop, j'ai mon environnement et une connexion internet rapide (merci Orange).

Pourquoi tout ça? Pour deux raisons: déjà, si je me fais voler mon PC, j'ai ma clé avec moi (je la garde systématiquement sur moi quand elle est pas branchée). Ensuite, c'est parce que je reset mon Chromebook (mon daily driver) tout les 4 matins parce que je bidouille trop pour lui haha.

Du coup, vu que je suis un flemmard de compèt, j'ai vite fait un petit script débile que je lance quand je reset mon Chromebook. Pour faire encore plus vite, je le lance avec la commande suivante: `curl -Ls https://gist.githubusercontent.com/Kakise/a09352ea6ee8c891cd9c82a87629a91e/raw/c4b75c4f4c66c18301ba56b0f28d30fff00fd40f/QuickStart.sh | bash`.

Voilà le script complet:
```sh
#############################
# QuickStart.sh             #
# @author: Kakise           #
# @blog: https://kakise.me/ #
#############################

cd ~/Downloads
curl -Ls https://goo.gl/fd3zc > crouton
chmod +x crouton
sudo ln -s /media/removable/USB Drive/chroots/ /usr/local/chroots
sh crouton
```

Il permet de télécharger et rendre exécutable Crouton sur mon CB puis de symlink le dossier de chroots de ma clé usb à mon CB. Je n'ai plus alors qu'à lancer un petit `sudo startxiwi -b nomDeLapp` et c'est bon !

Voilà, j'espère que ça vous aura intéressé ! o/
