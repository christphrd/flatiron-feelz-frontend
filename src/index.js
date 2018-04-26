import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom'; //can make a login component
//import {rootReducer} from './reducers/rootReducer';

//const store = createStore(rootReducer) Needs a reducer/rootReducer is a placeholder
//console.log('store', store)
//console.log('state is', store.getState())

ReactDOM.render(
  //<Provider store={store}>
  <Provider>
    <Router>
      <App />
    </Router>
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
