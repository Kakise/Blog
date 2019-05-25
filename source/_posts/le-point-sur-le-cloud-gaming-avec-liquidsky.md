---
title: Le Point sur le Cloud Gaming avec LiquidSky !
date: '2018-04-25T16:48:14+02:00'
author: Kakise
tags:
  - reviews
  - liquidsky
  - test
  - cloud gaming
layout: post
photos: /images/pricing.png
---
Salut à tous ! Aujourd'hui, j'ai envie de vous faire un nouveau petit point sur le cloud gaming. En effet, si vous avez lu mes articles précédents, vous avez dû voir que j'appréciais beaucoup le cloud gaming et que [j'avais déjà testé un autre service de cloud gaming dans le passé](https://kakise.me/2017/09/13/snoost-gaming-de-qualite/). Et bien me revoilà aujourd'hui, pour votre grand plaisir (ou pas) avec cette fois-ci une review d'un concurrent beaucoup plus vieux: LiquidSky !

# Présentation du service

## Qu'est-ce que LiquidSky?

Bon, alors LiquidSky, si vous ne connaissez pas, est une entreprise prestataire de service de cloud. Vous lui donnez votre application et pouf, c'est déployé partout dans le monde en un rien de temps. Leur service le plus connu reste [leur service de cloud gaming](https://gaming.liquidsky.com/) du même nom. C'est de cela que je vais parler aujourd'hui.

## Le prix

Bon et bien tout d'abord, combien cela va coûter. Cher vous pensez? Et bien... Pas tant que ça finalement. Afin d'attirer les joueurs les plus "casual," LiquidSky dispose de deux catégories de plans. PAYG (Pay As You Go) et le classique système basé sur une souscription mensuelle. Mis à part la taille du stockage, rien ne les différencie (ils ont tenté d'introduire un système VIP pour les payeurs mensuels mais il n'est pas encore en place). 

Le système se base sur les "SkyCredits", une monnaie imaginaire qui est conservée d'un mois à l'autre. 1 minute avec une configuration Gamer correspond à 1 SkyCredits tandis que 1 minute avec une configuration Pro correspond à 2 SkyCredits. 

Néanmoins, tout cela est amené à changé avec l'arrivée d'un nouveau système sans "rollover" des crédits:

![Option A](/images/pricing.png)

Ou encore: 

![Option B](/images/image-1-.png)

Cette deuxième option offrant un usage illimité de LiquidSky.

## Le service

Encore en beta, LiquidSky ne dispose pas du service les plus fiables du monde. Mais je suis tout de même obligé de reconnaître que la qualité est de mieux en mieux au fil des mois. Lorsque je m'étais inscris, je ne pouvais même pas me connecter tellement les serveurs étaient pleins h24 ! Aujourd'hui ce n'est plus le cas, mon "SkyComputer" est systématiquement allumé en 2 à 5 minutes, quelque soit le plan choisi (il est plus rapide d'allumer une instance Gamer). 

Subsiste encore un énorme problème: le client LiquidSky !

## Le client

Afin d'accéder à son "SkyComputer", LiquidSky met à disposition des usagers un client perso disponible sur Mac et Android:

![LiquidSky Client tournant sous Crossover et Mac](/images/b8d41bf7d1fb12e6c4534d10d739452e.png)

Je vous l'assure, j'ai tout essayé pour le faire fonctionner. Que ce soit un patch CPU pour augmenter la priorité du streamer ou encore une multitude de PC (doit-être noté que le client fonctionné mieux émulé que sous Windows 10 lui-même !), le client est instable. La disposition du clavier ne peut pas être changée et j'en passe et des meilleurs. Et dieu vous garde de tester l'application Android !

# Mais alors... Pourquoi j'utilise exclusivement LiquidSky?

Bon, il est vrai que j'ai cité une très longue liste de défauts. Seulement, je continue à utiliser LiquidSky comme étant mon seul prestataire de cloud gaming ! Les raisons sont simples:

* Le prix est très abordable
* La puissance est raisonnable
* Stabilité du PC une fois qu'on y a accès

## Parsec

Je vais finir cette article sur une recommandation si vous souhaitez effectivement utiliser LiquidSky dans le futur; **utilisez Parsec !**

[Parsec](https://parsecgaming.com/) est un logiciel client-serveur **gratuit** que vous pourrez installer sur votre SkyComputer sans trop de problèmes. De là, vous pourrez changer la disposition du clavier sans aucun soucis et avoir une expérience avec quasiment 0 lags. La version android du client est encore en beta mais fonctionne plutôt bien. Conseil: n'oubliez pas de setup le timer avec extinction automatique à "Never" sur l'application LiquidSky (n'importe laquelle) et, modifiez le fichier suivant: `C:\Windows\liquidsky\sky.cfg` avec le bloc-notes et changez la ligne `ShowCursor=0` en `ShowCursor=1`.

# Conclusion

En conclusion, au jour d'aujourd'hui, le cloud gaming a fait de belles avancées. Que ce soit les services assez peu connus comme _Snoost_ ou les services plutôt jeunes comme _LiquidSky_, vous pouvez être sûrs de trouvez ce que vous voulez et jouer tranquillement n'importe où à condition d'avoir une bonne connexion internet. J'ai volontairement omis _Shadow_ parce que je n'ai jamais testé ce service (n'hésitez pas à m'offrir un mois d'abonnement à _Shadow_ :p) et le service de location offert par _Parsec_ parce qu'il est en réalité géré par des tiers.
