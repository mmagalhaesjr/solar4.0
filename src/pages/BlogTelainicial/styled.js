import styled from 'styled-components';


export const StyledBlogPagina = styled.main`
width: 100%;

display: flex;
align-items: center;
text-align: center;
flex-direction: column;

background-color:#0b9306;

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

#titulo{
margin-top: 7%;
width: 90%;
}
#titulo h1{
font-size: 2rem;
font-weight: 700;
color: #ffffff;

}

#container{
    margin-top: 5%;
    margin-bottom: 5%;
    width: 98%;
    
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    flex-wrap: wrap; 
    gap: 5%; 
}

.cx1{
    width: 90%;
    max-width: 800px;
    height: 350px;

    display: flex;
    align-items: center;
    justify-content:center;
    
   
}
.cx2{
    width: 100%;
   
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 3%;
}


@media(max-width:600px) {
    #container{
        width: 98%;
    }
    #titulo{
        margin-top: 15%;
        margin-bottom: 5%;
    }
   
    .cx1{
        width: 90%;
        height: fit-content;

        display: flex;
        align-items: center;
        justify-content:center;
        margin-bottom: 5%;
}
    .cx2{
        width: 100%;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        align-items: center;
        justify-content:space-between;
        gap: 0;
}
    .cx1{
        width: 100%;
    }
}



`