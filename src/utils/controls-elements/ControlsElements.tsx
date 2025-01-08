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

// utils
import { isValidOrcamento } from '@/utils/search-validation/isValidOrcamento';
import { orcamentosData } from '@/data/data-test/orcamentos-data';
import { isValidPagamento } from '@/utils/search-validation/isValidPagamento';
import { fluxoPagamentosData } from '@/data/data-test/fluxo-pagamentos-data';

type TControlsElementsProps = {
  funcSetClose: React.Dispatch<React.SetStateAction<boolean>>;
  funcSetAdd: React.Dispatch<React.SetStateAction<boolean>>;
  onSelect: (value: string | number) => void;
  funcSearch: (params: { 
    value: string; 
    setSearchValue: React.Dispatch<React.SetStateAction<string>>, 
  }) => void;
};

export const ControlsElements = (props: TControlsElementsProps) => {
  const { 
    funcSetClose, funcSetAdd, funcSearch, onSelect,
  } = props;

  const { 
    showFluxoPagamentos,
    searchValue, showDropdown, setShowDropdown, setSearchValue,
  } = useContext(ContextMaster);

  const validOrcamentos = orcamentosData.filter(isValidOrcamento);
  const validPagamentos = fluxoPagamentosData.filter(isValidPagamento);
 
  const optionsOrcamento = validOrcamentos.filter(option => 
    option.num_orcam?.toString().includes(searchValue)
  );
  const optionsPagamentos = validPagamentos.filter(option => 
    option.id.toString().includes(searchValue)
  );

  // Determina se o dropdown deve ser exibido
  const isShowDropdown = showDropdown && searchValue && (optionsOrcamento.length > 0 || 
    (showFluxoPagamentos && optionsPagamentos.length > 0));
  
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
            filteredOptions={showFluxoPagamentos ? optionsPagamentos : optionsOrcamento}
            setSearchValue={setSearchValue}
            setShowDropdown={setShowDropdown}/>}
      </div>
    </div>
  );
};