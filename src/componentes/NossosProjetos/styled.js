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
#titulo2{
  font-size: 50px;
  font-weight:700;
  margin-top: 10px;
  margin-bottom: 10px;
}
h1{
  color:#000000 ;
}
h2{
  color:#ffffff ;
}


#container{
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#texto{
  width: 60%;
  font-size: 22px;
}

span{
  font-weight: 700;
}
#projetos{
  display: flex;
  justify-content:space-evenly;
  width: 100%;
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