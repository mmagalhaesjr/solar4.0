import styled from 'styled-components';

export const StyledResidencial = styled.section`
width: 100%;
height: 300vh;
background-color: #eceeee; 
display: flex;
flex-direction: column;
text-align: center;

font-family: 'Montserrat', sans-serif;

#container{
  background-image: url('src/assets/residenciais.jpg');
  /* background-image: url('https://lh3.googleusercontent.com/pw/ADCreHcPc0MtiR5SRSacbD5wVGe2KP2lDbG0jSkG1uGR0lDqCX5r0G97e2cgS1GEY_04sDkx02ZxrtgC5EDxp6yPs71Il2Ms42qNfR1SBFuPj4w0vrz3LinKzUWfI-wrLUcwuKXtAs9i8A-ZiRBQonb83tiagzPwjYsplw6eU1eE8c3PdYV6nwM6vgp1Iv8sKRKqDVC4pEuUKKJS7bBxUv7Jn4tduOsVJBY0HeF3iNAtfGp_zaqWEYvpKYg-ya7mZbhmk_SXsndLMbMd6XsnuL-Hu8ZR2I_OVZOY0hZithzwEYXbFIqWv0SjHr8JEEwzKEhsO089zA_xS-8wM9h4oyCr0klRKwektk8Irrx7jayQf3ou2jsyKMmUJdPb4ENTAklXjDl6HclmARDYqLAVrkMKHmLoYQdulRfME8jcoijisptsBoE1yF8PmA2kXBHnXuq2AFRTT6UXJNXijfGX-o_2wWeYHdz2mAWbC1OHexgwhY6A6_cUzklcQWX-xc5l7u1WMXieB5HfU1GF3PVC09einx8STpSbDBq5NmGDDpiZDFUfo6t-0q-domycL2HljRQ3hwUJOk-uL7VSQCuHlOPoqwdFRO5LBTEAUhaqaIoS9mVSzVFbnnr1po7SEpp01QKWiqp2mhhKNP3q3QqtiocUfWyRVHbWgcwKQOIvcOF6Ee8AwIYFYSvne1LWmSr4cOcjfMULv8ctxIMeuUuWshUoj1y_Qd0qUNYOjSO6kbG8YT9SnaaBC_jSJ5a0i6KkGgkBxwnBSiK1S5p8Ta19Oy26bHd6RHaVMr9Oge9rCjTsCvw4H68klx82eK52Mxe1yqLR0hiJN4lonFZ9tk6Yrl9YVYnClmby2y7mzCMoKck_5fk0G2A2UqIwbn1eH9zrdeWFaAAuJ3SKW2i2fZC-I6qkVg=w1600-h695-s-no?authuser=0'); */
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
  overflow: hidden;
}
.fotos img{
  width: 100%;
  height: 100%;
  cursor: pointer;
 opacity: .7; 
 transition: opacity .5s ease; 
}

.fotos img:hover{
 transform: scale(1.3);
 border-radius: 15px;
 opacity: 1;
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