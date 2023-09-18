import styled from 'styled-components';

export const StyledQuemSomos = styled.section`

height: 100vh;


#img{
    position: absolute;
    width: 100%;
    height: 100vh;
    
  }

  #container{
    position: relative;
    width: 100%;
    height: 100%;
   display: flex;
   justify-content: space-around;

   border: solid 4px blue;

   
  }
  #texto{
    width: 50%;
    height: 100%;
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #004000;

    border: solid 3px red;
  }
 
  h1{
    font-size: 50px;
    font-weight:700;
    margin-bottom:20px;
  }
  p{
    font-size: 30px;
    line-height: 35px;
    
  }
 
  #imgSois{
    display: flex;
    flex-direction: column;
    justify-content: center;
    

    border: solid 3px yellow;
  }
   #imgsol{
    width: 300px;
    height: 150px;
  }


@media(max-width: 800px) {
  p{font-size: 20px;
  }
 
}
@media(max-width: 800px) {
  #texto{
    width: 100%;
    height: 100%;
    
  }
  
}

@media(max-width: 573px) {
  #container{
    margin-top: 0;
    flex-direction: column;
    height: 100%;
  }
  #texto{
    align-items: center;
    height: 70%;
  }
  #texto p{
    font-size: 20px;
  }

  #imgSois{

    height: 100%;
    height: 100%;
    align-items: center;
  }
   #imgsol{
   
  }
  
}
@media(max-width: 419px) {
  #container{
   
  }
  #texto{
    
  }
  #imgSois{
    height: 20%;
  }
   #imgsol{
    width: 100px;
    height: 50px;
  }
  p{
    font-size: 10px;
    line-height: 35px;
    
  }
  
}



`