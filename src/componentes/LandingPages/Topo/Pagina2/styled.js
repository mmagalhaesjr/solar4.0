import styled from "styled-components";

import f1 from '../../../../assets/landingPage/topoFunil/foto1.webp'



const foto1 = `url(${f1})`;

export const StyledPagina2 = styled.section`

    width: 100%;
    height: 100vh;
    

    background-image: ${foto1};
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 5% 70%;

    display: flex;
    flex-direction: column;
    align-items: center;

    span{
        font-weight: 600;
        color:#14a238 ;
    }
    .meioVerde{
        position: relative;
        left: -15%;
        width: 70%;
        height: 100%;
        background-color: #14a238;
        border-radius: 0px 0px 700px 0px;
        box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.8); 
    }
    .cabecalho{
        width: 100%;
        height: 200px;
        border: solid 2px red;
        
    }
   




`