import styled from "styled-components";


import f3 from '../../../../assets/landingPage/meioFunil/foto3.webp'



const foto3 = `url(${f3})`;

export const StyledSobreEnergiaSolarP3 = styled.section`
    width: 100%;
   
    display: flex;
    flex-direction: column;

    span{
        font-weight: 600;
        color:#14a238 ;
    }

.secao1{
    width: 100%;
    

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.secao2{
    width: 100%;
    height: 80vh;
    background-image: ${foto3};
    background-size: cover;
    background-repeat: no-repeat;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: end;
}
.cximg2{
    display: none;
    
}
.cximg2 img{
    width: 100px;
    margin-top: 10%;
}
.intel{
    width: 50px;
}
.cabecalho{
    width: 95%;
    min-height: 200px;
    margin-top: 3%;
   
    display: flex;
    align-items: center;
    justify-content:space-around;
}
.subtitulo{
    min-height: 200px;
    width: fit-content;

    display: flex;
    justify-content: flex-start;
    align-items: center; 
}
.subtitulo h2{
    color: #14a238;
    font-size: 4rem;
    font-weight: 600;
    margin-top: 3%;
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
.texto{
    width: 95%;
    height: 170px;
    margin-top: 3%;
}
.texto h3{
font-size: 3rem;
font-weight: 600;
margin-top: 5%;
}
.texto p{
    font-size: 2rem;
    margin-top: 5%;
}
@media(max-width:850px){
    .cximg{
        z-index: 2;
        display: flex;
        justify-content: center;
        
    }
}

@media(max-width:750px){
    .cximg{
        z-index: 2;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
}
@media(max-width:600px){
    .cximg{
        display: none;
    }
    .cximg2{
       
        width: 100%;
            margin-bottom: 30%;
       display: none;

       
        /* display: flex;
        align-items: center;
        justify-content: space-evenly; */
    }
    .texto{
        z-index: 2;
    }
    .texto {
        
    }
}
@media(max-width:560px){
    .secao2{
        height: 40vh;
    }
    .cabecalho{
        margin-top: 10%;
    }
    .subtitulo h2{
        font-size: 3rem;
    }
    .texto h3{
        font-size: 2rem;
        font-weight: 600;
        margin-top: 5%;
}
    .texto p{
        font-size: 1rem;
        margin-top: 5%;
    }
   
}

`