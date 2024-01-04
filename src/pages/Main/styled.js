import styled from 'styled-components';




export const StyledMain = styled.main`

/* scroll-snap-type: y mandatory;
height: 100vh;
overflow-y: scroll; */

//fixa a pagina automaticamente 

#cxIcones{
  position: fixed;
  right: 2%;
  top: 80%;
  z-index: 9;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

#whattsapp{
    z-index: 1;
    cursor: pointer;
    color: #00BF3E;
    text-decoration: none;
    width: 3rem;
    height: 3rem;
}
#whattsapp:hover{
    color: #00BF3E;
    color: #7FCB27;
    transition:0.3s;
}
  #intel{
    z-index: 1;
    width: 5rem;
    height: 2.5rem;
    margin-top: 10%;
  }
`;
