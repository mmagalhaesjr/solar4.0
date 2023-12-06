import styled from "styled-components";


import foto from '../../../../assets/landingPage/meioFunil/foto6.webp'




const img = `url(${foto})`;


export const StyledSobreEnergiaSolarP5 = styled.section`
    width: 100%;
    height: 100vh;
    overflow: hidden;
  

span{
        font-weight: 600;
        color:#ffffff ;
}

#container{
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: blue;
}
.fundo{
    width: 100%;
    height: 100%;
    background-image: ${img};
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 80% 10%;

    display: flex;
    align-items: center;
    justify-content: left;

 

}
.cxTexto{
    width: 60%;
    height: 90%;
    background-color:#14a238 ;
    position: absolute;

    display: flex;
    flex-direction: column;
    align-items: center;
   justify-content: center;
}


.subtitulo{
    width: 90%;
    display: flex;
    justify-content: flex-start;
    align-items: center; 
    margin-top: 3%;

}
.subtitulo h2{
    color: #ffffff;
    font-size: 4rem;
    font-weight: 600;
}
 ul{
    width: 90%;
    margin-top: 5%;
    list-style: outside;
    margin-bottom: 3%;
}
 ul li{
    color: #ffffff;
    line-height:1.3;
    font-size: 2rem;
    margin-top: 3%;
    
}


@media (max-width:1195px) {
    .subtitulo h2{
        font-size: 3rem;
    }
    ul li{
    font-size: 1.5rem;
    }
}

@media (max-width:700px) {
    .cxTexto{
        width: 100%;
        height: 100%;
        background-color: #14a237b4;
    }
    
 ul{
    list-style: none;
}
}




`