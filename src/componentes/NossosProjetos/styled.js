import styled from 'styled-components';

export const StyledNossosProjetos = styled.section`
width: 100%;
height: 170vh;

/* scroll-snap-align: start;
position: sticky;
top: 0;
left: 0; */

background-color: #00BF3E; 


/* border: solid 3px #00BF3E; */

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
  color:#ffffff ;
}

#projetos{
  margin-top: 20px;
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