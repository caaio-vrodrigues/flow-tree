// src/components/main/orcamentos/orcamento/graficos/Graficos.tsx

import { GraficoGastos } from './grafico-gastos/GraficoGastos';
import { GraficoTempo } from './grafico-tempo/GraficoTempo';
import { InfosOrcamento } from './infos-orcamento/InfosOrcamento';

// styles
import styles from './Grafico.module.css';

type TGrafico = {
  gasto_material_obra: number,
  gasto_servico_obra: number,
  gasto_combustivel: number,
  gasto_alimentacao: number,
  valor_fechado: number,
  valor_estip_gasto: number,
  inicio_execucao: Date | null,
  previsao_termino: Date | null,
  situacao_orcamento: string,
}

export const Graficos = ({ 
  gasto_alimentacao, gasto_combustivel, gasto_material_obra, 
  gasto_servico_obra, valor_estip_gasto, valor_fechado, 
  inicio_execucao, previsao_termino, situacao_orcamento,
}: TGrafico) => {
  const dataGraficoGastos = {
    gasto_alimentacao: gasto_alimentacao,
    gasto_combustivel: gasto_combustivel,
    gasto_material_obra: gasto_material_obra,
    gasto_servico_obra: gasto_servico_obra,
    valor_estip_gasto: valor_estip_gasto,
    valor_fechado: valor_fechado
  };

  const dataGraficoTempo = {
    // Não formate as datas aqui, passe-as diretamente
    dataInicio: inicio_execucao || null,
    prazoTermino: previsao_termino || null,
  };

  return (
    <>
      {situacao_orcamento === 'fechado' && 
        <div className={styles.contWrapH2}>
          <InfosOrcamento 
            valor_estip_gasto={valor_estip_gasto} 
            valor_fechado={valor_fechado}
            dataInicio={dataGraficoTempo.dataInicio} // Passando agora corretamente
            prazoTermino={dataGraficoTempo.prazoTermino} // Passando agora corretamente
          >
            <GraficoGastos gastos={dataGraficoGastos} />
          </InfosOrcamento>
          <InfosOrcamento 
            dataInicio={dataGraficoTempo.dataInicio}
            prazoTermino={dataGraficoTempo.prazoTermino}
          >
            <GraficoTempo tempo={dataGraficoTempo} />
          </InfosOrcamento>
        </div>
      }
    </>
  );
};