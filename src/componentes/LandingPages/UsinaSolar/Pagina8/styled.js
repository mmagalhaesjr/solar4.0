import styled from "styled-components";


import f2 from '../../../../assets/landingPage/meioFunil/fundo3.webp'
const fundo = `url(${f2})`;


export const StyledPagina8 = styled.section`
    width: 100%;
   

    background-image: ${fundo};
    background-size: cover;
    background-repeat: no-repeat;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    span{
        font-weight: 600;
        color:#14a238 ;
    }


.cabecalho{
    width: 90%;
    height: 150px;
    margin-top: 5%;
   
    display: flex;
    align-items: center;
    justify-content:space-between;

   

}
.cabecalho2{
    width: 90%;
    height: 100px;
   
    display: flex;
    align-items: center;
    justify-content:left;
}

.cabecalho2 div{
    height:100%;
    width: 40%;
    background-color: #ffffff;

    display: flex;
    align-items: center;
    justify-content:left;
}
.cabecalho2 h2{
    font-size: 4rem;
    color: #14a238;
}

.subtitulo{
    width: 50%;
    height: 100%;

    display: flex;
    justify-content: left;
    align-items: center; 
}
.subtitulo h2{
    font-size: 4rem;
    color: #ffffff;
}
.logos{
    height: 100%; 
    width: 30%;

    display: flex;
    align-items: center;
    justify-content: space-between;
}
.logo1{
    width: 200px;
    margin-left:3%;
}
.logo2{
    width: 150px;
    margin-right:3%;
}

@media(max-width:1350px) {
    .logos{
        width:40%;
    }
    .logo1{
    width: 150px;
    margin-left:0;
   
    }
    .logo2{
    width: 100px;
    margin-right:0;
    
    }
}

@media(max-width:950px) {
    .logos{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        
    }
    .cabecalho2 h2{
        font-size:3rem ;
    }
    .subtitulo h2{
        font-size:3rem ;
    }
}
@media(max-width:700px) {
    .cabecalho2 div {
        background-color: transparent;
        
    }
    .cabecalho2 div h2{
        color: #ffffff;
    }
}
@media(max-width:600px) {
    .logos{
       display: none;
        
    }
    .cabecalho2 div {
       width: 90%;
       background-color: #ffffff;
    }
    .cabecalho2 div h2{
        color: #14a238;
    }
    .subtitulo {
        width: 90%;
    }
}



`