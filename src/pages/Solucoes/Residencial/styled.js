import styled from 'styled-components';

import foto from '../../../assets/residencial/residenciais.jpg';

const fotoCaminho = `url(${foto})`;

export const StyledResidencial = styled.section`
width: 100%;
height: 70vh;
background-color: #eceeee; 
font-family: 'Montserrat', sans-serif;
overflow: hidden;

display: flex;
flex-direction: column;
text-align: center;



#container{
  width: 100%;
  height: 100%;
  background-color: #eceeee;
  background-image: ${fotoCaminho};
  background-size:cover;
  background-repeat: no-repeat;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

#titulo{
width: 80%;
left: 100px;
margin-top: 5%;


display: flex;
flex-direction: column;
justify-content: left;
align-items: flex-start;
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
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  text-align: end;
  margin-left: 30%;
  margin-top: 3%;
}
#texto p{
  font-size: 1.7rem;
  color: #ffffff;
  font-weight: 400;
}
#texto p span{
  font-weight: 700;
}


@media(max-width:885px) {
#titulo{
  width: 95%;
  margin-top: 5%;

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}
h1{
  font-weight: 700;
  font-size:4rem;
  color:#00BF3E ;
}

#texto{
  width: 95%;
  margin-top: 3%;
  text-align: center;
  margin-left: 0;
}
#texto p{
  font-size: 1.5rem;
  color: #ffffff;
  font-weight: 400;
}

}
@media(max-width:500px){
  height: 40vh;
  #titulo{
  width: 95%;
  margin-top: 15%;

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}
h1{
  font-weight: 700;
  font-size:3rem;
  color:#00BF3E ;
}

#texto{
  width: 95%;
  margin-top: 3%;
  text-align: center;
  margin-left: 0;
}
#texto p{
  font-size: 1.2rem;
  color: #ffffff;
  font-weight: 400;
}
}


`

export const StyledContainerIcones = styled.section`
  width: 100%;
 
  display: flex;
  justify-content:center;
  align-items: center;
  flex-wrap: wrap;
  gap: 70px;
  

#box{
  width: 95%;
  max-width: 1150px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.box{
width: 300px;
height: 250px;

display: flex;
flex-direction: column;
justify-content:center;
align-items: center;


}
.box img{
  width: 70px;
  height: 70px;
}
.tituloBox{
  font-weight: 700;
  font-size: 1rem;
  margin-top: 5px;
  text-align: center;
}
.textoBox{
  width: 100%;
  height: 50%;
  font-size: .9rem;
  margin-top: 1rem;

 
}
@media(max-width:970px) {
  .box{
    width: 300px;
    height: 200px;

    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
}
  .textoBox{
    font-size: .8rem;
}
}
@media(max-width:660px){
.box{
    width: 200px;
    height: 150px;
    margin: 3%;
}

.tituloBox{
  font-size: 1rem; 
}

.textoBox{
    font-size: .6rem;
}
}

@media(max-width:435px) {
  .box{
    width: 150px;
    height: 200px;
}

.tituloBox{
  font-size: .9rem; 
}

.textoBox{
    font-size: .5rem;
}
}



`

export const StyledContainerImagens = styled.section`
  width: 100%;
  height: 80vh;
  flex-wrap: wrap;
  overflow: hidden;
  margin-bottom: 3%;

 display: flex;
 align-items: center;
 justify-content: center;
  

#containerFoto{
    width: 70%;
    max-width:1800px ;
    height: 600px;
   
    display: flex;
    align-items: center;
}

.swiper-button-prev,
.swiper-button-next{

 color: #fff;
 margin: 1%;
 
}
.swiper-button-next.swiper-button-disabled,
.swiper-button-prev.swiper-button-disabled {
  display: none;
}

.swiper {
  
    /* background-color: #101010; */
}

.swiper-slide {
    width: 100%;
    height: 100%;
    color: #fff;

    display: flex;
   align-items: center;
   justify-content: center;
}

.foto{
    width: 100%;
    height: 600px; 
}


@media (max-width:980px) {
  #containerFoto{
    width: 95%;
    height: 70%;
  }
}
@media (max-width:979px) {
  #containerFoto{
    width: 95%;
    height: 60%;
  }
}
@media (max-width:600px) {
  height: 40vh;
  #containerFoto{
    width: 95%;
    height: 80%;
  }
}


`