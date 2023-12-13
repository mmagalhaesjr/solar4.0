import styled from "styled-components";

import f1 from '../../../../assets/landingPage/fundoFunil/foto1.webp'



const foto1 = `url(${f1})`;

export const StyledPagina1 = styled.section`

    width: 100%;
    height: 100vh;
    

    background-image: ${foto1};
    background-size: cover;
    background-repeat: no-repeat;
    /* background-position: 5% 70%; */

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
.boxVerde{
    width: 60%;
    background: linear-gradient(0deg, rgba(79,211,135,1) 0%, rgba(5,157,55,1) 54%);
    margin-top: 2%;
    border-radius: 30px;
    
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
}
.boxVerde h2{
    color: #ffffff;
    font-size: 3rem;
    margin: 3%;
}
@media(max-width:1030px) {
    .pagina1-titulo{
        font-size: 3rem;
    }
    .boxVerde{
        font-size: 1.3rem;
    }
}
@media(max-width:630px){
    .pagina1-titulo{
        text-align: center;
    }
    .boxVerde{
        width: 90%;
    }
}
@media(max-width:530px){

    height: 60vh;

#pagina1{
    justify-content: space-between;
}
.cabecalho{
    margin-top: 5%;
    margin-bottom: 10%;
}
.boxVerde {
    margin-bottom: 3%;
}
.boxVerde h2{
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