import styled from 'styled-components';

export const StyledFooter = styled.footer`

background-color: #eceeee;
height: 50vh;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
color: #080808;

/* scroll-snap-align: start;
position: sticky;
top: 0;
left: 0; */


#container{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    
    bottom:0;
} 
    .container{
        
        height: 200px;
        border-radius: 15px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        border:solid 1px blue;
    }
    .contContatos{
        width: 400px;
        height: 100px;
        color: #080808;
        font-size: 30px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        cursor: pointer;  
}
.icones{
    display: flex;
    flex-direction: column;
    gap:10px;
    margin-top: 10px;
   

}
.icones div{
    display: flex;
    align-items: center;
    justify-content: center;
    
    
}

.containerRedesS{
        width: 400px;
        height: 100px;
        display: flex;
        color: #080808;
        font-size: 30px;
        justify-content: center;
        align-items: center;
        gap:30px;
        cursor: pointer;  
        margin-top: 0px;

        .contLogo{
        width: 100%;
        height: 700px;
        display: flex;
        font-size: 30px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap:30px;
        cursor: pointer;  

        margin-top: 0px;

        border: solid 2px black;
        }
}



ul li a{
    color: #080808;
cursor: pointer;
&:hover{
    color:#00BF3E; 
    transition:0.3s;
    }
}

ul{
justify-content:center;
text-align: center;
font-size: 15px; 
list-style: none;
}
 .ico{
    font-size: 50px;
 }
h3{
margin-top: -20px;
font-size: 30px;
color: #080808;
}

p{
font-size: 16px;
}
.contContatos{

}
#endereco{
gap:3px;
text-align: center;
align-items: flex-start;
flex-direction: column;
font-size: 15px;
height: 100%;


}

.icones{
    margin-left: 80px;
}

.tituloContato{
    margin-top: 19px;
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
    top: -20px;
}


#endereco li a #endereco{
    &:hover{
    color:#00BF3E; 
    transition:0.3s;
    }
}
@media (max-width:1251px) {
    #container{
        border: solid 1px red;
    }
}
@media (max-width:1064px) {
    #container{
        
        overflow: hidden;
        background-color: #00BF3E;
    }
    .contLogo{
        
    }
    .container .logo img{
        width: 180px;
        height: 50px;
    }

}
@media(max-width:940px){
    height:1000px;  

    #container{
        flex-direction:column;
    }
    .container .logo img{
        width: 250px;
        height: 70px;
    }
}
@media (max-width:800px) {
    #container{
        gap:50px;
    }
    h6{
        top: -40px;
    }
}
`