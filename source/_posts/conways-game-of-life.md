---
title: Conway's Game of Life
date: '2018-11-16'
author: Author
tags:
  - news
layout: post
---


``​`BASIC
FUNCTION UpdateB(Board ref as integer[][], Cell ref as integer[][])
   // Calcul de l'état N+1
   Board2 as integer[29, 39]
   Board2 = Board
	FOR I=0 to 39
		FOR J=0 to 29
			// Ici on est encore à l'état N, donc je peux me permettre d'afficher les cellules.
			IF Board[I, J] = 1
				SetSpriteX(Cell[I, J], I * 16)
				SetSpriteY(Cell[I, J], J * 16)
			ENDIF
			IF Board[I, J] = 0
				// Je les met loin
				SetSpriteX(Cell[I, J], -150)
				SetSpriteY(Cell[I, J], -150)
			ENDIF
			
			// Initialisation
			S=0
			E=Board[I,J]
			
			// Je commence par vérifier si il va falloir checker la présence de cellules aux bords
			// je néglige les effets de bords en disant que les cellules sont considérées comme n'existant pas
			// au delà des bornes.
			IF I <> 0
				S = S + Board[I-1, J]
			ENDIF
			IF J <> 0
				S = S + Board[I, J-1]
			ENDIF
			IF I <> 39
				S = S + Board[I+1, J]
			ENDIF
			IF J <> 29
				S = S + Board[I, J+1]
			ENDIF

			// Je m'occupe aussi des diagonales
			IF I <> 0 AND J <> 0
				S = S + Board[I-1, J-1]
			ENDIF
			IF I <> 39 AND J <> 29
				S = S + Board[I+1, J+1]
			ENDIF
			IF I <> 39 AND J <> 0
				S = S + Board[I+1, J-1]
			ENDIF
			IF I <> 0 AND J <> 29
				S = S + Board[I-1, J+1]
			ENDIF
			
			// En posant E=état initial et S=somme des bords, cette formule: (S = 3) OU (E = 1 ET S = 2)
			// permet de calculer l'état suivant.
			Board2[I,J] = (S = 3) OR (E = 1 AND S = 2)
		NEXT J
	NEXT I
	Board = Board2
ENDFUNCTION
``​`
