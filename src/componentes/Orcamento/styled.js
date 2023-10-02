import styled from 'styled-components';


export const StyledOrcamento = styled.section`
width: 100%;
height: 70vh;

/* scroll-snap-align: start;
position: sticky;
top: 0;
left: 0; */

background-color: #eceeee;


/* border: solid 3px #00BF3E; */

display: flex;
flex-direction: column;
text-align: center;

#titulo{
  font-size: 50px;
  font-weight:700;
  margin-top: 80px;
}
h1{
  color:#000000 ;
}
h2{
  color:#00BF3E ;
}

#container{
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

form{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.cont{
margin-top: 60px;
width: 500px;
height: 300px;
display: flex;
flex-direction: column;
align-items: flex-start;
}

input{
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
        width: 200px;
        height: 40px;
        font-size: 15px;
        cursor: pointer;
        position:relative;
        left: 0px;
        top: -0px;
       
    &:hover{
        border: 2px solid #eae9e9;
        color:#398462;
        transition:0.7s;

    }
}







`