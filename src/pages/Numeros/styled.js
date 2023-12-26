import styled from 'styled-components';

export const StyledNumeros = styled.section`
width: 100%;
height: 100vh;
background-color: #eceeee;
background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(245,240,240,1) 100%);
background-image: url('https://geracaosolarengenharia.com.br/wp-content/uploads/2020/07/300-sl-alternative-energy-blue-sky-371900-scaled.jpg.webp');
background-size:cover;
background-repeat: no-repeat;
background-position: center;

display: flex;
flex-direction: column;
text-align: center;
font-family: 'Montserrat', sans-serif;

overflow: hidden;



#titulo{
  font-size: 40px;
  font-weight:700;
  margin-top: 90px;
  z-index:2;
}

h1{
  z-index:2;
  color: #ffffff;
  font-family: 'Montserrat', sans-serif;
}
#container{
  height: 100%;
  width: 100%;
  margin-top: 100px;
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
 

  border: solid 2px red;
}

.containerCirculo{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
}
.circulo{
  width: 200px;
  height: 200px;
  color: #ffffff;
  opacity: 0.9;
  background-color:#68f20bbf ;
  backdrop-filter: blur(10px);
  border-radius: 50% 50%;
  font-size: 30px;
  position: relative;
  top:-250px;
  font-size: 1;

  display:flex;
  align-items: center;
  justify-content: center;
 
}
&.rolagem {
  .circulo{
    /* transform: translateY(-150px); */
    top: -50px;
    z-index: 1;
    transition: 1s;
   }
  }

.circuloInterno{
  width: 150px;
  height: 150px;
  color: #ffffff;
  font-weight: 700;
  border: solid 2px #ffffff;
  border-radius: 50% 50%;

  display:flex;
  align-items: center;
  justify-content: center;

  font-size: 30px;
}
h3{
  color: #ffffff;
  font-size: 1rem;
  /*color: #ffffff;
  background-color:#00000047 ;
  backdrop-filter: blur(10px);
  opacity: 0.9;
  border-radius:50px 50px 50px 50px; */
}
.fundoTexto{
  height: 40px;
  width: 300px;
  background-color:#00000047 ;
  backdrop-filter: blur(10px);
  opacity: 0.9;

  
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.bolhas{
  width: 100%;
  height: 100%;

  position: absolute;
  display: flex;
  flex-wrap: wrap; 
  gap: 8px;
  
  overflow-y:hidden;
  border:solid 2px green;
 
}

.bolhas span{
  width: 100px;
  height: 100px;
  margin: 0 4px;
  border-radius: 50%;
  background-color:#68f20bbf ;
  backdrop-filter: blur(10px);
  opacity: 0.9;
  box-shadow: 0 0 0 10px #f9f90744,
  0 0  50px #f9f907,
  0 0  100px #f9f907;

  animation:animar calc(150s / var(--i)) linear infinite 2s;
    
  
}

.bolhas span:nth-of-type(even){
  background-color: #21e90b;
  box-shadow: 0 0 0 10px #21e90b44,
  0 0  50px #21e90b,
  0 0  100px #21e90b;
}

@keyframes animar {
  0%{
    transform: translateY(-47vh) scale(1);
  }
  100%{
    transform: translateY(35vh) scale(0);
  }
}

@media(max-width:1010px) {
  #container{
    justify-content: space-evenly;
    gap: 0;
  }
}

@media(max-width:937px) {
  #container{
    flex-wrap: wrap; 
  }
}

@media(max-width:615px) {
  #container{
    margin-top: 80px;
  }
  .containerCirculo{

}
.circulo{
width: 150px;
height: 150px;
}
.circuloInterno{
  width: 120px;
height: 120px;
}
.fundoTexto{
margin-top: -35px;
}
.fundoTexto h3{
  
}
}
`