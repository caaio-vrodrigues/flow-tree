// src/utils/controls-elements/drop-down/DropDown.tsx

// styles
import styles from './DropDown.module.css';

type TDropDown = {
  filteredOptions: Array<{ num_orcam: string | number } | { id: number }>; // Aceitar ambos tipos de opções
  onSelect: (value: string | number) => void;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
  setShowDropdown: React.Dispatch<React.SetStateAction<boolean>>;
};

export const DropDown = ({ 
  filteredOptions, setSearchValue, onSelect, setShowDropdown 
}: TDropDown) => {
  
  const handleSelectedChange = (value: string | number) => {
    setSearchValue(value.toString());
    onSelect(value);
    setShowDropdown(false);
  };

  return (
    <div className={styles.dropdown}>
      {filteredOptions.map((option, i) => (
        <span 
          key={i} 
          className={`${styles.dropdownItem} ${styles.option}`}
          onClick={() => {
            // Verificamos o tipo de option antes de acessar suas propriedades
            if ('num_orcam' in option) {
              handleSelectedChange(option.num_orcam);
            } else if ('id' in option) {
              handleSelectedChange(option.id);
            };
          }}>
            {/* Exibir a propriedade apropriada */}
            {'num_orcam' in option ? option.num_orcam : option.id}
        </span>
      ))}
    </div>
  );
};