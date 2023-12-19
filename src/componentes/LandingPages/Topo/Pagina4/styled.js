import styled from "styled-components";

import fot from '../../../../assets/landingPage/topoFunil/foto3.webp'
const foto = `url(${fot})`;


export const StyledPagina4 = styled.section`
width: 100%;


background-image: ${foto};
background-size: cover;
background-repeat: no-repeat;
background-position: 5% 70%;

display: flex;
flex-direction:column;
/* justify-content: center; */
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
    margin-bottom: 3%;
    margin-top: 10%;
}


.cabecalho{
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
    .cabecalho{
     
    }
    .cximg{
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