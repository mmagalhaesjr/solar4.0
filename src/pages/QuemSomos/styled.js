import styled from 'styled-components';


import foto from '../../assets/fundoCima.jpeg';

const fotoCaminho = `url(${foto})`;

export const StyledQuemSomos = styled.section`
  width: 100%;
 
  display: flex;
  flex-direction: column;
  align-items: center;

  
  #container {
  background-image: ${fotoCaminho};
  background-size:cover;
  background-repeat: no-repeat;
  background-position: 10% 100%;
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: space-around;
  }

  #cxVideo{
    width: 40%;
    height: 400px;
    
    /* background: rgba(255, 255, 255, 0.537); 
    backdrop-filter: blur(10px);  */
    box-shadow: 5px 5px 10px  rgba(0, 0, 0, 0.5);
    border-radius:10px ;
    border-radius: 20px;

    display: flex;
    align-items: center;
    justify-content: center;

    margin-top: 100px;
}

#cxVideo iframe{
    width: 100%;
    height: 100%;

    border: 20px solid  transparent;
  
    overflow:hidden;    

}

.swiper-button-prev{
    color: #fff;
    margin-left: -1%;
    
}
.swiper-button-next{

    color: #fff;
     margin-right: -1%;
}
.swiper-button-next.swiper-button-disabled,
.swiper-button-prev.swiper-button-disabled {
  display: none;
}

.swiper-wrapper{
    
}
.swiper-initialized{
  height: 90%;
  width: 90%;
}
.swiper-clickable{
    color: #000000;
}
.swiper-pagination-bullet {
  background-color: #000000;
  position: relative;
  top: 10px;
}




  #texto {
    width: 50%;
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #000000;
    position: relative;

    margin-bottom: 10%;
  }

  #texto img{
    width: 100%;
    position: absolute;
    top: -10%;
  }

  h1 {
    font-size: 50px;
    font-weight: 700;
    margin-top: 5%;
   
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
   

    z-index: 0; 
  }

  .imgsol{
    width: 300px;
    height: 150px;
    position: relative;
    z-index: 1; 
  }

  #imgsol1{
    /* transform: translateY(-100px); */
    top:-100px;
    z-index: 1;
    transition: 1s;
   }
  #imgsol2{
    /* transform: translateY(500px); */
    top:250px;
    z-index: 0;
    transition: 1s;
   }
  
 &.rolagem {
  #imgsol1{
    transform: translateY(220px);
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

    #cxVideo{
    width: 90%;
    height: 300px;
    
    background: rgba(255, 255, 255, 0.537); 
    backdrop-filter: blur(10px); 
    box-shadow: 5px 5px 10px  rgba(0, 0, 0, 0.5);
    border-radius: 20px;
    margin-top: -30px;
    margin-bottom: 50px;

    display: flex;
    align-items: center;
    justify-content: center;



}

#cxVideo iframe{
    width: 100%;
    height: 100%;

    border-right: 5px solid  transparent;
    border-left: 5px solid  transparent;
    overflow:hidden; 
}

.swiper-button-prev,
.swiper-button-next{

color: #fff;
 margin: 1%;
}
.swiper-button-next.swiper-button-disabled,
.swiper-button-prev.swiper-button-disabled {
  display: none;
}

.swiper-wrapper{
    
}
.swiper-initialized{
  height: 90%;
  width: 90%;
}
.swiper-clickable{
    color: #000000;
}
.swiper-pagination-bullet {
  background-color: #ffffff;
}

  }

  @media (max-width: 600px) {

    #texto img{
    width: 100%;
    position: absolute;
    top:15%;
    
  }
   
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
      height: 100px;
    }
    #imgsol1{
      top: -200px;
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