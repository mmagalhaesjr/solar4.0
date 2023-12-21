import styled from 'styled-components';

import foto from '../../assets/inicial.jpg';


const fotoCaminho = `url(${foto})`;

export const StyledtextoInicial = styled.div`

width: 100%;
height: 100vh;
background-image: ${fotoCaminho};
background-repeat: no-repeat;
background-size: cover;

display: flex;
align-items: center;
justify-content: center;
flex-direction: column;


#container{
    width: 100%;
    height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
#cxTexto{
  width: 90%;
  font-size: 40px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;  
}
#cxTexto h1 {
  font-weight:700;
  font-size: 3rem;
  line-height: 1.5; 
  color: #ffffff;
}
span{
  font-size: 4rem;
}
a{
  width: 100%;
}
button{
  width: 300px;
  height: 50px;
  border-radius: 20px;
  border: none;
  background-color:#00a335;
  font-weight:700;
  font-size: 17px;
  margin-top: 50px;
  cursor: pointer;
  font-family: 'Montserrat', sans-serif;
  
  &:hover{
     background-color: #00BF3E;
  }

}
button p{
  font-size:100%;
  color:#ffffff;
  margin: 3%;
}

@media(max-width:500px){
  #cxTexto h1{
  font-weight:700;
  font-size: 2rem;
  line-height: 1.5; 
  color: #ffffff;
  }
  span{
  font-size: 2rem;
}
}



`