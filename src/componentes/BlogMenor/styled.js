import styled from 'styled-components';

export const StyledBlog = styled.main`
width:45%;

margin-top: 2.5%;
margin-bottom: 2.5%;

display: flex;
align-items: center;
justify-content: center;
align-items: center;




.materia{
    width: 100%;
    max-width: 370px;
    height: 360px;
    background-color: #ffffff;
    color:#000000;
    border-radius:30px;

    display: flex;
    flex-direction: column;
    align-items: center;
    
    &:hover{
        background-color: #bfbfbf;
    }
}

.texto{
    width: 90%;
   
}
.materia h1{
    font-size: 1rem;
    text-align: center;
    margin-top: 5%;
    font-weight: 700; 
    
}
.materia p{
    font-size: .7rem;
    margin-top: 10%;
    margin-bottom: 10%;
    width: 90%;
}
.foto{
    width: 100%;
    height: 200px;
    border-radius:30px;
    overflow: hidden;
   
}
.foto img{
    width: 100%;
    height: 100%; 
}

@media(max-width:1300px) {
    #titulo{
        margin-top: 10%;
    }
    
}
@media(max-width:890px) {
    #titulo{
        margin-top: 20%;
    } 

    .materia{
    width: 100%;
    max-width: 300px;
    height: 360px;
    background-color: #ffffff;
    color:#000000;
    border-radius:30px;

    display: flex;
    align-items: center;
    
    &:hover{
        background-color: #bfbfbf;
    }
}
}
@media(max-width:600px) {
    width: 50%;
    .materia{
        width: 100%;
        max-width: 300px;
        height: 300px;
    }
    .foto{
    width: 100%;
    height: 40%;
    border-radius:30px;
    overflow: hidden;
    margin-top: 5%;
   
}
.foto img{
    width: 95%;
    height: 100%; 
    border-radius:30px;
}
}

`