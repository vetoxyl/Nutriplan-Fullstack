import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/Onboard.css'; 
import Homepage from './pages/Homepage/Homepage';
import Onboarding from './pages/Onboarding/Onboard';
import SignInForm from './pages/SignIn/SignInForm';
import SignUpForm from './pages/SignIn/SignUpForm';
import { AuthProvider } from './contexts/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import RecipeCard from './pages/Shop/RecipeCard';
import './styles/SignGen.css';
import './styles/SignIn.css';
import './styles/SignUp.css';
import './styles/RecipeCard.css';
import './styles/MealCard.css';

const App = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Navigate to="/signin" replace />} />
        <Route path="/signin" element={<SignInForm />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route 
          path="/Welcome" 
          element={
            <ProtectedRoute>
              <Onboarding />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/Homepage" 
          element={
            <ProtectedRoute>
              <Homepage />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/Shop" 
          element={
            <ProtectedRoute>
              <RecipeCard />
            </ProtectedRoute>
          } 
        /> 
        <Route path="*" element={<Navigate to="/signin" replace />} />
      </Routes>
    </AuthProvider>
  );
};

export default App;