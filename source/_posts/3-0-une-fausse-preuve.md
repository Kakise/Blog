---
title: '3 = 0: Une fausse preuve'
date: '2018-12-29'
author: Kakise
tags:
  - maths
layout: post
---
Ces derniers temps on a de plus en plus de vidéos YouTube "éducatives"/"scientifiques". Le problème avec ces vidéos, sont les erreurs qui peuvent s'y trouver, et je vais te le montrer !

Récemment je suis tombé sur une [vidéo YouTube](https://www.youtube.com/watch?v=SGUZ-8u1OxM) à cause des recommandations et j'ai tout de suite été intrigué par le titre de la vidéo: "3=0, can you spot the mistake?". Bon alors en vrai c'était surtout l'équation qui menait à ce résultat qui m'intéressait.

![3=0](https://ucarecdn.com/7785a711-58fd-4854-b0ac-c7815056f2f6/ "3=0: l'équation")

# Where is the mistake?

Pour comprendre d'où vient l'erreur, revenons aux fondamentaux:

## Comment résoudre une équation en mathématiques?

Déjà, qu'est-ce qu'une équation exactement? Une équation, c'est une assertion qui possède une ou plusieurs variables et la valeur de vérité de cette assertion dépend de ces variables. En des termes moins ronflants, c'est une affirmation qui peut être vraie ou fausse. Résoudre une équation, c'est trouver les valeurs pour lesquelles l'affirmation est vraie.

En l'occurence: $x^{2} + x + 1 = 0$.

Dans cette équation, pour quelle(s) valeur(s) de $x$, l'affirmation est vérifiée?

Pour cela, on passe par une série d'équivalences et d'implications afin de simplifier l'équation pour trouver une solution.

$x^{2} + x + 1 = 0 \Rightarrow x^{3} = 1$

Cette phrase se traduit littéralement par "si $x$ est solution de $x^{2} + x + 1 = 0$, alors $x$ est aussi solution de $x^{3} = 1$". Cela ne veut pas dire "si $x$ est solution de $x^{3} = 1$, alors $x$ est aussi solution de $x^{2} + x + 1 = 0$".

Ainsi, cette implication nous permet de déduire la chose suivante: "Les solutions de mon équation se trouvent parmi les solutions de $x^{3} = 1$". Je vous épargne les maths, les solutions de $x^{3} = 1$ sont ${1, j, j^{2}}$. Vous voyez où je veux en venir?

Dernière étape: On prend chacune des solutions et on les réinjecte dans notre première équation afin de vérifier quelles solutions sont solutions de notre équation. Et, comme par magie, 1 n'est pas solution.

## Équivalence contre implication

"C'est bien joli de résoudre cette équation, mais je vois toujours pas la faute !"

Pas de panique ! J'y viens. Vous remarquerez que j'ai parlé d'implication et d'équivalence juste avant, et c'est pas pour rien :).

Une implication est une condition nécessaire. $A \Rightarrow B$ veut dire: pour avoir $B$, il faut $A$. Mais cela ne veut absolument pas dire que pour avoir $A$, il faut avoir $B$. C'est ici l'erreur. En réinjectant $1$ dans la première équation et en supposant que l'équation est vérifiée, on se trompe de sens dans l'implication, autrement dit, on pense que $x^{3} = 1 \Leftrightarrow x = 1$.

C'est pour cela que au dessus, j'expliquais que pour résoudre l'équation, il fallait raisonner par équivalences, car comme cela, on a pas de problème qui nous impose de vérifier les solutions obtenues !
