import styled from 'styled-components';

export const StyledBeneficios = styled.section`
  width: 100%;
  min-height: 100vh;
  background-color: #eceeee;
  background-color: red;
  display: flex;
  flex-direction: column;
  text-align: center;
  font-size: 16px;

/* scroll-snap-align: start;
position: sticky;
top: 0;
left: 0; */

  #titulo {
    font-size: 40px;
    font-weight: 700;
    margin-top: 100px;
  }

  h1 {
    color: #000000;
    font-family: 'Montserrat', sans-serif;
  }

  h2 {
    color: #00bf3e;
  }

  #ContainerIcones {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    word-wrap: break-word;
    gap: 0px;
    margin-top: 7rem;
  }

  .divIcone {
    margin-top: 30px;
    flex: 1;
    max-width: 240px; 
  }

  .icone {
    width: 80px;
    height: 80px;
  }

  .divIcone p {
    font-size: 17px;
    font-weight: 700;
    margin-top: 1rem;
    color: #839b75;
    color: #000000;
  }

  h3 {
    margin-top: 7rem;
    color: #839b75;
    color: #000000;
    font-size: 20px;
    line-height: 1.5; 
  }

  button{
  width: 300px;
  height: 50px;
  border-radius: 20px;
  border: none;
  background-color:#00a335;
  color: #ffffff;
  font-weight:700;
  font-size: 17px;
  margin-top: 50px;
  font-family: 'Montserrat', sans-serif;
  cursor: pointer;
  
  &:hover{
     background-color: #00BF3E;
  }
}

@media(min-width:1660px) {
  height: 10vh;
}





  @media (max-width: 1000px) {
    #ContainerIcones {
      display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); 
    }

    .divIcone {
      margin-top: 20px;
      max-width: 100%; 
    }

    .icone {
      font-size: 3rem;
    }

    .divIcone p {
      font-size: 0.875rem;
    }
  }
  @media (max-width:419px) {
    
    #titulo{
      font-size: 25px;
      font-weight: 700;
    }
  }
`;
