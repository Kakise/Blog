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

Pour bien visualiser mon code, j'ai créé un objet "IDM" assez simple:
```python
class IDM:
    def __init__(self, v0, T, s0, a, b):
        self.v0 = v0
        self.T  = T
        self.s0 = s0
        self.a  = a
        self.b  = b
        
        # Consts
        self.alpha_v0   = 1
        self.speedlimit = 1000
        self.speedmax   = 1000
        self.bmax       = 18

    # Acceleration function
    # @param s:     actual gap           [m]
    # @param v:     actual speed         [m/s]
    # @param vl:    leading speed        [m/s]
    # @param al:    leading acceleration [m/s²] (optional)

    def acceleration(self, s, v, vl, al):
        if s<0.0001:
            return -self.bmax
        
        noiseAcc = 0.3
        accRnd   = noiseAcc*(rd.random()-0.5)

        v0eff    = min(self.v0, self.speedlimit, self.speedmax)
        v0eff   *= self.alpha_v0

        if v < v0eff:
            accFree = self.a*(1-np.power(v/v0eff,4))
        else:
            accFree = self.a*(1-v/v0eff)
        sstar  = self.s0 + max(0, v*self.T+0.5*v*(v-vl)/np.sqrt(self.a*self.b))
        accInt = -self.a*np.power(sstar/max(s,self.s0),2)

        if v0eff<0.00001:
            return 0
        else:
            return max(-self.bmax, accFree + accInt + accRnd)
```
Si j'ai crée un objet et je n'ai pas juste codé une fonction servant à calculer l'accélération de ma voiture à un instant t+dt, c'est parce que le modèle doit être initialisé avec des constantes. En utilisant un objet, je pouvais du coup faire du code un peu plus facilement réutilisable.

## Application numérique
Bon, maintenant qu'on a un modèle fonctionnel et qu'on sait comment calculer l'accélération d'une voiture, un peu de théorie:  
Afin de calculer depuis l'accélération la vitesse et la position de la voiture, il faut les intégrer. Pour se faire, il y a deux méthodes possibles. Soit on utilise la méthode de Runge-Kutta à l'ordre 4 (elle se rapproche beaucoup de la réalité), soit on fait une intégration simpliste en disant la chose suivante:  
```
v = a * t + v0
x = 1/2 * a * t ^ 2 + v0 * t + x0
```
x0 et v0 étant les positions et vitesses à l'instant t.

Pour utiliser la méthode RK4, vous pouvez utiliser ce morceau de code:
```python
    def rK4(self, a, fa, hs):
        a1 = fa(a)*hs
        ak = a + a1*0.5
        a2 = fa(ak)*hs
        ak = a + a2*0.5
        a3 = fa(ak)*hs
        ak = a + a3
        a4 = fa(ak)*hs
        a  = a + (a1 + 2*(a2 + a3) + a4)/6
        return a
```
Et voilà qui conclut mon petit billet sur la simulation du trafic routier en python !
