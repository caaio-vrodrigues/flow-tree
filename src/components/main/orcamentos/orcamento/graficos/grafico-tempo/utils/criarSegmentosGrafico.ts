// src/components/main/orcamentos/orcamento/graficos/grafico-tempo/utils/criarSegmentosGrafico.ts

type TcriarSegGrafico = {
  startAngle: number, 
  endAngle: number,
};

export const criarSegmentosGrafico = (props: TcriarSegGrafico): string => {
  const { startAngle, endAngle } = props;
  const radius = 100;
  const x1 = 100 + radius * Math.cos((Math.PI / 180) * startAngle);
  const y1 = 100 + radius * Math.sin((Math.PI / 180) * startAngle);
  const x2 = 100 + radius * Math.cos((Math.PI / 180) * endAngle);
  const y2 = 100 + radius * Math.sin((Math.PI / 180) * endAngle);
  const largeArcFlag = endAngle - startAngle > 180 ? 1 : 0;

  return `M100,100 L${x1},${y1} A${radius},${radius} 0 ${largeArcFlag} 1 ${x2},${y2} Z`;
};