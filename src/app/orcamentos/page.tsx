// components
import { Header } from "@/components/header/Header";
import { Main } from '@/components/main/Main';
import { Footer } from "@/components/footer/Footer";
import { Orcamentos } from "@/components/main/orcamentos/Orcamentos";

const OrcamentosPage = () => {
  return <>
    <Header/>
    <Main>
      <Orcamentos/>
    </Main>
    <Footer/>
  </>
};

export default OrcamentosPage;