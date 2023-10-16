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
  background-image: url('src/assets/industriais.jpg');
  /* background-image: url('https://lh3.googleusercontent.com/pw/ADCreHdiRwGa19HTlmxMf_K7hUe1bKhRwG2e2_S5-idgHQlv5srvHpRMKt5r_JSSXmQTdrRXnhJK43xsZr8AuHMRfejS9PeVMabQgugmrfM_jqECSOeWXPV5UUfAcLHtOZrWGF4YXl-L4QwHV7uh96kgCAs5XBzcWOfzVAlNubWjnJrFs5rwh8IPwZJQ5h0qvykuzdhrY4ALheHcH7JhsGuKKMrquOey4QQrBQct7SLKUseU6mxahBVg3eioCLgHbEJyexTzqpPjAwI0N_52BKliBu8IMafWYAYdI3vureRhQTWMluFE66lpDinW8-58BlRJcbVYsvCGagdDSwCZJ_e3cEX2d7eJET9Vyowc0URCZQE-CdZSj19G94I7vS7zOJwbNDZtuF6JKrtr2UEQ_YKW0_gienx7-6ZCK85XEpWr1Umthxd5sb50YHZqBu9B1Rvw7ARM5tAfOyJzdOn-CXz6N1NQfOor2EdXunBqLSwAFpAUJk0_U8ngRoGKJNbv37ASXnjyrmZFwTmxYirbtVvqEnpBlN1GYQdPhyqrwtb6OdsJV6sHfiQFD1oOA7p7b3SF4glKJhrXLQpHm2PehHOrKbq5BlxQC6WMgZmSzLfKAJiG7hLJyeGtP-p7-3s9M7ndQJjUMBuKkFM_5mVWLRRx2gqjBVEZm3-08Fo0v1d1pTTrgeEo3Hlu1VAgZb3iYdwBkUqKqATR24Vp0mrLNw9I2D_defPZ1fJDfWiendtYnmr0bG9NqGJ99bDRIs371mH9voq66yTdhCxrX-mdxrZ0ePS4jXp4JR6YQ-UYxf3hbInnEqTRW0TkDRbKeOJP4WPDRxoyY4icCbkXsJ4nRX8EDi_DUJ13y-4n27QdywdRCmmi4O7AI38xz4IjcN4-AyvZKIzHaX_aKGt37uSHvjNYPA=w1600-h695-s-no?authuser=0'); */
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