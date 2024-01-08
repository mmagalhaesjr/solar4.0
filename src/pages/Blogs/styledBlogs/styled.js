import styled from 'styled-components';



export const StyledBlog = styled.section`

display: flex;
flex-direction: column;
align-items: center;

.dedicatoria{
    width: 100%;
    margin-top: 5%;
    display: flex;
    align-items: center;
    justify-content: left;
    gap: 2%;
    font-family: Arial, Helvetica, sans-serif;
    font-size: .8rem;
}

#whattsapp{
    z-index: 8;
    position: fixed;
    font-size: 3rem;
    right: 25px;
    top:90%;
    cursor: pointer;
    color: #15da0e;
    text-decoration: none;
}
#whattsapp:hover{
    color: #398462;
    transition:0.3s;
}

span{
    font-weight: 700;
}

#container1{
margin-bottom: 10%;
width: 90%;

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
}

#container2{
width: 90%;
max-width: 1000px;

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin-bottom: 5%;
}

#titulo{
margin-top: 5%;
width: 95%;
text-align: center;
}
#titulo h1{
font-size: 3rem;
margin-bottom: 3%;
}
h1{
margin-top:5%;
font-size: 2rem;
}
.texto{
    margin-top: 2%;
    width: 100%;
    line-height: 1.2;
    text-align:left;
}
.texto p{
font-size: 1.2rem;
}
.subTitulo{
  width: 100%;
  text-align: left;
  margin-top: 3%;
  margin-bottom: 3%;
} 
#subTitulo1{
  text-align:center;
  
}
.subTitulo p{
    font-weight: 600;
    font-size: 1.7rem;
}
ul{
    width: 100%;
    margin-top: 3%;
    margin-left: 3%;
}
ul li{
    font-size: 1.2rem;
}

.img{
    margin-top: 5%;
    margin-bottom: 5%;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
}
.img img{
    width: 100%;
    max-width: 1000px;
}
#cxVideo{
    margin-top: 5%;
    width: 90%;
    max-width: 1000px;

    display: flex;
    align-items: center;
    justify-content: center;
}
video{
    width: 80%;
    
}
#cxVideo iframe{
    width: 100%;
}
#ultimoTexto{
    margin-top: 10%;
}
#central{
    width: 90%;
    margin-top: 10%; 
    text-align: center;
    margin-bottom: 10%;
}


@media(max-width:1140px) {
   #bloco2{
    height: 700px;
   }
}

@media(max-width:800px) {
    #container2{
        width: 90%;
    }
    #bloco1, #bloco2{
        display:none ;
    }
}
@media(max-width:500px) {
#container1{
    border: none;
}
#titulo{
    margin-top: 20%;
}
#titulo h1{
    font-size: 2rem;
    text-align: left;
    font-weight: 600;
}
.subTitulo{
  text-align: left;
}
#subTitulo1{
    text-align: left;
    p{
        font-size: 1.2rem;
    }  
}
li{
    font-size: 1rem;
}
.texto{
    margin-top: 4%;
}
.texto p{
    font-size: 1.2rem;
}

#cxVideo{
width: 95%;
}
video{
width: 100%;
}

}

`