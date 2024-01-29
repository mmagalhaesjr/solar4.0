import styled from 'styled-components';


export const StyledBlog = styled.main`
width: fit-content;
margin-top: 1.5%;
margin-bottom: 1.5%;

display: flex;
align-items: center;
justify-content: center;
align-items: center;



.blog{
    width: 300px;
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

.texto{
    width: 90%;
   
}
.blog h1{
    font-size: 1rem;
    text-align: center;
    margin-top: 5%;
    font-weight: 700; 
    
}
.blog p{
    font-size: .7rem;
    margin-top: 10%;
    margin-bottom: 10%;
    width: 90%;
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

    .blog{
    width: 100%;
    width: 300px;
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
    width: 100%;
    
.blog{
   width: 100%;
   height: 100px;
   background-color: #ffffff;
   color:#000000;
   border-radius:10px;

   display: flex;
   flex-direction: row;
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
.blog h1{
    width: 90%;
    font-size: .9rem;
    text-align: left;
    margin-top: 5%;
    font-weight: 600; 
    
}
.blog p{
   display: none;
}
.foto{
    width: 40%;
    height:100%;
    border-radius:10px;
    overflow: hidden;
   
}
.foto img{
    width: 100%;
    height: 100%; 
}
}

`