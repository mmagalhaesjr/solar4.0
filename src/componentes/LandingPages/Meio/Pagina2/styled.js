import styled from "styled-components";


import f2 from '../../../../assets/landingPage/meioFunil/fundo1.webp'
const foto2 = `url(${f2})`;


export const StyledSobreEnergiaSolarP2 = styled.section`
    width: 100%;
   

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
.subtitulo{
    min-height: 200px;
    width: fit-content;

    display: flex;
    justify-content: flex-start;
    align-items: center; 
}
.pagina2-texto h2{
    color: #14a238;
    font-size: 4rem;
    font-weight: 600;
    margin-top: 3%;    
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
        height: 60vh;
        margin-top: 5%;
    }
    .foto2{
    left: 0;
}
}
`