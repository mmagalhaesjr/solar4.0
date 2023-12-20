import styled from 'styled-components';


export const StyledNumeros = styled.section`
width: 100%;
height: 100vh;



/* scroll-snap-align: start;
position: sticky;
top: 0;
left: 0; */

/*  #00BF3E; */
background-color: #eceeee;
background-image: url('https://nhssolar.com.br/wp-content/uploads/2019/03/shutterstock_175274429-1.jpg');
background-image: url('https://blog.intelbras.com.br/wp-content/uploads/2022/10/post73_1200x628-1.jpg');

background-size: cover;

display: flex;
flex-direction: column;
text-align: center;
font-family: 'Montserrat', sans-serif;

overflow: hidden;



#titulo{
  font-size: 40px;
  font-weight:700;
  margin-top: 90px;

}

h1{
  z-index: 8;
  color:#000000 ;
  color: #ffffff;
  font-family: 'Montserrat', sans-serif;
}
#container{
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
  margin-top: 100px;

  
  


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
  background-color:#00000047 ;
  backdrop-filter: blur(10px);
  opacity: 0.9;

  background-color:#68f20bbf ;
  backdrop-filter: blur(10px);
  opacity: 0.9;

  border-radius: 50% 50%;
  display:flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;

  position: relative;
  top:-250px;
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
  border: solid 2px #ffffff;
  border-radius: 50% 50%;

  display:flex;
  align-items: center;
  justify-content: center;

  font-size: 30px;
}
h3{
  color: #ffffff;
  font-size: 20px;
  /* font-weight: 700;
  color: #ffffff;
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
  position: absolute;
  display: flex;
  flex-wrap: wrap; 
  gap: 8px;
 
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