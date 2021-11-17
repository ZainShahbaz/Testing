import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import Clock from './Clock';
import Tick from './Clock';

function Welcome(props) {
// const element=(
//   <div>
// <h2>Now Time is {new Date().toLocaleTimeString()}</h2>
//   </div>
return(
<div>
<h1>Hi! my name is {props.value}</h1>
</div>)
}







ReactDOM.render(
  <React.StrictMode>
     {/* <App /> */}
  
<Welcome value="Zain"/>
<Welcome value="Sheikh"/>
<Welcome value="MergeStack"/>
{/* <Clock/> */}
<Tick/>
  </React.StrictMode>,
  document.getElementById('root')
);
// setInterval(onlyT,1000);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
