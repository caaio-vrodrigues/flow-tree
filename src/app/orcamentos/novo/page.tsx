// components 
import { Header } from "@/components/header/Header";
import { NovoOrcamentoComp } from "@/components/main/orcamentos/novo-orcamento/NovoOrcamentoComp";
import { Footer } from "@/components/footer/Footer";

// styles
// import styles from './page.module.css';

const NovoOrcamento = () => {
  return <>
    <Header/>
    <NovoOrcamentoComp/>
    <Footer/>
  </>
};

export default NovoOrcamento;