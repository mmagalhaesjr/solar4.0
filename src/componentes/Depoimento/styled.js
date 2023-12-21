import styled from 'styled-components';

export const StyledDepoimento = styled.section`

.box-depoimento{
    width: 400px;
    height: 350px;
    background-color:#c1baba47 ;
    backdrop-filter: blur(10px);
    opacity: 0.9;
    border: solid 10px #eceeee ;
    
   
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2%;
}
.cx-img{
    width: 90%;
    margin-top: 2%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.cx-img h3{
    margin-top: 1%;
}
.pessoas{
    width:70px;
    height: 70px;
    border-radius: 50%;

    background-color: #eceeee;
}
h3{
    font-size: 1rem;
    font-weight: 700;
   
}
.estrelas{
    width: 90%;
  
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2%;
    background-color: transparent;
}
.estrelas img{
width: 100px;
height: 20px;
}
.texto{
    width: 90%;
    height: 90%;
    margin-top: 3%;
    
   
    display: flex;
    flex-direction: column;
    align-items: center;
}

@media(max-width:500px){
    .box-depoimento{
    width:80%;
    height: 350px;
    background-color:#c1baba47 ;
    backdrop-filter: blur(10px);
    opacity: 0.9;
    border: solid 10px #eceeee ;
   

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2%;
}
}

`

