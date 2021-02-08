import React,{useState, useEffect} from 'react';
import * as S from './styles';
import api from '../../services/api';
//componentes
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function Register({match}) {

const [Nome, setNome]=useState();
  const[Email, setEmail]=useState();
  const[Telefone, setTelefone]=useState();
  const[Profissao, setProfissao]=useState();
  const[PossuiCarro, setPossuiCarro]=useState();

  async function LoadRegisterDetails(){
    await api.get(`/register/${match.params.id}`)
    .then(response=>{
      setNome(response.data.Nome)
      setEmail(response.data.Email)
      setTelefone(response.data.Telefone)
      setProfissao(response.data.Profissao)
      setPossuiCarro(response.data.PossuiCarro)

    })
  }


  async function Save(){
    await api.post('/register', {
      Nome,
      Email,
      Telefone,
      Profissao,
      PossuiCarro
    }).then(()=>
      alert('REGISTRO REALIZADO COM SUCESSO!')
    )
  }

  useEffect(()=>{
    
    LoadRegisterDetails();
  }, [])

  return (
    <S.Container>
      <Header/>

      <S.Formulario>
      <a>Nome:</a>
      <input type="text" placeholder="Nome do cadastro..." onChange={e => setNome(e.target.value)} value={Nome}/>

      <a>Email:</a>
      <input type="text" placeholder="Email do cadastro..." onChange={e => setEmail(e.target.value)} value={Email}/>
      
      <a>Telefone:</a>
      <input type="text" placeholder="Telefone do cadastro..." onChange={e => setTelefone(e.target.value)} value={Telefone}/>
      
      <a>Profissão:</a>
      <input type="text" placeholder="Profissao do cadastro..." onChange={e => setProfissao(e.target.value)} value={Profissao}/>
      
      <a>Possui Carro?:</a>
      <input type="text" placeholder="carro do cadastro..." onChange={e => setPossuiCarro(e.target.value)} value={PossuiCarro}/>
      
      <button type="button" onClick={Save}>Cadastrar</button>

      </S.Formulario>
      <Footer/>
   
    </S.Container>

          
  )
}

export default Register;
