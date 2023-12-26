import styled from "styled-components";

import fundo from '../../assets/fundoCasa.png';
const fundoCasa = `url(${fundo})`;

export const StyledTelaMenor = styled.section `


background-image: ${fundoCasa};
background-repeat: no-repeat; 
background-size: 100%;
background-position: center;
background-position: 90% 0%;
background-color: #65ab27ff;


display: flex;
align-items: center;
justify-content: center;
text-align: center;


@media(min-width:600px){
    display: none;
}

@media(max-width:600px){
   
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
    text-align: center;

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

   #containerInfo{
    width: 100%;
    background-color: #65ab27ff;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
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
    margin-bottom: 3%;
   }
   .icone{
    width: 100px;
    height: 50px;
   }
   .info{
    width: 90%;
    height: 90%;
    margin-left: 2%;

    display: flex;
    align-items: flex-start;
    justify-content:center;
    flex-direction: column;
    text-align: left;
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