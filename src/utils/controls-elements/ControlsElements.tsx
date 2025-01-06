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

type TControlsElements = {
  options: { id: number; num_orcam: string | number }[];
  funcSetClose: React.Dispatch<React.SetStateAction<boolean>>;
  funcSetAdd: React.Dispatch<React.SetStateAction<boolean>>;
  onSelect: (value: string | number) => void;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  funcSearch: (params: { 
    value: string; 
    setSearchValue: React.Dispatch<React.SetStateAction<string>>, 
  }) => void;
};

export const ControlsElements = ({ 
  funcSetClose, funcSetAdd, funcSearch, options, onSelect 
}: TControlsElements) => {

  const { 
    searchValue, showDropdown, setShowDropdown, setSearchValue 
  } = useContext(ContextMaster);

  const filteredOptions = options.filter(option => 
    option.num_orcam.toString().includes(searchValue));

  const isShowDropdown = showDropdown && searchValue && filteredOptions.length > 0;

  return (
    <div className={stylesControlsEls.wrapButtons}>
      <CustomButton 
        icon={faArrowLeft} 
        msgToolTipe='Voltar' 
        funcSetClose={funcSetClose} 
        stylesProp={true}
        setSearchValue={setSearchValue}/>
      <CustomButton 
        icon={faAdd} 
        msgToolTipe='Novo' 
        funcSetAdd={funcSetAdd} 
        stylesProp={true}
        setSearchValue={setSearchValue}/>
      <div className={stylesControlsEls.wrapSearch}>
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