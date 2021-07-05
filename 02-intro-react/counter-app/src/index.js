import React from 'react';
import ReactDOM from 'react-dom';
//import PrimeraApp from './PrimeraApp';
import CounterApp from './CounterApp';
import './index.css';
import reportWebVitals from './reportWebVitals';
const valor = parseInt(25062021);
const divRoot = document.querySelector('#root');
//ReactDOM.render(<PrimeraApp nombre='Hello, I am Robert'/>, divRoot);
ReactDOM.render(<CounterApp value = {valor} />, divRoot);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
