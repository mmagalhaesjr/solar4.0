import styled from 'styled-components';

export const StyledBeneficios = styled.section`
  width: 100%;
  background-color: #eceeee;
  background: linear-gradient(0deg, rgba(236,238,238,1) 0%, rgba(196,196,196,1) 50%);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
 
  #titulo {
    margin-top: 10%;
  }
  h1{
    font-size:3rem;
    text-align: center;
    font-weight: 700;
    color: #000000;
    font-family: 'Montserrat', sans-serif;
    margin-bottom: 5%;
  }
  h2 {
    color: #00bf3e;
  }
  h3{
    text-align: center;
    width: 90%;
  }

  #ContainerIcones {
    width: 95%;
    height: fit-content;
    margin-top: 5%;

    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
  }

  .divIcone {
    width: 200px;
    height: 150px;

    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center; 
  }

/* .divIcone:nth-child(1) {
  margin-top: 50%;
}
.divIcone:nth-child(2) {
  margin-top: 40%;
}
.divIcone:nth-child(3) {
  margin-top: 30%;
}
.divIcone:nth-child(4) {
  margin-top: 20%;
}
.divIcone:nth-child(5) {
  margin-top: 10%;
} */

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
  margin-bottom: 50%;
  
  &:hover{
     background-color: #00BF3E;
  }
}

      /* &.rolagem {
        .divIcone{
            opacity: 1;
            transition: 1s ;
            margin-top: -50px;
          }
      } */
      

@media (max-width: 1000px) {
   
.divIcone:nth-child(1) {
  margin-top: none;
}
.divIcone:nth-child(2) {
  margin-top: none;
}
.divIcone:nth-child(3) {
  margin-top: none;
}
.divIcone:nth-child(4) {
  margin-top: none;
}
.divIcone:nth-child(5) {
  margin-top: none;
}

.icone {
  font-size: 3rem;
}

.divIcone p {
  font-size: 0.875rem;
}
}

@media (max-width:500px) {
  h1{
    font-size:2rem;
    text-align: center;
    font-weight: 700;
    color: #000000;
    font-family: 'Montserrat', sans-serif;
    margin-bottom: 5%;
  }
  }

  @media (max-width:430px) {
    .divIcone{
      width: 150px;
      height: 150px;
    }
  }
`;
