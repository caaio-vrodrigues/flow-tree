// src/utils/controls-elements/ControlsElements.tsx

// react
import { useState, useContext } from 'react';

// styles
import styles from './ControlsElements.module.css';          

// icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faAdd, faSearch } from '@fortawesome/free-solid-svg-icons';

// context
import ContextMaster from '@/context/ContextProvider';

type TControlsElements = {
  funcBack: () => void,
  funcAdd: (value: boolean) => void,
  funcSearch: (params: { value: string; setSearchTerm: React.Dispatch<React.SetStateAction<string>>; setLoading: React.Dispatch<React.SetStateAction<boolean>> }) => void,
  options: { id: number; num_orcam: string | number }[],
  onSelect: (value: string | number) => void,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>; // Adicionando setLoading como propriedade
};

export const ControlsElements = ({ funcBack, funcAdd, funcSearch, options, onSelect, setLoading }: TControlsElements) => {
  const { setSearchTerm } = useContext(ContextMaster); // Acessando o contexto para resetar o termo de busca

  const [searchValue, setSearchValue] = useState('');
  const [showDropdown, setShowDropdown] = useState(false); // Inicializar como false

  // Declarando o tipo do parâmetro como string | number
  const handleSelectChange = (value: string | number) => {
    console.log(`Selected value: ${value}`); // Debug para verificar se a função é chamada
    setSearchValue(value.toString()); // Atualiza o campo de busca com o valor selecionado
    onSelect(value); // Define o valor selecionado
    setShowDropdown(false); // Fecha o dropdown após a seleção
  };

  const filteredOptions = options.filter(option => 
    option.num_orcam.toString().includes(searchValue)
  );

  return (
    <div className={styles.wrapButtons}>
      <button 
        className={styles.buttonsArrowAndAdd}
        onClick={() => {
          setSearchValue(''); // Limpa o campo de busca ao voltar
          funcBack(); // Chama a função de voltar
        }}
        aria-label="Voltar">
        <FontAwesomeIcon icon={faArrowLeft}/>
      </button>
      <button 
        className={styles.buttonsArrowAndAdd}
        onClick={() => funcAdd(true)}
        aria-label="Adicionar novo orçamento">
        <FontAwesomeIcon icon={faAdd}/>
      </button>
      <div className={styles.wrapSearch}>
        <input 
          type="text" 
          placeholder='Buscar...' 
          value={searchValue}
          aria-label="Campo de busca"
          onChange={(e) => {
            setSearchValue(e.target.value);
            setShowDropdown(true); // Abre o dropdown quando o usuário digita
          }}
          onBlur={() => {
            setTimeout(() => setShowDropdown(false), 200);
          }}
          onFocus={() => {
            if (searchValue) setShowDropdown(true); // Abre o dropdown novamente ao focar, se houver texto
          }} 
        />
        <button 
          onClick={() => funcSearch({ value: searchValue, setSearchTerm, setLoading })} // Passa o valor e as funções
          aria-label="Buscar orçamentos">
          <FontAwesomeIcon icon={faSearch}/>
        </button>
        {showDropdown && searchValue && filteredOptions.length > 0 && (
          <div className={styles.dropdown}>
            {filteredOptions.map(option => (
              <div 
                key={option.id} 
                className={`${styles.dropdownItem} ${styles.option}`}
                onClick={() => handleSelectChange(option.num_orcam)} // Preenche o input com o valor do dropdown
              >
                {option.num_orcam}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};