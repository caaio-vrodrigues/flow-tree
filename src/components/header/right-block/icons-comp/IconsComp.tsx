// src/components/header/right-block/navigation-menu/IconsComp.tsx

// components
import { CustomButton } from '@/utils/custom-button/CustomButton';

// icon
import { 
  faBars, faUser, faSignOutAlt, 
} from '@fortawesome/free-solid-svg-icons';

// hooks
import { useState } from 'react';

// components
import { NavigationMenu } from '../navigation-menu/NavigationMenu';

// styles
import styles from './IconsComp.module.css';

export const IconsComp = () => {
  const [menuNav, setMenuNav] = useState(false);

  return (
    <div className={styles.iconsWrap}>
      <CustomButton 
        msgToolTipe='Menu'
        icon={faBars}
        openMenu={setMenuNav}/>
      {menuNav && 
        <NavigationMenu onShow={setMenuNav}/>}
      <CustomButton 
        msgToolTipe='Config. Conta'
        icon={faUser}/>
      <CustomButton 
        msgToolTipe='Sair'
        icon={faSignOutAlt}/>
    </div>
  );
};