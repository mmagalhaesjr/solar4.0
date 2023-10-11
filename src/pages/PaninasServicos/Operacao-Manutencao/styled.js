import styled from 'styled-components';



export const StyledOPM = styled.section`
width: 100%;
height: 260vh;
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
  height: 100%;
  background-image: url(src/assets/fundo-opreracao.jpg);
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



#container2{
  width: 100%;
  height: 100%;

  border: solid 1px red;
}
#containerFotos{
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  margin-top: 50px;
 
  border: solid 1px blue;
}
h3{
  font-size: 25px;
  margin-top: 30px;
}
h4{
  font-size: 20px;
  margin-top: 15px;
}
.foto{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.foto img{
  width: 450px;
  height: 250px;
  border-radius: 10px;
}
h2{
  font-family: 'Montserrat', sans-serif;
  font-size: 30px;
  font-weight: 700;
  margin-top: 100px;
}
#containerduvida{
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  border: solid 2px orange;
}

#containerBotao{
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  border: solid 1px black;
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
  width: 250px;
  height: 150px;
  position: relative;
  top: 30px;
}
#imgPlaca{
  width: 100%;
}
`