Questo file di readme, è stato scritto utilizzando il linguaggio [Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet#links)


# AngularJs_client_examaple
Esempio di client in Angular 1, con: 
- routing per cambiare le pagine
- esempio di utilizzo 2-ways binding
- autenticazione utente
- promesse con il modello "q"
- esempio di servizio, per salvare l'utente corrente


# Server di Riferimento in NodeJs
- [link al repo](https://github.com/De-Lac/NodeJs_server_examaple)


# ChangeLog



# Struttura file del server
```
--- index.html               //file principale contentente tutte le dipendenze .js
--+ html
  |---- db-utilities.js      //funzioni condivise tra tutti, per interagire con il db
  |--+ home
     |--- home.html          //pagina con esempi di interazione
  |--+ contact
     |--- contact.html       //pagina vuota
  |--+ about  
     |--- about.html         //pagina vuota
--+ js     
     |--- scripts.js         //regole di routing delle pagine
  |--+ services       
     |--- currentUser.js     // servizio responsabile a autenticazione e gestione utente corrente
  |--+ home            
     |--- home.js            // controller della pagina home.html
```

Prima di tentare il login, dovrete registrare un utente. Non essendo ancora stata implemenata la registrazione lato client, dovrete registrare un utente invocando 'a mano' (con postman ad esempio) la route di registrazione  
