import styled from "styled-components";

import f1 from '../../../../assets/landingPage/meioFunil/foto1.webp'



const foto1 = `url(${f1})`;


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

    height: 60vh;

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