import styled from 'styled-components';

export const StyledQuemSomos = styled.section`
  width: 100%;
  height: 100vh;
  /* scroll-snap-align: start;
  position: sticky;
  top: 0;
  left: 0; */
  /* background-image: url('https://efeitosolar.com/wp-content/uploads/2020/03/efeito-solar-placas-solares-empresa-02.jpg');
  background-repeat: no-repeat;
  background-size: cover; */
  background-color: #eceeee;

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
   
    /* background: radial-gradient(circle, rgba(215,215,215,0.8789566852131477) 0%, rgba(255,255,255,0.8565477216277135) 100%);
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
    border-radius:10px ; */
    
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
    /* border: solid 1px yellow; */

    z-index: 0; 
  }

  #imgsol {
    width: 300px;
    height: 150px;
    position: relative;
    z-index: 1; 
    /* border: solid 1px red; */
  }

  /* #imgsol:nth-child(1){
    z-index: 2;
    top: 110px;
    transition: 1s;
  } */
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