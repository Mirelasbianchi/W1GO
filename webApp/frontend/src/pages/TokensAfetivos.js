import React from 'react';
import { useNavigate } from 'react-router-dom';
import './TokensAfetivos.css';
import { FiArrowLeft } from 'react-icons/fi';
import { FaHeart } from 'react-icons/fa';
import ip from '../assets/instituto-ponte-logo.png';
import casa1 from '../assets/casa1.png';
import anel from '../assets/anel.png';
import casa2 from '../assets/casa2.png';


const TokensAfetivos = () => {
  const navigate = useNavigate();

  return (
    <div className="tokens-container">
      <div className="header">
        <button className="back-btn" onClick={() => navigate(-1)}><FiArrowLeft /></button>
        <h2>Tokens afetivos</h2>
      </div>

      <div className="content">
        <h3>Seu patrimônio com <span className="highlight">SIGNIFICADO</span></h3>
        <p className="subtext">Invista no que realmente importa: <br />memórias e causas sociais</p>

        <button className="btn-secondary">Seus patrimônios afetivos</button>

        <div className="patrimonios">
          <div className="item">
            <FaHeart className="heart-icon" />
            <FaHeart className="heart-icon" />
            <img src={casa1} alt="Casa 1" />
          </div>
          <div className="item">
            <FaHeart className="heart-icon" />
            <img src={anel} alt="Anel" />
          </div>
          <div className="item">
            <FaHeart className="heart-icon" />
            <img src={casa2} alt="Casa 2" />
          </div>
        </div>

        <button className="btn-secondary">Impacto social</button>

        <div className="instituto-card">
          <div className="instituto-info">
            <p><strong>INSTITUTO PONTE</strong><br />
              ONG com o propósito de ser a PONTE para dar a oportunidade de educação de qualidade para jovens talentosos de famílias de baixa renda.
            </p>
          </div>
          <p className="contribuicao">
            Com <strong>900</strong> reais você apoia um aluno
          </p>
          <button className="btn-primary">Aumentar contribuição</button>
        </div>
      </div>
    </div>
  );
};

export default TokensAfetivos;
