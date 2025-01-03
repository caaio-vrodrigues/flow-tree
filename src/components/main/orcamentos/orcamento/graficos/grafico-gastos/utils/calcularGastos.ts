// src/components/main/orcamentos/orcamento/graficos/grafico-gastos/utils/calcularGastos.ts

// tipagem
import { TRcalcularGastos, TcalcularGastos } from './tipeCalcularGastos';

export const calcularGastos = (props: TcalcularGastos): TRcalcularGastos=> {
  const {
    valor_fechado, valor_estip_gasto, gasto_material_obra,
    gasto_servico_obra, gasto_combustivel, gasto_alimentacao,
  } = props;

  const porcentagens = {
    GastoMaterial: (gasto_material_obra / valor_estip_gasto) * 100,
    GastoServiço: (gasto_servico_obra / valor_estip_gasto) * 100,
    GastoCombustível: (gasto_combustivel / valor_estip_gasto) * 100,
    GastoAlimentação: (gasto_alimentacao / valor_estip_gasto) * 100,
  };

  const gastoTotal = gasto_material_obra + gasto_servico_obra + gasto_combustivel + gasto_alimentacao;
  const percentualDisponivel = ((valor_estip_gasto - gastoTotal) / valor_estip_gasto) * 100;
  const valorDisponivel = valor_estip_gasto - gastoTotal;
  const lucroAtual = valor_fechado - gastoTotal;
  const percentualLucro = (lucroAtual / valor_fechado) * 100;

  return {
    porcentagens: {
      ...porcentagens,
      disponivel: percentualDisponivel,
    },
    gastoTotal,
    valorDisponivel,
    percentualDisponivel,
    lucroAtual,
    percentualLucro,
  };
};