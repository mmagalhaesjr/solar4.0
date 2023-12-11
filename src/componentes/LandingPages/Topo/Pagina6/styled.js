import styled from "styled-components";

import fot from '../../../../assets/landingPage/topoFunil/1.png'
const foto = `url(${fot})`;


export const StyledPagina6 = styled.section`
width: 100%;
height: 100vh;

display: flex;
flex-direction:column;
align-items: center;

background-color: #78af37;


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
    min-height: 200px;
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





.container{
    width: 100%;
    height: 200px;
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
    font-size: 1rem;
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

@media(max-width:1221px) {
    .container{
        
    }

    .cxAmarela{
        width: 170px;
        height:100px;
    }
    .texto{
        font-size: .7rem;
    }
}
@media(max-width:990px){
    .cabecalho{
    width: 90%;
    height:100px;
    margin-top: 1%;
}
.subtitulo{
    display: flex;
    justify-content: center;
    align-items: center; 
}
.subtitulo h2{
    font-size: 3em;
}
.cximg{
    min-height: 100px;
}
.cximg img{
    width: 150px;
}
.cximg .intel{
    width: 100px;
}

    .cxAmarela{
        width: 150px;
        height:90px;
    }
    .texto{
        font-size: .6rem;
    }
}
@media(max-width:680px){

    .cabecalho{
        height: 200px;
        flex-direction:column;
        justify-content:center;
        text-align: center;
    }
    .subtitulo h2{
        font-size: 3rem;
    }
    .cximg img{
        width: 150px;
}
    .cximg .intel{
        width: 100px;
}

    #tela{
        height: 50%;
    }
    .container{
       flex-direction: column;
       position:relative;
       height: 50%;
       width: 100%;
       margin-top: 2px;
    }

    .cxAmarela{
        width: 95%;
        height:70px;
        box-shadow:none;
        

        display: flex;
        align-items: center;
        justify-content: center;  
    }
    .texto{
        font-size: .9rem;
        margin-top: 0;
    }
}

`