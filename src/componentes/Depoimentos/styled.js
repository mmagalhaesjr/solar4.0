import styled from 'styled-components';


export const StyledDepoimentos = styled.section`
width: 100%;
height: 100vh;

/* scroll-snap-align: start;
position: sticky;
top: 0;
left: 0; */
background-color: #eceeee;
display: flex;
flex-direction: column;
align-items: center;


#titulo{
  font-size: 40px;
  font-weight:700;
  margin-top: 90px;
}

h1{
  color:#000000 ;
  font-family: 'Montserrat', sans-serif;
}

#container{
  overflow: hidden;
  width: 100%;
  height:50%;
  margin-top: 100px;

}

.carrosselDiv{
  background-color:#c1baba47 ;
  backdrop-filter: blur(10px);
  opacity: 0.9;
  border: solid 10px #eceeee ;
  width: 300px;
  height: 500px;  
}

.contCarrossel{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  
}

.img{
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #000000;
  overflow: hidden;
  margin-top: 20px;
}
img{
  width: 100%;
  height: 100%;
}
h2{
  color: #000000;
  font-weight: 700;
  margin-top: 10px;
}
.texto{
  width: 80%;
}

.star{
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 10px;
  margin-bottom: 20px;

}
.star img{
width: 100px;
height: 20px;
}


button{
  width: 7%;
  height: 50px;
  color: #eceeee;
  background-color: #000000;
  margin-top: 20px;
}
`