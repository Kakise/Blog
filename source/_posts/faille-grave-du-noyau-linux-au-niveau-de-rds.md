---
title: Faille grave du noyau Linux au niveau de RDS !
date: '2019-05-23'
author: Kakise
tags:
  - news
  - sécurité
  - linux
layout: post
---
Récemment, une faille Linux affectant tous les noyaux de version inférieure à la version 5.0.8 a été découverte. Le plus gros problème est qu'elle peut être exploitée à distance. Elle affecte le protocole RDS (_Reliable Datagram Sockets_) pour le protocole TCP. Elle affecte les distributions Linux majeures telles que: Ubuntu, Red Hat, SUSE ou encore Debian.

Par ailleurs, Red Hat, après avoir analysé la faille déclarent:

> « Une faille a été trouvée dans l'implémentation RDS sur le protocol TCP du noyau Linux. Un système sur lequel le module de noyau rds_tcp est chargé (soit par chargement automatique via un processus local exécutant listen(), soit par chargement manuel) pourrait éventuellement entraîner une utilisation après libération. Cela peut causer une corruption de la mémoire et une augmentation des privilèges. »

Tandis que l'équipe de sécurité d'Ubuntu (Canonical), se veut plus mesurée et rassurante et précise qu'il n'y a eu aucune preuve d'exploitabilité de cette faille à distance. De plus, selon-eux, la mise sur liste noir du module `rds.ko` serait suffisante pour se protéger de cette faille. Ce qui est chose faite par défaut depuis la version 14.04 LTS d'Ubuntu par ailleurs.

Des avis de sécurité ont été émis pour chacune de ces quatre distributions Linux et le problème est en train d'être corrigé. De plus, [les experts assurent que la complexité de l'attaque est très élevée](https://nvd.nist.gov/vuln/detail/CVE-2019-11815#VulnChangeHistorySection) donc les chances d'être attaqué par cette faille sont minces.

En tout cas le problème a été corrigé dans la version 5.0.8 du noyau Linux, alors il vaut mieux se mettre à jour rapidement.
