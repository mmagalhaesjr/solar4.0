import styled from 'styled-components';

export const StyledEnergiasolar = styled.section`
width: 100%;
height: 100vh;
background-color:  #ffffff;
background-image: url(src/assets/casa.png);
background-repeat: no-repeat;
background-size: cover;

/* position: absolute; */


/* scroll-snap-align: start;
position: sticky;
top: 0;
left: 0; */
/* border: solid 3px #000000; */
display: flex;
flex-direction: column;
text-align: center;
justify-content: center;



#titulo{
  font-size: 50px;
  font-weight:700;
  margin-top: -180px;
}

h1{
  color:#000000 ;
}
h2{
  color:#00BF3E ;
}

#img {
  max-height: 100%;
  max-width: 100%;
  width: auto;
  height: auto;
}

.circulo {
  background-color:#ffff09;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  position: relative; /* Posicione os círculos em relação ao contêiner */
  &:hover{
    background-color:  #3c64c4;
  }
}

#circulo1 {
  top: 40%; 
  left: 40%; 
}

#circulo2 {
  top: 88%;
  left: 38%; 
}

#circulo3 {
  top: 92%; 
  left: 47.5%;
}

#circulo4 {
  top: 58%; 
  left: 65%; 
}

#circulo5 {
  top: 70%; 
  left:8%; 
}

#ContainerInfo {

}



.info{
  width: 400px;
  height: 200px;
  position: absolute;

  display: flex;
  align-items: center;
  justify-content: center;

  border: solid 1px red;

  
  

}
.info #img{
  width: 50%;
  height: 50%;
  
}

.info .imgInfo{
  margin: 5px;
}

#info1{
  top: 40%; 
  left: 40%; 
  display: none;
}
#info2{
  top: 88%;
  left: 38%;
  display: none;
  
 
}
#info3{
  top: 92%; 
  left: 47.5%;
  display: none;
  
 
}
#info4{
  top: 58%; 
  left: 65%;
  display: none;
   
  
}
#info5{
  top: 70%; 
  left:8%;
  display: none;
   
}


`