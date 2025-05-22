// frontend/src/pages/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import logo2 from '../assets/logo2.png';
import medal from '../assets/medal.png'; // Supondo que você tenha esse ícone

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [erro, setErro] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const resposta = await fetch('http://localhost:3001/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const dados = await resposta.json();

      if (resposta.ok) {
        navigate('/funcionalidades');
      } else {
        setErro(dados.mensagem);
      }
    } catch (err) {
      setErro('Erro ao conectar com o servidor.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-header">
        <button onClick={() => navigate('/')} className="back-button">←</button>
        <h2>Login</h2>
      </div>

      <div className="login-content">
        <p>Para o seu login, preencha:</p>
        <input
          type="email"
          placeholder="Email cadastrado"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {erro && <a className="erro">{erro}</a>}
        <button className='login-btn' onClick={handleLogin}>Continuar</button>
      </div>

      <div className="login-footer">
        <img src={medal} alt="Medalha" className="medal" />
        <div>
          <img src={logo2} alt="Logo2" className="footer-logo" />
          <p className="num1">A número 1<br /><strong>do BRASIL</strong></p>
        </div>
      </div>
    </div>
  );
};

export default Login;