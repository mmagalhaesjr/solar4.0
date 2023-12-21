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
    top: -30%;
    left: 0%;
  }
  #circulo2 {
    top: 0%;
    left: -1%;
  }
  #circulo3 {
    top: 7%;
    left:4%;
  }
  #circulo4 {
    top: 20%;
    left:-23%;
  }
  #circulo5 {
    top: 0%;
    left: -37%;
  }
  #circulo6 {
    top: 0%;
    left: 0%;
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
    top: 0%;
    left: 45%;
  }
  #info2 {
    top: 88%;
    left: 46%;
  }
  #info3 {
    top: 20%;
    left: 23%;
  }
  #info4 {
    top: 45%;
    left: 35%;
  }
  #info5 {
    top: 70%;
    left: 32%;
  }
  #info6 {
    top: 70%;
    left: 32%;
  }
  //estilo da tela menor-------------------------------------

  #containerTelaMenor{
    width:100%;
    display: none;
  }

  #telaMenor{
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
}

  @media(max-width:1000px){
  height: 80vh;
    #telaMaior{
        display: none;
    }
    #containerTelaMenor{
        display: block;
        height: 300px;
  }
  #telaMenor{
        width: 100%;
        height: 100%;

        background-image: ${foto};
        background-size: contain;
        background-repeat: no-repeat;
        background-position: 48% 60%;

        display: flex;
        flex-direction:column;
        align-items: center;
    }
    #funcoVerde{
    width: 100%;
   
    background-color: #78AC34;

    margin-top: -100px;
  }
  }




  
`