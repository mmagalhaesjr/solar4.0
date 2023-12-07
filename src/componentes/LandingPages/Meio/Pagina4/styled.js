import styled from "styled-components";


import foto from '../../../../assets/landingPage/meioFunil/foto4.webp'



const img = `url(${foto})`;

export const StyledSobreEnergiaSolarP4 = styled.section`
    width: 100%;
    height: 100vh;
   
    display: flex;
    justify-content: center;

span{
        font-weight: 600;
        color:#14a238 ;
}
.box1{
    width: 50%;

    display: flex;
    flex-direction: column;
    align-items: center;  
}
.texto{
    width: 95%;
    height: 100%;
    background-color: #ffffff;

    display: flex;
    flex-direction: column;
    align-items: center;
}

.texto h2{
    color: #14a238;
    font-size: 4rem;
    font-weight: 600;
    margin-top: 3%;
}
.subtitulo{
    min-height: 200px;
    width: fit-content;

    display: flex;
    justify-content: flex-start;
    align-items: center; 
}
.texto ul{
    width: 90%;
    margin-top: 5%;
    list-style: outside;
}
.texto ul li{
    line-height:1.3;
    font-size: 2rem;
    margin-top: 3%;
}
.box2{
    width: 50%;

    background-image: ${img};
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 5% 5%;
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
.texto ul li{
    font-size: 1.7rem;
}
}

@media(max-width:870px){
    .texto h2{
        font-size: 4rem;
    }
    .texto ul li{
    font-size: 1.3rem;
}
.cabecalho{
    height:70px;
}
.logo1{
    width: 100px;
    margin-left:3%;
}
.logo2{
    width: 100px;
    margin-right:3%;
}
}
@media(max-width:700px){
    display: flex;
    flex-direction: column;
    margin-top: 10%;

.box2{
    margin-top: 5%;
}

.cabecalho{
  
}

    .texto h2{
        font-size: 3rem;
        margin-top: 5%;
    }
   
    .box1{
        width: 100%;
        
    }
    .box2{
        width: 100%;
        height: 50vh;
        background-position: 70% 25%;
    }
}



`