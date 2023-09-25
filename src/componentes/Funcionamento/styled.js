import styled from 'styled-components';

export const StyledFuncionamento = styled.section`
/* scroll-snap-align: start;
position: sticky;
top: 0;
left: 0; */
width: 100%;
height: 100vh;
background-color: #00BF3E;  
display: flex;
flex-direction: column;
text-align: center;

#titulo{
  font-size: 50px;
  font-weight:700;
  margin-top: 80px;
}
h1{
  color:#000000 ;
}
h2{
  color:#ffffff ;
}

@media (max-width: 1300px) {
  #telaMaior {
    display: none;
  }
  }
#container{
  height: 70vh;
  width: 100%;
  background-image:url(src/assets/casinha_sbol.svg);
  background-repeat: no-repeat;
  background-size: 50%;
  background-position: center;
  margin-top: 40px;

    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;


  }
  .circulo {
    background-color: #ffffff;
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
    &:hover {
      background-color: #3c64c4;
      transition: .5s;
      border-radius: 30%;
    }
  }
  #circulo1 {
    top: -30%;
    left: 0%;
  }
  #circulo2 {
    top: -4%;
    left: -3%;
  }
  #circulo3 {
    top: 0%;
    left: 0%;
  }
  #circulo4 {
    top: 0%;
    left:7%;
  }
  #circulo5 {
    top: 15%;
    left: -30%;
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
    max-height: 100%;
    max-width: 100%;
    width: auto;
    height: auto;
  }
  .info #img {
    width: 40%;
    height: 40%;
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
    top: 92%;
    left: 55.5%;
  }
  #info4 {
    top: 28%;
    left: 66%;
  }
  #info5 {
    top: 70%;
    left: 30%;
  }
  //estilo da tela menor-------------------------
  #telaMenor{
    display: none;
  }
  @media (max-width:1300px) {
    height: 130vh;
    #telaMenor{
      display: block;
    }
  }
  @media (max-width:419px) {
    height: 140vh;
    
  }
  @media (max-width:365px) {
    height: 160vh;
    
  }
#container2{
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  gap: 30px;
}
.card{
  width:85% ;
  height:100px;
  background: radial-gradient(circle, rgba(215,215,215,0.891281512605042) 0%, rgba(255,255,255,0.8884803921568627) 100%); ;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
  border-radius:10px ;
  display: flex;
  align-items: center;
  justify-content: center;
}
.informacao{
  width: 100%;
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}
h3{
  position: relative;
  top: -30%;
  left: 0%;
  font-size: 1.5rem;
}
.icone{
  font-size: 50px;
}
.texto{
  width: 300px;
}
`