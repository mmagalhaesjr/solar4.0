import styled from 'styled-components';

export const StyledFuncionamento = styled.section`

width: 100%;
height: 100vh;
background-color: #044f757d;
display: flex;
flex-direction: column;
/* align-items: center; */

text-align: center;

/* scroll-snap-align: start;
position: sticky;
top: 0;
left: 0; */



#titulo{
  font-size: 40px;
  font-weight:700;
  margin-top: 80px;
}
h1{
  color:#000000 ;
  font-family: 'Montserrat', sans-serif;
}


#casinha{
    width: 50%;
    height: 50%;
    
  }


#container{
  height: 70vh;
  width: 100%;

  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;



background-image:url('/src/assets/gif.gif');
/* background-image: url('https://lh3.googleusercontent.com/pw/ADCreHcNwdz0NBHBsFN2wO9uNHvoRxJBXAv_U26BtVP0UV_elCZYBjGtokCkfQ_F3X-XD-1WjrFPpP2rnTLth4o4oFiYpYgRl_1fsJjQwdAKDmwIH0soZ1xXUo8b0AIfOsSgZTT981p3tJjE63r87I7y_4vlh7-vxrRZakbgPmaIzVoZIqSZBd5Kd0qoJx1LoSvCB7eF0ofMvQG0HXZ2EQetTUXfJ9kcN5b2Cn1MQ6ATVecv-7DB0BT7LiAY6Hb4r0HG1VRbhPFrSQciYnBL12RKP3GPW23DtO9ZY9ux81nJj6AgiJVzYUfUf_oTR2nZJdwJlkvhLXnW52iyVGKfexw6rq4eCN4YTqUJj7Eq-ZCHSiNxbj9Ny_-aKKrwlX-OeSNABt8xSaKQLEwMJ7XisUkVbHVDPNu0U46ALxPqwHuRdpKj7dDaUx3hWHPecc0H_gGD2ekQfCm2kgOxJn2DpVfjFFV0CrMB1b1MVajTW9x15rSlqwkySO1yY974bOxmOaXz60bgRk5X6ho5kTFEo9l2VG_9NdP4XZNasHpwtJGuyspvJXGatO_UQt2j29-xuT7jB8ROC3oeosm_B9TXARJOsljrbABhV0xcIWB5JHpfIV6chVkrJsX7rQl3nBz2y9VF5dXyhLGWC8uR7InlrK5gTCZ-PeTtNwlDnsYzvh3gEd6lUPSFuvkp0ZEPd8Cuju1JKloU5ARdsI7PfyaGHvMpK7e9nu7nGHACEWj2nOHzQHCyKAA345qR2WMi9vH4-nZezmZumK2gfv-LZi02kN4MO_g03chGTn9zlXQXhmmETYTt5DnvaXl9zTMzNAiwFiE_eiEeioWqf6SnM0GkaoGAff7xfS2_v6TMaFdvMShx8s3E-w2NWVL_gK53C2o_2FZI9v7d7EDoA0FhRDKTUASTvw=w1570-h933-s-no?authuser=0'); */
background-repeat: no-repeat; 
background-size: 50%;
background-position: center;
margin-top: 40px;

/* position: relative;
top: -500px; */
}

  .circulo {
    background-color: #F2CB36;
    /* background-color:#00a3369c; */
    width: 60px;
    height: 60px;
    border-radius: 50%;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    position: relative;
    color: #000000;
    font-weight: 700;
    &:hover {
      background-color: #FFE583;
      background-color: #f7d54e;
      transition: .5s;
      border-radius: 30%;
    }
  }
  #circulo1 {
    top: -30%;
    left: 0%;
  }
  #circulo2 {
    top: 0%;
    left: -1%;
  }
  #circulo3 {
    top: 7%;
    left:3%;
  }
  #circulo4 {
    top: 17%;
    left:-9%;
  }
  #circulo5 {
    top: 0%;
    left: -28%;
  }
  #circulo6 {
    top: -7%;
    left: 5%;
  }

  #ContainerInfo {
    position: relative;
    top: -400px;
  }
  .info {
    width: 350px;
    height: 200px;
    position: absolute;
    display: none;
    border-radius: 7px;
    background-color: #ffffffef;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

    &.info-visible {
      display: block;
    }
  }
  #img {
   
    
  }
  #info5 img{
    margin-top: 10px;
  }
  .info #img {
    width:130px ;
    height:80px;
    margin-top: 20px;
  }

  .info p{
    margin-top: 10px;
  }
  .info .imgInfo {
    margin: 5px;
  }
  #info1 {
    top: 0%;
    left: 45%;
  }
  #info2 {
    top: 88%;
    left: 46%;
  }
  #info3 {
    top: 20%;
    left: 23%;
  }
  #info4 {
    top: 45%;
    left: 47%;
  }
  #info5 {
    top: 70%;
    left: 32%;
  }
  #info6 {
    top: 70%;
    left: 38%;
  }
  //estilo da tela menor-------------------------------------

  #titulo{
  
  margin-top: 80px;
}


  #telaMenor{
    display: none;
  }
 
#container2{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items: center;
  margin-top: 100px;
  gap: 30px;

  
}
.card{
  width:85% ;
  height:100px;
  background: radial-gradient(circle, rgba(215,215,215,0.891281512605042) 0%, rgba(255,255,255,0.8884803921568627) 100%); ;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
  border-radius:10px ;
  display: flex;
  align-items: center;
  justify-content: center;
}
.informacao{
  width: 100%;
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}
h3{
  position: relative;
  top: -30%;
  left: 0%;
  font-size: 1.5rem;
}
.icone{
  font-size: 50px;
}
.texto{
  width: 300px;
}

@media(min-width:1660px) {
 justify-content: center;
 align-items: center;
  #container{
    width: 1660px;
  }
}

@media (max-width: 1300px) {
  height: 100vh;
  #telaMaior {
    display: none;
  }

  }

  @media (max-width:1300px) {
    height: 130vh;
    #telaMenor{
      display: block;
    }
  }
  @media (max-width:419px) {
    height: 110vh;
    #container2{
      margin-top: 60px;
    }
    #titulo{
      font-size: 25px;
      font-weight: 700;
    }
    
  }
  
`