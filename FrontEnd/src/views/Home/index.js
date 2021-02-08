import React from 'react';
import * as S from './styles';

//componentes
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import DemoCarousel from '../../components/Body';


function Home() {
  
  return (
    <S.Container>
      <Header/>
      <DemoCarousel/>

      <Footer/>
    </S.Container>

          
  )
}

export default Home;
