// index.js
const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://devvuntuujzlvikrxsfr.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRldnZ1bnR1dWp6bHZpa3J4c2ZyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc2ODEzNTgsImV4cCI6MjA2MzI1NzM1OH0.PyB-taC4AxmHWc-C15S8usqxezL7qUsm8dNslbYDWmw';
const supabase = createClient(supabaseUrl, supabaseKey);

// Exemplo: buscar dados da tabela "usuarios"
async function buscarUsuarios() {
  const { data, error } = await supabase
    .from('users')
    .select('*');

  if (error) {
    console.error('Erro ao buscar usuários:', error);
  } else {
    console.log('Usuários:', data);
  }
}

buscarUsuarios();
