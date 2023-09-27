import styled from 'styled-components';

export const StyledNossosProjetos = styled.section`
width: 100%;
height: 100vh;

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
  justify-content:center;
  width: 100%;

  flex-wrap: wrap;
}
.projetos{
  width: 350px;
  gap: 30px;
  height: 250px; 

  background: rgba(255, 255, 255, 0.5); 
  backdrop-filter: blur(10px); 
  box-shadow: 5px 5px 10px  rgba(0, 0, 0, 0.5);
  border-radius:10px ;
}



`