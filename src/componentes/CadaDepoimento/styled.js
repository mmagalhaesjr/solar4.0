import styled from 'styled-components';


export const StyledCadaDepoimento = styled.section`

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




`