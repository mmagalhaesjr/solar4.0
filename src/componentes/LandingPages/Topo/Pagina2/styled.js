import styled from "styled-components";

import f1 from '../../../../assets/landingPage/topoFunil/foto1.webp'


const foto1 = `url(${f1})`;

export const StyledPagina2 = styled.section`
    width: 100%;
    height: 100vh;
    background-image: ${foto1};
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 5% 70%;

    display: flex;
    flex-direction: column;
    align-items: center;

    span{
        font-weight: 600;
        color:#14a238 ;
    }
    .meioVerde{
        position: relative;
        left: -15%;
        width: 70%;
        height: 100%;
        background-color: #198f37;
        border-radius: 0px 0px 700px 0px;
        box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.8); 

        /* display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center; */
    }
    .cabecalho{
        width: 100%;
        height: 250px;

        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .txtTitulo{
        width: 400px;
        margin-left: 5%;

        display: flex;
        flex-direction: column;
        justify-content: left;
    }
    .txtTitulo h1{
        font-size: 5rem;
        color: #ffffff;
        font-weight: 600;
    }
    .txtTitulo h2{
        font-size: 1.5rem;
        color: #ffffff;
        font-weight: 600;
        margin-top: 5%;
    }
    .cabecalho img{
        width:400px;
    }
    .containerIcones{
        width: 70%;
        
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 5%;
        flex-wrap: wrap;
    }
    .cxCadaIcone{
        width: 200px;
        height: 200px;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
    }
    .cxCadaIcone p{
        font-size:1rem;
        flex-wrap: wrap;
        margin-top: 5%;
        color: #ffffff;
    }
    .containerIcones img{
        width:100px;
    }
    @media(max-width:1350px){
        .containerIcones{
            width: 90%;
            gap: 0;
        }
    }
    @media(max-width:1230px){
        .containerIcones{
            width: 80%;
            justify-content: left;
        }
        .cxCadaIcone{
            width: 150px;
            height: 150px;
            margin-left: 5%;
        }
        .containerIcones img{
            width:60px;
        }
        .cxCadaIcone p{
            font-size:.8rem;
        }
    }
    @media(max-width:1160px){
        .cabecalho img{
            width:30%;
    }
    }
    @media(max-width:1125px){
       
        .containerIcones{
            width: 70%;
            justify-content: center;
            margin-left:0;
        }
        .cxCadaIcone{
            width: 100px;
            height: 100px;
        }
        .containerIcones img{
            width:50px;
        }
        .cxCadaIcone p{
            font-size:.7rem;
        }
    }

    //responsividade mobile---
    @media(max-width:570px){
        justify-content: center;
        height: 80vh;
        .meioVerde{
            width: 90%;
            height: fit-content;
            border-radius: 0;
            left: 0;
        }
        .cabecalho{
            height: 150px;
            flex-direction: column;
        }
        .cabecalho img{
            width:30%;
        }
        .txtTitulo{
            width:90%;
            text-align: center;
        }
        .txtTitulo h1{
            font-size: 3rem;
        }
        .txtTitulo h2{
            font-size: 1rem;
        }

        .containerIcones{
            width:100%;
            height: fit-content;
            justify-content: center;
            margin-top: 10%;
        }
        .cxCadaIcone{
            width: 100px;
            height: 100px;
            margin-bottom:10%;
        }
        .containerIcones img{
            width: 50px;
        }
        .cxCadaIcone p{
            font-size:.7rem;
        }

    }
   
`