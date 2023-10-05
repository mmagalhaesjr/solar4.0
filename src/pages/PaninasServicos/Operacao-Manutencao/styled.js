import styled from 'styled-components';

export const StyledOPM = styled.section`
width: 100%;
height: 100vh;

background-image: url(src/assets/fundo-opreracao.jpg);
background-repeat: no-repeat;
background-size: cover;

display: flex;
flex-direction: column;
align-items: center;
/* scroll-snap-align: start;
position: sticky;
top: 0;
left: 0; */


#titulo {
    font-size: 40px;
    font-weight: 700;
    margin-top: 3rem;
  }

  h1 {
    color: #000000;
    font-family: 'Montserrat', sans-serif;
  }


#container{
  width: 800px;
  height: 350px;
  margin-top: 60px;
  background-color:#00000047 ;
  backdrop-filter: blur(10px);
  opacity: 0.9;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 30px; 
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
  gap:20px;
  margin-left: 20px;
}

.funcoes{
  display: flex;
  font-size: 30px;
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


`