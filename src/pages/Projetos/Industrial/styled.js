import styled from 'styled-components';

export const StyledIndustrial = styled.section`
width: 100%;
height: 300vh;
background-color: #eceeee; 
display: flex;
flex-direction: column;
text-align: center;

font-family: 'Montserrat', sans-serif;

#container{
  background-image: url('src/assets/industriais.png');
  background-image: url('https://lh3.googleusercontent.com/pw/ADCreHfYzm6mVcBp_M2LfVx6kOWbMR1pVTw2xz17tswgqdRTRfMjZIpqePrh0b15IUb6XgPC__tI_FuLBfcGjMcpYP7Ee8JTUlhsIv3QXareyOQ_goO9mxHePgvhcbspjHSFVAJlu9eP7Hp3hbIvS_xoJq-h9AuDl_jblKXP8WAfJyfJGZnpggsS3KDNr6Ogq6ZV-rf0VvO0s5d5m9G_8edE5sgd9bFedVy6l0lPi8WiSp82IrtMqRMR_qL9ZLTsFjoCYvGF2WSgsqy2wfocnwnpTUcrsY3rCLMOcjuFjvGyBJ0DjKjb1PIODDE8QG94pvcbjYf8oe2tsmwchbYgZ_7G4OkWBktTvt_6rtv1VN30L7NBLvgAWVa1flcoG-r6k1O_iN5wPSg92ynjvjPtVHcv0EHn4Kb9B-_mEYqdUiLpT0WBXwAmcgGYmg2jKm2qLTFeaveIt5Vlz5JOOnIjWHSau2fXg-0_kueGdvdpig9ZtrOWPIyB2GJVYhvl2yStSRUi1ewQk0y8ehfufpeFV6rr33Bee1EYM32svuEgNZWsDwsRTJooDg15ykbzzik8B_i9BWEN-FIBSNSTCxvAr4Q2WWZ2K8cMb7PZLLaeTyyG-9hEklBUJlpT3P7YON2-KY2pSQ7axy5v8wsL4MAAfB0qInTQaXBEc-5Q_zSbb1Axtd8sRraMX49thMXOW8f_7LnN_UwkFwagklOpOdxa-FfyY6j0pjGdyxPEKwr2Sx0nAGo4eLm9AT9KrmHsk9FydXXUe0SQAxYFReQ5_heJkAdSxP-aXslKDoeeQY9PuChwjVcBBQH1WSI67xIjoMVZCNv0943c9TiUBQc7F-ke6ceYNDsVOhNIUgBYyCOkQxICYT-oUKKQS8Su8gITTLVFhSbmsdA5-1aOPWQxmAyAXK6xrA=w1705-h839-s-no?authuser=0');
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