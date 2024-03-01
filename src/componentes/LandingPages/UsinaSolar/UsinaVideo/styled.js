import styled from "styled-components";

// import fot from '../../../assets/landingPage/topoFunil/foto3.webp'

// const foto = `url(${fot})`;


export const StyledUsinaVideo = styled.section`
width: 100%;
height: 100vh;




/* background-image: ${''}; */

background-image: url('https://geracaosolarengenharia.com.br/wp-content/uploads/2020/07/300-sl-alternative-energy-blue-sky-371900-scaled.jpg.webp');

background-size: cover;
background-repeat: no-repeat;
background-position: 5% 70%;

display: flex;
flex-direction:column;
justify-content: center;
align-items: center;

#container{
    width: 100%;
    max-width:2000px;
    height: fit-content;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
}

.cxVideo{
    width: 50%;
    height: 400px;
    background-color: #00000094;
    box-shadow: 0px 0px 50px 0px rgba(0,0,0,0.75);
    margin-bottom: 3%;
    margin-top: 10%;


    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
}


.cabecalho{
    width: 90%;
    height: fit-content;
    margin-top: 3%;
    width: 90%;

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
    width: 90%;

    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 5%;
}
.cximg img{
    width: 200px;
}
.cximg .intel{
    width: 150px;
}




@media(max-width:1000px) {
    .cabecalho{
        display: flex;
        flex-direction: column;
        height: 300px;
    }
    .cximg{
        justify-content: space-between;
        width: 90%;
    }
    .cxVideo{
        width: 95%;
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

    width: 100%;
    height: 50vh;

    .cxVideo{
    width: 80%;
    height: 200px;
    background-color: #00000094;
    margin-bottom: 50px;
    margin-top: 0;
}
    .cabecalho{
     height: fit-content;
     margin-bottom: 50px;
     margin-top: 50px;
    }
    .cximg{
        
    }
    .cximg img{
    width: 100px;
    }
    .cximg .intel{
    width: 70px;
    }
}



`