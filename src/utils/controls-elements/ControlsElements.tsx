// src/utils/controls-elements/ControlsElements.tsx

// react
import { useContext } from 'react';

// components
import { DropDown } from './drop-down/DropDown';
import { InputSearch } from './input-search/InputSearch';
import { CustomButton } from '../custom-button/CustomButton';

// styles
import styles from './ControlsElements.module.css';          

// icon
import { faArrowLeft, faAdd } from '@fortawesome/free-solid-svg-icons';

// context
import ContextMaster from '@/context/ContextProvider';

// funcs
import { getSearchOptions } from '../funcs/getSearchOptions';

type TControlsElementsProps = {
  linkNovo: string;
  linkVoltar: string;
  page?: string;
  onSelect: (value: string | number) => void;
  funcSearch: (params: { 
    value: string; 
    setSearchValue: React.Dispatch<React.SetStateAction<string>>, 
  }) => void;
};

export const ControlsElements = (props: TControlsElementsProps) => {
  const { 
    funcSearch, onSelect, page, linkNovo, linkVoltar,
  } = props;

  const { 
    searchValue, showDropdown, setShowDropdown, setSearchValue,
  } = useContext(ContextMaster);

  // prop "page" define para qual página a busca está sendo realizada
  const options = getSearchOptions({ page: page ? page : '', searchValue});
  const isShowDropdown = showDropdown && searchValue && (options.length > 0);
  
  return (
    <div className={styles.container}>
      <div className={styles.wrapButtons}>
        <CustomButton
          icon={faArrowLeft}
          msgToolTipe='Voltar'
          stylesProp={true}
          setSearchValueNull={setSearchValue}
          linkVoltar={linkVoltar}/>
        <CustomButton
          icon={faAdd}
          msgToolTipe='Novo'
          stylesProp={true}
          setSearchValueNull={setSearchValue}
          linkNovo={linkNovo}/>
      </div>
      <div className={styles.wrapSearch}>
        <InputSearch funcSearch={funcSearch}/>
        {isShowDropdown && 
          <DropDown 
            onSelect={onSelect} 
            filteredOptions={options}
            setSearchValue={setSearchValue}
            setShowDropdown={setShowDropdown}/>}
      </div>
    </div>
  );
};