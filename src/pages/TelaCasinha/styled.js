import styled from 'styled-components';

import foto from '../../assets/gif.gif';
import fundo2 from '../../assets/fundoCasaNoite.png';
import fundo from '../../assets/fundoCasa.png';


const fotoCaminho = `url(${foto})`;
const fundoCasa2 = `url(${fundo2})`;
const fundoCasa = `url(${fundo})`;


export const StyledFuncionamento = styled.section`

width: 100%;
height: fit-content;

background-image: ${fundoCasa2};
background-repeat: no-repeat; 
background-size: cover;
background-position: center;
position: relative;

#sol{
  width: 200px;
  height: 200px;
  position: absolute;
  left: 8%; 
  top: -150px;
  opacity: 0;
}
#lua{
  width: 200px;
  height: 200px;
  position: absolute;
  left: 85%; 
  top: 15%;
  opacity: 1;
}
#estrela{
    width:90%;
    height: 50%;
    position: absolute;
    left: 0%; 
    top: -40px;
    opacity: 1;
}

  &.rolagem {
    background-image: ${fundoCasa};
    transition: 2s;
 
      #sol{
        transform: translateY(220px);
        left: 0%; 
        z-index: 9;
        transition: 1s;
        opacity: 1;
      }
      #lua{
        width: 200px;
        height: 200px;
        position: absolute;
        left: 80%;
        transition: 1s; 
        top: -150px;
        opacity: 0;
    }
    #estrela{
        opacity: 0;
        transition: 1s; 
    }
    }
    #casinhaGif {
    display: none;
    z-index: 2; 
    transition: opacity 4s ease;
  }
  


display: flex;
flex-direction: column;
text-align: center;

#casinhaGif{
  display: none;
}

#telaMaior{
  display: flex;
  align-items: center;
  justify-content: center;
}

#titulo{
  font-size: 40px;
  font-weight:700;
  margin-top: 80px;
}
h1{
  color:#000000 ;
  font-family: 'Montserrat', sans-serif;
}

#containerCasinha{
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

// tela menor-----------------------

@media(max-width:1000px){
  #telaMaior{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  #containerCasinha{
    height:400px;
    width: 600px;
    /* max-width: 451px; */

    background-image: ${fotoCaminho};
    background-repeat: no-repeat; 
    background-size: cover;
    background-position: center;
    margin-top: 40px;
    background-position: 40% 30%;

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
    top: -30%;
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
    left:-38%;
  }
  #circulo5 {
    top: 0%;
    left: -55%;
  }
  #circulo6 {
    top: 0%;
    left: 7%;
  }
//---------------
#ContainerInfo {
    position: static;

    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    justify-content: center;
  }
  .info {
    width: 90%;
    height: 100px;
    position: static;
    display: none;
    border-radius: 7px;
    background-color: #ffffffef;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    margin-bottom: 5%;


    &.info-visible {
      display: flex;
      text-align: left;
      align-items: center;
      justify-content: center;
    }
  }

  #info5 img{
    margin-top: 0px;
  }
  .info #img {
    width:130px ;
    height:80px;
    margin-top: 0px;
  }
  .info h3{
    margin-bottom: 2%;
    font-weight: 700;
  }
  .info p{
    margin-top: 0px;
  }
  .info .imgInfo {
    margin:0;
  }
  }

  @media(max-width:600px){
      display: none;
  }
  
  
`