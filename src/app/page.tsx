// src/app/page.tsx

'use client';

//components
import { Header } from '@/components/header/Header';
import { Main } from '@/components/main/Main';
import { Footer } from '@/components/footer/Footer';

const Home = () => {
  return <>
    <Header/>
    <Main/>
    <Footer/>
  </>
};

export default Home;
