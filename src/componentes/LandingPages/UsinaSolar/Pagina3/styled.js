import styled from "styled-components";

export const StyledPagina3 = styled.section`

#container{
    width: 100%;
    background-color: #14a238;
    
    display: flex;
    flex-direction: column;
    align-items: center;

    border: solid 2px blue;
}

#cabecalho{
    width: 95%;
    min-height: 200px;
    margin-top: 3%;
   
    display: flex;
    align-items: center;
    justify-content:space-between;

    border: solid 1px red;
}
.subtitulo{
    height: 200px;
    width: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    border: solid 1px blue;
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

    border: solid 1px orange;
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
    list-style: inside;

    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 3%;
    
    border: solid 2px red;
}
ul li{
    width: 50%;
    height: 15%;
    margin-left: 5%;

    font-size: 1.4rem;
    display: flex;
   align-items: center;
    justify-content: left;


    border: solid 1px black;
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

    
    border: solid 1px black;
}
.faixaBranca2{
    width: 100%;
    height: 200px;
    background-color: #ffffff;
}
#botao{
    width:40%;
    height: 70px;
    background-color: #ffffff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.9);
    margin-top: 5%;
    border-radius: 20px;
    margin-bottom: 5%;
}
`