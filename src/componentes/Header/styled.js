import styled from 'styled-components';

export const StyledHeader = styled.header`
background-color: #00BF3E;
background-color:#7FCB27;
width: 100%;
height: 150px;
//box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);


a img{
width: 300px;
height: 150px;
}

ul{
    margin-top: 70px;
    display: flex;
    gap: 70px; 
}
a{
    color: #ffffff;
    font-weight:700;
    cursor: pointer;
}

nav{
    display: flex;
    justify-content: space-around;
}

@media(max-width:999px) {
    ul{
        display: none;
    }
}


`