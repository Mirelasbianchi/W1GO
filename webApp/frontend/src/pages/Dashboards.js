import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboards.css';
import { FiArrowLeft } from 'react-icons/fi';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';

const Dashboard = () => {
  const navigate = useNavigate();

  const bensData = [
    { name: '1', valor: 100 },
    { name: '2', valor: 80 },
    { name: '3', valor: 90 },
    { name: '4', valor: 95 }
  ];

  const sociosData = [
    { name: 'Felipe', value: 30 },
    { name: 'Fernanda', value: 20 },
    { name: 'Maria', value: 10 },
    { name: 'Estevão', value: 12 },
    { name: 'Tobias', value: 28 }
  ];

  const coresSocios = ['#3f0fb7', '#5b2dd1', '#7a4ef0', '#a08dff', '#c4bfff'];

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <button className="back-btn" onClick={() => navigate(-1)}><FiArrowLeft /></button>
        <h2>Dashboard</h2>
      </div>

      <div className="dropdown-area">
        <select className="holding-select">
          <option>Holding patrimonial 1</option>
          {/* outras opções se necessário */}
        </select>
      </div>

      <div className="cards">
        <div className="card small">
          <p>Imóveis registrados</p>
          <strong>12 <span>unidades</span></strong>
        </div>
        <div className="card small">
          <p>Receita passiva</p>
          <strong>38 mil <span>em maio</span></strong>
        </div>
        <div className="card medium">
          <p>Distribuição dos bens</p>
          <ul className="legend">
            <li>1 - Aplicações Financeiras</li>
            <li>2 - Cotas de empresas</li>
            <li>3 - Imóveis</li>
            <li>4 - Veículos</li>
          </ul>
          <ResponsiveContainer width="100%" height={100}>
            <BarChart data={bensData}>
              <XAxis dataKey="name" hide />
              <YAxis hide />
              <Tooltip />
              <Bar dataKey="valor" fill="#d4a800" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="card small">
          <p>Rendimento médio dos ativos</p>
          <strong>6% <span>ao ano</span></strong>
          <p>Valor total: <strong>2 mi</strong></p>
        </div>
        <div className="card small">
          <p>Rendimento em 2024</p>
          <strong>472 <span>mil</span></strong>
        </div>
        <div className="card medium">
          <p>Participação dos sócios</p>
          <ResponsiveContainer width="100%" height={150}>
            <PieChart>
              <Pie data={sociosData} dataKey="value" nameKey="name" outerRadius={50}>
                {sociosData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={coresSocios[index % coresSocios.length]} />
                ))}
              </Pie>
              <Legend layout="vertical" verticalAlign="middle" align="right" />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
