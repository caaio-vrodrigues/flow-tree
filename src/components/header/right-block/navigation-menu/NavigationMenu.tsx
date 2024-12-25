// src/components/navigation/NavigationMenu.tsx

//React
import React, { useContext } from 'react';

//context
import ContextMaster from '@/context/ContextProvider';

//styles
import styles from './NavigationMenu.module.css';

// Definindo a interface para as props do componente
interface NavigationMenuProps {
  onClose: (isOpen: boolean) => void;
};

export const NavigationMenu: React.FC<NavigationMenuProps> = ({ onClose }) => {
  const { 
    setShowOrcamentos, setShowEstoque, 
    setShowFornecedores, setShowFluxoPagamentos 
  } = useContext(ContextMaster);

  return (
    <div className={styles.menu}>
      <button className={styles.closeButton} onClick={() => onClose(false)}>X</button>
      <ul>
        <li>
          <button onClick={() => {
              setShowEstoque(true);
              setShowOrcamentos(false);
              setShowFornecedores(false);
              setShowFluxoPagamentos(false);
            }
          }>Estoque</button>
        </li>
        <li>
          <button onClick={() => {
            setShowOrcamentos(true);
            setShowEstoque(false);
            setShowFornecedores(false);
            setShowFluxoPagamentos(true);
          }}>Fluxo Pagamentos</button>
        </li>
        <li>
          <button onClick={() => {
              setShowEstoque(true);
              setShowOrcamentos(false);
              setShowFornecedores(false);
              setShowFluxoPagamentos(false);
            }
          }>Notas</button>
        </li>
        <li>
          <button onClick={() => {
              setShowEstoque(true);
              setShowOrcamentos(false);
              setShowFornecedores(false);
              setShowFluxoPagamentos(false);
            }
          }>Faturas</button>
        </li>
        <li>
          <button onClick={() => {
              setShowEstoque(true);
              setShowOrcamentos(false);
              setShowFornecedores(false);
              setShowFluxoPagamentos(false);
            }
          }>Boletos</button>
        </li>
        <li>
          <button onClick={() => {
              setShowEstoque(false);
              setShowOrcamentos(false);
              setShowFornecedores(true);
              setShowFluxoPagamentos(false);
            }
          }>Fornecedores</button>
        </li>
        <li>
          <button onClick={() => {
              setShowOrcamentos(true);
              setShowEstoque(false);
              setShowFornecedores(false);
              setShowFluxoPagamentos(false);
            }
          }>Clientes</button>
        </li>
        <li>
          <button onClick={() => {
              setShowOrcamentos(true);
              setShowEstoque(false);
              setShowFornecedores(false);
              setShowFluxoPagamentos(false);
            }
          }>Orçamentos</button>
        </li>
        <li>
          <button onClick={() => {
              setShowOrcamentos(true);
              setShowEstoque(false);
              setShowFornecedores(false);
              setShowFluxoPagamentos(false);
            }
          }>Obras</button>
        </li>
        <li>
          <button onClick={() => {
              setShowOrcamentos(true);
              setShowEstoque(false);
              setShowFornecedores(false);
              setShowFluxoPagamentos(false);
            }
          }>Contratos</button>
        </li>
      </ul>
    </div>
  );
};