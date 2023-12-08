import styled from "styled-components";

import fot from '../../../../assets/landingPage/topoFunil/foto2.webp'

const foto = `url(${fot})`;

export const StyledPagina3 = styled.section`
width: 100%;


background-image: ${foto};
background-size: cover;
background-repeat: no-repeat;
background-position: 5% 70%;

display: flex;
flex-direction: column;
align-items: center;



.cabecalho{
    width: 90%;
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
    color: #ffffff;
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



.container{
    width: 80%;
    height: 500px;

    display: flex;
    align-items: center;
    justify-content: center;

    border: solid 1px red;
}
.caixa{
    width: 400px;
    height: 400px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    border: solid 1px #ffffff;
}
.txt{
    width: 90%;
    color: #ffffff;
    text-align: center;
    margin-bottom: 3%;
    font-size: 2rem;
}
.cx{
    width: 90%;
    min-width:350px ;
    height: 90%;
    border-radius: 5%;
    background-color: #9b9999b9;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5%;
}
.divisaoCx{
    width: 95%;

    display: flex;
    align-items: center;
    justify-content: space-between;

    border: solid 1px red;
}
.divisaoCx section{
    width: 100%;
    height: 100%;
    border: solid 1px orange;

    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
}

.divisaoCx img{
    width: 100px;
    height: 80px;

}
.divisaoCx p{
    font-size: 1.5rem;
    color: #ffffff;
}

#seta{
    color: #ffffff;
    font-size: 10rem;
}

@media( max-width:1100px) {
    .container{
        width: 95%;
    }
}
@media( max-width:1100px) {
    #seta{
        display: none;
    }
}
@media( max-width:830px) {
    .container{
        height: fit-content;
        display: flex;
        flex-direction:column;

        margin-top: 5%;
    }
    .caixa{
        
    }
}



`