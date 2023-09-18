import styled from 'styled-components';
import  { css } from 'styled-components';



export const StyledMenuMobile = styled.div`

    background-color: #00BF3E;
    background: radial-gradient(circle, rgba(2,79,27,0.7652310924369747) 0%, rgba(1,126,42,0.6419817927170868) 38%, rgba(0,191,62,1) 100%);
    position: fixed;
    width: 100%;
    height: 100vh;
    z-index:5;
    opacity: 0;
    pointer-events:none;
    transition: 0.5s;
    color: #ffffff;

    clip-path: circle(100px at 90% -15%);
    transition: 1s;


  
    .nav-lista{
        margin-top: 130px;
        text-align:center; 
        color: #ffffff;
        
    }
   
nav{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;
    transform: scale(0);
    transition: 1s;
   
}

 a{
    font-weight:200;
    text-decoration: none;
    list-style: none;
    display: block;
    padding: 20px 30px;
    font-size: 16pxl;
    color: #ffffff;
    
    &:hover{
    text-decoration: underline #ffffff;
    width: 100%;

   }
}

${({mobile}) => mobile && css`

    opacity:1;
    pointer-events:auto;
    transition: .7s;
    transform: translatex(0);
    clip-path: circle(200% at 90% -15%);
  

    nav{
        transform: scale(1);
       
    }
    
`}
`