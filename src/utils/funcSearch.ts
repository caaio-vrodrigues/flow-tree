// src/utils/funcSearch.ts

type TfuncSearch = {
  value: string,
  setSearchValue: React.Dispatch<React.SetStateAction<string>>,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
};

export const funcSearch = ({ value, setSearchValue, setLoading }: TfuncSearch) => {
  
  setLoading(true);
  setSearchValue(value);

  setTimeout(() => {
    setLoading(false);
  }, 500);
};