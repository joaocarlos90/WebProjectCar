import React, {useState, useEffect } from 'react';
import *as S from './styles';
import iconDefault from '../../assets/iconecliente.png';
import api from '../../services/api';
import {Redirect} from 'react-router-dom';





function ListerRegister({Nome, Email, Telefone, Profissao, PossuiCarro}) {
  
  
  
  async function Remove({match}){

    const [Redirect, setRedirect] = useState(false);
    const [id, setId] = useState();

     const res = window.confirm('Deseja realmente remover a tarefa?')
    if(res==true){
    await api.delete(`/register/${match.params.id}`)
    .then(() => setRedirect());
    console.log(match.params.id)
    }
    console.log(match.params.id)
  }



  return (
    <S.Container>
           <S.TopCard>
             <img src={iconDefault} alt="Icone do Cliente"/>
             <h3>{Nome}</h3>
             <h3>{Email}</h3>
             <h3>{Profissao}</h3>
             <h3>{PossuiCarro}</h3>
             
             
           </S.TopCard>
           <S.BottomCard>
              <strong>{Telefone}</strong>
              <button onClick={Remove}>delete</button>
           </S.BottomCard>

           
    </S.Container>
    
  )
}

export default ListerRegister;
