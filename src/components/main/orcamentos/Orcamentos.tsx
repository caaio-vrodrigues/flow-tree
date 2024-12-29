// src/components/main/orcamentos/Orcamentos.tsx

// react
import { useState } from 'react';

// components
import { Orcamento } from './orcamento/Orcamento';
import { ControlsElements } from '@/utils/controls-elements/ControlsElements';
import { MostrarMais } from './mostrar-mais/MostrarMais';

// styles
import styles from './Orcamentos.module.css';

// data-test
import { orcamentosData } from '@/data/data-test/orcamentos-data';

export const Orcamentos = () => {
  const [visibleCount, setVisibleCount] = useState(3);
  const [showOrcamento, setShowOrcamentos] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  const funcBack = (value: boolean) => {
    setShowOrcamentos(value);
  };

  const funcAdd = () => { 
    console.log("Adicionar novo orçamento");
  };

  const funcSearch = (value: string) => {
    setSearchTerm(value);
    console.log("Buscando por:", value);
    console.log(showOrcamento);
  };

  return (
    <section>
      <ControlsElements 
        funcBack={funcBack} 
        funcAdd={funcAdd} 
        funcSearch={funcSearch}/> 
      <div className={`${styles.wrapOrcamentos}`}>
        {orcamentosData
          .filter(data => data.cliente.includes(searchTerm))
          .slice(0, visibleCount)
          .map((data) => (
            <Orcamento key={data.id} data={data} />
          ))}
      </div>
      <MostrarMais 
        orcamentosDataLeg={orcamentosData.length} 
        setVisibleCount={setVisibleCount} 
        visibleCount={visibleCount}/>
    </section>
  );
};