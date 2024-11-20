import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';



import { BrowserRouter, Routes, Route } from "react-router-dom";

import WhiteNoisePP from './pages/whiteNoisePP';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
       
      <Route path="/" element={<WhiteNoisePP />} ></Route>
      <Route path="white-noise-privacy-policy" element={<WhiteNoisePP />} ></Route>

   
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />); 

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
