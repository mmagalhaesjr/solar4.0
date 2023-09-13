import styled from 'styled-components';

export const StyledMain = styled.main`
height: 100vh;
display: flex;
justify-content: center;

#container{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
}
img{
    width: 90%;
    height: 70%;
}
button{
    height:50px;
    width: 20%;
    border-radius: 15px;
    position: absolute;
    top: 200px;
    right: 200px;
    border: none;
    background-color:#095174;
    color: #ffffff;
    font-size: 25px;
    &:hover{
        background: rgb(9,81,1);
        transition:1s;
    }
}
`