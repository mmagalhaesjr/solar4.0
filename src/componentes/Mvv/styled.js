import styled from 'styled-components';

export const StyledMvv = styled.section`
width: 100%;
height: 100vh;

/* scroll-snap-align: start;
position: sticky;
top: 0;
left: 0; */

/* border: solid 3px #00BF3E; */
background-color: #eceeee;
background-image:url('/src/assets/fundoBaixo.jpeg') ;
background-size: cover;
background-repeat: no-repeat;

display: flex;
flex-direction: column;
align-items: center;





#container{
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}
.card{
  position: relative;
  width: 25%;
  height: 55vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.537); 
  backdrop-filter: blur(10px); 
  box-shadow: 5px 5px 10px  rgba(0, 0, 0, 0.5);
  border-radius:10px ;
  top: 20px;
}
.texto{
  width: 80%;
  height: 11rem;
  font-size: 1.5rem;
  margin-top: 50px;
  display: flex;
  justify-content: center;
  text-align: center;
  line-height: 1.2; 

}
h1{
  font-size: 50px;
  font-weight: 700;
  color: #000000;
  font-family: 'Montserrat', sans-serif;
  position: relative;
  top: 100px;
  transition: 1s;
 
}
&.rolagem {
  h1{
    transform: translateY(-100px);
    z-index: 1;
    transition: 1s;
   }
  }


.card p{
  font-size: 80%;
  margin-top: -20px;
}

span{
  font-weight: 700;
}

#logo{
width: 240px;
height: 80px;
margin-bottom: 70px;
}

@media (max-width:920px) {
  #container{
    flex-direction: column;
  }
  .card{
    width: 100%;
    height: 30vh;
  }
}

`