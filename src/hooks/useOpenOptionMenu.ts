// src/hooks/useOpenOptionMenu.tsx

// react 
import { useContext } from "react";

// context
import ContextMaster from "@/context/ContextProvider";

export const useOpenOptionMenu = () => {
  const {
    setShowDropdown, setSearchValue, setVisibleCount
  } = useContext(ContextMaster);

  const handleOptionClick = () => {
    setShowDropdown(false);
    setSearchValue('');
    setVisibleCount(3);
  };

  return { handleOptionClick };
};