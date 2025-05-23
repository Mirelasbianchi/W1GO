// src/App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login'; 
import Funcionalidades from './pages/Funcionalidades';
import TokensAfetivos from './pages/TokensAfetivos';
import Dashboards from './pages/Dashboards';
import CriarHolding from './pages/CriarHolding';
import ObjetivoHolding from './pages/ObjetivoHolding';
import MeuPerfil from './pages/MeuPerfil';
import Consultor from './pages/Consultor';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/funcionalidades" element={<Funcionalidades />} />
        <Route path="/tokens-afetivos" element={<TokensAfetivos />} />
        <Route path="/dashboards" element={<Dashboards />} />
        <Route path="/criar-holding" element={<CriarHolding />} />
        <Route path='/objetivo-holding' element={<ObjetivoHolding />} />
        <Route path='/meu-perfil' element={<MeuPerfil />} />
        <Route path='/consultor' element={<Consultor />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
