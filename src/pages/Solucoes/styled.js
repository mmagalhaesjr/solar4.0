import styled from 'styled-components';

export const StyledSolucoes = styled.section`
width: 100%;
height: 100vh;
background-color: #00BF3E; 
background-color: #eceeee; 
display: flex;
flex-direction: column;
text-align: center;

#titulo{
  font-size: 50px;
  font-weight:700;
  margin-top: 80px;
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
  justify-content: center;
  align-items: center;
}
#texto{
  width: 40%;
  height: 50%;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
span{
  font-weight: 700;
  color: #00BF3E;
}
#img{
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
}

#img img:hover + p {
  display: block;
}

#img li p{
  position: relative;
  top: -30px;
  text-decoration: none;
  color: #ffffff;
  display: none;
}

#img li {
  list-style: none;
}

.img img{
  width: 300px;
  height: 200px;
  border-radius: 8px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
}
.img img:hover{
  opacity: .9;
  transition: .5s;
}
`