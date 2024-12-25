import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core'; // Importar o tipo para ícone
import { Dispatch, SetStateAction } from "react";
import { useState } from "react";
import styles from './CustomButton.module.css'; 

type TTooltipe = {
  styleButton?: string;
  msgToolTipe: string;
  icon: IconProp;
  onClick?: Dispatch<SetStateAction<boolean>>,
  tooltipPosisition?: 'top' | 'bottom'; 
};

export const CustomButton = ({
  msgToolTipe,
  icon,
  onClick = () => {},
  tooltipPosisition = 'top', // Define 'top' como padrão se não for especificado
}: TTooltipe) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <button
      className={styles.customButtom}
      onClick={() => onClick(value => !value)}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      >
        <FontAwesomeIcon icon={icon} />
        {isVisible && (
          <span 
            className={`${styles.tooltip} ${tooltipPosisition === 'bottom' ? 
              styles.tooltipBottom : styles.tooltipTop}`}
              >
                {msgToolTipe}
          </span>
        )}
    </button>
  );
};