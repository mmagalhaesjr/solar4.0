import styled from 'styled-components';



export const StyledOrcamento = styled.section`
width: 100%;
height: 100vh;

/* scroll-snap-align: start;
position: sticky;
top: 0;
left: 0; */

background-color: #eceeee;


/* border: solid 3px #00BF3E; */

display: flex;
flex-direction: column;
text-align: center;

#titulo {
    font-size: 40px;
    font-weight: 700;
    margin-top: 100px;
  }

  h1 {
    color: #000000;
    font-family: 'Montserrat', sans-serif;
  }
h2{
  color:#00BF3E ;
}

#container{
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  
  align-items: center;
}

form{
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
}

section{
  display: flex;
align-items: center;
justify-content: center;
gap: 30px;
}

.cont{
margin-top: 60px;
width: 500px;
display: flex;
flex-direction: column;
align-items: flex-start;
}



input{
  border-radius: 10px;
  margin-bottom: 30px;
}

.inputBox{
    position: relative;
    width: 100%;
    color:#7a7979 ;   
}
.inputUser{
    background: none;
    border: none;
    border: 1px solid #000000;
    outline: none;
    color: #00BF3E;
    font-size: 20px;
    width: 100%;
    height: 40px;
    letter-spacing: 2px; 
}
.inputUser:focus ~ .labelInput,
.inputUser:valid ~ .labelInput{
    top: -40px;
    font-size: 12px;
    color: #00BF3E;
}
.labelInput{
    position: absolute;
    top: 0px;
    left: 10px;
    margin-top: 20px;
    pointer-events: none;
    transition: .5s;
} 


button{
        background-color: #00BF3E;
        outline: none;
        border: none;
        color:#eae9e9;
        border-radius: 10px;
        width: 200px;
        height: 40px;
        font-size: 15px;
        cursor: pointer;
        position:relative;
       
        top: -0px;
       
    &:hover{
        border: 2px solid #eae9e9;
        color:#398462;
        transition:0.7s;

    }
}


@media(max-width:900px) {
  form{
    width: 80%;
    margin-top: 100px;
   
  }
  section{
    
    flex-direction: column;
    width: 100%;
  }
  .cont{
    width: 100%;
    align-items: center;
    margin-top: -30px;

  }
  input{
    width: 100%;
  }
  button{
    left: 0;
  }
}




`