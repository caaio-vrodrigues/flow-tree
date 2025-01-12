// src/utils/controls-elements/ControlsElements.tsx

// react
import { useContext } from 'react';

// components
import { DropDown } from './drop-down/DropDown';
import { InputSearch } from './input-search/InputSearch';
import { CustomButton } from '../custom-button/CustomButton';

// styles
import stylesControlsEls from './ControlsElements.module.css';          

// icon
import { faArrowLeft, faAdd } from '@fortawesome/free-solid-svg-icons';

// context
import ContextMaster from '@/context/ContextProvider';

// funcs
import { getSearchOptions } from '../funcs/getSearchOptions';

type TControlsElementsProps = {
  page?: string;
  onSelect: (value: string | number) => void;
  funcSearch: (params: { 
    value: string; 
    setSearchValue: React.Dispatch<React.SetStateAction<string>>, 
  }) => void;
};

export const ControlsElements = (props: TControlsElementsProps) => {
  const { funcSearch, onSelect, page } = props;

  const { 
    searchValue, showDropdown, setShowDropdown, setSearchValue,
  } = useContext(ContextMaster);

  const options = getSearchOptions({ page: page ? page : '', searchValue});
  const isShowDropdown = showDropdown && searchValue && (options.length > 0);
  
  return (
    <div className={stylesControlsEls.wrapButtons}>
      <CustomButton 
        icon={faArrowLeft} 
        msgToolTipe='Voltar'
        stylesProp={true}
        setSearchValue={setSearchValue}/>
      <CustomButton 
        icon={faAdd} 
        msgToolTipe='Novo'
        stylesProp={true}
        setSearchValue={setSearchValue}/>
      <div className={stylesControlsEls.wrapSearch}>
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