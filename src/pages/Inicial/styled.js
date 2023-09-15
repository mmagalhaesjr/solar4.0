import styled from 'styled-components';



export const StyledMain = styled.main`
 
  height: 100vh; 
  width: 100%;
  /* margin-top: -100px; */

  #imgInicial{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.4);
    z-index: 7;
   
  }

  section{
    position: relative;
    top: 200px;
    display: flex;
    flex-direction: column;
    align-items:center;
    text-align: center;
    z-index: 8;

    
  }

#texto{
    /* left: -400px; */
    width: 100%;
    font-size: 40px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap:20px;
    
    
   
}
/* #texto h1 {
    line-height: .8; 
} */

button{
    width: 250px;
    height: 40px;
    border-radius: 10px;
    border: none;
    background-color:#7FCB27 ;
    color: #ffffff;
    font-weight:700;
    &:hover{
       background-color: #00BF3E;
    }
}

#texto2{
    position: absolute;
    top: 500px;
    font-weight: 400;
}


`;
