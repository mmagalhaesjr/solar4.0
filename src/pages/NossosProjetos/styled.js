import styled from 'styled-components';

export const StyledNossosProjetos = styled.section`

background-color: #eceeee;
background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(245,240,240,1) 100%);

display: flex;
flex-direction: column;
align-items: center;
text-align: center;

#titulo{
  font-size: 40px;
  font-weight:700;
  margin-top: 5%;
}
h1{
  color:#000000 ;
  font-family: 'Montserrat', sans-serif;
}
#projetos{
  width: 90%;
  max-width: 1660px;
  margin-top: 50px;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items: center;
}
section{
  width: 100%;

  display: flex;
  justify-content:center;
  align-items: center;
  width: 100%;
}

.projetos{
  width: 100%;
  height: 250px; 
  gap: 30px;
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
/* .projetos:hover p {
  display: block;
  transition: opacity 3s ease; 
  opacity: 1;
} */

.projetos img{
cursor: pointer;
width: 100%;
height: 100%;


/* &:hover{
 filter: opacity(90%);
} */
}


@media (max-width:500px) {
  #projetos{
  width: 90%;
  height: 400px;
  margin-top: 50px;
  margin-bottom: 5%;

  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items: center;
 
  /* flex-wrap: wrap; */
}
.projetos{
  width: 100%;
  height: 100px; 
  gap: 30px;
  border: solid 4px #eceeee;

  background: rgba(255, 255, 255, 0.5); 
  backdrop-filter: blur(10%); 
}

}
@media (max-width:419px) {
    #titulo{
      font-size: 25px;
      font-weight: 700;
    }
  }



  

`