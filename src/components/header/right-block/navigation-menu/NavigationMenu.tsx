// src/components/header/right-block/navigation-menu/NavigationMenu.tsx

//React
import React, { useRef, Dispatch, SetStateAction } from 'react';

//styles
import styles from './NavigationMenu.module.css';

// hooks
import { useCloseElement } from '@/hooks/useCloseElement';;
import { useOpenOptionMenu } from './hooks/useOpenOptionMenu';

type TNavigationMenuProps = {
  onShow: Dispatch<SetStateAction<boolean>>;
};

export const NavigationMenu = ({ onShow }: TNavigationMenuProps) => {
  const menuRef = useRef<HTMLMenuElement | null>(null); // Referência para o menu

  useCloseElement({ref: menuRef, funcSetShowElement: onShow});

  const { handleOptionClick } = useOpenOptionMenu();

  const arrMenuOptions = [
    'Estoque', 'Fluxo Pagamentos', 'Notas', 'Faturas', 'Boletos', 
    'Fornecedores', 'Clientes', 'Orçamentos', 'Obras', 'Contratos',
  ];

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
          {arrMenuOptions.map((option, i) => 
            <li key={i}>
              <button onClick={() => handleOptionClick({clickedOption: option})}>
                {option}
              </button>
            </li>)}
        </ul>
    </menu>
  );
};