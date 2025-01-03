// src/components/main/orcamentos/filtro-orcamentos/FiltroOrcamentos.tsx

// react
import React, { useEffect } from 'react';

// components
import { Orcamento } from '../orcamento/Orcamento';
import { NovoOrcamento } from './novo-orcamento/NovoOrcamento';

// Tipagem
import { TOrcamentosData } from '@/data/data-test/orcamentos-data';

type TFiltroOrcamentosProps = {
  showAddOrcamento: boolean;
  orcamentosData: TOrcamentosData;
  searchValue: string;
  setFilteredDataLegth: React.Dispatch<React.SetStateAction<number>>;
  visibleCount: number;
};

export const FiltroOrcamentos = (props: TFiltroOrcamentosProps) => {
  const { 
    showAddOrcamento, orcamentosData, searchValue, 
    setFilteredDataLegth, visibleCount 
  } = props;

  const filteredData = orcamentosData.filter((data) => 
    data.cliente.includes(searchValue) || 
    data.num_orcam.toString().includes(searchValue)
  );

  useEffect(() => {
    setFilteredDataLegth(filteredData.length);
  }, [filteredData.length, setFilteredDataLegth]);

  return <>
    {!showAddOrcamento ? 
      <div>
        {filteredData.length === 0 ? 
          <div>Nenhum orçamento encontrado</div> 
          : filteredData.slice(0, visibleCount).map(data => {
              return <Orcamento key={data.id} {...data}/>
            })}
      </div> 
      : <NovoOrcamento />}
  </>
};