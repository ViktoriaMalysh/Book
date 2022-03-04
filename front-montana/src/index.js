import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

import App from "./route";
import { rootReducers } from "./redux/combineReducers";
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'

const store = createStore(rootReducers, compose(
  applyMiddleware(thunk))
)

ReactDOM.render(
  <div className=''>
    <Provider store = {store}>
      <App/>
    </Provider>
  </div>,
  document.getElementById('root')
);


reportWebVitals();
