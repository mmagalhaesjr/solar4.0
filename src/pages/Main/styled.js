import styled from 'styled-components';



export const StyledMain = styled.main`
  position: absolute;
  top: 0;
  z-index: 1;
  
  background-image: url('/src/assets/primeira.jpg'); 
  background-size: cover; 
  background-repeat: no-repeat; 
  height: 100vh; 
  width: 100%;
  
  /* margin-top: -100px; */

  display: flex;
  flex-direction: column;
  align-items:center;
  text-align: center;
 
  

#texto{
    position: absolute;
    top: 250px;
    /* left: -400px; */
    width: 30%;
    font-size: 40px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap:20px;
   
}
/* #texto h1 {
    line-height: .8; 
} */

button{
    width: 70%;
    height: 40px;
    border-radius: 15px;
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
    top: 650px;
    font-weight: 400;
}


`;
