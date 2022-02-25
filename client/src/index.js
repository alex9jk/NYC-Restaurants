import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes,Route,Link } from "react-router-dom";
import Home from "./containers/Home";
import PrivateRoute from "./PrivateRoute"
import Landing from "./containers/Landing"
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/home" element={<Landing/>}>

        </Route>
        <Route path="/map"
          element={
            <PrivateRoute>
              <App />
            </PrivateRoute>
          } />
        {/* <Route path="/" element={<Home/>}></Route> */}
      {/* <Route exact path='/' element={<PrivateRoute/>}>
            <Route exact path='/' element={<Home/>}/>
      </Route> */}
        {/* <Route path="/" element={<Home/>}></Route>
        <Route path="/map" > */}
        
      </Routes>
    
    </BrowserRouter>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
