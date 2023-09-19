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
    height: 100%;
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #004000;
    border: solid 3px red;
  }

  h1 {
    font-size: 50px;
    font-weight: 700;
    margin-bottom: 20px;
  }

  p {
    font-size: 30px;
    line-height: 35px;
  }

  #imgSois {
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: solid 3px yellow;

    z-index: 0; 
  }

  #imgsol {
    width: 300px;
    height: 150px;
    position: relative;
    z-index: 1; 
    border: solid 3px red;
  }

  #imgsol:nth-child(1){
    z-index: 2;
    top: 110px;
    transition: 1s;
  }
  #imgsol:nth-child(2){
    z-index: 1;
    transition: 1s;
   
   }
  #imgsol:nth-child(3){
    top: -120px;
    z-index: 0;
    transition: 1s;
   }
  


  @media (max-width: 800px) {
    #texto {
      width: 100%;
      height: 100%;
    }
    p {
      font-size: 20px;
    }
  }

  @media (max-width: 573px) {
    #container {
      margin-top: 0;
      flex-direction: column;
      height: 100%;
    }
    #texto {
      align-items: center;
      height: 70%;
    }
    #texto p {
      font-size: 20px;
    }
    #imgSois {
      height: 100%;
      height: 100%;
      align-items: center;
    }
    #imgsol {
    }
  }

  @media (max-width: 419px) {
    #container {
    }
    #texto {
    }
    #imgSois {
      height: 20%;
    }
    #imgsol {
      width: 100px;
      height: 50px;
    }
    p {
      font-size: 10px;
      line-height: 35px;
    }
  }
`;