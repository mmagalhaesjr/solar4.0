import styled from 'styled-components';

export const StyledParceiros = styled.section`
width: 100%;
height: 40vh;

background-color: #eceeee; 
background-color: blue;
display: flex;
flex-direction: column;
text-align: center;
align-items: center;
justify-content: center;
/* scroll-snap-align: start;
position: sticky;
top: 0;
left: 0; */

#titulo{
  font-size: 40px;
  font-weight:700;
  margin-top: 0px;
}

h1{
  color:#000000 ;
  font-family: 'Montserrat', sans-serif;
}

#container{
  width: 90%;
  /* overflow: hidden; */
  display:flex;
  flex-wrap: wrap;
  justify-content: space-between;
  

  margin-top: 50px;

  border: solid 1px red;
  
}

#container img{
  width: 200px;
  height: 100px;
  margin-top: 10px;
  

  border: solid 1px white;
}
#linha{
  width: 20%;
  height: 1.5px;
  background-color: #000000;
}



@media(max-width:970px) {
 #container{
  justify-content: space-between;
 }
}
@media(max-width:1251) {
  height: 60vh;
}
@media(max-width:735px) {
  height: 100vh;
  
  #container{
    justify-content:center;
    align-items: center;
    flex-direction: column;
  }

}
@media(max-width:491px) {
  height: 100vh;
}
`