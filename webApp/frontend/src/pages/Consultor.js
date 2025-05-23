import React from 'react';
import './Consultor.css';
import { FiArrowLeft, FiUser } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Consultor = () => {
  const navigate = useNavigate();

  return (
    <div className="consultor-container">
      <header className="consultor-header">
        <button className="back-btn" onClick={() => navigate(-1)}>
          <FiArrowLeft />
        </button>
        <h2>Consultor</h2>
        <FiUser className="perfil-icon" />
      </header>

      <main className="consultor-main">
        <div className="mensagem-balao">
          <p>
            Olá! É um prazer ter você por aqui! <br />
            Sobre o que gostaria de saber?
          </p>
        </div>

        <button className="botao-pergunta">Tire sua dúvida aqui</button>
      </main>

      <footer className="consultor-footer">
        <FaWhatsapp className="icone-whatsapp" />
        <span>Prefiro falar pelo Whatsapp</span>
      </footer>
    </div>
  );
};

export default Consultor;
