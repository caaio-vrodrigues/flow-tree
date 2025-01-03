// src/components/main/orcamentos/orcamento/graficos/grafico-tempo/utils/calcularPorcentagemTempo.ts

type TcalcPorcentTempo = {
  tempoTotal: number;
  tempoGasto: number;
};

export const calcularPorcentagemTempo = ({ 
  tempoTotal, tempoGasto
}: TcalcPorcentTempo) => {
  
  const porcentagens = {
    tempoTotal: tempoTotal > 0 ? (tempoTotal / (tempoTotal + tempoGasto)) * 100 : 0,
    tempoGasto: tempoTotal > 0 ? (tempoGasto / (tempoTotal + tempoGasto)) * 100 : 0,
  };
  return porcentagens;
};