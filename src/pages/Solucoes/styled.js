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
  margin-top: 10%;
}
h1{
  font-size: 3rem;
  font-weight:700;
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
  width: 50%;
  max-width: 1200px;
  font-size: 1.5rem;
  line-height: 1.2;
  margin-top: 50px;
  font-weight: 300;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; 
}
.textoVerde{
  color:#00a335;
  font-weight: 700;
}
span{
  font-weight: 700;
  color: #000000;
}
a{
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; 
}

button{
  width: 300px;
  height: 70px;
  border-radius: 20px;
  border: none;
  background-color:#00a335;
  color: #ffffff;
  cursor: pointer;
  margin: 40px 0;

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  
  &:hover{
     background-color: #00BF3E;
  }
}
a button p{
  width: 90%;
  font-weight:700;
  font-size: 1.2rem;
  font-family: 'Montserrat', sans-serif;
  margin: 3%;
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
font-size: 2rem;
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
  border-radius: 8px;
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
  font-size:3rem;
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


@media(max-width:900px){
  #texto{
    width: 90%;
    text-align: left;
  }
  button{
    width: 80%;
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
  #container{
    margin-top:20%;
  }
  #titulo{
    
  }
   h1{
    font-size: 2rem;
  }
  button{
    width: 80%;
    font-size: 1rem;
  }

.img{
  width: 150px;
  height: 150px;
}
.img img{
  width: 100%;
  height:100px; 
}

#cxImg li p{
  position: relative;
  top: 10px;
  text-decoration: none;
  font-size:1rem;
  color: #000000;
  display: block;
  transition: 1s;
}


}


`