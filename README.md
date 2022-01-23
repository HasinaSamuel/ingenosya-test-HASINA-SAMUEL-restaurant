Développement d'une application  GESTION D’UN RESTAURANT

À propos du projet:

L'objectif est de concevoir et réaliser une application gestion de restaurant qui permet à un utilisateur de : saisir les éléments constituants de chaque repas; de connaître la quantité d’éléments nécessaires pour fabriquer un nombre défini de repas, de connaître les éléments manquants.
Suivant ces objectifs, voici quelques règles de gestions utilisées:
un type ingrédient peut utiliser dans un ou plusieurs recette. 
Chaque menu a des quantités d'ingrédients fixes utilisées pour la fabrication .
Des menus seront fabriqués si les quantités des ingrédients nécessaires qui les constituent sont disponible dans le stock . 
Les quantités des ingrédients dans la table des ingrédients diminuent pour chaque validation fabrication menu.
Les quantités des menus fabriqués qui seront mises en vente sont enregistrés dans la table ProduitFabrique.
La quantité d'un menu dans ProduitFabrique diminue pour chaque vente effectuée par un client.
La quantité d'un menu dans ProduitFabrique augmente pour chaque validation fabrication menu.


Installation

Pour que le projet soit opérationnel sur votre ordinateur local, procédez comme suit :
1. cloner avec l'url donnée en utilisant commande => git clone https://github.com/................
2. Taper cd Application-front-end puis Exécutez npm install, pour installer toutes les dépendances nécessaires
3. Maintenant pour le backend, le dossier PHP, placez le dossier dans C:\wamp64\www ; vous avez besoin que wamp soit installé sur votre système.
4. Récupérez le fichier  conception.sql 
5. Dans la base de données mysql, creer la base de données nommée conception, puis executer dans phpmyadmin le script conception.sql afin d'avoir les tables et les données utilisés. 
6. Deplacer dans la répertoire du frontend, exécutez  la commande npm start

Vous pouvez naviguer  au http://localhost:4202/

Technologies utilisées
Frontend : Framewor Angular 13.1.4
Backend : PHP CodeIgniter 4 (version PHP plus de  7.3)
Base de données  MySQL.
Angular Material.
Visual Studio Code (IDE).
