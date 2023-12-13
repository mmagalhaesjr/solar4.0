import styled from "styled-components";


import foto from '../../../../assets/landingPage/fundoFunil/foto2.webp'



const img = `url(${foto})`;

export const StyledPagina5 = styled.section`
    width: 100%;
   
   
    display: flex;
    justify-content: center;
    overflow: hidden;

span{
        font-weight: 600;
        color:#14a238 ;
}
.box1{
    width: 50%;

    display: flex;
    flex-direction: column;
    align-items: center;  
}
.texto{
    width: 95%;
    height: 100%;
    background-color: #ffffff;

    display: flex;
    flex-direction: column;
    align-items: center;
}

.texto h2{
    color: #14a238;
    font-size: 4rem;
    font-weight: 600;
    margin-top: 3%;
}
.subtitulo{
    width: fit-content;

    display: flex;
    justify-content: flex-start;
    align-items: center; 
}

.texto ul{
    width: 90%;
    margin-top: 5%;
    
    display: flex;
    align-items: center;
    justify-content: center;    
}
.texto ul li{
    font-size:2rem;
    font-weight: 600;
    margin-top: 3%;
    text-align: center;
}
.box2{
    width: 50%;
    overflow: hidden;

    background-image: ${img};
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 70% 5%;
    transform: scale(1);
}
.cabecalho{
    width: 100%;
    height: 170px;
   
    display: flex;
    align-items: center;
    justify-content: right;
}
.logo1{
    width: 200px;
    margin-left:3%;
    margin-right:5%;
}
.logo2{
    width: 150px;
    margin-right:10%;
}
.foto2{
    position: relative;
    width: 100%;
    left: -7%;
}
.containerBoxIcones{
    width: 90%;
    height: fit-content;
    margin-top: 2%;
    margin-bottom: 5%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.boxIcones{
    margin-top: 2%;
    width: 95%;
    height: 100px;
    border-radius: 50px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.9);

    display: flex;
    align-items: center;
    justify-content: center;
}
.ico{
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
img{
    width: 80px;
    height: 80px;
}
h3{
    width: 50%;
    font-size: 1.5rem;
    font-weight: 500;

}
}

@media(max-width:1300px){
.texto ul li{
    font-size: 1.7rem;
}
}

@media(max-width:870px){

    ul li{
        display: none;
    }
    .texto h2{
        font-size: 4rem;
    }
    .texto ul li{
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
    width: 100px;
    margin-right:3%;
}
.boxIcones{
    width: 98%;
}
}
@media(max-width:700px){
    display: flex;
    flex-direction: column;
    margin-top: 10%;

.box2{
    margin-top: 5%;
}

.subtitulo{
  height: 80px;
margin-bottom: 10%;

  align-items: center;
  text-align: center;

}

.texto ul{
    margin-top: 0;
}

    .texto h2{
        font-size: 3rem;
        margin-top: 5%;
    }
   
    .box1{
        width: 100%;
        
    }
    .box2{
        width: 100%;
        height: 50vh;
        background-position: 70% 25%;
    }

    .boxIcones{
        width: 90%;
        height: 80px;
    }
    .ico{
    width: 90%;
    img{
    width: 50px;
    height: 50px;
    }
    h3{
    font-size: 1.1rem;
    font-weight: 600;
    }
}

}

`