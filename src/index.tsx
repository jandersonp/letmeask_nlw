import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//Calling file firebase.ts
import './services/firebase';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


