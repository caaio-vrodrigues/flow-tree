// src/components/main/orcamentos/orcamento/graficos/grafico-tempo/utils/calcularAngulos.ts

type TcalcularAngulos = {
  porcentagens: Record<string, number>;
  disponivel?: number;
};

type TRcalcularAngulos = [number, number][];

export const calcularAngulos = (props: TcalcularAngulos): TRcalcularAngulos => {
  const { porcentagens } = props;

  const angulos: [number, number][] = [];
  let cumulativeAngle = 0;

  for (const porcentagem of Object.values(porcentagens)) {
    const angle = (porcentagem / 100) * 360;
    angulos.push([cumulativeAngle, cumulativeAngle + angle]);
    cumulativeAngle += angle;
  };

  return angulos;
};