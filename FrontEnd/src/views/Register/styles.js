import styled from 'styled-components';

export const Container = styled.div`
width:100%;

background-color:#353839;
`
export const Formulario = styled.div`

width:50%;
height: 580px;
display: flex;
margin-left:25%;
justify-content: center;
flex-direction: column;
a{
    color:#ffff00;
    font-weight:bold;
    text-decoration: none;
    margin: 0 0 15px;
    margin-top:15px;
    

    

    &:hover{
        color:#ffff;
    }
}
    button{
        background-color:#ffff00;
        color:#353839;
    
        
        border-radius: 20px;
  
        display: flex;

        margin:auto;
        text-align: center;
        font-family: Brush Script MT;
        font-size: 40px;
        font-weight: 50;
        padding: 20px;
 



  
        cursor: pointer;

        &:hover{
            opacity:0.7;
            color:#ffff;
        }
        
    }

`
