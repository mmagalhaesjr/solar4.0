import styled from "styled-components";

import f1 from '../../../assets/fundoServicos.png'
const foto1 = `url(${f1})`;


export const StyledVideo = styled.section`
 width: 100%;
    /* height: 100vh; */

    background-image: ${foto1};
    background-size: cover;
    background-repeat: no-repeat;
    /* background-position: 5% 70%; */




display: flex;
flex-direction:column;
justify-content: center;
align-items: center;

#container{
    width: 100%;
    max-width:2000px;
    height: fit-content;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
}




.cabecalho{
    width: 90%;
    height: fit-content;
    margin-top: 3%;
    width: 90%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:space-evenly;
}

.cximg{
    width: 90%;

    display: flex;
    align-items: center;
    justify-content: space-between;
    text-align: center;
    gap: 5%;
}
.cximg img{
    width: 250px;
}
.cximg .logo2{
    width: 200px;
}


.subtitulo{
    width: fit-content;
    background: linear-gradient(0deg, rgba(79,211,135,1) 0%, rgba(5,157,55,1) 54%);
    border-radius: 10px;
    margin-top: 3%;

    display: flex;
    align-items: center;
    justify-content:center;
}
h1{
    width: 90%;
    color: #ffffff;
    font-size: 3rem;
    font-weight: 600;
    margin-top: 5%;

    display: flex;
    align-items: center;
    justify-content:center;
    text-align: center;
}
.subtitulo h2{
    color: #ffffff;
    font-size: 3rem;
    font-weight: 600;
    margin: 1%;
    text-align: center;
}

.cxVideo{
    width: fit-content;
    /* width: 50%; */
    height: fit-content;
    background-color: #00000094;
    box-shadow: 0px 0px 50px 0px rgba(0,0,0,0.75);
    margin-top: 5%;
    margin-bottom: 5%;
    overflow: hidden;


    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
}



.cxVideo iframe {
    width:300px;
    height:500px;
}





@media(max-width:1000px) {
    .cabecalho{
        display: flex;
        flex-direction: column;
        height: 300px;
    }
    .cximg{
        justify-content: space-between;
        width: 90%;
    }
    .cxVideo{
        width: 95%;
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

@media(max-width:500px){

    width: 100%;
    height: fit-content;

   
    .cabecalho{
     height: fit-content;
     margin-bottom: 5%;
     margin-top: 20%;
    
    }

    .cximg{
        width: 98%;

        display: flex;
        align-items: center;
        justify-content: space-between;
        text-align: center;
    }
    .cximg img{
    width: 150px;
    }
    .cximg .logo2{
    width: 120px;
    }

    h1{
    width: 80%;
    color: #ffffff;
    font-size: 1.5rem;
    font-weight: 600;
    margin-top: 10%;
    text-align: center;
    
}
    



.subtitulo{
    width: 100%;
    background: linear-gradient(0deg, rgba(79,211,135,1) 0%, rgba(5,157,55,1) 54%);
    border-radius: 10px;
    margin-top:15%;

    display: flex;
    align-items: center;
    justify-content:center;
}
.subtitulo h2{
    color: #ffffff;
    font-size: 1.7rem;
    font-weight: 600;
    margin: 2%;
    text-align: left;
}

.cxVideo{
    width: fit-content;
    height: fit-content;
    background-color: #00000094;
    margin-bottom: 10%;
    margin-top: 10%;
}

.cxVideo iframe {
    width:300px;
    height:500px;
}
}



`