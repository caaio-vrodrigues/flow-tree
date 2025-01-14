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

// next
import Link from 'next/link';

type TTooltipe = {
  linkNovo?: string;
  linkVoltar?: string;
  msgToolTipe: string;
  icon: IconProp;
  tooltipPosisition?: 'top' | 'bottom'; 
  setSearchValueNull?: Dispatch<SetStateAction<string>>,
  openMenu?: Dispatch<SetStateAction<boolean>>,
  stylesProp?: boolean,
};

export const CustomButton = (props: TTooltipe) => {
  const [tooltipeVisible, setTooltipeVisible] = useState(false);
  
  const {
    msgToolTipe, icon, stylesProp, linkNovo, linkVoltar,
    tooltipPosisition = 'top', setSearchValueNull, openMenu,
  } = props;

  const styles = stylesProp === true ? stylesControlsEls : stylesCustomButton;

  const handleClick = () => {
    if(setSearchValueNull){
      setSearchValueNull('');
    };
    if(openMenu){
      openMenu(true);
    };
  };

  return (
    <button
      className={styles.customButtom}
      onClick={handleClick}
      onMouseEnter={() => setTooltipeVisible(true)}
      onMouseLeave={() => setTooltipeVisible(false)}>
        {linkNovo || linkVoltar ?
          <Link href={linkNovo ? linkNovo : linkVoltar ? linkVoltar : ''}>
            <FontAwesomeIcon icon={icon}/>
          </Link> 
          : <FontAwesomeIcon icon={icon}/>}
        {tooltipeVisible && 
          <span 
            className={`${stylesCustomButton.tooltip} ${tooltipPosisition === 'bottom' ? 
            stylesCustomButton.tooltipBottom : stylesCustomButton.tooltipTop}`}>
              {msgToolTipe}
          </span>}
    </button>
  );
};