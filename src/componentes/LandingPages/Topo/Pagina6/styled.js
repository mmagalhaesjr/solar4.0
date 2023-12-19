import styled from "styled-components";

import fot from '../../../../assets/landingPage/topoFunil/1.png'
const foto = `url(${fot})`;


export const StyledPagina6 = styled.section`
width: 100%;
height: 100vh;
background-color: #78af37;


display: flex;
flex-direction:column;
align-items: center;


#tela{
width: 100%;
height: 100%;

background-image: ${foto};
background-size: cover;
background-repeat: no-repeat;
background-position: 50% 70%;

display: flex;
flex-direction:column;
align-items: center;
}
.cabecalho{
    width: 90%;
    height:100px;
    margin-top: 1%;

    display: flex;
    align-items: center;
    justify-content:space-around;
}
.subtitulo{
    display: flex;
    justify-content: center;
    align-items: center; 
}
.subtitulo h2{
    color: #14a238;
    font-size: 4rem;
    font-weight: 600;
}
.cximg{
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

//--------------------


.container{
    width: 100%;
    height: fit-content;
    position: absolute;
    margin-top: 130px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1%;
}
.cxAmarela{
    width: 210px;
    height:180px;
    background-color: #e9c200;
    border-radius: 20px;
    box-shadow: 5px 5px 10px rgba(233, 153, 3, 1);
    margin: 1%;

    display: flex;
    align-items: flex-start;
    justify-content: center;   
}
.texto{
    width: 100%;
    font-size: .9rem;
    color:#ffffff ;
    margin-top: 5%;
}
.numero{
    width: 30px;
    height: 100%;

    display: flex;
    justify-content:center;
}
.numero h3{
    font-size: 1.2rem;
    font-weight: 600;
    color:#ffffff ;
    position: relative;
    top: 10px;
}






//--------------------

@media(max-width:1224px) {
    height: 1200px;
    #tela{
        width: 100%;
        height: 100%;

        background-image: ${foto};
        background-size: cover;
        background-repeat: no-repeat;
        background-position: 50% 70%;
        

        display: flex;
        flex-direction:column;
        align-items: center;
    }
    .container{
        width: 100%;
        height: fit-content;
        position: relative;
        margin-top:0%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        flex-wrap: nowrap;
        gap: 0%;
        margin-top: 3%;
        margin-bottom: 3%;
    }

    .cxAmarela{
        width:95%;
        height:90px;
        background-color: #e9c200;
        border-radius: 20px;
        box-shadow:none;
        margin: 1%;

        display: flex;
        align-items: center;
        justify-content: center;   
    }
}



@media(max-width:1000px) {

//cabeçalho apatir de 590px
.cabecalho{
    width: 90%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:space-around;
    margin-top: 5%;
}
.subtitulo{
    display: flex;
    justify-content: center;
    align-items: center; 
}
.subtitulo h2{
    color: #14a238;
    font-size: 3rem;
    font-weight: 600;
}
.cximg{
    width: fit-content;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-align: center;
    gap: 5%;
    margin-top:5%;
}
.cximg img{
    width: 200px;
}
.cximg .intel{
    width: 150px;
}
   
    .cximg{
        justify-content: space-between;
        width: 90%;
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

@media(max-width:615px){
    #tela{
        width: 100%;
        height: 100%;

        background-image: ${foto};
        background-size: cover;
        background-repeat: no-repeat;
        background-position: 48% 60%;

        display: flex;
        flex-direction:column;
        align-items: center;
    }
}

@media(max-width:590px){
height: 100vh;
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