import styled from 'styled-components';

export const StyledParceiros = styled.section`
width: 100%;
background-color: #eceeee;
background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(245,240,240,1) 100%);

display: flex;
flex-direction: column;
text-align: center;
align-items: center;
justify-content: center;
overflow: hidden;


#titulo{
  font-size: 40px;
  font-weight:700;
  margin-top: 10%;
}

h1{
  color:#000000 ;
  font-family: 'Montserrat', sans-serif;
}

#container{
  position: relative;
  width: 90%;
  /* overflow: hidden; */
  margin-bottom: 5%;
  display:flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10%;
  margin-top: 50px;
  left: 900px;

}

&.rolagem {
  #container{
    transform: translatex(-900px);
    z-index: 1;
    transition: 1s;
   }
  }

#container img{
  width: 200px;
  height: 100px;
  margin-top: 10px;
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


@media(max-width:500px) {
  #container img{
  width: 100px;
  height: 50px;
  margin-top: 10px;
}
#container{
  width: 70%;
  justify-content: space-between;
 }
}
`