import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// é aqui que faço o link entre o html e os componentes do js
// primeiro argumento -> react.strictmode
// segundo arg -> root
// creating a component
// we cant return more than one thing
// so we create one thing that has more than one thing :v
    
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

/**
import React from 'react';
import ReactDOM from 'react-dom';

function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString('pt', { hour12: true })}.</h2>
    </div>
  );
  ReactDOM.render(element, document.getElementById('root'));
}

setInterval(tick, 1000);
 */