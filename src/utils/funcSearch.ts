// src/utils/funcSearch.ts

type TfuncSearch = {
  value: string,
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
}

export const funcSearch = ({ value, setSearchTerm, setLoading }: TfuncSearch) => {
  setLoading(true);
  setSearchTerm(value); // Atualiza o termo de busca

  console.log("Buscando por:", value);

  // Simulando uma operação de busca com um timeout
  setTimeout(() => {
    setLoading(false);
  }, 500); // Simula 0.5s de carregamento
};