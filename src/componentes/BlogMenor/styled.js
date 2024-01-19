import styled from 'styled-components';


export const StyledBlog = styled.main`

width: fit-content;
margin-top: 2.5%;
margin-bottom: 2.5%;

display: flex;
align-items: center;
justify-content: center;
align-items: center;



.materia{
   
    max-width: 300px;
    height: 360px;
    background-color: #ffffff;
    color:#000000;
    border-radius:30px;

    display: flex;
    flex-direction: column;
    align-items: center;
    
    &:hover{
        background-color: #7fef88b5;
        color:#ffffff ;
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
   width: 150px;
   height: 230px;
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
    display: flex;
    align-items: center;
    justify-content: center;
   
}
.materia h1{
    font-size: .8rem;
    text-align: center;
    margin-top: 5%;
    font-weight: 700; 
    
}
.materia p{
   display: none;
}
.foto{
    width: 100%;
    height:150px;
    border-radius:30px;
    overflow: hidden;
   
}
.foto img{
    width: 100%;
    height: 100%; 
}
}

`