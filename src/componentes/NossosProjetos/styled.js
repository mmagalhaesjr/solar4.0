import styled from 'styled-components';

export const StyledNossosProjetos = styled.section`
width: 100%;
height: 170vh;

/* scroll-snap-align: start;
position: sticky;
top: 0;
left: 0; */

background-color: #eceeee;

display: flex;
flex-direction: column;
align-items: center;
text-align: center;

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
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items: center;
  width: 100%;
  width:100%;
 
  /* flex-wrap: wrap; */
}

section{
  display: flex;
  width: 100%;

  justify-content:center;
  align-items: center;
  width: 100%;
}
#secao1{
  
  
}
#secao2{
  
}
#secao3{
  
}
#secao3{
  
}
.projetos{
  width: 100%;
  gap: 30px;
  height: 250px; 

  background: rgba(255, 255, 255, 0.5); 
  backdrop-filter: blur(10px); 

  
  
}

.projetos p{
  position: relative;
  z-index: 1;
  top: -50px;
  color: #ffffff;
  display: none;

  opacity: 0; 
  transition: opacity 1s ease; 

}

.projetos:hover p {
  display: block;
  transition: opacity 3s ease; 
  opacity: 0.5;
  
}

.projetos img{
cursor: pointer;
width: 100%;
height: 100%;


&:hover{
 filter: opacity(90%);
 border: solid 1px #000000c6;
 
}
}









`