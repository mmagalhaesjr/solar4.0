import styled from 'styled-components';

export const StyledRural = styled.section`
width: 100%;
height: 300vh;
background-color: #eceeee; 
display: flex;
flex-direction: column;
text-align: center;

font-family: 'Montserrat', sans-serif;

#container{
  background-image: url('src/assets/agro.png');
  background-image: url('https://lh3.googleusercontent.com/pw/ADCreHchHgdFJfyr6eM0sbZKYao68waBjhG87Sqgl41Z2SjWrny88m5wd5Nq-Jxg0HdUg0G88C6rsgcwYTF_144kESjs6TaaMv2cpA9FLI-oz0jVGeepbW8dniIV7j3zhHtW00qE-sTBUSoSR_58WEtvQTuadu3xPUzau5uKiAJ-8rGgoJK2bY9ksn5B6zMAJtBc0mbSoQan5wYME_YU-_TyPazRky574ujS7EPZ0hdZk3JaijX0KpaRddHIGklVMngTO3EnNovZquzjYlVOUzKzLHyprFEsDbP9IjlzJWKP0tK2iOBFUW6uzTzn1GgJB5l2vXHKHrcjO_VzHo4q-7YatRTqbmhvD_F8G9_5anFnA-khGPEEaEZ5fExOFwx6BdUb1sZNJ7bUdDUrZagXCK61_HYxKkhCIR64PB9DChW8pKOA_O6Hi2dab9vI-8D2xhaFPlzq7UgeMn5N11lEUADQVZygEu2PK8oyAbxGpjOlp7B2m2UefBxR4PCXd-iVUaLWVwHnPHpkiXIzcrXSg8Nar6u0LSA-pXoS5Wr8zjukpQXqQ9O6GLNJt--dZovuBFFbHZzxdUrbdLaQ-y6vtZRfFGJV9Ygtu989aIhPAKhtJAskKTIjiMD01MtcuVbbgEGrGr3D_IiWs9MUVbkJRt_Ujw3aZGXL3yZY8vodhREFxpddzTW3qHHpaiUne0pBYeO6diFZs3p6wNvfkC4H5FBuPHoChnGiA-phfUJTjvho0_0IsJzkiZXunyWHwyr44PTLGAdwEZX-m9oM9aMQC4s2ZsM41vZ2crBG17KwpAWoeCAFxVENeEtgR8GQN8wRiEiXyT1t2xtxMLJUBCpxrQWn5UXQzivTSlSA9NTKhIKrNnOmm3sQKBH1go5z3HLAo0K4sLuHgB_2xo3ICr8shSaS1Q=s250-k-rw-no');
  background-size:100%;
  background-repeat: no-repeat;
  width: 100%;
  height: 65vh;
  overflow:hidden ;
}

#titulo{
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: flex-start;

position: relative;
top: 50px;
left: 100px;


}

#titulo span h1{
  color:#ffffff;
}
h1{
  font-weight: 700;
  font-size:6rem;
  color:#00BF3E ;
}

#texto{
  width: 50%;
  position: relative;
  top: 100px;
  left: 40%;

  
}
#texto p{
  font-size: 1.7rem;
  color: #ffffff;
  font-weight: 400;
}
#texto p span{
  font-weight: 700;
}

@media(max-width:950px) {
  h1{
    font-size: 4rem;
  }
  #texto p{
    font-size: 1rem;
  }
}
@media(max-width:650px) {
#container{
  display: flex;
  flex-direction: column;
  align-items: center;
  
}

#titulo{
  top: 0;
  left: 0;
}
#texto{
  left: 0;
  top: 20px;
  width: 80%;
}
}
@media(max-width:500px) {
  #titulo{
  top: 10px;
  
}
#texto{
 
  top: 40px;
  
}
  #titulo h1{
 font-size: 3rem;
}
#texto p{
  font-size: .7rem;
}
}


// containerIcones ------------------------------
#containerIcones{
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content:center;
  gap: 70px;
  align-items: center;
  flex-wrap: wrap;
  position: relative;
}
#box{
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* border: solid 2px red; */

}
.box{
width: 450px;
height: 200px;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;

/* border: solid 1px blue; */

}
.box img{
  width: 50px;
  height: 50px;
}
.tituloBox{
font-weight: 700;
font-size: 20px;
margin-top: 5px;

}
.textoBox{
  margin-top: 20px;
}
@media(max-width:900px) {
  #box{
    flex-direction: column;
    align-items: center;
  }
  .box1{
    margin-top: -100px;
  }
  .box2{

  }
}
@media(max-width:800px) {
  
  .box1{
    margin-top: -200px;
  }
  .box2{

  }
}
@media(max-width:700px) {
 
  .box1{
    margin-top: -250px;
  }
  .box2{

  }
}
@media(max-width:600px) {
 
 .box1{
   margin-top: -300px;
 }
 .box2{

 }
}
@media(max-width:500px) {
 
 .box1{
   margin-top: -350px;
 }
 .box2{

 }
}
@media(max-width:460px) {
  .box{
    width: 90%;
  }
}

// containerFotos ------------------------------

#containerFotos{
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

#foto1{
width: 40%;
}
#foto2{
  width: 30%;
}
#foto3{
  width: 30%;
}
.fotos{
  height: 100%;
  display: flex;
  gap: 10px;
  flex-direction: column;
}
.fotos img{
  width: 100%;
  height: 100%;
}

@media (max-width:1000px) {
  height: 240vh;
}

@media (max-width:970px) {
  #containerFotos{
    position: relative;
    top: 400px;
  }
}
@media (max-width:800px) {
  #containerFotos{
    position: relative;
    top: 100px;
  }
}

`