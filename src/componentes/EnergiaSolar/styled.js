import styled from "styled-components";

export const StyledEnergiasolar = styled.section`
  width: 100%;
  height: 100vh;
  background-color: #ffffff;
  background-image: url(src/assets/casa.png);
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;

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
    background-color: #ffff09;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    position: relative;
    &:hover {
      background-color: #3c64c4;
      transition: .5s;
      width: 70px;
      
    }
  }

  #circulo1 {
    top: 40%;
    left: 40%;
  }

  #circulo2 {
    top: 88%;
    left: 38%;
  }

  #circulo3 {
    top: 92%;
    left: 47.5%;
  }

  #circulo4 {
    top: 58%;
    left: 65%;
  }

  #circulo5 {
    top: 70%;
    left: 8%;
  }

  #ContainerInfo {
    position: relative;
  }

  .info {
    width: 400px;
    height: 200px;
    position: absolute;
    display: none;

    border-radius: 7px;
    background: linear-gradient(90deg, rgba(243,247,245,1) 0%, rgba(215,218,216,0.8828781512605042) 54%);
    
    &.info-visible {
      display: block;
      
      
    }
  }

  .info #img {
    width: 50%;
    height: 50%;
  }

  .info .imgInfo {
    margin: 5px;
  }

  #info1 {
    top: -100px;
    left: 40%;
   
  }

  #info2 {
    top: 88%;
    left: 48%;
  }

  #info3 {
    top: 92%;
    left: 57.5%;
  }

  #info4 {
    top: 28%;
    left: 70%;
  }

  #info5 {
    top: 70%;
    left: 18%;
  }
`;
