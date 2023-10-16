import styled from 'styled-components';

export const StyledSolucoes = styled.section`
width: 100%;
height: 200vh;
background-color: #00BF3E; 
background-color: #eceeee; 
display: flex;
flex-direction: column;
text-align: center;

#titulo{
  font-size: 50px;
  font-weight:700;
  margin-top: 30px;
}
h1{
  color:#000000;
}

#container{
  height: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(src/assets/solucoes.jpg);
  /* background-image: url('https://lh3.googleusercontent.com/pw/ADCreHfQ82YmujAHWgY9Q_MN1ujVqlh3S8AmQ9KnTbp9RNaCsiLAd612M94AgrVFl187mip6FQKm-U6f6M2YSE624X3_dMWqA0Z6m_ZjmZaiyP7RImanmXMnfGQ_UB2yvl-EPVt1ZHUI-o4S1Ky2MxZd9PoUiuW6Is_TjRio9rqNA5pzO4LRnbW8SkxumjkHd6wCoTfH8gQzlOUjScZyZnqPz2THiiE-XSfFPWXfwJhW0QqsX-F-i0SSLa9_Az8eEtnCRWD6lImooJ0X2FhhGoJoekEdU6UqWCmZkpdQuznBwPZdTHbGQrh-TIpZKO9Vvw74ga5bO_4LtBFcBL4qwa9j-wuR1Jgp7JDu5sFfcCMl2hd1QU8u6LSnCK5d139yIbTMQm3jnyob4PuEbu6Ih2j7w33uihzUL364pGEWEpZ3E0iKlCtx8VOwOlHCZkl1523X8wHS0FtfPnxQ1OgkdTndD8yLrsuxr8Hue4fois5UD-_X1obrhMy7RH6lS414JDT-0dyB6s4JwNiuXo3NmU7Ag-WfFKC8oqpMsV9qz8Y-JWVmTlx7IZd96UudRCyeTqARikaK5ukeLo4ERbZ9enRGwFdznbSUFLdMH3oZdFdK1ykZV0cbnVG2YzIuWIwFKCrGEtluLU6Y55QE4unEhjyGxXvzph_iPil_2-2N0Wb9cG0JIWDmzlVRt6XPuMWsGaUijuCUA01iC0JLeIVY_hF4KbF42jEk280jukMxIPzktjhfF1zZ84VBLDYR5Vd8OcgjTAlhWYIGbu83YxuJXbHy4wPgWKFlB8TB92bLXIk7hjsZuO-4cFH-dEtfw3MNviy7vbu41eQChIxHderc1cLqYPu59h3gcZ662c7RVaPoF630XuzN6TTJe2qz4CL2NUCBAD6au_N_zSuRV0RTEWNl_A=w1600-h900-s-no?authuser=0'); */
  background-repeat: no-repeat;
  background-size: cover;
}

#texto{
  width: 70%;
  font-size: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-top: 50px;

  
}
span{
  font-weight: 700;
  color: #000000;
}

button{
  width: 70%;
  height: 50px;
  border-radius: 20px;
  border: none;
  background-color:#00a335;
  color: #ffffff;
  font-weight:700;
  font-size: 25px;
  font-family: 'Montserrat', sans-serif;
  cursor: pointer;

  margin: 40px 0;
  
  &:hover{
     background-color: #00BF3E;
  }
}

#containerImg{
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
}

#img{
  width: 100%;
  height: 60%;
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 500px;
}


#img li p{
  position: relative;
  top: -50px;
  text-decoration: none;
  font-size: 40px;
  color: #000000;
  display: none;
  transition: 1s;
}
#img img:hover + p {
  display: block;
}
#img li {
  list-style: none;
}
.img{
  overflow: hidden;
  width: 350px;
  height: 400px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
}
.img img{
  width: 500px;
  height:400px; ;
 
  border-radius: 8px;
}
.img img:hover{
  opacity: .9;
  transition: 1s;
  transform: scale(1.2);
  border-radius: 8px;
}

#subTitulo{
position: relative;
top: 400px;
font-size: 50px;
font-weight: 700;
}
`