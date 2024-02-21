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

    span{
        font-weight: 600;
        color:#14a238 ;
    }

#container{
    width: 100%;
    height: 100%;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.txt{
   width: 90%;
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
    font-weight: 600;
}


.txt h2{
    width: 50%;
    margin-top: 50px;

    font-size: 3rem;
    font-weight: 300;
    color:#ffffff;
    text-align: left;
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

.cabecalho{
    width: 100%;
    height: 50%;
   
   
    display: flex;
    align-items: end;
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

    width: 100%;
    height: 100vh;

    background-image: ${foto1};
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 60% 2%;

    
#pagina1{
    justify-content: space-between;
}
.cabecalho{
    margin-top: 30%;
    margin-bottom: 10%;
}
.pagina1-titulo{
    margin-top: 0;
}
.pagina1-texto {
    margin-bottom: 30%;
}

.txt{
   width: 98%;

   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
}
   

.txt h2{
    width: 90%;
    
    font-size: 1.5rem;
    font-weight: 300;
    color:#ffffff;
    text-align: left;
}

.cabecalho{
    width: 100%;
    height:fit-content;
    margin-bottom: 80%;
   
    display: flex;
    align-items: end;
    justify-content:space-between;   
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