import React,{useState, useEffect} from 'react';
import * as S from './styles';
import api from '../../services/api';
//componentes
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import RegistersList from '../../components/ListRegisters';

function ListRegisters() {

  const[filterActived, setFilterActived] = useState('all')
  const[registers, setRegister] = useState([]);

  

  async function LoadRegister(){
    
    await api.get(`/register/filter/${filterActived}/`).then(response=>{
      setRegister(response.data);
      console.log(response.data)
    })
  }

  useEffect(()=>{
    LoadRegister();
  }, [])

    return (
    <S.Container>
      <Header/>
    <S.Client>
      <h3>CLIENTES</h3>
    </S.Client>
    <S.Content>
      {
        registers.map(r=>(
      <RegistersList Nome={r.Nome} Email={r.Email} Profissao={r.Profissao} PossuiCarro={r.PossuiCarro} Telefone={r.Telefone} />
     ))
      
      }
      
    </S.Content>
    <Footer/>
   
    </S.Container>
          
  )
}

export default ListRegisters;
