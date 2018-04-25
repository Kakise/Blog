---
title: Coder en Python avec XCode 9.1
id: 399
categories:
  - Code
date: 2017-11-02 23:44:30
tags:
---

Si vous êtes ici, c'est que vous vous posez _la _question: Comment coder en python au sein d'XCode?

Pour répondre à cette question, nous allons tout d'abord étudier:

*   L'installation de python puis,
*   La création d'un nouveau projet
<!--more-->

# L'installation

Pour l'installation, vous pouvez [passer par le pkg](https://www.python.org/downloads/mac-osx/), l'installation est simple et rapide. Sinon, vous pouvez passer par [brew](https://brew.sh/index_fr.html), en utilisant la commande `brew install python3` (N.B: python2 est pré installé)

Ensuite, il vous faudra récupérer le chemin complet de python:[![capture terminal which python](https://kakise.xyz/wp-content/uploads/2017/11/Capture-d’écran-2017-11-02-à-21.32.25.png)](https://kakise.xyz/wp-content/uploads/2017/11/Capture-d’écran-2017-11-02-à-21.32.25.png)

Pour cela, vous pouvez utiliser la commande `which` (vous remarquerez que j'utilise la version inclue dans anaconda).

# Création d'un nouveau projet XCode

Une fois que l'installation est finie et que vous avez noté le chemin, il faut créer un nouveau projet de type "External Build System":![capture xcode création projet](https://kakise.xyz/wp-content/uploads/2017/11/Capture-d’écran-2017-11-02-à-21.47.05.png)

[![capture xcode création projet #2](https://kakise.xyz/wp-content/uploads/2017/11/Capture-d’écran-2017-11-02-à-21.47.48.png)](https://kakise.xyz/wp-content/uploads/2017/11/Capture-d’écran-2017-11-02-à-21.47.48.png)

Et enfin, on édite le schéma comme suit:

[![capture xcode modification schéma](https://kakise.xyz/wp-content/uploads/2017/11/Capture-d’écran-2017-11-02-à-23.36.30-1024x577.png)](https://kakise.xyz/wp-content/uploads/2017/11/Capture-d’écran-2017-11-02-à-23.36.30.png)

Attention, le fichier sera différent selon votre installation, vous devez choisir le python que vous avez trouvé avec la commande which précédemment.

Et voilà ! Si vous avez suivi le tutoriel correctement, vous voici avec votre ide configuré correctement!