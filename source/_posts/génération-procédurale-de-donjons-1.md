---
title: 'Génération Procédurale de Donjons #1'
date: '2019-03-10'
author: Kakise
tags:
  - code
  - algo
  - pcg
layout: post
---
Bonjour à tous, dans cette série assez courte on va s'intéresser à la génération de donjons de façon procédurale.

# Qu'est-ce que la génération procédurale de donjons ?

Le concept est assez simple à comprendre. A partir de quelques règles, on cherches à générer un donjon, un labyrinthe, une carte, ... de façon algorithmique. L'un des premiers exemples de jeu-vidéo utilisant ce système est Rogue, en 1980.

Aujourd'hui on peut utiliser la génération procédurale pour plusieurs raisons. Déjà, ça permet d'économiser en mémoire, il y a besoin de beaucoup moins d'assets pour les différents niveaux. Ensuite, ça permet d'avoir une expérience unique, comme les niveaux sont générés à chaque replay. Enfin, ça permet de baisser substantiellement le temps de développement comme il y a besoin de bien moins de temps de développement. En revanche, en procédant ainsi, on a beaucoup moins de contrôle sur la qualité d'un niveau, ce qui demande de faire attention.

## Générer? Mais comment?

Il existe une multitude de façons de faire de la génération procédurale. Vous pouvez vous renseigner sur beaucoup d'algo [ici](http://pcg.wikidot.com/) (en anglais).

Voici quelques exemples: la Wave Function Collapse, le concept c'est de prendre une image, de la découper en plusieurs morceaux, déterminer les voisins de chacun de ces morceaux, attribuer une probabilité qu'une pièce soit à côté d'une autre en fonction de ses voisins puis, via une suite de variables aléatoires continues, générer une image "de sortie" de taille désirée. Les avantages de cette méthode sont que comme ça, on obtient une image similaire à celle d'entrée grâce à la conservation des voisins et, la simplicité de mise en oeuvre, pas besoin d'une multitude de conditions. En revanche, les générations sont longues et prennent beaucoup de mémoire vive.

![exemple de génération via wfc que j'ai implémenté moi-même en c++ pour AGK](/images/wfc_example.png "Exemple de génération via wfc que j'ai implémenté moi-même en c++ pour AGK")

C'est pour ça que cet algorithme n'est pas nécessairement la plus adaptée pour un jeu-vidéo (sauf peut-être sa variante utilisant des tiles qui elle est plus rapide).

Un autre moyen de faire est par exemple d'[utiliser un automate cellulaire](http://roguebasin.roguelikedevelopment.org/index.php?title=Cellular_Automata_Method_for_Generating_Random_Cave-Like_Levels) (lien en anglais), un exemple:

```
original:           iteration 1:        2:                  3:                  4:
 #       ### ##     ####  ##########    ####  ##########    ####  ##########    ####  ##########
# ##  ## ## #       # #      ##### #    ###      #######    ###      #######    ###      #######
 # # ##   #### #    # #   #   #### #    ##        ######    ##        ######    ##        ######
 # #  #  # ## #     ###  #     ### #    ##         #####    ##         #####    ##         #####
### # #     # #     #    #     #####    ##         #####    ##         #####    ##        ######
    # # ## #####    ##     ###  ####    #       ## #####    ##      ########    ##      ########
##     ####  #      #      #### ####    ##     ####  ###    ##     #### ####    ##     #########
## ## # ## #  ##    ###    ####    #    ###    ###   ###    ###    ####  ###    ###    #########
# ##  ###  #  #     ##### ###    ###    ####  #####  ###    ####  ##### ####    ####   #########
#  # # #  # ###     # ### ##########    ###### #########    #####  #########    ####   #########
  ## ## #### # #    #####    #######    ####    ########    ####    ########    ####    ########
####    # # # #     # #      #######    ##        ######    ##       #######    ##       #######
       #   ## ##    #          #####    #         ######    #         ######    #         ######
   # #    # ####               #####    #         ######    #         ######    #         ######
# # #  ## ######    #        #######    #        #######    ##       #######    ##       #######
#  #  # ####  #     ################    ################    ################    ################
```

# Une méthode "maison"

Cependant, dans cette série je vais plutôt aborder la partie "développer l'algorithme", car après tout, le plus souvent on utilisera un ensemble de règles simples que l'on va traduire sous forme algorithmique, c'est la méthode qui permet d'avoir le plus de contrôle sur ce que l'on veut faire.

## Conception de l'algorithme

Pour cette série on va s'intéresser au cas particuliers suivant, on cherche à créer un jeu-vidéo de type "hit'n'run". On s'impose d'emblée quelques contraintes ainsi. On veut des grands espaces, assez grand pour avoir de la mobilité, une grande variété de pièces, une génération "en continue" et une certaine simplicité au niveau de la gestion des collisions et, éventuellement, de quoi ajouter des objets facilement dans les pièces.

Pour cela j'ai d'abord essayé de construire une carte rapidement pour voir ce que je voulais:

![Exemple simple de pièce](/images/base.png "Exemple simple de pièce")

Je remarque d'emblée deux choses: j'ai tendance à faire des connexions malgré moi, et j'ai à peu près les mêmes idées de pièces à quelques variations près. Je vais donc procéder ainsi:

1. Je commence par créer plusieurs pièces avec chacune des connexions pour venir y coller d'autres pièces.
2. Je "rentre" ces différentes pièces dans mon algorithme.
3. Je prends une pièce au hasard et je la place.
4. Je regarde les différentes connexions qui sont sur cette pièce, je sélectionne une seconde pièce au hasard, je la connecte à une des connexions de ma première pièce.
5. Je répète cela à l'infini.
