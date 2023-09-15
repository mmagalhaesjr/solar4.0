import styled from 'styled-components';

export const StyledHeader = styled.header`
background-color: #00BF3E;
background-color: transparent;
z-index: 5;

width: 100%;
height: 100px;
//box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

a img{
width: 200px;
height: 100px;
}

ul{
    margin-top: 70px;
    display: flex;
    gap: 70px; 
}
a{
    font-family: 'Barlow', sans-serif;
    color: #ffffff;
    font-weight:400;
    cursor: pointer;

    &:hover{
        text-decoration: underline #00BF3E;
        transition: .5s;
        
    }
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