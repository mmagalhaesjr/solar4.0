import styled from 'styled-components';
import { css } from 'styled-components';

export const StyledHeader = styled.header`
background-color: #00BF3E;
background-color: transparent;
width: 100%;
height: 100px;
//box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
position: absolute;
z-index: 8;

a img{
width: 200px;
height: 100px;
}

ul{
    margin-top: 70px;
    display: flex;
    gap: 70px; 
}
a{
    font-family: 'Barlow', sans-serif;
    color: #ffffff;
    font-weight:400;
    cursor: pointer;

    &:hover{
        text-decoration: underline #00BF3E;
        transition: .5s;
        
    }
}

nav{
    display: flex;
    justify-content: space-around;
}

button{
  
  border: solid 1px red;
   
   height: 100px;
   display: none;
   background: none;
   border: none;
   cursor: pointer;
   margin-top: -30px;
 }
.linha{
   position: relative;
   width: 40px;
   height: 5px;
   background-color:#ffffff;
   display:block;
   margin: 10px auto;
   transform-origin:center;
   transition:.5s;
}

${({ mobile }) => mobile && css`
  .linha:nth-child(1){
   transform: translateY(0) rotate(-45deg);
   transition: 1s;
  }
  .linha:nth-child(2){
   display: none;
   
   }
   .linha:nth-child(3){
   transform: translateY(-15px) rotate(45deg);
   transition: 1s;
   }
`}
 

 @media (max-width: 940px) {
   ul {
     display: none;
   }
   button{
     display: block;
     position: absolute;
     top: 40px;
     right: 40px;
   }
   nav{
       justify-content: space-between;
   }
 }



`