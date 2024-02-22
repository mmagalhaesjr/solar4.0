import styled from "styled-components";

import f1 from '../../../../assets/landingPage/topoFunil/foto1.webp'


const foto1 = `url(${f1})`;

export const StyledPagina2 = styled.section`
    width: 100%;
    
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
    .meioVerde{
        position: relative;
        left: -15%;
        width: 75%;
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
        justify-content: space-around;
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
        width:350px;
    }
    .containerIcones{
        width: 70%;
        max-width:600px;
        
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 3%;
        margin-bottom: 2%;
        flex-wrap: wrap;
    }
    .cxCadaIcone{
        width: 150px;
        height: 150px;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        text-align: center;
        margin-top: 2%;
    }
    .cxCadaIcone p{
        width: 99%;
        height: 50px;
        font-size:1rem;
        flex-wrap: wrap;
        margin-top: 5%;
        color: #ffffff;
    }
    .containerIcones img{
        width:80px;
        height: 80px;
    }



    //responsividade mobile---
    @media(max-width:1360px){
        justify-content: center;
        height: 80vh;
        .meioVerde{
            width: 90%;
            width: 500px;
            height: fit-content;
            border-radius: 0;
            left: 0;

            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
        .cabecalho{
            margin-top: 5%;
            height: 150px;
            flex-direction: column;
        }
        .cabecalho img{
            width:30%;
            margin-top: 3%;
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
            max-width: 400px;
           
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

    @media(max-width:600px){

        background-image: ${foto1};
        background-size: cover;
        background-repeat: no-repeat;
        background-position: 50% 70%;


        .meioVerde{
        position: relative;
        left: -15%;
        width: 75%;
        height: 100%;
        background-color: #198f37dc;
        border-radius: 0px 0px 700px 0px;
        box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.8); 

        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;


        }
        .containerIcones{
        width: 80%;
        max-width:600px;
        
        display: flex;
        align-items:lefth;
        justify-content: center;
        gap: 3%;
        flex-wrap: wrap;
    }
    .cxCadaIcone{
        width: 100px;
        height: 100px;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        margin-top: 2%;
    }
    .cxCadaIcone p{
        width: 70%;
        height: 50px;
        font-size:.7rem;
        flex-wrap: wrap;
        margin-top: 5%;
        color: #ffffff;
    }
    .containerIcones img{
        width:50px;
        height: 50px;
    }
    .cabecalho img{
        width:0px;
        display: none;
    }

//-------------------

    .cabecalho{
        width: 100%;
        height:fit-content;

        display: flex;
        align-items: center;
        justify-content: space-around;
    }
    .txtTitulo{
        width: 90%;
        
        display: flex;
        flex-direction: column;
        justify-content: left;
    }
    .txtTitulo h1{
        font-size: 3rem;
        color: #ffffff;
        font-weight: 600;
    }
    .txtTitulo h2{
        font-size: 1rem;
        color: #ffffff;
        font-weight: 600;
        margin-top: 5%;
    }
    }
   
`