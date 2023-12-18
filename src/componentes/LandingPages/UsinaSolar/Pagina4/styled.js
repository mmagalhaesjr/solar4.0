import styled from "styled-components";

import f3 from '../../../../assets/landingPage/usinaSolar/teste.png'
const foto3 = `url(${f3})`;

export const StyledPagina4 = styled.section`



#container{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

.cabecalho{
    width: 90%;
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
    color: #14a238;
    font-size: 4rem;
    font-weight: 600;
}
.cximg{
    height: 200px;
    width: 50%;

    display: flex;
    align-items: center;
    justify-content: right;
  
    gap: 5%;

   
}
.cximg img{
    width: 200px;
}
.cximg .intel{
    width: 150px;
}

#containerImg{
    width: 100%;
   

    /* background-image: ${foto3};
    background-size: contain;
    background-repeat: no-repeat;
    background-position: 10% 100%;
    background-position: center; */

    /* border: solid 5px #14a238; */
}

#containerImg img{
    width: 100%;

}

@media(max-width:1020px) {
    .subtitulo h2{
    font-size: 3rem;
}
}
@media(max-width:850px){
    .cximg img{
    width: 150px;
}
    .cximg .intel{
    width: 100px;
}
}
@media(max-width:650px){
    .cabecalho{
        flex-direction: column;
    }
    .subtitulo{
        width: 100%;
        height: fit-content;
        text-align: center;
    }
    .subtitulo h2{
        color: #14a238;
        font-size: 2rem;
        font-weight: 600;
}
    .cximg{
        width: 100%;
        height:100px;
        justify-content: center;
    }
    #containerImg{
        
    }
}
`