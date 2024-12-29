// src/components/main/orcamentos/orcamento/Orcamento.tsx

import { OrcamentoCabecalho } from './orcamento-cabecalho/OrcamentoCabecalho';
import { OrcamentosInfosBasic } from './orcamentos-infos-basic/OrcamentosInfosBasic';
import { Graficos } from './graficos/Graficos';

// styles
import styles from './Orcamento.module.css';

type TOrcamento = {
  data: {
    id: number,
    num_orcam: string | number,
    cliente: string,
    cnpj_cliente: string,
    situacao_orcamento: string,
    obra: string,
    valor_fechado: number,
    valor_estip_gasto: number,
    gasto_material_obra: number,
    gasto_servico_obra: number,
    gasto_combustivel: number,
    gasto_alimentacao: number,
    data_emissao: Date,
    inicio_execucao: Date | null,
    previsao_termino: Date | null,
    situacaoObra: string,
    pdf_orcamento: string,
    pdf_contrato: string,
  },
};

export const Orcamento = ({ data }: TOrcamento) => {
  return (
    <article className={`${styles.artic}`}>
      <OrcamentoCabecalho 
        num_orcam={data.num_orcam} 
        obra={data.obra}/>
      <OrcamentosInfosBasic 
        cliente={data.cliente} 
        cnpj_cliente={data.cnpj_cliente} 
        data_emissao={data.data_emissao} 
        situacao_orcamento={data.situacao_orcamento}/>
      <Graficos 
        gasto_alimentacao={data.gasto_alimentacao} 
        gasto_combustivel={data.gasto_combustivel} 
        gasto_material_obra={data.gasto_material_obra} 
        gasto_servico_obra={data.gasto_servico_obra} 
        inicio_execucao={data.inicio_execucao}
        previsao_termino={data.previsao_termino} 
        situacao_orcamento={data.situacao_orcamento} 
        valor_estip_gasto={data.valor_estip_gasto} 
        valor_fechado={data.valor_fechado}/>
    </article>
  );
};