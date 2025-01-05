// react
import { useContext } from 'react';

// context
import ContextMaster from '@/context/ContextProvider';

// icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

type InputSearchProps = {
  funcSearch: (params: {
    value: string,
    setSearchValue: React.Dispatch<React.SetStateAction<string>>,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  }) => void;
};

export const InputSearch = ({ funcSearch }: InputSearchProps) => {

  const closeDropdown = () => setTimeout(() => setShowDropdown(false), 200);
  const onClick = () => funcSearch({ value: searchValue.trim(), setSearchValue, setLoading })

  const { 
    searchValue, setSearchValue, setShowDropdown, setLoading, 
  } = useContext(ContextMaster);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    setShowDropdown(true);
  };

  const onFocus = () => {
   if(searchValue){
    setShowDropdown(true);
   };
  };

  return <>
    <input 
      type='text' 
      placeholder='Buscar...' 
      aria-label='Campo de busca'
      value={searchValue}
      onChange={(e) => onChange(e)}
      onBlur={() => closeDropdown()}
      onFocus={() => onFocus()}/>
    <button 
      onClick={() => onClick()}
      aria-label='Buscar orçamentos'>
        <FontAwesomeIcon icon={faSearch}/>
    </button>
  </>
};