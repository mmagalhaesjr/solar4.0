import styled from 'styled-components';


export const StyledNumeros = styled.section`
width: 100%;
height: 100vh;

/* scroll-snap-align: start;
position: sticky;
top: 0;
left: 0; */

background-color: #eceeee;
background-image: url('https://nhssolar.com.br/wp-content/uploads/2019/03/shutterstock_175274429-1.jpg');
background-size: cover;


/* border: solid 3px #00BF3E; */

display: flex;
flex-direction: column;
text-align: center;
font-family: 'Montserrat', sans-serif;




#titulo{
  font-size: 40px;
  font-weight:700;
  margin-top: 90px;
}

h1{
  color:#000000 ;
  color: #ffffff;
  font-family: 'Montserrat', sans-serif;
}

#container{
display:flex;
align-items: center;
justify-content: center;
gap: 50px;
margin-top: 200px;
}

.containerCirculo{
  display: flex;
  flex-direction: column;
  align-items: center;


}

.circulo{
  width: 200px;
  height: 200px;
  color: #ffffff;
  background-color:#00000047 ;
  backdrop-filter: blur(10px);
  opacity: 0.9;
  border-radius: 50% 50%;

  display:flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;

  position: relative;
  top:50px;
}

&.rolagem {
  .circulo{
    transform: translateY(-100px);
    z-index: 1;
    transition: 1s;
   }
  }

#circulo1{

}
#circulo2{
  
}
#circulo3{
  
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


`