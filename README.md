# Knowledge-exercises

Différents exercices pour manipuler Javascript.

### Installation
- cloner le repository,  
- se placer dans le dossier,  
- lancer `yarn install` ou `npm install` (selon le gestionnaire que tu as) pour installer les dépendances,
- pour lancer le serveur faire `yarn dev` ou `npm dev`,

### Utilisation
Ce repo étant ouvert et utilisé par différente personne il est important de le garder propre.
Du coup, avant de faire quoi que ce soit, je t'invite à créer une branche à ton nom sur laquelle tu effectueras ton travail.
Tu pourras ainsi pusher tes résultats et en garder une trace sans impacter les autres.


### Exercices JS
Il existe différents exercices d'algo.  

Pour réaliser les exercices :
- se rendre dans src/Js-algo  
- choisir le dossier que vous souhaitez  
- compléter la fonction en répondant à la consigne   
- pour vérifier si l'exercice est réussi, lancer la commande `yarn test + {le nom du ficher}` ou  `npm test + {le nom du ficher}` . Cette commande lancera le test lié à cet exercice. Si le test passe, l'exercice est réussi. Sinon il faut modifier la fonction. A chaque modification du code il faut relancer le test s'il ne se lance pas tout seul.

>exemple : `yarn test filter3` ou `npm test filter3`

### Erreurs
Si lors du lancement d'un test une erreur de ce type apparait : `Error [ERR_UNSUPPORTED_ESM_URL_SCHEME]: Only file and data URLs are supported by the default ESM loader` vérifier que la version de node n'est pas trop ancienne (passer la version à la 16). 