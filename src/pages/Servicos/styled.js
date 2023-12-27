import styled from 'styled-components';


import foto from '../../assets/fundoServicos.png';


const img = `url(${foto})`;

export const StyledServicos = styled.section`
width: 100%;


background-color: #eceeee; 
background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(245,240,240,1) 100%);
display: flex;
flex-direction: column;
text-align: center;
align-items: center;

span{
  color: #00BF3E;
  font-weight: 700;
}

#titulo{
  font-family: 'Montserrat', sans-serif;
  font-size: 40px;
  font-weight:700;
  margin-top: 50px;
}

#container{
  width: 90%;
  max-width: 1400px;
  margin-top: 50px;
  background-color: #9bc4eaa4;
  background-image: ${img};
  background-size:cover;
  background-repeat: no-repeat;
  border-radius: 20px;

  display: flex;
  align-items: center;
  justify-content:center;
  
  gap: 200px;
  flex-wrap: wrap;
}
.lado{
  margin-top: 3%;
  margin-bottom: 3%;
  
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
}

.card{
  width: 500px;
  height: 170px;
  background-color: #00000075;
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  text-align: center;
  align-items: center;

  line-height: 1.2;
}
.circulo{
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #09507488;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  color: #ffffff;
  
}
h3{
  font-size: 1.2rem;
  font-weight: 700;
  margin-top: 10px;
  color: #ffffff;
}
p{
  width: 90%;
  font-size: 1rem;
  margin-top: 10px;
  color: #ffffff;
}


button{
  width: 300px;
  height: 50px;
  border-radius: 20px;
  border: none;
  background-color:#00a335;
  color: #ffffff;
  font-weight:700;
  font-size: 17px;
  margin-top: 50px;
  cursor: pointer;
  font-family: 'Montserrat', sans-serif;
  
  &:hover{
     background-color: #00BF3E;
  }
}

@media(max-width:1335px){
  #container{
    gap:5px;
  }
}
@media(max-width:600px){
  #container{
   width: 95%;
  }
  .card{
    width: 95%;
  }
}

`

export const StyledServicos2 = styled.section`

width: 100%;
height: 100vh;
background-color: #eceeee; 
background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(245,240,240,1) 100%);
display: flex;
flex-direction: column;
text-align: center;
align-items: center;



#titulo{
  font-family: 'Montserrat', sans-serif;
  font-size: 40px;
  font-weight:700;
  margin-top: 50px;
}
#titulo h2{
  font-weight:700;
  font-size:20px;
  margin-top: 20px;

}
#titulo h3{
font-weight: 200;
font-size: 20px;
margin-top: 20px;
}
#container{
  width: 90%;
  margin-top: 20px;
  display: flex;
  justify-content:center;
  gap: 100px;
  flex-wrap: wrap;
}
.lado1{
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center; 
}
.sessao{
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px; 
}

.icone{
  color: #0bcf0e;
}

.divInterna{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 350px; 
  height: 60px;
}

.sessao:nth-child(odd) .divInterna {
  background-color: #054f94ff; 
  color: #ffffff;
}

.sessao:nth-child(even) .divInterna {
  background-color: transparent; 
}


.lado2{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.cxFoto{

}
.cxFoto img{
  width: 250px;
  height: 190px;
}
.cxtitulo{
position: relative;
top: 30px;
}
.lado2  p{
  margin-top: 10px;
  font-weight: 700;
}




`