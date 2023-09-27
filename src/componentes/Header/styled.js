import styled from 'styled-components';
import { css } from 'styled-components';

export const StyledHeader = styled.header`
background-color: #00BF3E;
background-color: transparent;
width: 100%;
height: 100px;
position: fixed;
z-index: 8;
transition: background-color 0.3s ease-in-out;

&.rolagem {
  background: linear-gradient(90deg, rgba(0,191,62,1) 0%, rgba(61,244,120,1) 54%);
  color: #ffffff;
  height:50px;
  transition: 1s;

nav{
  position: absolute;
  height: 60px;
  width: 100%;
  display: flex;
}
img{
  position: relative;
  width:150px ;
  height:80px ;
  top: -19px;
}
ul li a{
  position: relative;
  top: -50px;
  font-weight: 400;
}

.linha{
  position: relative;
  top: -30px;
}
}

a img{
width: 200px;
height: 100px;
}

ul{
    margin-top: 50px;
    display: flex;
    gap: 10px; 
    white-space: nowrap;
    /* border: solid 1px red; */
}


nav{
    display: flex;
    justify-content: space-around;

    /* border: solid 3px black; */
}

li a{
    font-family: 'Barlow', sans-serif;
    cursor: pointer;
    font-weight:200;
    text-decoration: none;
    list-style: none;
    display: block;
    padding: 20px 30px;
    font-size: 16pxl;
    color: #ffffff;
    position: relative;
    
}
li a::after{
    content: " ";
    width: 0;
    height: 2px;
    background-color: #00BF3E;
    position: absolute;
    bottom: 15px;
    left: 0;
}
nav li a:hover::after{
    width: 100%;
    transition: .5s;
}

/* DROP soluçoes*/

.dropSolucoes .submenuSolucoes {
    display: none;
    position: absolute;
    background-color: #333;
    top: 40px;
    left: 680px; 
    width: 200px;
    z-index: 1;

    text-align: center;
}

.dropSolucoes:hover .submenuSolucoes {
    display: block;
    li a::after{
      display: none;
    }
    background-color: transparent;
    margin-top: 55px;
}

.dropSolucoes .submenuSolucoes li {
    display: block;
}

.dropSolucoes .submenuSolucoes li a {
  color: #ffffff;
    background: rgba(255, 255, 255, 0.5); 
    backdrop-filter: blur(10px); 
    box-shadow: 5px 5px 10px  rgba(0, 0, 0, 0.5);
    text-decoration: none;
}

.dropSolucoes .submenuSolucoes li a:hover {
  background: rgba(59, 234, 11, 0.5); 
}



/* DROP orçamento*/
.dropServicos .submenuServicos {
  display: none;
    position: absolute;
    background-color: #333;
    top: 40px;
    left: 800px; 
    width: 230px;
    z-index: 1;

    text-align: center;
}
.dropServicos:hover .submenuServicos {
    display: block;
    li a::after{
      display: none;
    }
    background-color: transparent;
    margin-top: 55px;
}
.submenuServicos li {
    display: block;
}
.dropServicos ul li a{
    color: #ffffff;
    background: rgba(255, 255, 255, 0.5); 
    backdrop-filter: blur(10px); 
    box-shadow: 5px 5px 10px  rgba(0, 0, 0, 0.5);
    text-decoration: none;
}
.dropServicos ul li a:hover{
  background: rgba(59, 234, 11, 0.5); 
}


button{
 
   height: 100px;
   display: none;
   background: none;
   border: none;
   cursor: pointer;
   margin-top: -35px;

 }
.linha{
   position: relative;
   width: 40px;
   height: 5px;
   border-radius: 15px;
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



 /* DROP*/
.submenu {
    display: none;
    position: absolute;
    background-color: #333;
    top: 40px;
    left: 730px;
    width: 200px; 
    z-index: 1;


}

.dropdown:hover .submenu {
    display: block;
}

.submenu li {
    display: block;
}

.submenu li a {
    color: #fff;
    padding: 10px;
    text-decoration: none;
}

.submenu li a:hover {
    background-color: #555;
}


`