import styled from 'styled-components';

export const StyledConfirmarEnvio = styled.div`

background-color: #000000;
background: radial-gradient(circle, rgba(93,91,91,1) 0%, rgba(0,0,0,1) 100%);
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
text-align: center;
height: 100vh;

div{
  background-color: #C4BCBC;
    width: 100%;
    h1{
    color:#000;
    font-size: 50px;
    font-weight: 200;
    }
}

a{
    margin-top: 100px;
    color: #eae9e9;
    text-decoration: none;
    &:hover{
        color: #846939;
    }
}

`