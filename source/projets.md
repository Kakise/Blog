---
title: Projets
layout: page
---
# Mes Projets

Sur cette page vous pourrez trouver une liste non-exhaustive de mes projets en cours et finis.

# En Cours

## [_LaSimulation_](https://github.com/Kakise/LaSimulation)

C'est un petit projet fort sympathique dans lequel je fais une tentative d'implémentation de l'_Intelligent Driver Model_ en python (inédit à ce que je sache) afin d'avoir un moyen plutôt simple de pouvoir faire des simulations de trafic et de congestion du trafic routier. Pour l'instant ça ne ressemble pas à grand chose mais c'est en bonne voie.

$$\frac{dv}{dt} = a (1 - \frac{v}{v_{0}}^{\delta} - \frac{s^{\*}(v, \Delta v)}{s}^{2} ) $$  
*Equation de calcul de l’accélération.*

```python
def simulation(t,dt,end):
    CarArr = [mdl.Vehicle(1, 1, 100, 0, 130/3.6, "car"), mdl.Vehicle(1, 1, 200, 0, 130/3.6, "car")]
    while t<end:
        t+=dt
        if rd.random() < 1/20:
            CarArr = [mdl.Vehicle(1, 1, 0, 0, 130/3.6, "car")] + CarArr
        for i in range(len(CarArr)-1):
            CarArr[i].acc   = CarModel.acceleration(CarArr[i+1].u-CarArr[i].u, CarArr[i].speed, CarArr[i+1].speed, CarArr[i+1].acc)
            CarArr[i].speed = CarArr[i].speed + CarArr[i].acc * dt
            CarArr[i].u     = CarArr[i].u + CarArr[i].speed * dt + 1/2 * CarArr[i].acc * (dt**2)
        # Handle last car separately
        CarArr[len(CarArr)-1].acc   = CarModel.acceleration(10**10, CarArr[i].speed, 10**10, 10**10)
        CarArr[len(CarArr)-1].speed = CarArr[i].speed + CarArr[i].acc * dt
        CarArr[len(CarArr)-1].u     = CarArr[i].u + CarArr[i].speed * dt + 1/2 * CarArr[i].acc * (dt**2)
    for car in CarArr:
        print (car.u)
```
*Code pour une simulation sur un intervalle de temps donné.*

La simulation est considérée comme assez proche de la réalité uniquement lorsque dt est assez petit. C'est à dire dt < 0.8

L'interface graphique est faite avec Tkinter, le reste de la simulation est inspirée de cet article: <http://traffic-simulation.de/IDM.html>.
