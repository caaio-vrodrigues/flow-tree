// src/components/main/orcamentos/orcamento/graficos/grafico-tempo/utils/calcularTempo.ts

type TcalcularTempo = {
  dataInicio: Date | null;
  prazoTermino: Date | null;
};

export const calcularTempo = ({ dataInicio, prazoTermino }: TcalcularTempo) => {
  const now = new Date();

  if (dataInicio == null && prazoTermino == null){
    return { tempoGasto: 0, tempoDisponivel: 0, tempoTotal: 0 };
  };

  if (!dataInicio || !prazoTermino) {
    console.error("Data de início ou de término inválida");
    return { tempoGasto: 0, tempoDisponivel: 0, tempoTotal: 0 };
  };

  if (dataInicio >= prazoTermino) {
    console.error("A data de início deve ser anterior à data de término.");
    return { tempoGasto: 0, tempoDisponivel: 0, tempoTotal: 0 };
  };

  const tempoGasto = Math.max(0, Math.min(now.getTime(), prazoTermino.getTime()) - dataInicio.getTime());
  const tempoTotal = Math.max(0, prazoTermino.getTime() - dataInicio.getTime());
  const tempoDisponivel = Math.max(0, tempoTotal - tempoGasto);

  return {
    tempoGasto,
    tempoDisponivel,
    tempoTotal,
  };
};