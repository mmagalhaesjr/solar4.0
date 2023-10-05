import styled from 'styled-components';

export const StyledDepoimentos = styled.section`
width: 100%;
height: 100vh;

/* scroll-snap-align: start;
position: sticky;
top: 0;
left: 0; */

background-color: #eceeee;


/* border: solid 3px #00BF3E; */

display: flex;
flex-direction: column;
text-align: center;

#titulo{
  font-size: 40px;
  font-weight:700;
  margin-top: 30px;
}

h1{
  color:#000000 ;
  font-family: 'Montserrat', sans-serif;
}

#container{
  overflow: hidden;
  width: 100%;
  height:100%;
  margin-top: 100px;
}

.depoimento{
  width: 100px;
  height: 400px;
  background-color:#00000047 ;
  backdrop-filter: blur(10px);
  opacity: 0.9;
  border: solid 10px #eceeee;

  display: flex;
  align-items: center;
  justify-content: center;
  
}


`