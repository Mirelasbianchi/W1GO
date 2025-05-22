// frontend/src/pages/Home.js
import React from 'react';
import './Home.css';
import {useNavigate} from 'react-router-dom';
import bgImage from '../assets/inicial-imagem.png';
import logo from '../assets/logo.png';

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="home-container" style={{ backgroundImage: `url(${bgImage})` }}>
        <img src={logo} alt='Logo' className="logo" />
      <div className="content">
        <button className="btn enter" onClick={() => navigate('/login')}>Entrar</button>
        <button className="btn register">Cadastrar</button>
      </div>
    </div>
  );
};

export default Home;
