import styled from 'styled-components';

export const StyledFuncionamento = styled.section`

width: 100%;
height: 100vh;
background-color: #044f757d;
display: flex;
flex-direction: column;
/* align-items: center; */

text-align: center;

/* scroll-snap-align: start;
position: sticky;
top: 0;
left: 0; */



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

  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;


/* background-image:url('https://th.bing.com/th/id/R.42b312917c353b788856a3e9ae1df783?rik=NBuYpBBDyr5Fqg&riu=http%3a%2f%2fbluesol.com.br%2fwp-content%2fuploads%2f2016%2f11%2fimagem-2.png&ehk=ACoCTghZt6U5uPP3aG3NQrH0to5icqxizyFA10KqVqU%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1') ; */
background-image:url('/src/assets/casinha.png');
background-repeat: no-repeat; 
background-size: 50%;
background-position: center;
margin-top: 40px;

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
    left:3%;
  }
  #circulo4 {
    top: 17%;
    left:-9%;
  }
  #circulo5 {
    top: 0%;
    left: -28%;
  }
  #circulo6 {
    top: -7%;
    left: 5%;
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
    margin-top: 20px;
  }
  #info5 img{
    margin-top: 10px;
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
    top: 20%;
    left: 23%;
  }
  #info4 {
    top: 45%;
    left: 47%;
  }
  #info5 {
    top: 70%;
    left: 32%;
  }
  #info6 {
    top: 70%;
    left: 38%;
  }
  //estilo da tela menor-------------------------------------

  #titulo{
  
  margin-top: 80px;
}


  #telaMenor{
    display: none;
  }
 
#container2{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items: center;
  margin-top: 100px;
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

@media(min-width:1660px) {
 justify-content: center;
 align-items: center;
  #container{
    width: 1660px;
  }
}

@media (max-width: 1300px) {
  height: 100vh;
  #telaMaior {
    display: none;
  }

  }

  @media (max-width:1300px) {
    height: 130vh;
    #telaMenor{
      display: block;
    }
  }
  @media (max-width:419px) {
    height: 110vh;
    #container2{
      margin-top: 60px;
    }
    #titulo{
      font-size: 25px;
      font-weight: 700;
    }
    
  }
  
`