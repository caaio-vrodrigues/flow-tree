import { orcamentosData } from '@/data/data-test/orcamentos-data';
import { fluxoPagamentosData } from '@/data/data-test/fluxo-pagamentos-data';

// utils
import { isValidOrcamento } from '@/utils/search-validation/isValidOrcamento';
import { isValidPagamento } from '@/utils/search-validation/isValidPagamento';

type TgetSearchOpt = {
  page: string,
  searchValue: string,
};

export const getSearchOptions = ({ page, searchValue }: TgetSearchOpt) => {
  const validOrcamentos = orcamentosData.filter(isValidOrcamento);
  const validPagamentos = fluxoPagamentosData.filter(isValidPagamento);

  const optionsOrcamento = validOrcamentos.filter(option => 
    option.num_orcam?.toString().includes(searchValue)
  );
  const optionsPagamentos = validPagamentos.filter(option => 
    option.id.toString().includes(searchValue)
  );

  // lista de opções resultante da busca
  const options = 
    page === 'orcamentos' ? optionsOrcamento : 
    page === 'fluxo-pagamentos' ? optionsPagamentos : 
    [];

  return options;
};