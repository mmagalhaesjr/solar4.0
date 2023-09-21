import styled from 'styled-components';

export const StyledBeneficios = styled.section`
width: 100%;
height: 100vh;
/* scroll-snap-align: start;
position: sticky;
top: 0;
left: 0; */

background-color: #eceeee;


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
  color:#00BF3E ;
}

#ContainerIcones{
  width: 100%;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 100px;
}

.divIcone{
  width: 200px;
}

.icone {
  font-size: 90px;
}

.divIcone p{
  font-size: 18px;
  margin-top: 20px;
  color: #839b75;
}
h3{
  margin-top: 100px;
  color: #839b75;
}

@media(max-width:996px){
  #ContainerIcones{
    height: 100vh;
    gap: 20px;
  }
}
`
