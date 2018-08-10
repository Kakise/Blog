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

## Le format d'un code barre.

Bon, maintenant qu'on sait ce qu'on va étudier, attaquons nous au vif du sujet: le format du code barre.

Le code barre est comme je l'ai dit du format `Standard2of5` donc ça nous arrange parce qu'on peut utiliser un générateur en ligne et des impressions afin de faire nos tests.

Le café est encodé sur 4 chiffres différents et 13 bits en base 2. La dosette que j'ai montré un peu plus haut a pour code décimal \`297615_{10}\`. A partir de là on peut déjà éliminer et déterminer ce qu'on appelle le `checksum` c'est à dire la fonction mathématique servant à vérifier si il y a des erreurs ou pas. Le check sum est standard. En notant \`abcdef\` les 6 chiffres de notre code barre, on a la fonction suivante:

\`3 \* a + b + 3 \* c + d + 3 * e + f = 50 \equiv 0 \pmod 10\`

C'est déjà une bonne base. Une fois qu'on a dégagé les chiffres \`a\` et \`b\`, on a plus que les chiffres codant la préparation du café: \`bcde_{10}\`. La partie électronique va ensuite encoder ces chiffres sur 12 bits. Pour le coup, je passe à du C++, ça me simplifie le travail (vous avez pas envie de voir à quoi ressemble la conversion qui est à base de reste de division par 2 puis on rajoute des 0 devant pour faire 12 bits).

Afin de convertir \`bcde\_{10}\` en \`abcdefghijklm\_{2}\`, j'utilise l'instruction suivante en C++: `std::bitset<13>(std::to_string(bcde));` (Ouais ça commence à devenir moche haha).

Et là, on a les bits codant les informations que l'on veut.

* \`a\` et \`b\` codent la température.
* \`c\` et \`d\` s'occupent de la manière dont est chargé la cartouche.
* \`e\`, \`f\`, \`g\` et \`h\` s'occupent de coder le volume de boisson à distribuer.
* \`i\`, \`j\` et \`k\` s'occupent du "flow rate". En fait c'est en gros la pression.
* \`l\` et \`m\` déterminent comment la dosettes est "purgée" (si il y a de la vapeur, la vitesse, blablabla).

Ouais, c'est très moche, je sais. Mais ça fonctionne comme ça.

# Coder le générateur de code barres

Bon, je vais vous épargner les explications chelous en mode "faut faire blablabla", à la place je vais vous expliquer le principe de fonctionnement.

Chaque catégorie de bits servant à coder les différentes instructions ont leur équivalents décimaux et plus on monte, plus ce sera haut (pour le volume, la température et le flow rate).
