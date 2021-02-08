import styled from 'styled-components';
import Lambo from '../../assets/fontes/Lambo-Medium.otf';


export const Container = styled.div`
width:100%;
height: 300px;
background:#353839;
Border-bottom:3px solid #ffff00;
display:flex;


`

export const LeftSide = styled.div`
width:70%;
height: 70px;
display:flex;
align-items: top;
padding-left: 5px;

img{
    width:300px;
    height: 300px;
}

`

export const RightSide = styled.div`
width:100%;
height: 90px;
display:flex;
align-items: center;
justify-content:flex-end;
margin-top:100px;

a{
   
    color:#ffff00;
    font-weight:bold;
    text-decoration: none;
    margin: 0 30px;
    

    &:hover{
        color:#ffff;
    }
}
.dividir::after{
content:"|";
margin:0 10px;
color:#ffff00;
}

`
export const CenterSize = styled.div`
align-items: right;
img{
    width:500px;
    
}
`