import styled from 'styled-components';

export const StyledBlog = styled.main`
width:95%;
max-width:800px ;
height: 300px;

display: flex;
align-items: center;
justify-content: center;


.blog{
    width: 100%;
    height: 100%;
    background-color: #ffffff;
    color:#000000;
    border-radius:10px;

    display: flex;
    align-items: center;

    &:hover{
        background-color: #7fef88b5;
        color:#ffffff ;
    }
}
#foto{
    width: 60%;
    height: 100%;
    border-radius:10px;
    overflow: hidden;
}
#foto img{
    width: 100%;
    height: 100%; 
}

#texto{
    height: 100%;
    width: 40%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
}


 h1{
    width: 90%;
    text-align: left;
    font-size: 1rem;
    margin-top: 5%;
    font-weight: 700; 
}
 p{
    width: 90%;
    text-align: left;
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

.blog{
    width: 100%;
    height: 100%;
    background-color: #ffffff;
    color:#000000;
    border-radius:10px;

    display: flex;
    flex-direction: column;
    align-items: center;

    &:hover{
        background-color: #7fef88b5;
        color:#ffffff ;
    }
}

#foto{
    width: 100%;
    height: 70%;
    border-radius:10px;
    overflow: hidden;
   
#foto img{
    width: 100%;
    height: 100%; 
}
}

#texto{
    width: 95%;
    height:40%;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}


.blog h1{
    text-align: center;
    font-size: 1.1rem;
    font-weight: 700; 
    margin-top: 2%;
    margin-bottom: 2%;
}
.blog p{
    text-align: center;
    font-size: 1rem;
    width: 90%;
    margin-top: 0;
    margin-bottom: 2%;
}

}

`