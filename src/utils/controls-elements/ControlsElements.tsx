// src/utils/controls-elements/ControlsElements.tsx

import { useState } from 'react';

// styles
import styles from './ControlsElements.module.css';          

//icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faAdd, faSearch } from '@fortawesome/free-solid-svg-icons';

//components

type TControlsElements = {
  funcBack: (value: boolean) => void,
  funcAdd: (value: boolean) => void,
  funcSearch: (value: string) => void,
};

export const ControlsElements = ({ funcBack, funcAdd, funcSearch }: TControlsElements) => {
  const [searchValue, setSearchValue] = useState('');

  return (
    <div className={styles.wrapButtons}>
      <button 
        className={styles.buttonsArrowAndAdd}
        onClick={() => funcBack(false)}>
          <FontAwesomeIcon icon={faArrowLeft}/>
      </button>
      <button 
        className={styles.buttonsArrowAndAdd}
        onClick={() => funcAdd(true)}>
          <FontAwesomeIcon icon={faAdd}/>
      </button>
      <div className={styles.wrapSearch}>
        <input 
          type="text" 
          placeholder='Buscar...' 
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button onClick={() => funcSearch(searchValue)}>
          <FontAwesomeIcon icon={faSearch}/>
        </button>
      </div>
    </div>
  );
};