import styled from "styled-components";

export const StyledRodapeLandingPages = styled.section`
width: 100%;
height: 100px;

.rodape{
width: 100%;
height: 100%;

background-color: #14a238;

display: flex;
align-items: center;
justify-content:space-around;
}
.rodape p{
  color: #ffffff;
  font-weight: 700;
  font-size: 1.2rem;
}
.rodape img{
  width: 200px;
}
.icones{
display: flex;
align-items: center;
justify-content: center;
gap:10px;
}
.ico{
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background-color: #ffffff;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 1.5rem;
  color:#14a238 ;
}
@media(max-width:1020px) {
  .iconesLatetral{
    display: none;
  }
}

@media(max-width:820px) {
 .rodape p{
  display: none;
 }
 .rodape img{
  display: none;
 }
}

`