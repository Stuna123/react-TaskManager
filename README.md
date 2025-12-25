# TaskMate - Task Management App (React)

## Description

TaskMate est une application de gestion de tâches développée avec React.js qui est mon premier projet en React.

Elle permet d’ajouter, modifier, supprimer et organiser des tâches avec une interface simple, rapide et responsive.

Ce projet a été conçu dans un but pédagogique afin de maîtriser :
-   React (state, props)
-   CRUD 
-   Logique
-   UI Responsive
-   Bonnes pratiques frontend

------

## Fonctionnalités

__CRUD complet__
- Ajouter une tâche
- Modifier une tâche
- Supprimer une tâche
- Bouton "Clear All" pour supprimer toutes les tâches

__Sauvegarde locale__
- Les tâches sont stockées dans le localStorage
- Les données persistent après rafraîchissement

__Recherche__
- Filtrage dynamique des tâches via un champ de recherche

__Drag & Drop__
- Réorganisation des tâches par glisser-déposer

__Tri__
- Try dynamique par ordre croissant

__UI & UX__
- Interface claire et moderne
- Responsive (mobile, tablette, desktop)
- Boutons interactifs
- Feedback utilisateur (confirmations, interactions)

------

## Concepts utilisés
- `useState`
- Props (parent > enfant)
- Gestion des événements
- Controlled inputs
- Condition rendering
- `map()`, `filter()`, `sort()`
- LocalStorage
- Drag & Drop natif
- Gestion des formulaires
- Architecture en composants

------

## Structure du projet
src/
│
├── components/
│   ├── Header.js
│   ├── AddTask.js
│   └── ShowTask.js
│
├── assets/
│   └── default.png
│
├── App.js
├── index.js
├── App.css
└── index.css

------

## Fonctionnement général
1.  L'utilisateur ajoute une tâche
2.  La tâche est stockée dans un state global
3.  Les données sont sauvegardées dans le localStorage
4.  L'utilisteur peut :
    -   Modifier une tâche
    -   Supprimer une tâche
    -   Supprimer toutes les tâches
    -   Tri dynamiquement les tâches
5.  L'interface s'adapte automatiquement aux petits écrans 

------

## Responsive
- Compatible mobile (jusqu'à 240px)
- Interface fluide
- Composants adaptatifs
- Expérience optimisée pour smartphone

------

## Technologies utilisées
- React JS
- JavaScript (ES6+)
- HTML5 / CSS3
- Bootstrap Icons
- LocalStorage

------

## Objectif du projet
- Comprendre le fonctionnement réel d'un CRUD React
- Apprendre à structurer une application proprement
- Travailler la logique plutôt que les librairies