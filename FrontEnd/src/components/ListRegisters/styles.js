import styled from 'styled-components';



export const Container = styled.div`
width:400px;
height: 400px;
background:#353839;
display:flex;
align-items: center;
justify-content:center;
box-shadow: -2px -4px 30px 5px rgba(0,0,0,0.78);
border-radius:10px;
flex-direction:column;
margin: 20px;
cursor:pointer;
transition: all 0.3s ease;

&:hover{
    opacity:0.5;

}


`
export const TopCard = styled.div`
display:flex;
align-items: center;
justify-content:center;
flex-direction:column;
img{
    width:80px;
    height:70px
}

`
export const BottomCard = styled.div`
width:100%;
display:flex;
justify-content:center;

strong {
    color:#ffff00;
    font-weight:bold;
}

`


