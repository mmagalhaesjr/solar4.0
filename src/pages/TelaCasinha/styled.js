import styled from 'styled-components';

import foto from '../../assets/gif.gif';
import fundo from '../../assets/fundoCasa.png';
import telaMenor from '../../assets/casinha.png';





const fotoCaminho = `url(${foto})`;
const fundoCasa = `url(${fundo})`;
const fotoTMenor = `url(${telaMenor})`;

export const StyledFuncionamento = styled.section`

width: 100%;
height: fit-content;


background-image: ${fundoCasa};
background-repeat: no-repeat; 
background-size: cover;
background-position: center;

display: flex;
flex-direction: column;
text-align: center;


#titulo{
  font-size: 40px;
  font-weight:700;
  margin-top: 80px;
}
h1{
  color:#000000 ;
  font-family: 'Montserrat', sans-serif;
}
#casinha{
    width: 50%;
    height: 50%;
  }
#container{
  height: 70vh;
  width: 100%;
  max-width: 1100px;

  background-image: ${fotoCaminho};
  background-repeat: no-repeat; 
  background-size: contain;
  background-position: center;
  margin-top: 40px;

  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
 
/* position: relative;
top: -500px; */
}

#telaMaior{
  display: flex;
  align-items: center;
  justify-content: center;
}
  .circulo {
    background-color: #F2CB36;
    /* background-color:#00a3369c; */
    width: 60px;
    height: 60px;
    border-radius: 50%;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    position: relative;
    color: #000000;
    font-weight: 700;
    cursor: pointer;
    &:hover {
      background-color: #FFE583;
      background-color: #f7d54e;
      transition: .5s;
      border-radius: 30%;
    }
  }
  #circulo1 {
    top: -25%;
    left: 0%;
  }
  #circulo2 {
    top: 0%;
    left: -3%;
  }
  #circulo3 {
    top: 7%;
    left:4%;
  }
  #circulo4 {
    top: 20%;
    left:-30%;
  }
  #circulo5 {
    top: 0%;
    left: -45%;
  }
  #circulo6 {
    top: 0%;
    left: 2%;
  }

  #ContainerInfo {
    position: relative;
    top: -400px;
  }
  .info {
    width: 350px;
    height: 200px;
    position: absolute;
    display: none;
    border-radius: 7px;
    background-color: #ffffffef;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

    &.info-visible {
      display: block;
    }
  }
  #img {
   
    
  }
  #info5 img{
    margin-top: 10px;
  }
  .info #img {
    width:130px ;
    height:80px;
    margin-top: 20px;
  }

  .info p{
    margin-top: 10px;
  }
  .info .imgInfo {
    margin: 5px;
  }
  #info1 {
    top: 10rem;
    left: -40rem;
  }
  #info2 {
    top: 10rem;
    left: -40rem;
  }
  #info3 {
    top: 12rem;
    left: -40rem;
  }
  #info4 {
    top: 20rem;
    left: -50rem;
  }
  #info5 {
    top: 20rem;
    left: -57rem;
  }
  #info6 {
    top: 20rem;
    left: -48rem;
  }
  //estilo da tela menor-------------------------------------

  /* #containerTelaMenor{
    width:100%;
    display: none;
  } */

  /* #telaMenor{
    width: 100%;
    height: 100%;

    background-image: ${fotoTMenor};
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 40% 30%;

    display: flex;
    flex-direction:column;
    align-items: center;
  }
  #funcoVerde{
    width: 100%;
    height: fit-content;
    background-color: #78AC34;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .containerCxAmarela{
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
  }

  .cxAmarela{
    width: 95%;
    height: 50px;
    background-color: #F2CB36;
    border: solid 2px #ffffff;

    display: flex;
    align-items: center;
    justify-content:left;
  }
  .numero{
    width: 30px;
    height: 100%;

    display: flex;
    justify-content:center;
}
.numero h3{
    font-size: 1.2rem;
    font-weight: 600;
    color:#ffffff ;
    position: relative;
    top: 10px;
} */
// tela menor-----------------------

   @media(max-width:1000px){
  #container{
    height: 70vh;
    width: 100%;
    max-width: 450px;

    background-image: ${fotoCaminho};
    background-repeat: no-repeat; 
    background-size: contain;
    background-position: center;
    margin-top: 40px;

    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
}

.circulo {
    background-color: #F2CB36;
    /* background-color:#00a3369c; */
    width: 30px;
    height:30px;
    border-radius: 50%;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    position: relative;
    color: #000000;
    font-weight: 700;
    cursor: pointer;
    &:hover {
      background-color: #FFE583;
      background-color: #f7d54e;
      transition: .5s;
      border-radius: 30%;
    }
  }

#circulo1 {
    top: -13%;
    left: 0%;
  }
  #circulo2 {
    top: 0%;
    left: -3%;
  }
  #circulo3 {
    top: 7%;
    left:4%;
  }
  #circulo4 {
    top: 8%;
    left:-35%;
  }
  #circulo5 {
    top: 0%;
    left: -55%;
  }
  #circulo6 {
    top: 0%;
    left: 2%;
  }
//---------------
#info1,#info2,#info3,#info4,#info5,#info6{
    top: 33rem;
    left: -24rem;
  }
  }




  
`