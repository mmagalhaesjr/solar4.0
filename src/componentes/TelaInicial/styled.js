import styled from 'styled-components';

export const StyledtextoInicial = styled.div `

width: 100%;
height: 100vh;
/* scroll-snap-align: start;
position: sticky;
top: 0;
left: 0; */
display: flex;
flex-direction: column;


#imgInicial{
    position: relative;
    top: -100px;
    width: 100%;
    height: 100vh;
    z-index: 0;
   
  }

  #container{
    width: 100%;
    height: 100vh;
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;

    /* border: solid 3px red; */
  }
#texto{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  width: 100%;
  height: 50%;
  font-size: 40px;
  font-weight:700;
 
  margin-top: 130px;

  

  /* border: solid 3px blue; */
}
#texto h1 {
  line-height: 1.5; 
  color: #ffffff;
}
span{
  font-size: 50px;
}

button{
  width: 250px;
  height: 40px;
  border-radius: 20px;
  border: none;
  background-color:#00a335;
  color: #ffffff;
  font-weight:700;
  font-size: 15px;
  margin-top: 50px;
  
  &:hover{
     background-color: #00BF3E;
  }
}



`