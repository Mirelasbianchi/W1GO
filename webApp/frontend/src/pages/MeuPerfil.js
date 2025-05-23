import React from 'react';
import './MeuPerfil.css';
import { FiArrowLeft } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const MeuPerfil = () => {
  const navigate = useNavigate();

  return (
    <div className="perfil-container">
      <div className="perfil-header">
        <button className="back-btn" onClick={() => navigate('/funcionalidades')}>
          <FiArrowLeft />
        </button>
        <h2>Meu perfil</h2>
      </div>

      <div className="perfil-info">
        <div className="perfil-avatar">
          <div className="avatar-circle">👤</div>
          <div className="perfil-dados">
            <p><strong>Nome e sobrenome</strong></p>
            <p>Nacionalidade</p>
            <p>Email</p>
          </div>
        </div>
      </div>

      <div className="linha-tempo">
        <h3>Minha linha do tempo</h3>
        <div className="linha-etapas">
          {[1, 2, 3, 4, 5].map((num, index) => (
            <div key={index} className={`etapa ${num <= 2 ? 'ativa' : ''}`}>
              <span>{num}</span>
              <div className="bolinha" />
            </div>
          ))}
        </div>

        <ul className="descricao-etapas">
          <li>1 - Entrada no aplicativo</li>
          <li>2 - Envio dos documentos</li>
          <li>3 - Registro dos patrimônios</li>
          <li>4 - Criação da holding</li>
          <li>5 - Acompanhamento das rendas</li>
        </ul>
      </div>
    </div>
  );
};

export default MeuPerfil;
