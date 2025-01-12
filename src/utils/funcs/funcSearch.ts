// src/utils/funcSearch.ts

type TfuncSearch = {
  value: string,
  setSearchValue: React.Dispatch<React.SetStateAction<string>>,
};

export const funcSearch = ({ value, setSearchValue }: TfuncSearch) => {
  setSearchValue(value);
};