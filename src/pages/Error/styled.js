import styled from 'styled-components';


export const StyledErro = styled.div`
width: 100%;
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;


div{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 80%;
}
h1{
    font-weight: 600;
}
a{
    color:#000000 ;
    text-align: center;
    cursor: pointer;
    width: 100px;
    margin-top: 3%;
    border: solid 1px #000000;
}
a:hover{
    background-color: #17e109;
    color: #ffffff;
}
img{
    width:200px;
    margin-bottom: 3%;
}
`