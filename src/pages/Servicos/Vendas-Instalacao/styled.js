import styled from 'styled-components';

import foto from '../../../assets/fundoCima.jpeg';

const fotoCaminho = `url(${foto})`;

export const StyledVI = styled.section`
width: 100%;

background-color: #ECEEEE;
background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(245,240,240,1) 100%);
background-image: ${fotoCaminho};
background-repeat: no-repeat;
background-size: cover;

display: flex;
flex-direction: column;
align-items: center;

#container{
  width: 100%;
  height: 100vh;
 
  display: flex;
  flex-direction: column;
  align-items: center;
}
#titulo {
  width: 90%;
  margin-top:10%;

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  }
h1{
  color: #000000;
  font-family: 'Montserrat', sans-serif;
  font-size: 3rem;
  font-weight: 700;
}
#subTitulo{
  max-width:800px;
  font-family: 'Montserrat', sans-serif;
  margin-top: 50px;
  font-size: 25px;
  text-align: center;
}
#contInterno{
  width:90%;
  max-width: 1000px;
  height: 350px;
  margin-top: 60px;
  background-color: #9bc4eaa4;
  backdrop-filter: blur(10px);
  opacity: 0.9;
  border-radius: 15px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 50px; 
}

#cont6{
  width: 90%;
  height: 95%;
  
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
}

#cont{
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items:left;
  justify-content: space-between;
}

.funcoes{
font-size: 2rem;

  display: flex;
  gap: 10px;
}
.chek{
  font-size: 2rem;
}

#icone{
  margin-top: 50px;
  color: #ffffff;
  font-size: 50px;
}

@keyframes moveUpDown {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

#icone {
  animation: moveUpDown 1s infinite;
}


#containerContas{
  width: 95%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
section{
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 100px;
}
#iconeV{
position: relative;
top: -50px;
}
#iconeV img{
  width: 150px;
}
.contas{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.contas img{
  width: 400px;
}
.contas h3{
  font-weight: 700;
  font-size: 20px;
}
.contas h2{
font-size: 20px;
font-weight: 700;
}
.contas div{
  border-radius: 20px;
  width: 100px;
  height: 35px;

  display: flex;
  justify-content: center;
  align-items: center;

  color: #ffffff;
}

#valorAntes{
background-color: #f10808;
}
#valorDepois{
background-color: #0cf509;
}

.contas .valores{
width: 150px;
height: 50px;
margin-top: 10px;
}
.contas .valores h2{
  font-size: 30px;
}


#tituloDuvidas{
  margin-top: 100px;
  font-family: 'Montserrat', sans-serif;
  font-size: 30px;
  font-weight: 700;
  margin-top: 100px;
}

button{
  width: 300px;
  height: 50px;
  border-radius: 20px;
  border: none;
  background-color:#00a335;
  color: #ffffff;
  font-weight:700;
  font-size: 17px;
  margin-top: 50px;
  font-family: 'Montserrat', sans-serif;
  cursor: pointer;
  
  &:hover{
     background-color: #00BF3E;
  }
}

#containerduvida{
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
#containerBotao{
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.respostas{
width: 95%;
background-color: #ffffff;
border-radius: 10px;
display: ${(props) => (props.mostrarRespostas ? 'block' : 'none')};
}
.respostas p{
  line-height: 1.5;
  margin: 10px;
}                   
.pergunta{
  width: 100%;
  height: 70px;

  display: flex;
  align-items: center;
  justify-content: center;
}
.pergunta p{
  width: 90%;
}

#duvidas{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
#logo{
  width: 300px;
  height: 100px;
  position: relative;
  top: 50px;
}
#imgPlaca{
  width: 100%;
}
@media(max-width:1200px){
  #titulo {
  margin-top:20%;
  }
}
@media(max-width:1000px){
  .contas img{
  width: 200px;
}
#iconeV img{
  width: 80px;
}
}

@media(max-width:900px){
  #contInterno{
  width:95%;
  max-width: 1000px;
  height:fit-content;
  margin-top: 60px;
  background-color: #9bc4eaa4;
  backdrop-filter: blur(10px);
  opacity: 0.9;
  border-radius: 15px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 50px; 
}

#cont6{
  width: 95%;
  height: 300px;
  margin: 3% 0;
  
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;

  /* border: solid 2px red; */
}
#cont{
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items:left;
  justify-content: space-between;


  /* border: solid 2px white; */
}
.funcoes{
  font-size: 1.5rem;

  display: flex;
  gap: 10px;
}
.chek{
  font-size: 1.5rem;
}
}

@media(max-width:600px){
  #titulo {
  margin-top:30%;
  }
h1{
  color: #000000;
  font-family: 'Montserrat', sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
}
#subTitulo{
  display: flex;
  align-items: center;
  justify-content: center;
}
#subTitulo p{
  width: 90%;
  font-size: 1rem;
}
  #cont{
  width: fit-content;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items:left;
  justify-content:space-evenly;
}

  .funcoes{
  width: 100% ;
  height: 60px;
  font-size: 1rem;

  display: flex;
  align-items: center;
}
.chek{
  font-size: 1rem;
}

#containerBotao{
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
}
@media(max-width:500px){
  .contas img{
  width: 150px;
}
#iconeV img{
  width: 80px;
}
#containerContas{
margin-top: -15%;
}
}

`