// src/utils/controls-elements/ControlsElements.tsx

// react
import { useContext } from 'react';

// components
import { DropDown } from './drop-down/DropDown';
import { InputSearch } from './input-search/InputSearch';

// styles
import styles from './ControlsElements.module.css';          

// icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faAdd } from '@fortawesome/free-solid-svg-icons';

// context
import ContextMaster from '@/context/ContextProvider';

type TControlsElements = {
  options: { id: number; num_orcam: string | number }[];
  funcBack: () => void;
  funcAdd: (value: boolean) => void;
  onSelect: (value: string | number) => void;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  funcSearch: (params: { 
    value: string; 
    setSearchValue: React.Dispatch<React.SetStateAction<string>>, 
  }) => void;
};

export const ControlsElements = ({ 
  funcBack, funcAdd, funcSearch, options, onSelect 
}: TControlsElements) => {

  const { 
    searchValue, showDropdown, setShowDropdown, setSearchValue 
  } = useContext(ContextMaster);

  const filteredOptions = options.filter(option => 
    option.num_orcam.toString().includes(searchValue));

  const clickBack = () => {
    setSearchValue('');
    funcBack();
  };

  const isShowDropdown = showDropdown && searchValue && filteredOptions.length > 0;

  return (
    <div className={styles.wrapButtons}>
      <button 
        onClick={() => clickBack()}
        className={styles.buttonsArrowAndAdd}
        aria-label='Voltar'>
          <FontAwesomeIcon icon={faArrowLeft}/>
      </button>
      <button 
        className={styles.buttonsArrowAndAdd}
        onClick={() => funcAdd(true)}
        aria-label='Adicionar novo orçamento'>
          <FontAwesomeIcon icon={faAdd}/>
      </button>
      <div className={styles.wrapSearch}>
        <InputSearch funcSearch={funcSearch}/>
        {isShowDropdown && 
          <DropDown 
            onSelect={onSelect} 
            filteredOptions={filteredOptions} 
            setSearchValue={setSearchValue}
            setShowDropdown={setShowDropdown}/>}
      </div>
    </div>
  );
};