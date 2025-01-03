// src/utils/controls-elements/drop-down/DropDown.tsx

// styles
import styles from './DropDown.module.css';

type TDropDown = {
  filteredOptions: { id: number; num_orcam: string | number }[];
  onSelect: (value: string | number) => void;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
  setShowDropdown: React.Dispatch<React.SetStateAction<boolean>>;
};

export const DropDown = ({ 
  filteredOptions, setSearchValue, onSelect, setShowDropdown 
}: TDropDown) => {
  
  const handleSelectedChange = (num_orcam: string | number) => {
    setSearchValue(num_orcam.toString());
    onSelect(num_orcam);
    setShowDropdown(false);
  };

  return(
    <div className={styles.dropdown}>
      {filteredOptions.map(option => (
        <div 
          key={option.id} 
          className={`${styles.dropdownItem} ${styles.option}`}
          onClick={() => handleSelectedChange(option.num_orcam)}>
            {option.num_orcam}
        </div>
      ))}
    </div>
  );
};