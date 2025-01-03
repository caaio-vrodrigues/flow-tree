// src/utils/formatDate.js

export const formatDate = (date) => {
  
  const d = new Date(date);
  
  // Verifica se a data é válida
  if (isNaN(d.getTime())) {
    return 'Data Inválida'; // Retorna uma string padrão para datas inválidas
  }

  // Obtém o ano, mês (0-indexado) e dia em UTC
  const year = d.getUTCFullYear();
  const month = d.getUTCMonth() + 1; // Adiciona 1 para que Janeiro seja 1 e Dezembro seja 12
  const day = d.getUTCDate(); // Dia do mês em UTC

  const verifyDay = day < 10 ? `0${day}` : day;
  const verifyMonth = month < 10 ? `0${month}` : month;

  return `${verifyDay}/${verifyMonth}/${year}`; // Retorna no formato dd/mm/yyyy
};