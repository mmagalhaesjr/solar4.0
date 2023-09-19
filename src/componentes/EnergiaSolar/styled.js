import styled from 'styled-components';

export const StyledEnergiasolar = styled.section`
width: 100%;
height: 100vh;
/* scroll-snap-align: start;
position: sticky;
top: 0;
left: 0; */

background-color:  #ffffff;



/* border: solid 3px #000000; */


display: flex;
flex-direction: column;
text-align: center;

#titulo{
  font-size: 50px;
  font-weight:700;
  margin-top: 80px;
}

h1{
  color:#000000 ;
}
h2{
  color:#00BF3E ;
}

#imgCasa{
height: 100vh;
background-image: url('src/assets/casinha_sbol.svg');
background-repeat: no-repeat;

border: solid 1px red;

}

#img{
  height: 70vh;
  width: 100%;
  position: absolute;
  left:0;
  top: 1680px;
}


.circulo{
  position: relative;
  background-color: #eeee00;
  width: 60px;
  height: 60px;
  border-radius: 50%;

  display: flex;
  text-align:center;
  align-items: center;
  justify-content:center;



  /* &:nth-child(1){
   
  }
  #circulo:nth-child(2){
   
   
   }
  #circulo:nth-child(3){
   
   }
   #circulo:nth-child(4){
   
   } */
}

#circulo1{
top: 70px;
left: 550px;
}
#circulo2{
top:170px;
left: 690px;
}
#circulo3{
top:170px;
left: 740px;
}
#circulo4{
top:79px;
left: 80px;
}
  

  

`