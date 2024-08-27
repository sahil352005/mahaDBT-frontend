import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Profile from './Profile';
import Register from './Register'
import Dashboard from "./Dashboard";

import "./Assets/scss/hope-ui.scss"
import "./Assets/scss/custom.scss"
import "./Assets/scss/dark.scss"
import "./Assets/scss/rtl.scss"
import "./Assets/scss/customizer.scss"

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
