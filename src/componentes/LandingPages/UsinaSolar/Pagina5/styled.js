import styled from "styled-components";

import foto from '../../../../assets/landingPage/usinaSolar/5.png'




const img = `url(${foto})`;


export const StyledPagina5 = styled.section`
    width: 100%;
    background-color:#ffffff; 
   
    display: flex;
    justify-content: center;
    overflow: hidden;

span{
    font-weight: 600;
    color:#14a238 ;
}

#container{
    width: 50%;
    background-color:#ffffff; 
    display: flex;
    flex-direction: column;
    align-items: center;   
}
.cxContainer{
    width: 95%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
}
.subtitulo{
    height: 250px;
    width: fit-content;
   
    display: flex;
    align-items: center;
    justify-content: center;
}
.subtitulo h2{
    color: #14a238;
    font-size: 4rem;
    font-weight: 600;
    margin-top: 3%;
    text-align: center;
}
.cxContainer ul{
    list-style: none;
    width: 90%;
}
.cxContainer ul li{
    color: #000000;
    font-weight: 300;
    line-height:1.3;
    font-size: 2rem;
    margin-top: 3%;
    
}
#botao{
    width: 50%;
    height: 70px;
    background-color: #14a238;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.9);
    margin-top: 5%;
    margin-bottom: 5%;
    border-radius: 20px;
    cursor: pointer;


    display: flex;
    align-items: center;
    justify-content: center;

    &:hover{
        background-color: #10852d;
    }
}
#botao p{
    font-size: 1.5rem;
    font-weight: 600;
    color: #ffffff;
}
#containerDireito{
    width: 50%;
    
    background-image: ${img};
    background-size:cover;
    background-repeat: no-repeat;
    background-position: 10% 100%;

}
.cabecalho{
    width: 100%;
    height: 170px;
   
    display: flex;
    align-items: center;
    justify-content:space-evenly;

   
}
.logo1{
    width: 200px;
    margin-left:3%;
}
.logo2{
    width: 150px;
    margin-right:3%;
}
.foto2{
    position: relative;
    width: 100%;
    left: -7%;
}
a{
    color: #14a238;
    font-weight: 700;
}
@media(max-width:1300px){
    .cxContainer ul li{
        font-size: 1.7rem;
    }
    .subtitulo h2{
        font-size: 3rem;
    }
}

@media(max-width:1170px){
    #botao{
        width: 60%;
        height: 70px;
    }
    #botao p{
        font-size: 1.3rem;
    }
}
@media(max-width:870px){
   
    .cxContainer ul li{
        font-size: 1.3rem;
    }
    .cabecalho{
        height:70px;
    }
    .logo1{
        width: 100px;
        margin-left:3%;
    }
    .logo2{
        width: 80px;
        margin-right:3%;
    }
    #botao{
        width: 90%;
        height: 70px;
    }
}
@media(max-width:700px){
display: flex;
flex-direction: column;
background-color: #134489;
    #container{
        width: 100%;
        height: 100%;
        margin-bottom: 10%;

       
    }

    #containerDireito{
    width: 50%;
    
    background-image: ${img};
    background-size:cover;
    background-repeat: no-repeat;
    background-position: 10% 10%;
    
}

    .cabecalho{
      display: none;
    }
    .subtitulo{
        height: fit-content;
        width: fit-content;
        margin-top: -3%;
   
        display: flex;
        align-items: center;
        justify-content: flex-start;
}
    .subtitulo h2{
        font-size: 2rem;
        margin-top: 10%;
    }
    ul{
        margin-top: 5%;
    }
    #containerDireito{
        width: 100%;
        height: 40vh;
        background-position: 70% 100%;
    }
    #botao{
        width: 60%;
        height: 70px;
        margin-bottom: 3%;
    }
    #botao p{
        font-size: 1.1rem;
    }
}

`