import styled from "styled-components";

import f1 from '../../../assets/landingPage/meioFunil/foto1.webp'
import f2 from '../../../assets/landingPage/meioFunil/fundo1.webp'
import f3 from '../../../assets/landingPage/meioFunil/foto3.webp'




const foto1 = `url(${f1})`;
const foto2 = `url(${f2})`;
const foto3 = `url(${f3})`;

export const StyledSobreEnergiaSolarp1 = styled.section`
    width: 100%;
    height: 100vh;

    background-image: ${foto1};
    background-size: cover;
    background-repeat: no-repeat;

    display: flex;
    flex-direction: column;
    align-items: center;

    span{
        font-weight: 600;
        color:#14a238 ;
    }
   

.cabecalho{
    width: 100%;
    height: 170px;
   
    display: flex;
    align-items: center;
    justify-content:space-between;
}
.logo1{
    width: 250px;
    margin-left:3%;
}
.logo2{
    width: 200px;
    margin-right:3%;
}
.pagina1-titulo{
    color: #ffffff;
    font-size: 5rem;
    margin-top: 3%;
}
.pagina1-texto{
    width: 60%;
    background-color: #14a238;
    margin-top: 5%;
    border-radius: 40px;
    
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
}
.pagina1-texto h2{
    color: #ffffff;
    font-size: 2rem;
    margin: 3%;
}
@media(max-width:1030px) {
    .pagina1-titulo{
        font-size: 3rem;
    }
    .pagina1-texto{
        font-size: 1.3rem;
    }
}
@media(max-width:630px){
    .pagina1-titulo{
        text-align: center;
    }
    .pagina1-texto{
        width: 90%;
    }
}
@media(max-width:530px){
#pagina1{
    justify-content: space-between;
   
}
.pagina1-texto{
    margin-bottom: 50%;
}
.logo1{
    width: 150px;
    margin-left:5%;
}
.logo2{
    width: 100px;
    margin-right:5%;
}
}


`



export const StyledSobreEnergiaSolarP2 = styled.section`
    width: 100%;
    height: 100vh;

    display: flex;

    span{
        font-weight: 600;
        color:#14a238 ;
    }


.pagina2-box1{
    width: 50%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
   
}
.pagina2-texto{
    width: 95%;
    height: 100%;
    background-color: #ffffff;

    display: flex;
    flex-direction: column;
    align-items: center;
}
.pagina2-texto h2{
    color: #14a238;
    font-size: 4rem;
    font-weight: 600;
    margin-top: 3%;
    text-align: center;
}
.pagina2-texto ul{
    width: 90%;
    margin-top: 5%;
    list-style: outside;
}
.pagina2-texto ul li{
    line-height:1.5;
    font-size: 2.5rem;
    margin-top: 3%;
}
.pagina2-box2{
    width: 50%;
    height: 100vh;

    background-image: ${foto2};
    background-size: cover;
    background-repeat: no-repeat;
}
.cabecalho{
    width: 100%;
    height: 170px;
   
    display: flex;
    align-items: center;
    justify-content:space-evenly;
}
.logo1{
    width: 200px;
    margin-left:3%;
}
.logo2{
    width: 150px;
    margin-right:3%;
}
.foto2{
    position: relative;
    width: 100%;
    left: -7%;
}

@media(max-width:1300px){
.pagina2-texto ul li{
    font-size: 1.7rem;
}
}

@media(max-width:870px){
    .pagina2-texto h2{
        font-size: 4rem;
    }
    .pagina2-texto ul li{
    font-size: 1.3rem;
}
.logo1{
    width: 150px;
    margin-left:3%;
}
.logo2{
    width: 100px;
    margin-right:3%;
}
}
@media(max-width:700px){
    .pagina2-texto h2{
        font-size: 3rem;
    }
}
@media(max-width:560px){
display: flex;
flex-direction: column;

    .pagina2-texto h2{
        margin-top: 10%;
    }
   
    .pagina2-box1{
        width: 100%;
        
    }
    .pagina2-box2{
        width: 100%;
        
    }
    .foto2{
    left: 0;
}
}
`

export const StyledSobreEnergiaSolarP3 = styled.section`
    width: 100%;
    
   
    display: flex;
    flex-direction: column;

    span{
        font-weight: 600;
        color:#14a238 ;
    }

.secao1{
    width: 100%;
    

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.secao2{
    width: 100%;
    height: 80vh;
    background-image: ${foto3};
    background-size: cover;
    background-repeat: no-repeat;
}
.cabecalho{
    width: 95%;
    min-height: 200px;
    margin-top: 3%;
   
    display: flex;
    align-items: center;
    justify-content:space-around;
}
.subtitulo{
    min-height: 200px;
    width: fit-content;

    display: flex;
    justify-content: flex-start;
    align-items: center; 
}
.subtitulo h2{
    color: #14a238;
    font-size: 4rem;
    font-weight: 600;
    margin-top: 3%;
}
.cximg{
    min-height: 200px;
    width: fit-content;

    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-align: center;
}
.cximg img{
    width: 200px;
}
.texto{
    width: 95%;
    height: 170px;
    margin-top: 3%;
}
.texto h3{
font-size: 3rem;
font-weight: 600;
margin-top: 5%;
}
.texto p{
    font-size: 2rem;
    margin-top: 5%;
}
@media(max-width:850px){
    .cximg{
        z-index: 2;
        display: flex;
        justify-content: center;
        
    }
}

@media(max-width:750px){
    .cximg{
        z-index: 2;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
}
@media(max-width:600px){
    .cximg{
       display: none;
    }
    .texto{
        z-index: 2;
    }
    .texto {
        
    }
}
@media(max-width:560px){
    .secao2{
        height: 40vh;
    }
    .cabecalho{
        margin-top: 10%;
    }
    .subtitulo h2{
        font-size: 3rem;
    }
    .texto h3{
        font-size: 2rem;
        font-weight: 600;
        margin-top: 5%;
}
    .texto p{
        font-size: 1rem;
        margin-top: 5%;
    }
   
}

`