import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from 'react-router-dom'; //can make a login component
import thunk from "redux-thunk";
//Chatroom. websocket
import { ActionCableProvider } from 'react-actioncable-provider';
import { API_WS_ROOT } from './constants';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import usersReducer from './reducers/usersReducer';

require('dotenv').config()
//import {rootReducer} from './reducers/rootReducer';

//const store = createStore(rootReducer) Needs a reducer/rootReducer is a placeholder
//console.log('store', store)
//console.log('state is', store.getState())

const rootReducer = combineReducers({ usersReducer });

const store = createStore(rootReducer, applyMiddleware(thunk));

console.log("my store:", store)
console.log("state is", store.getState())
ReactDOM.render(
  <Provider store={store}>
  {/* <Provider> */}
    <Router>
      <ActionCableProvider url={API_WS_ROOT}> {/*websocket stuff*/}
        <App />
      </ActionCableProvider>
    </Router>
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
