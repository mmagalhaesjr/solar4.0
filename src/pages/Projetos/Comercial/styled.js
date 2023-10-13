import styled from 'styled-components';


export const StyledComercial = styled.section`
width: 100%;
height: 300vh;
background-color: #eceeee; 
display: flex;
flex-direction: column;
text-align: center;

font-family: 'Montserrat', sans-serif;

#container{
  background-image: url('src/assets/comerciais.png');
  background-image: url('https://lh3.googleusercontent.com/pw/ADCreHffxoYE5VnmnV8UIFpk8x1JOkbf6X5he2d_kkxJt8Vwjjs6frsqZnyZBF9AOolM82u59fChZfblEgRjkvx8xvbP_DiuRSm3m1m0M9GodWR6SaomPBX9oOMhGjeIqEVpQOvrN0vOucakmEE_hhu5wt9ZIfqVW2uHCAFXlqoBnxWFljcjtZMFtgv4QtCJoRBOyIH5CCHeianbiZBAainE2GH_6fiNrc3Fh5L3EV8wxo9fKg7ZAwt9OceFfOe2ll_ZO2xMAG_cKZ8c-nVWQMAA-QcXfkkK0Q4bGj1h0-qDxN7NyEBUE3tkWUxNwYg-YyX03LnbqOPqOd4lCcWApsReud881XL2GZh7yrlHoIcHCPTpq09Lk4fcUR7JyvG-LwbQlj7tu1a2rymQPexa5klkx0oPgAC44V-mXv31pFF8sJ_ETHr6kNtJwK4Y4raP6UbXzsQRkIkEfBppPthwAYU-UFiyHmh4V6WKIivNYP2CByLRnLz4r1Szm8zLlLTzpQQd_i55bCdiaqHpjMkT3r8Fw5G__iDFRzD9kxcuqwfhQ4uy0S7eOqkUJVvbppU6kN-HQE1bNxlCVZEYU5Zvrd4KxSarG22Z9ti2V-uzg0sMP110JWBZd-TMhIuFV_ga4xGwmB1NnWwYswzoZie61lDUxBcsTX0TnNNX6m9n5cZ9AHO5CbH2S-WYjF0BxMGY9ZS6r9J5DqJImmqUfp9BKMCM5id7AUm6kOr-Gg1lw-22POLkl49kO14cKtMDTMDgkiF333z-rzX1PTH5ba8QhzxIzdSh9FHEVhHzKYsgBJJ8RLhIKTOoghUZj0Q0aDfgNM92Bc2Yzp6Ama3ZXOIRIAV6zLVzJrqjgwrkNa7z_k1whzEtyHt53dUtGyEJP7FMRpWiD9x6SR2a0v0RbZhlZhPzCA=s250-k-rw-no');
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