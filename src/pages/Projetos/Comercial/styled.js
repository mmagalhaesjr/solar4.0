import styled from 'styled-components';

export const StyledComercial = styled.section`
width: 100%;
height: 200vh;
background-color: #eceeee; 
display: flex;
flex-direction: column;
text-align: center;

#container{
  background-image: url('src/assets/comerciais.png');
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
  right: 23%;
}
h2{
  color: #ffffff ;
}
#texto{
  width: 50%;
  height: 40%;
  position: relative;
  top: 200px;
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
    top:170px ;
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
    right: 15%;
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
    right: 10%;
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




  
// containerIcones ------------------------------
  .box{

}
.box img{
  width: 50px;
  height: 50px;
}
.tituloBox{

}
.textoBox{

}
}
`