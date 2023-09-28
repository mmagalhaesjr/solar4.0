import styled from 'styled-components';


export const StyledTeste = styled.section`
width: 100%;
height: 100vh;

/* scroll-snap-align: start;
position: sticky;
top: 0;
left: 0; */

background-color: #00BF3E; 
background-color: #eceeee; 




display: flex;
flex-direction: column;
text-align: center;

#titulo{
  font-size: 50px;
  font-weight:700;
  margin-top: 80px;
}
h1{
  color:#000000;
}
h2{
  color: #ffffff ;
}
#container{
  border: solid 1px red;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  
}
#texto{
  border: solid 1px blue;
  width: 40%;
  height: 50%;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
span{
  font-weight: 700;
}
#img{
  border: solid 1px orange;
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
}
.img{
 
}

.img img{
  width: 300px;
  height: 200px;
}


`