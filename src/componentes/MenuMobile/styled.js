import styled from 'styled-components';
import  { css } from 'styled-components';



export const StyledMenuMobile = styled.div`

    background-color: #00BF3E;
    background: radial-gradient(circle, rgba(4,102,36,1) 0%, rgba(1,126,42,1) 38%, rgba(0,191,62,1) 100%);
    background: radial-gradient(circle, rgba(250,143,61,0.9389005602240896) 0%, rgba(249,182,94,0.8856792717086834) 29%, rgba(241,232,35,0.8884803921568627) 94%, rgba(241,232,35,0.8884803921568627) 100%);
    backdrop-filter: blur(10px); 
    position: fixed;
    width: 100%;
    height: 100vh;
    opacity: 0;
    pointer-events:none;
    transition: 0.5s;
    color: #ffffff;

    clip-path: circle(100px at 90% -15%);
    transition: 1s;

    z-index:8;

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
    font-weight:700;
    text-decoration: none;
    list-style: none;
    display: block;
    padding: 20px 30px;
    font-size: 16pxl;
    color: #ffffff;
    position: relative;
    
}
a::after{
    content: " ";
    width: 0;
    height: 3px;
    background-color: #ffffff;
    position: absolute;
    bottom: 10px;
    left: 0;
}
nav a:hover::after{
    width: 100%;
    transition: .5s;
}


${({mobile}) => mobile && css`

    opacity:1;
    pointer-events: visible;
    transition: .7s;
    transform: translatex(0);
    clip-path: circle(200% at 90% -15%);
  

    nav{
        transform: scale(1);
    }
    
`}
`