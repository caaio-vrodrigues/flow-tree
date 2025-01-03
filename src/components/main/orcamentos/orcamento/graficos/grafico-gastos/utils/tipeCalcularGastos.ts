export type TcalcularGastos = {
  valor_fechado: number;
  valor_estip_gasto: number;
  gasto_material_obra: number;
  gasto_servico_obra: number;
  gasto_combustivel: number;
  gasto_alimentacao: number;
};

export type TRcalcularGastos= {
  porcentagens: {
    GastoMaterial: number;
    GastoServiço: number;
    GastoCombustível: number;
    GastoAlimentação: number;
    disponivel?: number;
  };
  gastoTotal: number;
  valorDisponivel: number;
  percentualDisponivel: number;
  lucroAtual: number;
  percentualLucro: number;
};