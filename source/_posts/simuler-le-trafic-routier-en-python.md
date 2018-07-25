---
title: Simulation du trafic routier
date: '2018-06-03'
author: Kakise
tags:
  - code
  - dynamique
layout: post
---
Salut à tous ! Aujourd'hui dans cet article, je vais tenter de vous expliquer le fonction de mon dernier projet en date: une simulation du trafic routier réalisée en python et basée sur le "Intelligent Driver Model".

# L'intelligent Driver Model

Afin d'avoir une simulation précise et efficace, j'ai utilisé un modèle déjà préexistant, le modèle IDM.

![Calcul de l’accélération à partir du modèle IDM](/images/equation-idm.png)

Cette équation ci-dessus est l'équation utilisée afin de calculer l'accélération à un instant t + dt à partir de paramètres au temps t.

## Le modèle IDM en python

Afin de parvenir à mon but, j'ai d'abord cherché à voir différentes implémentations du modèle IDM en python afin de m'en inspirer et d'adapter mon code plus vite. Petit problème: y'en a pas. Mais.... Heureusement pour moi, je sais coder en autre chose que du Python (En vrai je suis mauvais en Python). Du coup, je me suis inspiré d'un modèle fait en C++ et d'un autre modèle fait en JS.
