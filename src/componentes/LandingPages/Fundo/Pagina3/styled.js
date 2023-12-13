import styled from "styled-components";

import fot from '../../../../assets/landingPage/topoFunil/foto2.webp'

const foto = `url(${fot})`;

export const StyledPagina3 = styled.section`
width: 100%;


background-image: ${foto};
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
.cabecalho{
    width: 90%;
    min-height: 200px;
    margin-top: 3%;
   
    display: flex;
    align-items: center;
    justify-content:space-around;
}
.subtitulo{
    min-height: 200px;
    width: 90%;

    display: flex;
    flex-direction: column;
   
    align-items: flex-start;
}
.subtitulo h2{
    color: #ffffff;
    font-size: 4rem;
    font-weight: 600;
    margin-top: 3%;
}
.subtitulo p{
    color: #ffffff;
    font-size: 2rem;
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
    gap: 5%;
}
.cximg img{
    width: 200px;
}
.cximg .intel{
    width: 150px;
}



.container{
   width: 100%;
   margin-top: 2%;

   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
}
.boxBranco{
    width: 90%;
    height: 100px;
    margin-bottom: 1%;
    background-color: #ffffffdb;
    border-radius: 10px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.boxBranco div{
    width: 80%;
}
.boxBranco h3{
    font-size: 2rem;
    font-weight: 600;
}
.boxBranco p{
    font-size: 1.5rem;
    font-weight: 300;
    margin-top: 1%;
}

@media( max-width:1100px) {
    .container{
        width: 95%;
    }
}
@media( max-width:900px){
    .boxBranco h3{
    font-size: 1.5rem;
}
.boxBranco p{
    font-size: 1rem;
    margin-top: 1%;
}
}
@media( max-width:830px) {
    .container{
        height: fit-content;
        display: flex;
        flex-direction:column;

        margin-top: 5%;
    }
}
@media( max-width:790px) {
    .cximg img{
        display: none;
    }
    .subtitulo{
        text-align: center;
        justify-content: center;
    }
    .subtitulo h2{
        font-size: 3rem;
    }

}
@media( max-width:500px){
    .boxBranco div{
        width: 95%;
    }
}





`