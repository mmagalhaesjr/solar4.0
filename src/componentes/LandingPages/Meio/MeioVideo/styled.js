import styled from "styled-components";


import f1 from '../../../../assets/landingPage/meioFunil/foto1.webp'



const foto1 = `url(${f1})`;


export const StyledMeioVideo = styled.section`
    width: 100%;
    /* height: 100vh; */

    background-image: ${foto1};
    background-size: cover;
    background-repeat: no-repeat;
    /* background-position: 5% 70%; */


/* background-image: ${''}; */

/* background-image: url('https://geracaosolarengenharia.com.br/wp-content/uploads/2020/07/300-sl-alternative-energy-blue-sky-371900-scaled.jpg.webp');

background-size: cover;
background-repeat: no-repeat;
background-position: 5% 70%; */

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
    color: #ffffff;
    font-size: 3rem;
    font-weight: 600;
    margin-top: 5%;
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
    width: 50%;
    height: 400px;
    background-color: #00000094;
    box-shadow: 0px 0px 50px 0px rgba(0,0,0,0.75);
    margin-top: 5%;
    margin-bottom: 5%;


    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
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
    height: 100vh;

   
    .cabecalho{
     height: fit-content;
     margin-bottom: 5%;
     margin-top: 20%;
    }

    h1{
    color: #ffffff;
    font-size: 2rem;
    font-weight: 600;
    margin-top: 20%;
    text-align: center;
    
}
    .cximg{
        
    }
    .cximg img{
    width: 100px;
    }
    .cximg .logo2{
    width: 70px;
    }


.subtitulo{
    width: 90%;
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
    text-align: center;
}

.cxVideo{
    width: 80%;
    height: 200px;
    background-color: #00000094;
    margin-bottom: 50px;
    margin-top: 20%;
}
}



`