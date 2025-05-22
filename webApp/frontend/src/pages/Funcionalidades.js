// src/pages/Funcionalidades.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Funcionalidades.css';
import { FiArrowLeft, FiMessageCircle } from 'react-icons/fi';
import { FaHandshake, FaHeart, FaQuestion, FaUser, FaChartLine, FaProjectDiagram } from 'react-icons/fa';
import { SiGooglesheets } from 'react-icons/si';

const Funcionalidades = () => {
  const navigate = useNavigate();

  return (
    <div className="func-container">
      <div className="header">
        <button className="back-btn" onClick={() => navigate(-1)}><FiArrowLeft /></button>
        <h2>Funcionalidades</h2>
      </div>

      <div className="welcome">
        <p>Olá!</p>
        <strong>Seja bem-vindo a W1 GO!</strong>
      </div>

      <div className="icons-grid">
        <div className="icon-btn yellow" onClick={() => navigate('/criar-holding')}>
          <FaHandshake size={30} />
          <span>Criar Holding</span>
        </div>
        <div className="icon-btn orange" onClick={() => navigate('/tokens-afetivos')}>
          <FaHeart size={30} />
          <span>Tokens afetivos</span>
        </div>
        <div className="icon-btn yellow" onClick={() => navigate('/duvidas')}>
          <FaQuestion size={30} />
          <span>Dúvidas</span>
        </div>
        <div className="icon-btn orange" onClick={() => navigate('/meu-perfil')}>
          <FaUser size={30} />
          <span>Meu perfil</span>
        </div>
        <div className="icon-btn yellow" onClick={() => navigate('/dashboards')}>
          <FaChartLine size={30} />
          <span>Dashboard</span>
        </div>
        <div className="icon-btn orange" onClick={() => navigate('/smart-contracts')}>
          <FaProjectDiagram size={30} />
          <span>Smart contracts</span>
        </div>
      </div>

      <div className="bottom-buttons">
        <button className="consultor" onClick={() => navigate('/consultor')}>
          Fale com o seu consultor <FiMessageCircle />
        </button>
        <button className="financeiro" onClick={() => navigate('/planejamento-financeiro')}>
          Planejamento financeiro <SiGooglesheets />
        </button>
      </div>
    </div>
  );
};

export default Funcionalidades;
