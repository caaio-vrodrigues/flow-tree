// src/hooks/useCloseElements.tsx

import { useEffect, RefObject, Dispatch, SetStateAction } from "react";

type TuseFecharMenu = {
  ref: RefObject<HTMLMenuElement | null>;
  funcSetShowElement: Dispatch<SetStateAction<boolean>>;
};

export const useCloseElement = ({ ref, funcSetShowElement }: TuseFecharMenu) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        funcSetShowElement(false);
      };
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [funcSetShowElement, ref]);
};