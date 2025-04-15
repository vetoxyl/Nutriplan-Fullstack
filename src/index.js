import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css'; 
import Homepage from './Homepage';
import Carousel from './Carousel';
import Onboarding from './Onboard';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Onboarding />} />
        <Route path="/home" element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
