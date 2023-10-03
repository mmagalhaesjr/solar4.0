import styled from 'styled-components';

export const StyledRural = styled.section`
width: 100%;
height: 400vh;
background-color: #eceeee; 
display: flex;
flex-direction: column;
text-align: center;

#container{
  background-image: url('src/assets/agro.png');
  background-size:100%;
  background-repeat: no-repeat;
  width: 100%;
  height: 100vh;
  overflow:hidden ;
}

h1{
  font-weight: 700;
  font-size:7rem;
  color:#00BF3E ;
  position: relative;
  top: 150px;
  right: 27%;
}
h2{
  color: #ffffff ;
}
#texto{
  width: 50%;
  height: 40%;
  position: relative;
  top: 190px;
  left: 40%;
}
#texto p{
  font-size: 3rem;
  color: #ffffff;
  font-weight: 400;
}
#texto p span{
  font-weight: 700;
}
@media(max-width:1500px){
  #texto{
    top:170px;
    left: 35%;
    width: 60%;
  }
}

@media(max-width:1280px){
  h1{
    top: 0;
    right: 20%;
  }
  #texto{
    top:80px ;
    left: 35%;
    width: 60%;
  }
}

@media(max-width:1130px){
  h1{
    top: 0;
    right: 20%;
  }
  #texto{
    top:50px ;
    left: 5%;
    width: 90%;
  }
}
@media(max-width:950px){
  h1{
    top: 0;
    right: 20%;
  }
  #texto{
    top:50px ;
    left: 5%;
    width: 90%;
  }
  #texto p{
    font-size: 2rem;
  }
}
@media(max-width:780px){
  h1{
    font-size: 3rem;
  }

  #texto{
    
  }
  #texto p{
    font-size: 3rem;
  }
 
  @media(max-width:460px){

    h1{
      right: 12%;
    }
    #texto{
    top:15px ;
  }
}
#texto p{
    font-size: 1rem;
  }
}



// containerIcones ------------------------------
#containerIcones{
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  position: relative;

  

}

.box{
width: 500px;
height: 350px;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
margin-top: 50px;
}
.box img{
  width: 90px;
  height: 90px;
}
.tituloBox{
font-weight: 700;
font-size: 30px;
margin-top: 10px;
}
.textoBox{
margin-top: 10px;
}

@media (max-width:1260px) {
  #containerIcones{
    top:-40px ;
  }
}
@media (max-width:1110px) {
  #containerIcones{
    top:-100px ;
  }
}
@media (max-width:930px) {
  #containerIcones{
    top:-200px ;
  }
}
@media (max-width:770px) {
  #containerIcones{
    top:-300px ;
  }
}
@media (max-width:630px) {
  #containerIcones{
    top:-350px ;
  }
}
@media (max-width:500px) {
  #containerIcones{
    top:-400px ;
  }
}
@media (min-width: 500px) and (min-height: 800px) {
  #containerIcones{
    top:-450px ;
  }
}
@media (max-width:450px) {
  #containerIcones{
    top:-450px ;
  }
}
@media (max-width:430px) {
  #containerIcones{
    top:-730px ;
  }
}
@media (max-width:400px) {
  #containerIcones{
    top:-500px ;
  }
}


`