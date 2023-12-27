import styled from 'styled-components';

import foto from '../../../assets/fundoCima.jpeg';

const fotoCaminho = `url(${foto})`;




export const StyledOPM = styled.section`
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
  height: 100%;
  

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
  font-size: 30px;

  display: flex;
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

/* fotos--------------------- */
#container2{
  width: 100%;
  height: 100%;


}
#containerFotos{
  width: 100%;

  display: flex;
  justify-content: space-evenly;
  margin-top: 50px;

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

#antes{
    /* transform: translateY(-100px); */
    position: relative;
    transform: translatex(-500px);
    z-index: 1;
    transition: 1s;
   
   }
  #depois{
    transform: translateY(500px);
    position: relative;
    
    z-index: 0;
    transition: 1s;
   }
  
 &.rolagem {
  #antes{
    transform: translatex(0px);
    z-index: 1;
    transition: 1s;

   }

   #depois{
    transform: translatex(0px);
    z-index: 0;
    transition: 1s;
   }
  }

/* botoes-------------------- */

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