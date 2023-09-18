import styled from 'styled-components';

export const StyledtextoInicial = styled.div `

height: 100vh;

display: flex;
flex-direction: column;

#img{
    width: 100%;
    height: 100vh;
    
  }

  #container{
    width: 100%;
    position: relative;
    top: -600px;
    display: flex;
    flex-direction: column;

  
  
  }
#texto{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  width: 100%;
  font-size: 40px;
  gap:20px;
  margin-top: 100px;

  position: absolute;
  
  
 
}
#texto h1 {
  line-height: .8; 
}

button{
  width: 250px;
  height: 40px;
  border-radius: 10px;
  border: none;
  background-color:#7FCB27 ;
  color: #ffffff;
  font-weight:700;
  &:hover{
     background-color: #00BF3E;
  }
}

#texto2{
  text-align: center;
  font-weight: 400;
  margin-top: 200px;

  position: relative;
  top: 300px;
} 
`