import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ObjetivoHolding.css';
import { FiArrowLeft } from 'react-icons/fi';

const ObjetivoHolding = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    construir: '',
    ativos: '',
    controle: '',
    investimento: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleNext = () => {
    console.log('Dados selecionados:', form);
    // salvar no contexto ou backend
    navigate('/criar-holding'); 
  };

  return (
    <div className="objetivo-container">
      <div className="objetivo-header">
        <button className="back-btn" onClick={() => navigate('/criar-holding')}><FiArrowLeft /></button>
        <h2>Objetivo</h2>
      </div>

      <div className="objetivo-content">
        <h3>Responda as perguntas abaixo:</h3>

        <label>O que você deseja construir?</label>
        <select name="construir" value={form.construir} onChange={handleChange}>
          <option value="">Selecione a melhor opção</option>
          <option value="Holding familiar">Holding familiar</option>
          <option value="Holding patrimonial">Holding patrimonial</option>
          <option value="Holding de investimentos">Holding de investimentos</option>
        </select>

        <label>Quais ativos serão administrados?</label>
        <select name="ativos" value={form.ativos} onChange={handleChange}>
          <option value="">Selecione a melhor opção</option>
          <option value="Imóveis">Imóveis</option>
          <option value="Aplicações financeiras">Aplicações financeiras</option>
          <option value="Empresas e ações">Empresas e ações</option>
        </select>

        <label>Quem terá o controle de sua holding?</label>
        <select name="controle" value={form.controle} onChange={handleChange}>
          <option value="">Selecione a melhor opção</option>
          <option value="Apenas o fundador">Apenas o fundador</option>
          <option value="Fundador e herdeiros">Fundador e herdeiros</option>
          <option value="Conselho de gestão">Conselho de gestão</option>
        </select>

        <label>Quanto você está disposto a investir?</label>
        <select name="investimento" value={form.investimento} onChange={handleChange}>
          <option value="">Selecione a melhor opção</option>
          <option value="Até 100 mil">Até 100 mil</option>
          <option value="100 mil a 500 mil">100 mil a 500 mil</option>
          <option value="Acima de 500 mil">Acima de 500 mil</option>
        </select>

        <button className="next-btn" onClick={handleNext}>Próximo</button>
      </div>
    </div>
  );
};

export default ObjetivoHolding;
