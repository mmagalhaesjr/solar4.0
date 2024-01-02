import styled from 'styled-components';

export const StyledBlog = styled.main`
width:95%;
max-width:800px ;
height: 300px;

display: flex;
align-items: center;
justify-content: center;


.materia{
    width: 100%;
    height: 100%;
    background-color: #ffffff;
    color:#000000;
    border-radius:50px;

    display: flex;
    align-items: center;
    
    &:hover{
        background-color: #bfbfbf;
    }
}
#texto{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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
    height: 300px;
    border-radius:50px;
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
@media(max-width:800px) {
    #titulo{
        margin-top: 20%;
    }
    .foto{
    width: 50%;
    }
    #texto{
        width: 50%;
    }
    
}
@media(max-width:600px) {
//tudo
width: 100%;
.materia{
    width: 100%;
    height: 90%;
}
.foto{
    width: 100%;
    height: 80%;
    border-radius:50px;
    overflow: hidden;
}
.foto img{
    width: 100%;
    height: 100%; 
}
}

`