import styled from 'styled-components';



export const StyledVI = styled.section`
width: 100%;

background-color: #ECEEEE;
display: flex;
flex-direction: column;
align-items: center;
/* scroll-snap-align: start;
position: sticky;
top: 0;
left: 0; */

#container{
  width: 100%;
  height: 100vh;
  background-image: url(src/assets/instalacoes.jpg);
  background-repeat: no-repeat;
  background-size: cover;

  display: flex;
  flex-direction: column;
  align-items: center;
}
#titulo {
  font-size: 40px;
  font-weight: 700;
  margin-top: 3rem;
  }
h1{
  color: #000000;
  font-family: 'Montserrat', sans-serif;
}

#subTitulo{
  font-family: 'Montserrat', sans-serif;
  margin-top: 50px;
  font-size: 20px;
}

#contInterno{
  width: 800px;
  height: 350px;
  margin-top: 60px;
  /* background-color:#00000047 ;
  backdrop-filter: blur(10px);
  opacity: 0.9; */
  background-color: #9bc4eaa4;
  backdrop-filter: blur(10px);
  opacity: 0.9;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 50px; 
}

#cont6{
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
}

#cont{
  display: flex;
  flex-direction: column;
  gap:50px;
  margin-left: 20px;
}

.funcoes{
  display: flex;
  font-size: 30px;
  gap: 10px;
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
  width: 100vh;

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

}
#iconeV img{
  width: 200px;
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
  border-radius: 15px;
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

#containerBotao{
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  /* border: solid 1px black; */
}
                       
.pergunta{
  width: 100%;
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



`