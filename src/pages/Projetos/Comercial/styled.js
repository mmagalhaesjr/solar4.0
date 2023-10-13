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
  background-image: url('src/assets/comerciais.jpg');
  background-image: url('https://lh3.googleusercontent.com/pw/ADCreHfDTz34-jS0MqOgUyD5jj7hSya5eXjYwAWYFC8KPSQdgHsK8Dj7BpPLRUhnb4N4ihA0bLuymAAn6XA__LDSyZWsqFllVmlUajape9VqZkqgJgNB17Hd-gkYHGCFWxgyO4n68A2myJ6L2gAoeefdnIexP41m7O4zPmQvvitiSo4Z2pPOMUnltU1yZRfLzWU2Yllbf3uieH-FqrLY9NOlPPN6zmd9TUWe7oGMxA6JOe6OGzb3ozLzOShLv4gMM1NQ_2LyJMJJ9pYDZP-F1F-dhvuGJH1jcAedatoFukSgEbGFrWFG3VnIMHQFqDc0Vde5T0ieKTyQYQ7V5vIEAQd8HPUTtwVVxBippYpHv4GDqLDE3Dc9R6sFa5VOUCNyPDCJkr9-tz2e0XZTY196y39RAIUXO-UIQkKxgqcHTq69dDyzxV8k4OzpXNtDXrZ25k6narVvxy-Xe5UndK7kUj6mT_i6IscLT0WeecWmVcCfsZCF32nOoogz6-Iy-Ew66cVowVdwSPCxnBdizyqDSI04XytmUUkKQGdX36XAgzO7U32VR6eilWJfdnpTepoHcd8nKQRRnzHrAWuszYlhRAJPYVvrPne-Cow2egHy1gY83R9mkg2ZHWRNrrv8x78Gdi82dyzO7ON9aRQWE2pavRbw5PeWac8PXLfg60XqPjrNgjoeWkSD3f0qwf3koxQRA9mbVVTzeaXif0jkyJ0LE7EcAbYo3vcVZWUNxkQDk_WvR7xKv9qvXwGgbhFYHYa5hGUWmgkWi-KZm9PiQpLSWOK4dg9RD7QNEaj5l4iuogtlsE-6kpwQwERduws-JuWUan4ste9kGIBU6VtT1f1r6UEeawBxwCdco-e-a4S14_Oh41vaWHUQsLoBQZ3oLnyYb0GccuKp29BCewtS22aZUpwfdA=w1600-h695-s-no?authuser=0');
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