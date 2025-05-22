// backend/index.js
const express = require('express');
const cors = require('cors');
const { createClient } = require('@supabase/supabase-js');

const app = express();
app.use(cors());
app.use(express.json());

const supabaseUrl = 'https://devvuntuujzlvikrxsfr.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRldnZ1bnR1dWp6bHZpa3J4c2ZyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc2ODEzNTgsImV4cCI6MjA2MzI1NzM1OH0.PyB-taC4AxmHWc-C15S8usqxezL7qUsm8dNslbYDWmw';
const supabase = createClient(supabaseUrl, supabaseKey);

// Rota de login
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  const { data, error } = await supabase
    .from('users')
    .select('*')
    .eq('email', email)
    .eq('password', password)
    .single();

  if (error || !data) {
    return res.status(401).json({ mensagem: 'Credenciais inválidas' });
  }

  res.json({ mensagem: 'Login bem-sucedido', usuario: data });
});

app.listen(3001, () => {
  console.log('Servidor backend rodando na porta 3001');
});
