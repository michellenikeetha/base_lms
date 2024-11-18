// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from "./components/LandingPage";
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';
import ForgotPassword from './components/ForgotPassword';
import CoursesPage from './components/CoursesPage';
import ProfilePage from './components/ProfilePage';
import AssignmentsPage from './components/AssignmentsPage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/assignments" element={<AssignmentsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
