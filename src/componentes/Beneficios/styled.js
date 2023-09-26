import styled from 'styled-components';

export const StyledBeneficios = styled.section`
  width: 100%;
  min-height: 100vh;
  background-color: #eceeee;
  display: flex;
  flex-direction: column;
  text-align: center;
  font-size: 16px;

  #titulo {
    font-size: 3rem;
    font-weight: 700;
    margin-top: 3rem;
  }

  h1 {
    color: #000000;
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
    max-width: 240px; /* Define a max width for each icon container */
  }

  .icone {
    font-size: 5rem;
  }

  .divIcone p {
    font-size: 1rem;
    margin-top: 1rem;
    color: #839b75;
    color: #000000;
  }

  h3 {
    margin-top: 10rem;
    color: #839b75;
    color: #000000;
  }

  button {
    width: 250px;
    height: 40px;
    border-radius: 5px;
    border: none;
    background-color: #00bf3e;
    color: #ffffff;
    font-weight: 700;
    margin-top: 2rem;

    &:hover {
      background-color: #7fcb27;
    }
  }

  @media (max-width: 1000px) {
    #ContainerIcones {
      display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); /* Stack icons vertically on smaller screens */
    }

    .divIcone {
      margin-top: 20px; /* Adjust spacing between icons */
      max-width: 100%; /* Make icons take full width on smaller screens */
    }

    .icone {
      font-size: 3rem;
    }

    .divIcone p {
      font-size: 0.875rem;
    }
  }
`;
