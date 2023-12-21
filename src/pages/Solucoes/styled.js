import styled from 'styled-components';

export const StyledSolucoes = styled.section`
width: 100%;
background-color: #00BF3E; 
background-color: #eceeee; 
background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(245,240,240,1) 100%);

display: flex;
flex-direction: column;
text-align: center;



#titulo{
  font-size: 4rem;
  font-weight:700;
  margin-top: 10%;
}
h1{
  color:#000000;
}
#container{
  height: 100%;
  background-image: url(src/assets/solucoes.jpg);
  background-repeat: no-repeat;
  background-size: cover;

  display: flex;
  flex-direction: column;
  align-items: center;
}


#texto{
  width: 70%;
  max-width: 1600px;
  font-size: 20px;
  margin-top: 50px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; 
}
span{
  font-weight: 700;
  color: #000000;
}

button{
  width: 90%;
  height: 60px;
  border-radius: 20px;
  border: none;
  background-color:#00a335;
  color: #ffffff;
  font-weight:700;
  font-size: 1.7rem;
  font-family: 'Montserrat', sans-serif;
  cursor: pointer;

  margin: 40px 0;
  
  &:hover{
     background-color: #00BF3E;
  }
}

#containerImg{
width: 90%;
margin-top: 5%;
margin-bottom: 5%;

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
}
#subTitulo{
width: 100%;
margin-bottom: 5%;
font-size: 4rem;
font-weight: 700;
}

#cxImg{
  width: 100%;
 
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 10px;
}
.img{
  overflow: hidden;
  width: 300px;
  height: 400px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
}
.img img{
  width: 300;
  height:400px; 
  border-radius: 8px;
}
.img img:hover{
  opacity: .9;
  transition: 1s;
  transform: scale(1.2);
  border-radius: 8px;
}

#cxImg li p{
  position: relative;
  top: -50px;
  text-decoration: none;
  font-size: 40px;
  color: #000000;
  display: none;
  transition: 1s;
}
#cxImg img:hover + p {
  display: block;
}
#cxImg li {
  list-style: none;
}


@media(max-width:1090px){
  button{
    height: 70px;
  }
}
@media(max-width:900px){
  #texto{
    width: 90%;
  }
  button{
    width: 100%;
  }
}
@media(max-width:681px){
  .img{
  width: 200px;
  height: 300px;
}
.img img{
  width: 200;
  height:300px; 
}
}
@media(max-width:500px){
  #subTitulo, #titulo{
    font-size: 2.5rem;
  }
  button{
    width: 80%;
    font-size: 1rem;
  }
}
@media(max-width:460px){
  .img{
  width: 150px;
  height: 250px;
}
.img img{
  width: 150px;
  height:250px; 
}
}


`