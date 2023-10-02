import styled from 'styled-components';




export const StyledMain = styled.main`

/* scroll-snap-type: y mandatory;
height: 100vh;
overflow-y: scroll; */

//fixa a pagina automaticamente 

  #imgInicial{
    position: relative;
    width: 100%;
    height: 100vh;
    
  }

  
  #whattsapp{
    z-index: 1;
    position: fixed;
    font-size: 80px;
    right: 25px;
    top:500px;
    cursor: pointer;
    color: #000000;
    text-decoration: none;
}
#whattsapp:hover{
    color: #00BF3E;
    color: #7FCB27;
    transition:0.3s;
}
@media(max-width:940px){
        #whattsapp{
            display: none;
        }
    }

`;
