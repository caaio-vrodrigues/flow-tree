// src/components/main/orcamentos/orcamento/graficos/Graficos.tsx

// components
import { GraficoGastos } from './grafico-gastos/GraficoGastos';
import { GraficoTempo } from './grafico-tempo/GraficoTempo';

// styles
import styles from './Grafico.module.css';

// utils
import { formatMoeda } from '@/utils/formatMoeda';

type TGrafico = {
  gasto_material_obra: number;
  gasto_servico_obra: number;
  gasto_combustivel: number;
  gasto_alimentacao: number;
  valor_fechado: number;
  valor_estip_gasto: number;
  inicio_execucao: Date | null;
  previsao_termino: Date | null;
  situacao_orcamento: string;
};

export const Graficos = ({
  gasto_alimentacao, gasto_combustivel, gasto_material_obra,
  gasto_servico_obra, valor_estip_gasto, valor_fechado,
  inicio_execucao, previsao_termino, situacao_orcamento,
}: TGrafico) => {

  if (situacao_orcamento !== 'fechado') {
    return (<>
      <p>{formatMoeda(valor_fechado)}</p>
      <div>Orçamento aguardando finalização da negociação.</div>
    </>);
  };

  const dataGraficoGastos = {
    gasto_alimentacao,gasto_combustivel,gasto_material_obra,
    gasto_servico_obra,valor_estip_gasto,valor_fechado
  };

  const dataGraficoTempo = {
    dataInicio: inicio_execucao,
    prazoTermino: previsao_termino,
  };

  return (<>
    <div className={styles.wrapGraficos}>
      <div className={styles.wrapGrafico}>
        <GraficoGastos 
          gastos={dataGraficoGastos} />
      </div>
      <div className={styles.wrapGrafico}>
        <GraficoTempo 
          tempo={dataGraficoTempo} />
      </div>
    </div>
  </>);
};