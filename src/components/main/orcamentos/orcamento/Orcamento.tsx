// src/components/main/orcamentos/orcamento/Orcamento.tsx

// components
import { OrcamentoCabecalho } from './orcamento-cabecalho/OrcamentoCabecalho';
import { OrcamentosInfosBasic } from './orcamentos-infos-basic/OrcamentosInfosBasic';
import { Graficos } from './graficos/Graficos';

// styles
import styles from './Orcamento.module.css';

type TOrcamento = {
  id: number;
  num_orcam: string | number;
  cliente: string;
  cnpj_cliente: string;
  situacao_orcamento: string;
  obra: string;
  valor_fechado: number;
  valor_estip_gasto: number;
  gasto_material_obra: number;
  gasto_servico_obra: number;
  gasto_combustivel: number;
  gasto_alimentacao: number;
  data_emissao: Date;
  inicio_execucao: Date | null;
  previsao_termino: Date | null;
  situacaoObra: string;
  pdf_orcamento: string;
  pdf_contrato: string;
};

export const Orcamento = ({ 
  cliente, cnpj_cliente, data_emissao, gasto_alimentacao,
  gasto_combustivel, gasto_material_obra, gasto_servico_obra, 
  inicio_execucao, num_orcam, obra, previsao_termino, 
  situacao_orcamento, valor_estip_gasto, valor_fechado 
}: TOrcamento) => {
    
  return (
    <article className={`${styles.artic} ${styles.responsive}`}>
      <OrcamentoCabecalho 
        num_orcam={num_orcam} 
        obra={obra} />
      <OrcamentosInfosBasic 
        cliente={cliente} 
        cnpj_cliente={cnpj_cliente} 
        data_emissao={data_emissao} 
        situacao_orcamento={situacao_orcamento}
        inicio_execucao={inicio_execucao} 
        previsao_termino={previsao_termino}
        valor_fechado={valor_fechado}
        valor_estip_gasto={valor_estip_gasto}/>
      <Graficos 
        gasto_alimentacao={gasto_alimentacao} 
        gasto_combustivel={gasto_combustivel} 
        gasto_material_obra={gasto_material_obra} 
        gasto_servico_obra={gasto_servico_obra} 
        inicio_execucao={inicio_execucao}
        previsao_termino={previsao_termino} 
        situacao_orcamento={situacao_orcamento} 
        valor_estip_gasto={valor_estip_gasto} 
        valor_fechado={valor_fechado} />
    </article>
  );
};