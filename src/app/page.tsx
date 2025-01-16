// src/app/page.tsx

'use client';

// react
import { useEffect } from 'react';

//components
import { Header } from '@/components/header/Header';
import { Main } from '@/components/main/Main';
import { Footer } from '@/components/footer/Footer';

const Home = () => {
  useEffect(() => {
    // Impede a rolagem automática
    window.scrollTo(0, 0);
  }, []);
  
  return <>
    <Header/>
    <Main/>
    <Footer/>
  </>
};

export default Home;
