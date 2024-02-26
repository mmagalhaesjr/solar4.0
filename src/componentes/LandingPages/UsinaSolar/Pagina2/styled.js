import styled from "styled-components";


import f3 from '../../../../assets/landingPage/usinaSolar/2.png'
const foto3 = `url(${f3})`;

export const StyledPagina2 = styled.section`
    width: 100%;
  
    overflow: hidden;

    background-color: #59c0cc;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;


    
    

span{
        font-weight: 600;
        color:#14a238 ;
}
#container{
    width: 100%;
    
    /* display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: left; */

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.cabecalho{
    width: 95%;
    height: 200px;
    margin-top: 3%;
   
    display: flex;
    align-items: center;
    justify-content:space-around;
}
.subtitulo{
    height: 200px;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
}
.subtitulo h2{
    color: #14a238;
    font-size: 4rem;
    font-weight: 600;
    margin-left: 5%;
}
.cximg{
    height: 200px;
    width: 90%;

    display: flex;
    align-items: center;
    justify-content: space-evenly;
    text-align: center;
    gap: 5%;
}
.cximg img{
    width: 200px;

}
.cximg .intel{
    width: 150px;
}
.cxTexto{
    background-color: #ffffff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 250px;
    margin-top: 3%;
    margin-bottom:3%;
    line-height: 1.2;
   
    display: flex;
    align-items: center;
    justify-content:left;
}

.texto{
    width: 65%;
    margin-left: 3%;
}
.texto p{
    font-size: 2rem;
    font-weight: 300;
    color: #14a238;
}
.cxTexto img{
    width:34%;
    position: absolute;
    right: 0rem;
}
.transparente{
    display: none;
}

#containerImg{
    width: 100%;
    height: 80vh;
    background-image: ${foto3};
    background-size: cover;
    background-repeat: no-repeat;

    display: flex;
    align-items: center;
    justify-content: center;
}
#cxIcones{
    width: 90%;
    height: 90%;

    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
}
.boxIcones{
    width: 40%;
    height:100px;
    background-color: #ffffffc2;
    border: solid 2px #14a238;
    border-radius: 50px;

    display: flex;
    align-items: center;
    justify-content:space-evenly;
}
.boxIcones p{
    width:60%;
    font-size: 1.2rem;
    font-weight: 600;
}
.boxIcones img{
    width: 70px;
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



@media(max-width:1070px){
    .texto p{
        font-size: 1.5rem;
    }
    .boxIcones img{
    width: 50px;
}
}
@media(max-width:850px){
    .cximg{
        z-index: 2;
        display: flex;
        justify-content: center;   
    }
    .subtitulo h2{
        font-size: 3rem;
    }
}

@media(max-width:750px){
    .cximg{
        z-index: 2;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .texto p{
        font-size: 1.2rem;
    }
}
@media(max-width:600px){
    .cabecalho{
    width: 95%;
    height:fit-content;
    margin-top: 3%;
   
    display: flex;
    align-items: center;
    justify-content:space-around;
}
    .cximg{
    height:fit-content;
    width: 95%;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    text-align: center;
    gap: 5%;
}
.cximg img{
    width: 100px;
}
.cximg .intel{
    width: 80px;
}
   
    .cxTexto{
        z-index: 2;
    }

    .boxIcones{
        width: 60%;
    }
}
@media(max-width:560px){

    .cxTexto{
    background-color: #ffffff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
    width: 99%;
    height: 250px;
    margin-top: 3%;
    margin-bottom:3%;
    line-height: 1.6;
    /* border-radius: 5px 50px 5px; */
   
    display: flex;
    align-items: center;
    justify-content:left;
}
.texto{
    width: 100%;
    margin-left: 3%;
}
.texto p{
    font-size: 2rem;
    font-weight: 300;
    color: #000000;
    z-index: 2;
}
.cxTexto img{
    width:90%;
    position: absolute;
    left: 20px;
    z-index: 1;
}
.transparente{
    display: block;
}
.cor{
    display: none;
}




   #containerImg{
        height:fit-content ;
   }
    .cabecalho{
        margin-top: 10%;
    }
    .subtitulo h2{
        font-size: 3rem;
    }
    .cxTexto h3{
        font-size: 2rem;
        font-weight: 600;
        margin-top: 5%;
}
    .cxTexto p{
        font-size: 1rem;
        margin-top: 5%;
    }
    .boxIcones{
        width: 90%;
        margin-bottom: 3%;
    }
   
}

`