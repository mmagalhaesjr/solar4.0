import styled from 'styled-components';






export const StyledOrcamento = styled.section`
width: 100%;
background: linear-gradient(3deg, rgba(0,131,69,1) 0%, rgba(0,163,54,1) 54%);

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;




.cabecalho{
width: 100%;
height: 100px;
background-color: #14a238;

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
  width: 80%;
  margin-top: 5%;
 
}
form{
    width:100%; 
    /* max-width: 700px; */
    height:70%;
    min-height: 400px;
    max-height: 450px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color:#101010 ;
    -webkit-backdrop-filter: blur(10px);
    -webkit-background-color: rgba(18, 18, 18, 0.458);
    backdrop-filter: blur(10px);
    background-color: rgba(12, 12, 12, 0.333);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); 

}

#nome{
  display: flex;
  width: 100%;
}
.nome{
  width: 100%;
}
#emailTelefone{
  display: flex;
  justify-content: space-between;
  width: 100%;
}
.emailTelefone{
width: 45%;
}
#endereco{
  display: flex;
  justify-content: space-between;
  width: 100%;
}
.endereco{
  width: 40%;
}
#estado{
  width: 15%;
}
#instalacao{
  display: flex;
  justify-content: space-between;
  width: 100%;
}
.instalacao{
width: 30%;
}
#msg{
  margin-top: 3%;
}
input{
  margin-top: 3%;
  height: 40px;
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

@media(max-width:820px) {
 .rodape p{
  display: none;
 }
 .rodape img{
  display: none;
 }
}
@media(max-width:400px) {
  .cabecalho img{
    margin-left:1%;
    margin-right: 1%;
  }
}

`