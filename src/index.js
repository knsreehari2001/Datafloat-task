import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import App from './App';
import initDatabase from './db';

initDatabase().then(() => {
  ReactDOM.render(<App />, document.getElementById('root'));
});
