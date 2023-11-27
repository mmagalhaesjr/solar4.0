import styled from 'styled-components';





export const StyledDepoimento = styled.section`
width:100%;
background-color: #eceeee;



display: flex;
flex-direction: column;
align-items: center;
justify-content: center;


#titulo{
  font-size: 40px;
  font-weight:700;
  margin-top: 90px;
}

h1{
  color:#000000 ;
  font-family: 'Montserrat', sans-serif;
}

#container{
  overflow: hidden;
  width: 100%;
  height:50%;
  margin-top: 100px;

}


.swiper-button-prev,
.swiper-button-next{

color: #000000;
 width: 30px;
 height: 50px;
 padding: 20px;
 border-radius: 10px;
 }

.swiper-button-next.swiper-button-disabled,
.swiper-button-prev.swiper-button-disabled {
  display: none;
}

.swiper-wrapper{
}
.swiper-initialized{
  height: 50%;
 
}
.swiper-clickable{
    color: #fff;
}
.swiper-pagination-bullet {
  background-color: #000000;
}


.box-depoimento{
    width: 500px;
    height: 350px;
    background-color:#c1baba47 ;
    backdrop-filter: blur(10px);
    opacity: 0.9;
    border: solid 10px #eceeee ;
   

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2%;

   
}
.cx-img{
    width: 90%;
    margin-top: 2%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.cx-img h3{
    margin-top: 1%;
}
.pessoas{
    width:70px;
    height: 70px;
    border-radius: 50%;

    background-color: #eceeee;
}


 h3{
    font-size: 1rem;
    font-weight: 700;
   
}
.estrelas{
    width: 90%;
  
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2%;
    background-color: transparent;
}
.estrelas img{
width: 100px;
height: 20px;
}
.texto{
    width: 90%;
    height: 90%;
    margin-top: 3%;
    
   
    display: flex;
    flex-direction: column;
    align-items: center;
   
}




`

