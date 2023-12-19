import styled from "styled-components";

import f1 from '../../../../assets/landingPage/topoFunil/foto3.webp'



const foto1 = `url(${f1})`;

export const StyledPagina1 = styled.section`

    width: 100%;
    height: 100vh;

    background-image: ${foto1};
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 5% 70%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

  

#container{
    width: 100%;
    max-width:2000px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

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

/* section{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
} */

.pagina1-titulo{
    color: #ffffff;
    font-size: 5rem;
    margin-top: 3%;
    font-weight: 600;

   
}
.txt{
    width: 90%;
    max-width: 700px;
    line-height: 1.2;
    margin-top: 3%;
    text-align: center;

}
.txt h2{
    font-size: 3rem;
    font-weight: 300;
    color:#ffffff;
}
.pagina1-texto{
    width: 40%;
    background: linear-gradient(0deg, rgba(79,211,135,1) 0%, rgba(5,157,55,1) 54%);
    margin-top: 5%;
    margin-bottom: 5%;
    border-radius: 30px;
    
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;

}
.pagina1-texto h2{
    color: #ffffff;
    font-size: 3rem;
    margin: 3%;
}
@media(max-width:1030px) {
    
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
.cabecalho{
    margin-top: 10%;
    margin-bottom: 10%;
}
.pagina1-titulo{
    margin-top: 0;
}
.pagina1-texto {
    margin-bottom: 30%;
}
.pagina1-texto h2{
    font-size: 1rem;
}
.logo1{
    width: 150px;
    margin-left:5%;
}
.logo2{
    width: 100px;
    margin-right:5%;
}
.txt h2{
font-size: 2rem;
}
}


`