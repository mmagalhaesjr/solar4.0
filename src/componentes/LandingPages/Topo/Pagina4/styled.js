import styled from "styled-components";

import fot from '../../../../assets/landingPage/topoFunil/foto3.webp'
const foto = `url(${fot})`;


export const StyledPagina4 = styled.section`
width: 100%;
height: 100vh;

background-image: ${foto};
background-size: cover;
background-repeat: no-repeat;
background-position: 5% 70%;

display: flex;
flex-direction:column;
align-items: center;


.cabecalho{
    width: 90%;
    margin-top: 3%;
   
    display: flex;
    align-items: center;
    justify-content:space-around;
}
.subtitulo{
    width: fit-content;

    display: flex;
    justify-content: flex-start;
    align-items: center; 
}
.subtitulo h2{
    color: #ffffff;
    font-size: 4rem;
    font-weight: 600;
    margin-top: 3%;
}
.cximg{
    width: 95%;

    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-align: center;
    gap: 5%;
}
.cximg img{
    width: 200px;
}
.cximg .intel{
    width: 150px;
}

.cxVideo{
width: 70%;
height: 80%;
max-height: 700px;
background-color: #000000;
margin-bottom: 3%;
}

@media(max-width:820px) {
   
    .subtitulo{
        text-align: center;
        justify-content: center;
    }
    .subtitulo h2{
        font-size: 3rem;
    }
}

@media(max-width:1000px) {
    .cabecalho{
        display: flex;
        flex-direction: column;
    }
    .cxVideo{
        width: 95%;
    }
    
}

@media(max-width:500px){
    .cabecalho{
     
    }
    .cximg{
    justify-content: center;
    margin-top: 3%;
    margin-bottom: 3%;
    }
    .cximg img{
    width: 100px;
    }
    .cximg .intel{
    width: 70px;
    }
}



`