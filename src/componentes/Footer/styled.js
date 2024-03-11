import styled from 'styled-components';




export const StyledFooter = styled.footer`

background-color: #095074de;


display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
color: #ffffff;



#container{
    width: 95%;
    height: 100%;
    bottom:0;

    display: flex;
    justify-content: space-between;
    align-items: center;
} 
.caixa{
    width: fit-content;
    height: 200px;
    border-radius: 15px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.contContatos{
    width: fit-content;
    height: 100px;
    font-size: 30px;
    cursor: pointer; 

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;  
}
.contRedes{
    width: fit-content;
    height: 100px;
    font-size: 30px;
    cursor: pointer; 

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;    
}
.cxIcones{ 
    width:100%;

    display: flex;
    align-items: center;
    justify-content: left;
   
    font-size: 1rem;
}
.ico{
    color:#ffffff;
    &:hover{
        color: #1fc00ade;
    }
}


.cxLogo{
    width: 100%;
    font-size: 30px;
    cursor: pointer;  
    margin-top: 0px;

    display: flex;
    justify-content: center;
    align-items: center;    
}



 .ico{
    font-size: 50px;
 }
h3{
    margin-top: -20px;
    font-size: 30px;
}
p{
    font-size: 16px;
}

img{
    width: 250px;
    height: 70px;
    background:none;
}
h6{
    width: 80%;
    text-align:center;
    position: relative;
    margin-bottom: 3%;
    margin-top: 5%;
}

@media (max-width:1064px) {
    #container{
    width: 95%;
    height: 100%;
    bottom:0;

    display: flex;
    justify-content: space-between;
    align-items: center;
} 
    .caixa .logo img{
        width: 180px;
        height: 50px;
    }
}
@media(max-width:940px){
    #container{
    width: 95%;
    height: 100%;
    bottom:0;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
} 
    .caixa{
        margin-top: 5%;
        height: fit-content;
    }
    h3{
    margin-top:0px;
    font-size: 30px;
}
    .caixa .logo img{
        width: 250px;
        height: 70px;
    }
}
@media(max-width:500px){
    #container{
    width: 95%;
    height: 100%;
    bottom:0;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
} 
    .caixa{
        margin-top: 5%;
        height: fit-content;
        
    }
}

`