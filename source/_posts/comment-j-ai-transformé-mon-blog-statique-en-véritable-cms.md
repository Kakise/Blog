---
title: Comment j'ai transformé mon blog statique en véritable CMS !
date: '2018-05-19'
author: Kakise
tags:
  - code
layout: post
---
Eh oui, ce titre n'est pas un clickbait. Faut dire, ces derniers temps je me suis vachement ennuyé. Du coup, j'ai fait ce que je fais habituellement quand je m'ennuie, je découvre une nouvelle techno. [C'est là que j'ai fait la découverte de Netlify](https://kakise.me/2018/04/21/nouveau-blog/) et de ce qu'on appelle le "[JAMStack](https://jamstack.org/)". Bon, en gros le concept est simple. On fait un site web statique qui utilise du javascript (ou autre) afin de récupérer le contenu. Finalement, ça ressemblait énormément à ce que j'avais fait il y a un an avec [Kaki-Static](https://github.com/Kakise/Kaki-Static) (que j'ai maintenant abandonné).

Bon, concrètement, j'ai découvert le JAMStack après m'être mis en tête l'idée de faire un blog statique. Mais il me manquait un petit truc... C'était l'interface de type "CMS" que j'avais avec Contentful. Seulement, j'avais clairement pas envie d'avoir fait tout ces efforts, c'est à dire setup tout depuis zéro avec une nouvelle techno uniquement pour me remettre à foutre du Contentful et trifouiller dans du Javascript (beurk) (oui, ok, j'ai l'ai beaucoup fait pour ce blog mais bon). Allez, cessons de raconter n'importe quoi, j'ai vais vous raconter ~~ma torture~~ mon expérience.

# NetlifyCMS, mon sauveur.

Honnêtement, je ne me souviens plus comment je suis tombé sur cette API mais j'étais heureux de l'avoir fait haha.

## Déjà, qu'est-ce que c'est?

En gros, c'est un CMS. Mais pas n'importe quel genre de CMS. C'est une application web faite en React en une page qui se place entre votre repo Github (ou gitlab ou autre en fait) et vous. Via un fichier de configuration, le fameux `config.yml`, vous vous occupez de créer les différentes catégories et "règles" régissant votre _Static Site Generator_, et ensuite, il n'y a plus rien à faire (même si en réalité vous pouvez aussi setup la prévisualisation de vos différents "items").

Par exemple:

```yaml
collections:
  - name: "posts"
    label: "Posts"
    label_singular: "Post"
    folder: "source/_posts"
    create: true
    fields:
      - {label: "Title", name: "title", widget: "string", tagname: "h1", default: "Untitled"}
      - {label: "Publish Date", name: "date", widget: "datetime", format: "YYYY-MM-DD"}
      - {label: "Author", name: "author", widget: "string", default: "Author"}
      - {label: "Tags", name: "tags", widget: "list", default: ["news"]}
      - {label: "Body", name: "body", widget: "markdown"}
      - {label: "Layout", name: "layout", widget: "hidden", default: "post"}
```

_[Code s'occupant de la gestion de mes posts](https://github.com/Kakise/Blog/blob/master/source/admin/config.yml#L13)_

Et ça me donne (après avoir enregistré la façon de "preview" mes posts, qui est plus complexe):

![Screenshot de NetlifyCMS](/images/screenshot-2018-05-19-at-19.55.03.png)

## Comment l'utiliser?

Malgré son nom pour le moins trompeur, NetlifyCMS est compatible avec absolument tout les SSG et les hébergeurs possibles. A condition bien sûr de faire usage d'un backend compatible avec NetlifyCMS. Pour le moment, seulement Github est disponible mais l'arrivée de Bitbucket et Gitlab est prévu pour bientôt.

En attendant, pour ajouter NetlifyCMS à votre site web statique, ce n'est pas si compliqué (à condition, bien sûr, de ne pas tenter de customiser la preview haha). Les instructions ([en anglais](https://www.netlifycms.org/docs/add-to-your-site/)) sont assez simples à suivre et peuvent être résumées comme suis:

1. Ajouter les fichiers `admin/index.html` et `admin/config.yml` à votre site web.
2. Setup le backend souhaité correctement
3. Repérer le dossier où vous voulez que les "assets" soient stockés (dans mon cas c'est `sources/images` par exemple)
4. Comprendre la structure des fichiers que vous souhaitez créer/modifier avec votre CMS (billets, pages, fichier de configuration...)
5. Modifier le `admin/config.yml` en conséquence.

Et voilà, certes, ça prend du temps, mais le résultat en vaut réellement la peine.

## Et pour customiser le panneau de preview, comme toi?

Bon, là, on parle de choses qui fâchent ! C'est la partie que j'ai personnellement trouvé la plus laborieuse.

Bon, en gros, NetlifyCMS fonctionne comme cela: on a un fichier `admin/index.html` qui sert à charger le CMS en lui-même et le fichier `admin/config.yml` qui sert à conserver les paramètres spécifiques à votre site. Du coup, pour changer la preview d'une collection, il faut passer par le [`admin/index.html`](https://github.com/Kakise/Blog/blob/master/source/admin/index.ejs#L19). NetlifyCMS utilise React, vous vous souvenez?

Et bien là aussi il faudra utiliser React. Il faudra coder la template de preview en React. Il faut construire une Classe qui s'occupe du rendu des objets de la collections puis utiliser `CMS.registerPreviewTemplate("NomDeLaCollection", NomDeLaClasse);` au sein même du `admin/index.html` ! Seulement, il y a plein de conneries comme le fait que du coup c'est pas en ES6 ou encore on doit utiliser la fonction `h();` pour le rendu (me demandez pas pourquoi).

Voilà un petit exemple que j'ai fait pour les pages (très simple):
```js
      var PagePreview = createClass({
          render: function render() {
              return h("article", {
                      className: "post",
                      itemtype: "http://schema.org/BlogPosting"
                  },
                  h(
                      "div", {
                          className: "content",
                          itemprop: "articleBody"
                      },
                      this.props.widgetFor('body')
                  )
              );
          }
      });
```

Voilà ! J'espère que cet article vous aura appris quelque chose !
