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
    width: 95%;


    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap; 
    gap: 5%; 


}
.cxBlogs{
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
}
.cx1blog{
    width: 90%;
    max-width: 800px;

    display: flex;
    align-items: center;
    justify-content:center;
}
.cx2blogs{
    width: 100%;
    
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content:space-evenly;
    gap: 1%;

    border: solid 2px red;
}
.cx3blogs{
    width: 90%;
    max-width: 800px;

    display: flex;
    justify-content:center;
    align-items: center;
    gap: 3%;
    border: solid 2px blue;
}

@media(max-width:600px) {
    .cxBlogs{
        max-width: none;
        width: 100%;
    }
    .cx2blogs{
        width: 100%;
    }
    .cx1blog{
        width: 100%;
    }
}

@media(max-width:500px) {
    #titulo{
        margin-top: 20%;
    }
   
}

`