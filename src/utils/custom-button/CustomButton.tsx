// src/utils/custom-button/CustomButton.tsx

// react
import { Dispatch, SetStateAction, useState } from 'react';

// icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// tipagem
import { IconProp } from '@fortawesome/fontawesome-svg-core';

// styles
import styles from './CustomButton.module.css'; 

type TTooltipe = {
  msgToolTipe: string;
  icon: IconProp;
  onClick?: Dispatch<SetStateAction<boolean>>,
  tooltipPosisition?: 'top' | 'bottom'; 
};

export const CustomButton = ({
  msgToolTipe, icon,
  onClick = () => {},
  tooltipPosisition = 'top',
}: TTooltipe) => {

  const [tooltipeVisible, setTooltipeVisible] = useState(false);

  return (
    <button
      className={styles.customButtom}
      onClick={() => onClick(value => !value)}
      onMouseEnter={() => setTooltipeVisible(true)}
      onMouseLeave={() => setTooltipeVisible(false)}>
        <FontAwesomeIcon icon={icon} />
        {tooltipeVisible && 
          <span 
            className={`${styles.tooltip} ${tooltipPosisition === 'bottom' ? 
            styles.tooltipBottom : styles.tooltipTop}`}>
              {msgToolTipe}
          </span>}
    </button>
  );
};