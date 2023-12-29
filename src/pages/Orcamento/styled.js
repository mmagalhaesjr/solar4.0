import styled from 'styled-components';

import foto from '../../assets/fundo-orcamento.jpg';


const fotoCaminho = `url(${foto})`;



export const StyledOrcamento = styled.section`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

background-image: ${fotoCaminho};
background-repeat: no-repeat;
background-size:cover;





#container{
width: 100%;
max-width:1730px;
background: linear-gradient(3deg, rgba(0,131,69,1) 0%, rgba(0,163,54,1) 54%);
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
}

.cabecalho{
width: 100%;
height: 100px;
background-color: #14a238;
margin-top: 5%;

display: flex;
align-items: center;
justify-content:space-between;



}

.cabecalho img{
  width: 200px;
  margin-left: 5%;
  margin-right: 5%;
}
.cabecalho .intel{
  width: 8rem;
}
.cx1{
  width: 100%;
}
.cx1 img{
  width: 100%;
}
//-------------------
.cxTexto{
  width: 80%;
  display: flex;
  flex-direction: column;
  text-align: center;
  color: #ffffff;

}
.cxTexto h1{
font-size: 4rem;
margin-top: 5%;
}
.cxTexto h2{
  font-size: 3rem;
  margin-top: 3%;
}


//--------------fomulario
.cxForm{
  width: 90%;
  margin-top: 5%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;

 
}

.iconesLatetral{
  display: flex;
  flex-direction: column;
  justify-content:center;
  gap:4rem;
  margin-top: -5%;

}
.iconesLatetral img{
 width:8rem;
 height: 7.5rem;
}
form{
    width:90%; 
    /* max-width: 700px; */
  
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap:10px;
    align-items: center;
    color:#101010 ;

    /* -webkit-backdrop-filter: blur(10px);
    -webkit-background-color: rgba(18, 18, 18, 0.458);
    backdrop-filter: blur(10px);
    background-color: rgba(12, 12, 12, 0.333);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);  */

}

.inputBox{
height: 100px;
width: 100%;

display: flex;
align-items: center;
justify-content: space-between;
}
.cxInput{
    position: relative;
    width: 100%;
    height:100px ;
    align-items: center;
    border: solid 5px transparent; 
}
input{
  width: 100%;
  height: 40px;
  border-radius: 10px;
  border: none;
  margin-top: 20px;
 padding: 1%;
  outline: none;
}
.labelImput{
    color: #ffffff;
    position: absolute;
    top: 0px;
    left: 0px;
    pointer-events: none; 
} 
.texto{
    width: 100%;
    height: 100px;
    color: #101010;
    font-size: 15px;
    letter-spacing: 2px;
    border-radius: 5px;
    margin-top: 20px;
    border:none;
    outline: none;
    padding: 1%;
}
button{
  width:150px;
  height: 50px;
  border-radius: 200px;
  border: none;

  margin-top:50px;
  margin-bottom: 20px;

  display: flex;
  align-items: center;
  justify-content: space-evenly;
  color:#14a238;
  font-size: 1.2rem;
  cursor: pointer;
}
button:hover{
  background-color: #14a238;
  color: #ffffff;
}
select{
  width: 100%;
  height: 40px;
  border-radius: 10px;
  border: none;
  margin-top: 20px;
 padding: 1%;
  outline: none;
}
//-------------------
.rodape{
width: 100%;
height: 100px;
margin-top: 5%;
background-color: #14a238;

display: flex;
align-items: center;
justify-content:space-around;
}
.rodape p{
  color: #ffffff;
  font-weight: 700;
  font-size: 1.2rem;
}
.rodape img{
  width: 200px;
}
.icones{
display: flex;
align-items: center;
justify-content: center;
gap:10px;
}
.ico{
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background-color: #ffffff;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 1.5rem;
  color:#14a238 ;
}

/* @media(min-width:1150px) {
  max-width: 1000px;
} */

@media(max-width:1020px) {
  .iconesLatetral{
    display: none;
  }
}

@media(max-width:820px) {
 .rodape p{
  display: none;
 }
 .rodape img{
  display: none;
 }
}
@media(max-width:760px) {
  .cxTexto{
    width: 98%;
  }
  .cxForm{
    width: 100%;
  }
  form{
    width: 100%;
  }
}
@media(max-width:610px) {
  .cxTexto h1{
    font-size: 3rem;
  }
  .cxTexto h2{
    font-size: 2rem;
  }
  .labelImput{
    font-size: .7rem;
    top: -10px;

  }

}
@media(max-width:400px) {
  .cabecalho img{
    margin-left:1%;
    margin-right: 1%;
  }
}

`