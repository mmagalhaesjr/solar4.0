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
  background-image: url('src/assets/agro.jpg');
  background-image: url('https://lh3.googleusercontent.com/pw/ADCreHeT0pd2z4WlJRnZsOnEq2EA8OhzO0YWfkOoDGHlfCeSgCKWOn4a6LBrx-IL7eFkgDA_miLmM58mdkgmPKjg_KHHHwS88DDYroNs-u3G18RerPxbRUFN6bvuzAzVxv5H7_Il5dhEgJAxUjtIyO0HD-5oU0_XxVjdvMpDpgc62he4FeabybM__sBf-FnOgOfir8RTw1C9VS_53nuoItoJLFwK_hXkRM9q0WwkMN_Afr9sH03kVUhAK1VWOLdtF0rvS3WcbgF_JGHNCnwG-xMIlZKj5oerlLCK0nCuFjOaICOFThJCmn28ohzedKrC3YNFTQE2wvIpIxoJEWzF4jOYGDvQ_IdCcA9SiYlUUOUye8WF9PT_9tEx_zuUUky2wbLdvpycNLxg0hups2CGIC1WBIHF2mW7fDa19jv5WhG-3uqJHm0zAP3sMNxYIzyKUM0LB2GK5Ib4lhv7cQ0GdKrswy-lEar7QRSAICVL5O8-CGFMciQmp_dWZe43_F0mt_gsCA0YO_hmaLYZcS1TMqhWjjYrLUWXZ7AfFeKTcFuDa-sSWmqkUNdEJxzVZaxKSujrHxLjOePdZiNH6sMQliDRu_g8jIHCS6GdwYUaQ07anIQxeWuIwQNtU5CpYSmDMsJLdV4a3n1Y4PjHlnUDV8LyCQ_p5adfJMuMlX8IT86anwn2OdossUvmFATSrZZD-7Ype7EV2-Q3c_70daw1QkumHu6WtiVMJB_DwGsuwGAMof-ps1JTaYljVY1Z84ypsYy6qZKLn-87D9l9LY98yf5qW9B06iDn4G2sK_JHB4IksNKgsKo8o9eMesNTz-x6lK3uixVupvYc3hOMiW_rBZkb0zEliPuOZbeGEp5r1uwsR-jP1yDIxZF87VWuZUVty-Wgsq4kb0txSdmM5KHZmzQOuQ=w1600-h698-s-no?authuser=0');
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