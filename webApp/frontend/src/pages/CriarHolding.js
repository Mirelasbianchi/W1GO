import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CriarHolding.css';
import { FiArrowLeft } from 'react-icons/fi';
import { FaBullseye, FaLock } from 'react-icons/fa';
import robo from '../assets/robo.png'; // Supondo que a imagem da Zetta esteja em /assets

const CriarHolding = () => {
  const navigate = useNavigate();

  return (
    <div className="holding-container">
      <div className="holding-header">
        <button className="back-btn" onClick={() => navigate(-1)}><FiArrowLeft /></button>
        <h2>Crie sua holding</h2>
      </div>

      <div className="holding-content">
        <p className="subtitle">Siga o caminho abaixo</p>

        <div className="step-wrapper">
          <div className="step">
            <span className="label">Objetivo da holding</span>
            <div className="circle yellow" onClick={() => navigate('/objetivo-holding')}>
              <FaBullseye size={30} />
            </div>
          </div>

          {[...Array(5)].map((_, index) => (
            <div key={index} className="step">
              <div className="circle locked">
                <FaLock size={24} />
              </div>
            </div>
          ))}
        </div>

        <div className="zetta-box">
          <img src={robo} alt="Assistente Zetta" className="zetta-img" />
          <p>Dúvidas?<br /><strong>Fale com a Zetta</strong></p>
        </div>
      </div>
    </div>
  );
};

export default CriarHolding;

