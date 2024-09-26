import React from 'react';
import ReactDOM from 'react-dom/client'; // Assure-toi que c'est la bonne importation selon ta version de React
import { Provider } from 'react-redux'; // Importer le Provider
import store from './store'; // Chemin vers ton fichier store.js
import App from './App'; // Importer le composant App

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}> {/* Enveloppe App avec Provider et passe le store */}
    <App />
  </Provider>
);
