import React from 'react';
import *as S from './styles';
import Logo from '../../assets/bmwfooter.png';
import Logo2 from '../../assets/bmwfooter2.png';


function Footer() {
  return (
    <S.Container>
      <S.LeftSide>
        <img src={Logo} alt="Logo do site"/>
      </S.LeftSide>
      <span>Sell Car - Luxo sobre rodas, Av. Independencia, 908 - Centro São Paulo - (11) 3263-5588 E-mail:sellcar@sellcar.com</span>
      <S.CenterSize>
       <img src={Logo2} alt="Logo do site2"/>
      </S.CenterSize>
     
    </S.Container>
  )
}

export default Footer;
