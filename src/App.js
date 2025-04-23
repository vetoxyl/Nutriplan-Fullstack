import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/Onboard.css'; 
import Homepage from './pages/Homepage/Homepage';
import Onboarding from './pages/Onboarding/Onboard';
import SignInForm from './pages/SignIn/SignInForm';
import SignUpForm from './pages/SignIn/SignUpForm';
import './styles/SignGen.css';
import './styles/SignIn.css';
import './styles/SignUp.css';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/signin" replace />} />
      <Route path="/signin" element={<SignInForm />} />
      <Route path="/signup" element={<SignUpForm />} />
      <Route path="/Welcome" element={<Onboarding />} />
      <Route path="/Homepage" element={<Homepage />} />
      <Route path="*" element={<Navigate to="/signin" replace />} />
  </Routes>
  );
};

export default App;
