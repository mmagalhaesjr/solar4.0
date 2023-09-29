import styled from 'styled-components';

export const StyledSolucoes = styled.section`
width: 100%;
height: 105vh;
background-color: #00BF3E; 
background-color: #eceeee; 
display: flex;
flex-direction: column;
text-align: center;

#titulo{
  font-size: 50px;
  font-weight:700;
  margin-top: 30px;
}
h1{
  color:#00BF3E;
}
h2{
  color: #ffffff ;
}
#container{
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
}
#texto{
  width: 90%;
  font-size: 20px;
  display: flex;
  justify-content: center;
}
span{
  font-weight: 700;
  color: #00BF3E;
}
#img{
  width: 100%;
  height: 60%;
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 50px;
  
}
#img li p{
  position: relative;
  top: -40px;
  text-decoration: none;
  font-size: 20px;
  color: #ffffff;
  display: none;
  transition: 1s;
}
#img img:hover + p {
  display: block;
 
}

#img li {
  list-style: none;
}
.img{
  overflow: hidden;
  width: 350px;
  height: 450px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
}
.img img{
  width: 350px;
  height: 450px;
  border-radius: 8px;
  
}
.img img:hover{
  opacity: .9;
  transition: 1s;
  transform: scale(1.2);
  border-radius: 8px;
}
`