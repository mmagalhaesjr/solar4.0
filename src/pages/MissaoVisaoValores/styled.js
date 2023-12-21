import styled from 'styled-components';

import foto from '../../assets/fundo-baixo.jpeg';

const fotoCaminho = `url(${foto})`;

export const StyledMvv = styled.section`
width: 100%;


/* scroll-snap-align: start;
position: sticky;
top: 0;
left: 0; */

/* border: solid 3px #00BF3E; */
background-color: #eceeee;
background-image: ${fotoCaminho};

background-size: cover;
background-repeat: no-repeat;

display: flex;
flex-direction: column;
align-items: center;


#container{
  width: 100%;
 
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}
.card{
  max-width:400px;
  min-width: 350px;
  width: 25%;
  max-height: 400px;
  height: 55vh;
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
  top: 100px;
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
  height:50%;
  margin-top: 3%;

  display: flex;
  justify-content: center;
  text-align: left;
  line-height: 1.2; 
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

@media (max-width:1076px) {
  #container{
    justify-content: space-between;
  }
  .card{
    width: 90%;
  }
}

@media (max-width:1100px) {
  #container{
    flex-direction: column;
    justify-content: center;
  }
  .card{
    width: 95%;
    height: 28vh;
  }

  img{
  display: none;
}
}

@media (max-width:500px) {
  .card h1{
    font-size: 2rem;
  }
}

`
