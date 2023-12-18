import styled from "styled-components";



export const StyledPagina3 = styled.section`

span{
    font-weight: 600;  
}

#container{
    width: 100%;
    background-color: #14a238;
    background: linear-gradient(0deg, rgba(34, 124, 71, 1) 0%, rgba(5,157,55,1) 54%);
    
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
}

#cabecalho{
    width: 95%;
    min-height: 200px;
    margin-top: 3%;
   
    display: flex;
    align-items: center;
    justify-content:space-between;
}
.subtitulo{
    height: 200px;
    width: 50%;

    display: flex;
    align-items: center;
    justify-content: center;
}
.subtitulo h2{
    color: #ffffff;
    font-size: 4rem;
    font-weight: 600;
}
.cximg{
    min-height: 200px;
    width: 30%;

    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-align: center;
    gap: 5%;
}
.cximg img{
    width: 200px;
}
.cximg .intel{
    width: 150px;
}

#faixaBranca{
    width: 70%;
    height: 150px;
    background-color: #ffffff;
    position: relative;
    left: -15%;
    margin-top: 3%;

    display: flex;
    align-items: center;
    text-align: left;
}
#faixaBranca p{
    font-size: 2rem;
    font-weight: 600;
    margin-left: 4%;
}
ul{
    width: 100%;
    height:400px;
    list-style: outside;

    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    gap: 3%;
}
ul li{
    width: 50%;
    height: 15%;
    margin-left: 5%;
    font-weight: 600;
    color: #ffffff;
  
    font-size: 1.4rem;
    display: flex;
    align-items: center;
    justify-content: left;
}
#icone{
    z-index: 0;
    position: absolute;
    right: -40%;
    top: 0px;
    font-size:25rem;
    color: #ffffff;
}
.texto3{
    width: 100%;
    height: 100px;

    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffffff;
    font-size: 3rem;
    font-weight: 600;
}
.faixaBranca2{
    width: 100%;
    height: 200px;
    background-color: #ffffff;

    display: flex;
    align-items: center;
    justify-content: center;
} 
.faixaBranca2 p{
    width: 90%;
    font-size: 2rem;
    font-weight: 600;

}
#botao{
    width:20%;
    height: 70px;
    background-color: #ffffff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.9);
    margin-top: 5%;
    border-radius: 20px;
    margin-bottom: 5%;

    display: flex;
    align-items: center;
    justify-content: center;
}
#botao p{
    font-size: 1.5rem;
    font-weight: 600;
    color: #14a238;
}
@media(max-width:1311px){
    .cximg{
    min-height: 200px;
    width: 50%;

    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 5%;
}

#faixaBranca{
    width: 100%;
    height: 150px;
    background-color: #ffffff;
    position: relative;
    left: 0%;
    margin-top: 3%;

    display: flex;
    align-items: center;
    justify-content: center;
    text-align: left;
}
#faixaBranca p{
    width: 90%;
    margin-left: 0;
}
#icone{
    position: absolute;
    right: 0%;
    top: 100%;
    font-size:25rem; 
}

}
@media(max-width:880px) {
    .subtitulo h2{
        font-size: 3rem;
}
.cximg{
    min-height: 200px;
    width: 50%;

    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 5%;
}
.cximg img{
    width: 120px;
}
.cximg .intel{
    width: 100px;
}
#icone{
    position: absolute;
    right: 10%;
    top: 150%;
    font-size:15rem; 
}
}

@media(max-width:750px){
    #icone{
    color:#0b4e1c65;
    position: absolute;
    right: 0%;
    font-size:15rem; 
}
ul li{
    width: 80%;
    height: 20%;
}
}

@media(max-width:600px){
    .subtitulo{
        width: 60%;
    }
    .subtitulo h2{
        font-size: 2rem;
    }
    .cximg{
        width: 40%;
        justify-content: space-evenly;
        flex-direction: column; 
    }  
    ul li{
    width: 90%;
    font-size: 1.1rem;
    z-index: 1;
}
#faixaBranca p{
    font-size: 1.5rem;
    font-weight: 600;
    margin-left: 4%;
}
.texto3 {
    align-items: center;
    justify-content: center;
    text-align: center;
}
.texto3 h2{
    color:#ffffff;
    width:90%;
    font-size: 2rem;
}
.faixaBranca2 p{
    font-size: 1.5rem;
}
#icone{
    color:#0b4e1c42;
    font-size:15rem; 
    position: absolute;
    top: 250%;
    left: 50%;
}
#botao{
    width:50%;
}
#botao p{
    font-size: 1rem;
}
}

`