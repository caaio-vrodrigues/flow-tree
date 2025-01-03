// src/components/main/orcamentos/utils/isValidOrcamento.ts

type TisValidOrcamento = {
  id: number,
  num_orcam: string | number,
  cliente: string,
  cnpj_cliente: string,
  situacao_orcamento: string,
  obra: string,
  situacaoObra: string,
  valor_fechado: number,
  valor_estip_gasto: number,
  data_emissao: Date,
  inicio_execucao: Date | null,
  previsao_termino: Date | null,
  pdf_orcamento: string,
  pdf_contrato: string,
  gasto_material_obra: number,
  gasto_servico_obra: number,
  gasto_combustivel: number,
  gasto_alimentacao: number,
};

export const isValidOrcamento = (data: TisValidOrcamento) => {
  return data && 
    typeof data.id === 'number' &&
    (typeof data.num_orcam === 'string' || typeof data.num_orcam === 'number') &&
    typeof data.cliente === 'string' &&
    typeof data.cnpj_cliente === 'string' &&
    typeof data.situacao_orcamento === 'string' &&
    typeof data.obra === 'string' &&
    typeof data.situacaoObra === 'string' &&
    typeof data.valor_fechado === 'number' &&
    typeof data.valor_estip_gasto === 'number' &&
    data.data_emissao instanceof Date &&
    (data.inicio_execucao === null || data.inicio_execucao instanceof Date) &&
    (data.previsao_termino === null || data.previsao_termino instanceof Date) &&
    typeof data.pdf_orcamento === 'string' &&
    typeof data.pdf_contrato === 'string' &&
    typeof data.gasto_material_obra === 'number' &&
    typeof data.gasto_servico_obra === 'number' &&
    typeof data.gasto_combustivel === 'number' &&
    typeof data.gasto_alimentacao === 'number';
};