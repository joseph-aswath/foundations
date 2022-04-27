import React from 'react';
import {Component} from 'react';
import ReactDOM from 'react-dom';
import  App from './app.js';
import './index.css';
//import * as serviceWorker from './serviceWorker';
/*************************************************************************************** */
ReactDOM.render(
    <App />,
    document.getElementById('root')
);
/************************************************************************************** */
//serviceWorker.register(); -> shows error if you release the comment !!