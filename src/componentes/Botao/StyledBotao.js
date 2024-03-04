import styled from "styled-components";

export const StyledBotao = styled.button`
    width: 50%;
    height: 100px;
    background: linear-gradient(0deg, rgba(79,211,135,1) 0%, rgba(5,157,55,1) 54%);
    border-radius: 50px;
    border: none;
    cursor: pointer;
    margin-bottom: 5%;

    display: flex;
    align-items: center;
    justify-content: center;
    &:hover{
        background: linear-gradient(0deg, rgba(16, 155, 74, 1) 0%, rgba(5, 125, 45, 1) 54%); 
    }
 h3{
    color: #ffffff;
    font-size: 2rem;
}
@media(max-width:500px){

    width: fit-content;
    height:fit-content;
    background: linear-gradient(0deg, rgba(79,211,135,1) 0%, rgba(5,157,55,1) 54%);
    border-radius: 50px;
    margin-bottom: 5%;

    display: flex;
    align-items: center;
    justify-content: center;

    &:hover{
        background: linear-gradient(0deg, rgba(16, 155, 74, 1) 0%, rgba(5, 125, 45, 1) 54%);
    }

    h3{
    color: #ffffff;
    font-size: .8rem;
    margin: 5%;
    font-weight: 600;
}

}
`