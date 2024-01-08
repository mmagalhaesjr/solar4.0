import styled from 'styled-components';

import foto from '../../assets/fundo-baixo.jpeg';

const fotoCaminho = `url(${foto})`;

export const StyledMvv = styled.section`
width: 100%;
background-color: #eceeee;
background-image: ${fotoCaminho};
background-size: cover;
background-repeat: no-repeat;
overflow: hidden;

display: flex;
flex-direction: column;
align-items: center;


#container{
  width: 95%;
 
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  overflow: hidden;
}
.card{
 width: 450px;
 height: 350px;
 margin-bottom: 5%;
 margin-top: 5%;

  background: rgba(255, 255, 255, 0.537); 
  backdrop-filter: blur(10px); 
  box-shadow: 5px 5px 10px  rgba(0, 0, 0, 0.5);
  border-radius:10px ;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

h1{
  font-size: 3rem;
  font-weight: 700;
  color: #000000;
  font-family: 'Montserrat', sans-serif;
  position: relative;
  top: 120px;
  transition: 1s;
}
&.rolagem {
  h1{
    transform: translateY(-100px);
    z-index: 1;
    transition: 1s;
   }
  }

.cxTexto{
  width: 80%;
  height:90%;
  margin-top: 10%;

  display: flex;
  justify-content: center;
  text-align: left;
  line-height: 1.2; 
}
#textoCentralizado{
    text-align: center;
}
.card p{
  font-size: 1.3rem;
}

span{
  font-weight: 700;
}

#logo{
position: relative;
left: 500px;
width: 240px;
height: 80px;
margin-bottom: 70px;
}
&.rolagem {
  #logo{
    transform: translatex(-500px);
    z-index: 1;
    transition: 1s;
   }
  }



@media (max-width:1100px) {
  #container{
    flex-direction: column;
    justify-content: center;
  }
 
  .card{
    width:400px;
    height:250px;

    display: flex;
    align-items: center;
    justify-content: center;
  }
  .cxTexto{
  width: 80%;
  height: fit-content;
  

  display: flex;
  justify-content: center;
  text-align: left;
  line-height: 1.2; 
}
  .card h1{
    font-size: 2rem;
  }
  .card p{
    font-size: 1rem;
  }
  img{
  display: none;
}

}
@media (max-width:500px) {
  #container{
    flex-direction: column;
    justify-content: center;
  }
  .card{
    width:95%;
    height:250px;

    display: flex;
    align-items: center;
    justify-content: center;
  }
  .cxTexto{
  width: 80%;
  height: fit-content;
  

  display: flex;
  justify-content: center;
  text-align: left;
  line-height: 1.2; 
}
  .card h1{
    font-size: 2rem;
  }
  .card p{
    font-size: 1rem;
  }
  img{
  display: none;
}

}



`
