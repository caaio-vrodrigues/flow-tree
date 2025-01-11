// src/utils/search-validation/isValidPagamento.ts

type TisValidPagamento = {
  id: number;
  fornecedor: string;
  valor: number;
  vencimento: Date;
  parcelas_totais: number;
  parcela_atual: number;
  tipo_pagamento: string;
  situacao: string;
  tipo_gasto: string;
  orcamento: string;
  nf: string;
  fatura: string;
  boleto: string;
  observacao: string;
};

type TRisValidPagamento = {
  isValid: boolean;
  errors: string[];
};

export const isValidPagamento = (data: TisValidPagamento): TRisValidPagamento => {
  const errors: string[] = [];

  // Validação dos tipos de dados
  if (typeof data.id !== 'number') errors.push("ID deve ser um número.");
  if (typeof data.fornecedor !== 'string') errors.push("Fornecedor deve ser uma string.");
  if (typeof data.valor !== 'number') errors.push("Valor deve ser um número.");
  if (!(data.vencimento instanceof Date) || isNaN(data.vencimento.getTime())) 
    errors.push("Vencimento deve ser uma instância de Date válida.");
  if (typeof data.parcelas_totais !== 'number') errors.push("Parcelas totais deve ser um número.");
  if (typeof data.parcela_atual !== 'number') errors.push("Parcela atual deve ser um número.");
  if (typeof data.tipo_pagamento !== 'string') errors.push("Tipo de pagamento deve ser uma string.");
  if (typeof data.situacao !== 'string') errors.push("Situação deve ser uma string.");
  if (typeof data.tipo_gasto !== 'string') errors.push("Tipo de gasto deve ser uma string.");
  if (typeof data.orcamento !== 'string') errors.push("Orçamento deve ser uma string.");
  if (typeof data.nf !== 'string') errors.push("Nota fiscal deve ser uma string.");
  if (typeof data.fatura !== 'string') errors.push("Fatura deve ser uma string.");
  if (typeof data.boleto !== 'string') errors.push("Boleto deve ser uma string.");
  if (typeof data.observacao !== 'string') errors.push("Observação deve ser uma string.");

  return {
    isValid: errors.length === 0,
    errors,
  };
};