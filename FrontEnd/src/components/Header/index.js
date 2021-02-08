import React from 'react';
import *as S from './styles';
import {Link} from 'react-router-dom';
import Logo from '../../assets/logo.png';
import Logo2 from '../../assets/lambo2.png';

function Header() {
  return (
    <S.Container>
      <S.LeftSide>
        <img src={Logo} alt="Logo do site"/>
      </S.LeftSide>
      <S.CenterSize>
       <img src={Logo2} alt="Logo do site2"/>
      </S.CenterSize>
      <S.RightSide>
        <Link to="/">Home</Link>
        <span className="dividir"></span>
        <Link to="/register">Quero Comprar</Link>
        <span className="dividir"></span>
        <Link to="/register/filter/all/">Lista de clientes para contato</Link>
        
      </S.RightSide>
    </S.Container>
  )
}

export default Header;
