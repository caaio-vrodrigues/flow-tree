// src/utils/custom-button/CustomButton.tsx

// react
import { Dispatch, SetStateAction, useState } from 'react';

// icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// tipagem
import { IconProp } from '@fortawesome/fontawesome-svg-core';

// styles
import stylesCustomButton from './CustomButton.module.css'; 
import stylesControlsEls from '../controls-elements/ControlsElements.module.css';

type TTooltipe = {
  msgToolTipe: string;
  icon: IconProp;
  funcSetClose?: React.Dispatch<React.SetStateAction<boolean>>;
  funcSetAdd?: React.Dispatch<React.SetStateAction<boolean>>;
  tooltipPosisition?: 'top' | 'bottom'; 
  setSearchValue?: Dispatch<SetStateAction<string>>,
  stylesProp?: boolean,
};

export const CustomButton = (props: TTooltipe) => {
  const {
    msgToolTipe, icon, stylesProp, tooltipPosisition = 'top', 
    setSearchValue, funcSetClose, funcSetAdd,
  } = props;

  const styles = stylesProp === true ? stylesControlsEls : stylesCustomButton;

  const [tooltipeVisible, setTooltipeVisible] = useState(false);

  const handleClick = () => {
    if(setSearchValue){
      setSearchValue('');
    };
    if(funcSetAdd){
      funcSetAdd(true);
    };
    if(funcSetClose){
      funcSetClose(false);
    };
  };

  return (
    <button
      className={styles.customButtom}
      onClick={handleClick}
      onMouseEnter={() => setTooltipeVisible(true)}
      onMouseLeave={() => setTooltipeVisible(false)}>
        <FontAwesomeIcon icon={icon} />
        {tooltipeVisible && 
          <span 
            className={`${stylesCustomButton.tooltip} ${tooltipPosisition === 'bottom' ? 
              stylesCustomButton.tooltipBottom : stylesCustomButton.tooltipTop}`}>
              {msgToolTipe}
          </span>}
    </button>
  );
};