// src/components/main/orcamentos/Orcamentos.tsx

// react
import { useContext, useState } from 'react';

// context
import ContextMaster from '@/context/ContextProvider';

// components
import { Orcamento } from './orcamento/Orcamento';
import { ControlsElements } from '@/utils/controls-elements/ControlsElements';
import { MostrarMais } from './mostrar-mais/MostrarMais';
import { NovoOrcamento } from './novo-orcamento/NovoOrcamento';

// styles
import styles from './Orcamentos.module.css';

// data
import { orcamentosData } from '@/data/data-test/orcamentos-data';

// utils
import { funcSearch } from '@/utils/funcSearch';
import { isValidOrcamento } from './utils/isValidOrcamento';

export const Orcamentos = () => {
  const { 
    setVisibleCount, visibleCount, searchTerm, setSearchTerm,
    showAddOrcamento, setShowAddOrcamento, 
  } = useContext(ContextMaster);

  const [loading, setLoading] = useState(false);

  // Filtrando os dados de orçamentos
  const filteredData = orcamentosData.filter(data => 
    data.cliente.includes(searchTerm) || 
    data.num_orcam.toString().includes(searchTerm) // Adicionando filtro para o número do orçamento
  );

  // Declarando o tipo do parâmetro como string | number
  const handleSelect = (selectedOrcamento: string | number) => {
    setSearchTerm(selectedOrcamento.toString()); // Converte para string antes de definir o termo de busca
  };

  return (
    <section>
      <ControlsElements 
        funcBack={() => { 
          setShowAddOrcamento(false); 
          setSearchTerm(''); // Limpa o termo de busca 
        }} 
        funcAdd={setShowAddOrcamento} 
        funcSearch={({ value }) => funcSearch({ value, setSearchTerm, setLoading })} 
        options={orcamentosData} // Passando as opções para o select
        onSelect={handleSelect} // Função para lidar com a seleção
        setLoading={setLoading} // Adicionando setLoading como propriedade
      />

      {loading ? (
        <div className={styles.loader}>Carregando...</div>
      ) : (
        <>
          {!showAddOrcamento ? (
            <div className={`${styles.wrapOrcamentos}`}>
              {filteredData.length === 0 ? (
                <div className={styles.noData}>Nenhum orçamento encontrado.</div>
              ) : (
                filteredData
                  .slice(0, visibleCount)
                  .map(data => {
                    if (!isValidOrcamento(data)) {
                      console.error(`Orçamento inválido: ${JSON.stringify(data)}`);
                      return null;
                    }
                    return <Orcamento key={data.id} data={data} />;
                  })
              )}
            </div>
          ) : (
            <NovoOrcamento />
          )}
          
          <MostrarMais 
            orcamentosDataLeg={filteredData.length} 
            setVisibleCount={setVisibleCount} 
            visibleCount={visibleCount} 
          />
        </>
      )}
    </section>
  );
};