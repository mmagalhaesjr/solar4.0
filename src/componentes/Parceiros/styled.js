import styled from 'styled-components';

export const StyledParceiros = styled.section`
width: 100%;
height: 70vh;

background-color: #eceeee; 
display: flex;
flex-direction: column;
text-align: center;
align-items: center;
/* scroll-snap-align: start;
position: sticky;
top: 0;
left: 0; */




#titulo{
  font-size: 40px;
  font-weight:700;
  margin-top: 70px;
}

h1{
  color:#000000 ;
  font-family: 'Montserrat', sans-serif;
}

#container{
  width: 60%;
  
  /* overflow: hidden; */
  display:block;
  justify-content: center;
  align-items: center;
  gap: 30px;
  margin-top: 50px;
  
}

#container img{
  width: 200px;
  height: 100px;
  margin-left: 20px;
}
#linha{
  width: 20%;
  height: 1.5px;
  background-color: #000000;
  
 
  
}

`