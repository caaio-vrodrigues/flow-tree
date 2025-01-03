// src/components/main/orcamentos/utils/isValidOrcamento.ts

type TisValidOrcamento = {
  id: number;
  num_orcam: string | number;
  cliente: string;
  cnpj_cliente: string;
  situacao_orcamento: string;
  obra: string;
  situacaoObra: string;
  valor_fechado: number;
  valor_estip_gasto: number;
  data_emissao: Date;
  inicio_execucao: Date | null;
  previsao_termino: Date | null;
  pdf_orcamento: string;
  pdf_contrato: string;
  gasto_material_obra: number;
  gasto_servico_obra: number;
  gasto_combustivel: number;
  gasto_alimentacao: number;
};

type TRisValidOrcamento = {
  isValid: boolean;
  errors: string[];
};

export const isValidOrcamento = (data: TisValidOrcamento): TRisValidOrcamento => {
  const errors: string[] = [];

  if (typeof data.id !== 'number') errors.push("ID deve ser um número.");
  if (!(typeof data.num_orcam === 'string' || typeof data.num_orcam === 'number')) 
    errors.push("Número do orçamento deve ser uma string ou um número.");
  if (typeof data.cliente !== 'string') errors.push("Cliente deve ser uma string.");
  if (typeof data.cnpj_cliente !== 'string') errors.push("CNPJ do cliente deve ser uma string.");
  if (typeof data.situacao_orcamento !== 'string') errors.push("Situação do orçamento deve ser uma string.");
  if (typeof data.obra !== 'string') errors.push("Obra deve ser uma string.");
  if (typeof data.situacaoObra !== 'string') errors.push("Situação da obra deve ser uma string.");
  if (typeof data.valor_fechado !== 'number') errors.push("Valor fechado deve ser um número.");
  if (typeof data.valor_estip_gasto !== 'number') errors.push("Valor estimado de gasto deve ser um número.");
  if (!(data.data_emissao instanceof Date)) errors.push("Data de emissão deve ser uma instância de Date.");
  if (data.inicio_execucao !== null && !(data.inicio_execucao instanceof Date)) 
    errors.push("Início da execução deve ser uma instância de Date ou nulo.");
  if (data.previsao_termino !== null && !(data.previsao_termino instanceof Date)) 
    errors.push("Previsão de término deve ser uma instância de Date ou nulo.");
  if (typeof data.pdf_orcamento !== 'string') errors.push("PDF do orçamento deve ser uma string.");
  if (typeof data.pdf_contrato !== 'string') errors.push("PDF do contrato deve ser uma string.");
  if (typeof data.gasto_material_obra !== 'number') errors.push("Gasto com material deve ser um número.");
  if (typeof data.gasto_servico_obra !== 'number') errors.push("Gasto com serviços deve ser um número.");
  if (typeof data.gasto_combustivel !== 'number') errors.push("Gasto com combustível deve ser um número.");
  if (typeof data.gasto_alimentacao !== 'number') errors.push("Gasto com alimentação deve ser um número.");

  return {
    isValid: errors.length === 0,
    errors,
  };
};