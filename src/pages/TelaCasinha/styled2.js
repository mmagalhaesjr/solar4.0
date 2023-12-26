import styled from "styled-components";

import fundo from '../../assets/fundoCasa.png';
const fundoCasa = `url(${fundo})`;

export const StyledTelaMenor = styled.section `


background-image: ${fundoCasa};
background-repeat: no-repeat; 
background-size: cover;
background-position: center;


display: flex;
text-align: center;
align-items: center;
justify-content: center;

display: flex;
align-items: center;
justify-content:center;
text-align: center;

@media(min-width:600px){
    display: none;
}

@media(max-width:600px){
   display: block;

   #containerInfo{
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
   }

   #titulo{
    width: 90%;

    display: flex;
    align-items: center;
    justify-content:center;
    text-align: center;
   }
   #titulo h1{
    font-size: 1.5rem;
    font-weight: 700;
    margin-top: 3%;
    margin-bottom: 3%;
   }

   img{
    width: 95%;
    height: 40%;
   }

   .cxInfo{
    width: 95%;
    height: 80px;
    

    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #ffffff;
    margin-top: 1%;

    border: solid 1px red;
   }
   .icone{
    width: 100px;
    height: 50px;
   }
   .info{
    width: 90%;
    height: 90%;
    margin-left: 2%;

    text-align:left;
    display: flex;
    flex-direction: column;

    border: solid 1px #000000;
   }
   h3{
    margin-bottom: 2%;
    font-weight:700;
   }
   p{
    font-size:.9rem;
   }
  }


`