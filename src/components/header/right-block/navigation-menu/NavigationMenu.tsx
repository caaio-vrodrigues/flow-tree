// src/components/header/right-block/navigation-menu/NavigationMenu.tsx

//React
import React, { useRef, Dispatch, SetStateAction } from 'react';

//next
import Link from 'next/link';

//styles
import styles from './NavigationMenu.module.css';

// hooks
import { useCloseElement } from '@/hooks/useCloseElement';;
import { useOpenOptionMenu } from '../../../../hooks/useOpenOptionMenu';

// funcs
import { menuOptionsList } from '@/utils/funcs/menuOptionsList';

type TNavigationMenuProps = {
  onShow: Dispatch<SetStateAction<boolean>>;
};

export const NavigationMenu = ({ onShow }: TNavigationMenuProps) => {
  const menuRef = useRef<HTMLMenuElement | null>(null); // Referência para o menu

  useCloseElement({ref: menuRef, funcSetShowElement: onShow});

  const { handleOptionClick } = useOpenOptionMenu();

  return (
    <menu className={styles.menu} 
      tabIndex={0} // dar foco a div
      ref={menuRef}>
        <button 
          className={styles.closeButton} 
          onClick={() => onShow(false)}>
            X
        </button>
        <ul>
          {menuOptionsList.map((option, i) => 
            <li key={i}>
              <button onClick={() => handleOptionClick()}>
                <Link
                  className={styles.linkOptMenu} 
                  href={option.link}>
                  {option.option}
                </Link>
              </button>
            </li>)}
        </ul>
    </menu>
  );
};