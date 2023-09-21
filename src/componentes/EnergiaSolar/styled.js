import styled from "styled-components";

export const StyledEnergiasolarCasa = styled.section`
 
  width: 100%;
  height: 100vh;
  background-color: #ffffff;
  background-repeat: no-repeat;
  background-size: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;



  #container{
    background-image: url(src/assets/casa.png);
    position: relative;
  }

  @media(max-width:1300px){
    #container{
      display: none;
    }
  }


  #titulo {
    font-size: 50px;
    font-weight: 700;
    margin-top: -180px;
  }

  h1 {
    color: #000000;
  }

  h2 {
    color: #00bf3e;
  }

  #img {
    max-height: 100%;
    max-width: 100%;
    width: auto;
    height: auto;
  }

 
 

  .circulo {
    background-color: #00bf3e;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    position: relative;
    color: #ffffff;
    font-weight: 700;
    &:hover {
      background-color: #3c64c4;
      transition: .5s;
      border-radius: 30%;
      
    }
  }

  #circulo1 {
    top: 40%;
    left: 40%;
  }

  #circulo2 {
    top: 88%;
    left: 40%;
  }

  #circulo3 {
    top: 92%;
    left: 48.5%;
  }

  #circulo4 {
    top: 37%;
    left: 59%;
  }

  #circulo5 {
    top: 60%;
    left: 23%;
  }

  #ContainerInfo {
    position: relative;
  }

  .info {
    width: 350px;
    height: 200px;
    position: absolute;
    display: none;
    
    border-radius: 7px;
    background-color: #ffffffef;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);


    
    &.info-visible {
      display: block;
    }
  }
  
  .info #img {
    width: 40%;
    height: 40%;
  }

  .info .imgInfo {
    margin: 5px;
  }

  #info1 {
    top: -100px;
    left: 42%;
   
  }

  #info2 {
    top: 88%;
    left: 46%;
  }

  #info3 {
    top: 92%;
    left: 55.5%;
  }

  #info4 {
    top: 28%;
    left: 66%;
  }

  #info5 {
    top: 70%;
    left: 30%;
  }
`;

export const StyledEnergiasolar = styled.section`

`