// src/App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login'; 
import Funcionalidades from './pages/Funcionalidades';
import TokensAfetivos from './pages/TokensAfetivos';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/funcionalidades" element={<Funcionalidades />} />
        <Route path="/tokens-afetivos" element={<TokensAfetivos />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
