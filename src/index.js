import profile from './profile.svg';
import logo from './FrontendAssets/logo.svg';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <h1> Hello World!!</h1>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

ReactDOM.render(
  <div class="topnav">
  <c>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src={logo} width="50" height="50"/></c>
  <b>Intugine</b>
  <a><img src={profile}/></a>
  <a>Transporters</a>
  <a>Brands</a>
  <a class="active">Home</a>
</div>,
  document.getElementById("root"));
