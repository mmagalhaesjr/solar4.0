import styled from 'styled-components';


export const StyledTelaDepoimento = styled.section`

width:100%;
background-color: #eceeee;
background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(245,240,240,1) 100%);

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

#titulo{
  font-size: 40px;
  font-weight:700;
  margin-top: 90px;
  margin-bottom: 3%;
}

h1{
  color:#000000 ;
  font-family: 'Montserrat', sans-serif;
}

#container{
  overflow: hidden;
  width: 100%;
  max-width: 1700px;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
}

.swiper{
  display: flex;
  align-items: center;
  justify-content: center;
}

.swiper-button-prev{
  color: #000000;
  width: 30px;
  height: 50px;
  padding: 20px;
  border-radius: 10px;
  margin-left: -10px;
}
.swiper-button-next{
  color: #000000;
  width: 30px;
  height: 50px;
  padding: 20px;
  border-radius: 10px;
  margin-right:-10px;
 }

/* .swiper-button-next.swiper-button-disabled,
.swiper-button-prev.swiper-button-disabled {
  display: none;
} */


.swiper-initialized{
  height: 100%;
}
.swiper-clickable{
    color: #ffffff;
}
.swiper-pagination-bullet {
  background-color: #000000;
}

@media(max-width:500px){
.swiper-button-prev,
.swiper-button-next{
    display: none;
 }
}


`