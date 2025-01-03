// src/components/main/orcamentos/orcamento/graficos/grafico-tempo/utils/calcularAngulos.ts

export const calcularAngulos = ( porcentagens: Record<string, number>
): [number, number][] => {

  const angulos: [number, number][] = [];
  let cumulativeAngle = 0;

  for (const porcentagem of Object.values(porcentagens)) {
    const angle = (porcentagem / 100) * 360;
    angulos.push([cumulativeAngle, cumulativeAngle + angle]);
    cumulativeAngle += angle;
  };

  return angulos;
};