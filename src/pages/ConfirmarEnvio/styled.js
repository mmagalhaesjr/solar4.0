import styled from 'styled-components';

export const StyledConfirmarEnvio = styled.div`

background-color: #000000;
background: radial-gradient(circle, rgba(69, 122, 55, 1) 0%, rgba(26, 136, 1, 1) 100%);
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
text-align: center;
height: 100vh;

div{
  background-color: #ffffff;
    width: 100%;
    h1{
    color:#000;
    font-size:3rem;
    font-weight: 300;
    margin: 2% 0px;
    }
    p{
        font-size: 1rem;
        font-weight: 700;
        margin: 2% 0px;
    }
}
.cxLogo{
    background-color:transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3%;
}
img{
    width:200px;
    margin-top: 3%;
}
#img2{
    width: 150px;
}

a{
    margin-top: 50px;
    color: #eae9e9;
    text-decoration: none;
    &:hover{
        color: #000000;
    }
}

@media(max-width:600px){
   div h1{
    color:#000;
    font-size:2rem;
    font-weight: 300;
    margin: 2% 0px;
    }
    .cxLogo{
    margin-top: 5%;
}
img{
    width:150px;
    margin-top: 3%;
}
#img2{
    width: 100px;
}
}

`