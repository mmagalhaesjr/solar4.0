import styled from "styled-components";


export const StyledPagina7 = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;

    overflow: hidden;
    

h4{
    font-weight: 600;
    color:#14a238 ;
}
#container{
    width: 100%;
    background-color: #14a238;
    
    overflow: hidden;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: left;
}


.cabecalho{
    width: 90%;
    min-height: 200px;
    margin-top: 3%;
   
    display: flex;
    align-items: center;
    justify-content:space-between;
}
.subtitulo{
    height: 200px;
    width: 50%;

    display: flex;
    align-items: center;
    justify-content: center; 
}
.subtitulo h2{
    color: #ffffff;
    font-size: 4rem;
    font-weight: 600;
}
.cximg{
    height: 200px;
    width: 50%;

    display: flex;
    align-items: center;
    justify-content: right;
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
    height: 200px;
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
}
.cxTexto img{
    width:30%;
    position: absolute;
    right: 0rem;
}

ul{
    width: 90%;
    margin-left: 5%;
}

ul li{
   color: #ffffff;
   line-height: 1.2;
   margin-bottom: 5%;
   font-size: 1.4rem;
}
span{
    font-weight: 700;
}






@media(max-width:1070px){
    .texto p{
        font-size: 1.5rem;
    }
    .boxIcones img{
    width: 50px;
}
}
@media(max-width:1020px) {
    .subtitulo h2{
    font-size: 3rem;
}
}
@media(max-width:850px){
    .cximg img{
    width: 150px;
}
    .cximg .intel{
    width: 100px;
}
}


@media(max-width:750px){
    .texto p{
        font-size: 1.2rem;
    }
    ul li{
        font-size: 1.2rem;
    }
    
}

@media(max-width:650px){
    .cabecalho{
        flex-direction: column;
    }
    .subtitulo{
        width: 100%;
        height: fit-content;
        text-align: center;
    }
    .subtitulo h2{
        font-size: 2rem;
        font-weight: 600;
}
    .cximg{
        width: 100%;
        height:100px;
        justify-content: center;
    }
}

@media(max-width:560px){

    .cxTexto{
    background-color: #ffffff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 170px;
    margin-top: 3%;
    margin-bottom:3%;
    line-height: 1.2;
   
    display: flex;
    align-items: center;
    justify-content:left;
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
    ul li{
        font-size: 1rem;
    }
    .boxIcones{
        width: 90%;
    }
   
}

`