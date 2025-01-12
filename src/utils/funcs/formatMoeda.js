// src/utils/formatMoeda.js

export const formatMoeda = (value) => {
  // Verifica se o valor é um número
  if (isNaN(value)) {
    return 'Valor Inválido'; // Retorna uma string padrão para valores inválidos
  }
  
  return value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  });
};