import styled from 'styled-components';



export const StyledQuemSomos = styled.section`
  width: 100%;
  height: 100vh;
  /* scroll-snap-align: start;
  position: sticky;
  top: 0;
  left: 0; */
 

  #img {
    position: absolute;
    width: 100%;
    height: 100vh;
  }

  #container {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;

    
    
    /* border: solid 4px blue; */
  }

  #texto {
    width: 50%;
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #000000;
    position: relative;
    
    /* background: radial-gradient(circle, rgba(215,215,215,0.8789566852131477) 0%, rgba(255,255,255,0.8565477216277135) 100%);
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
    border-radius:10px ; */

   
  }

  h1 {
    font-size: 50px;
    font-weight: 700;
   
    font-family: 'Montserrat', sans-serif;
  }

  p {
    font-size: 25px;
    line-height: 35px;
    margin-top: 50px;
  }

span{
  font-weight: 700;
}

  #imgSois {
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* border: solid 1px yellow; */

    z-index: 0; 
  }

  .imgsol {
    width: 300px;
    height: 280px;
    position: relative;
    z-index: 1; 
    
  }

  #imgsol1{
    /* transform: translateY(-100px); */
    top:-150px;
    z-index: 1;
    transition: 1s;
   
   }
  #imgsol2{
    /* transform: translateY(500px); */
    top:150px;
    z-index: 0;
    transition: 1s;
   }
  
 &.rolagem {
  #imgsol1{
    transform: translateY(300px);
    z-index: 1;
    transition: 1s;
   }
  #imgsol2{
    transform: translateY(-250px);
    z-index: 0;
    transition: 1s;
   }


}

  @media (max-width: 800px) {
    #container{
      align-items: center;
      justify-content: space-between;
      flex-direction: column;
    }
    #texto {
      width: 95%;
      margin-top: 50px;
    }
    h1{
      margin-top: 10px;
    }
    p {
      font-size: 20px;
      margin-top: 30px;
    }
  }

  @media (max-width: 573px) {
   
    #texto {
      align-items: center;
      height: 70%;
      justify-content: center;
     
    }
    #texto p {
      font-size: 20px;
    }
    #imgSois {
      height: 100%;
      height: 100%;
      align-items: center;
    }
    
    .imgsol {
      width: 200px;
      height: 250px;
    }
    #imgsol1{
   top: -250px;
    
   }
  #imgsol2{
    top: 130px;
   
   }
  }
  @media (max-width: 420px) {
   
    #texto h1{
      font-size: 35px;
      margin-top: 40px;
    }
    #imgSois {
      height: 20%;
    }
   
    p {
      font-size: 10px;
      line-height: 35px;
    }
  }

  @media (max-width: 375px) {
    #texto h1{
      font-size: 25px;
    }
    p {
      font-size: 7px;
      line-height: 25px;
    }
  }

`;