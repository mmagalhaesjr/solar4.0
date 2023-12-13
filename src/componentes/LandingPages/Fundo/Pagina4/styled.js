import styled from "styled-components";

import fot from '../../../../assets/landingPage/topoFunil/foto4.webp'
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
    height:100px;
    margin-top: 5%;

    display: flex;
    align-items: center;
    justify-content:space-around;
}
.subtitulo{
   
    display: flex;
    justify-content: center;
    align-items: center; 
}
.subtitulo h2{
    color: #ffffff;
    font-size: 4rem;
    font-weight: 600;
}
.cximg{
    min-height: 200px;
    width: fit-content;

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



.container{
    width: 95%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-wrap: wrap;
}

.cxDepoimento{
    width: 300px;
    height: 500px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.cadaDepoimento{
    width: 100%;
    height: 60%;
    border-radius: 5%;
    background-color: #ffffff;

    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
   
}
.cxDepoimento img{
    width: 100px;
    height: 100px;
    background-color: #000000;
    border-radius: 50%;
    border: solid 2px #16d10c;
    position: relative;
    top:-50px;
}
.texto{
    width: 95%;
    margin-top: -40px;

    display: flex;
    flex-direction: column;
    align-items: center;
}
.texto h3{
    font-size: 1.2rem;
    font-weight: 600;
   margin-top: 5%;

    
}
.texto p{
    font-size: 1rem;
    line-height: 1.1;
    margin-top: 3%;
}


@media(max-width:1267px){
    .cxDepoimento{
        width: 250px;
    }
    .texto p{
        font-size:.9rem;
    }
}
@media(max-width:1057px){
    .cxDepoimento{
        width: 200px;
    }
    .cxDepoimento img{
        width: 70px;
        height: 70px;
    }
}



@media(max-width:850px){
    .cabecalho{
        align-items: center;
        justify-content: center;
    }
    .cximg img{
        display: none;
    }

    .cxDepoimento{
        width: 40%;
        height: 250px;
    }
    .cadaDepoimento{
        min-height: 75%;
    }
    .cxDepoimento img{
        top: -40px;
    }
    .texto p{
        font-size:.7rem;
    }
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

@media(max-width:500px){
    .texto{
       
    }
    .texto p{
        font-size:.5rem;
    }
}

`