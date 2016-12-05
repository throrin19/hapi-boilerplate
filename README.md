# hapi-boilerplate
Boilerplate Hapi utilisé pour les TP Node.JS des Licence pro

# Lancement

```
nodejs server.js
```

**Attention** : En fonction de la valeur de votre `NODE_ENV`, le serveur peut avoir une configuration différente.

Ensuite, rendez vous sur :

```
http://0.0.0.0:3000
```

et vous devriez avoir :

```json
{"result":"vous êtes connectés"}
```

# Structure du projet

```
Hapi-boilerplate
├── app                         # Partie applicative de l'API (endpoints, handlers, plugins, ...)
│   ├── endpoints               # Entrées des traitements par les requêtes http
│   │   └── default.js          # Entrées de toutes les requêtes sur `/`. Utilisées pour vérifier l'état du service
│   ├── handlers                # Traitement des différentes entrées
│   ├── plugins                 # Plugins internes au projet
│   └── handlers.js             # ficher permettant de charger tous les handlers
├── config                      # Contient toute la partie Configuration du projet (plugins à charger, routes d'écoute, ...)
│   ├── environments            # Dossier des différentes variables d'environnement pour les réglages système
│   │   ├── all.js              # variables finales avec celles en commun + celles correspondant à l'environnement actuel
│   │   ├── development.js      # variables pour le dev
│   │   ├── local.js            # variables pour le local
│   │   └── production.js       # variables pour la production
│   ├── manifest                # répertoire contenant les confgurations pour les différentes parties du manifest
│   │   ├── plugins.js          # chargement des plugins système et ceux internes au projet
│   │   ├── routes.js           # chargement des différentes routes
│   │   └── server.js           # configurations du serveur
│   └── manifest.js             # compoosition du manifest final pour l'initialisation d'Hapi
├── node_modules                # Dossier de toutes les librairies externes récupérées par NPM
├── package.json
├── readme.md
└── server.js                   # fichier de lancement du projet
```