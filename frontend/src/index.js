import React from 'react';
import ReactDOM from 'react-dom';

import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';

// import reducer from './store/reducer';
// import { createStore, applyMiddleware} from 'redux';
// import thunkMiddleWare from 'redux-thunk';
import App from './App';

import './index.css';

// const store = createStore(reducer, applyMiddleware(thunkMiddleWare))

const app = (
    <BrowserRouter>
      <App />
    </BrowserRouter>
)

ReactDOM.render(app ,document.getElementById('root'));


reportWebVitals();
