---
title: Crostini? Qu'est-ce que c'est?
date: '2018-05-08T10:14:46+02:00'
author: Kakise
tags:
  - news
  - chrome os
  - chrome
layout: post
photos: /images/screenshot-2018-05-02-at-7.20.41-pm.png
---
> Run Linux tools, editors, and IDEs on your Chromebook.

Récemment, Google a créé _Crostini_. _Crostini_ est un système de création et de gestion de container Linux un peu dans le style de [_Crouton_](https://github.com/dnschneid/crouton). Crostini permet le création de chroot sous Chrome OS afin de lancer des applications Linux telles que _Android Studio_, _VSCode_, etc... Aujourd'hui disponible sur tout les Pixelbook, qu'est-ce que Crostini va apporter au monde de Chrome OS?

# Crostini = Crouton en plus sécurisé?

C'est peut-être l'argument phare de Google. La sécurité par rapport à Crouton, une solution qui a déjà fait ses preuves et dispose entre autres choses de l'accélération GPU. Mais en quoi est-ce que Crostini peut être plus sécurisé que Crouton? 

## Plus besoin du  _Developer Mode_

Et oui, Crostini se résume à une simple option dans les Paramètres de Chrome OS, plus besoin de désactiver l'OS Verification. En effet, le Developer Mode est dangereux dans le sens où n'importe qui peut faire des changement à Chrome OS sans que l'utilisateur n'en soit notifié. 

![Screenshot montrant les paramètres de Chrome OS sur un Pixelbook](/images/screenshot-2018-05-02-at-7.20.41-pm.png)

_Image trouvée sur:_ [_https://goo.gl/2sW4w5_](https://goo.gl/2sW4w5)

Avec Crostini, plus besoin de passer son Chromebook en _Developer Mode_ et ainsi, plus de problème lié à la désactivation de l'OS Verification. Sans compter une installation plus _straightforward_ qu'avec Crouton qui est encore assez tricky à utiliser pour les moins expérimentés.

## Meilleure intégration avec Chrome OS

C'était peut-être l'un des plus gros problèmes avec Crouton: l'intégration avec Chrome OS. En effet, même avec l'extension Crouton, il y avait des différences de thèmes GTK et les applications n'étaient pas présentes dans le menu de Chrome OS, ce qui forçait l'usage de commandes telles que `sudo startxiwi -n xenial discord` afin de lancer discord par exemple.

Avec Crostini, les applications installées sont directement affichées dans le menu de Chrome OS ce qui permet de les trouvées facilement et d'éviter de passer par la ligne de commande à chaque fois.

Enfin, pour finir ce billet, je vous laisse sur quelques liens sympathiques:

[/r/Crostini](https://www.reddit.com/r/Crostini)  
[/r/Crostini: Help me figure out why Crostini exists](https://www.reddit.com/r/Crostini/comments/8haf9z/help_me_figure_out_the_why_of_crostini/)
