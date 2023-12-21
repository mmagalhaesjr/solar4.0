import styled from 'styled-components';

export const StyledNossosProjetos = styled.section`

height: 160vh;

background-color: #eceeee;

display: flex;
flex-direction: column;
align-items: center;
text-align: center;

/* scroll-snap-align: start;
position: sticky;
top: 0;
left: 0; */

#linha{
  width: 20%;
  height: 1.5px;
  background-color: #000000;
  margin-bottom: 60px;
  
}

#titulo{
  font-size: 40px;
  font-weight:700;
  margin-top: 30px;
}

h1{
  color:#000000 ;
  font-family: 'Montserrat', sans-serif;
}


#projetos{
  width: 90%;
  max-width: 1660px;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items: center;
 
  /* flex-wrap: wrap; */
}

section{
  display: flex;
  width: 100%;

  justify-content:center;
  align-items: center;
  width: 100%;
}


.projetos{
  width: 100%;
  gap: 30px;
  height: 250px; 

  border: solid 4px #eceeee;

  background: rgba(255, 255, 255, 0.5); 
  backdrop-filter: blur(10%); 
}

.projetos p{
  position: relative;
  z-index: 1;
  top: -50px;
  color: #000000;
  display: none;
  font-weight: 700;

  opacity: 0; 
  transition: opacity 1s ease; 

}

.projetos:hover p {
  display: block;
  transition: opacity 3s ease; 
  opacity: 1;
  
}

.projetos img{
cursor: pointer;
width: 100%;
height: 100%;


&:hover{
 filter: opacity(90%);
 
 
}
}


@media(min-width:1660px) {
  height: 100vh;
}



@media (max-width:419px) {
  height: 130vh;
    
    #titulo{
      font-size: 25px;
      font-weight: 700;
    }
  }





`