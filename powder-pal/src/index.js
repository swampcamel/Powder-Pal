import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { HashRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';


const render = (Component) => {
  ReactDOM.render(
  <HashRouter>
    <Provider>
      <App />
    </Provider>
  </HashRouter>,
  document.getElementById('root'));
}
render(App);
