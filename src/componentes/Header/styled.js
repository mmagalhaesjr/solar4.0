import styled from 'styled-components';

export const StyledHeader = styled.header`
background-color: #00BF3E;
width: 100%;
height: 150px;
box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);


a img{
width: 300px;
height: 150px;
}

ul{
    margin-top: 100px;
    display: flex;
    gap: 70px; 
}
a{
    color: #ffffff;
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