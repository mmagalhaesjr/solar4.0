import styled from 'styled-components';

export const StyledForm = styled.main`

width: 50%;
height: 90vh;
background-color: #ffffff;
position: absolute;
border-radius: 10px;
z-index: 5;
margin-top: 20px;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;

#titulo{
    width: 50%;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    margin-top: 50px;
}
#titulo h1{
    font-size: 45px;
}
#titulo p{
    font-size: 16px; 
    margin-top: 30px;
}


form{
    width:60%; 
    height:60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
    margin-bottom: 20px; 
}


input{
    margin-bottom: 30px;
    color: #000000; 
   
}
.inputBox{
    position: relative;
    width: 80%;   
    color: #000000; 
}
.inputUser{
    background: none;
    border: none;
    border-bottom: 1px solid #000000; ;
    outline: none;
    font-size: 20px;
    width: 100%;
    letter-spacing: 2px;
}
.inputUser:focus ~ .labelInput,
.inputUser:valid ~ .labelInput{
    top: -20px;
    font-size: 12px;
    color: #7FCB27;
}

.labelInput{
    position: absolute;
    top: 0px;
    left: 0px;
    pointer-events: none;
    transition: .5s;
    
} 
#submit{
    background-color: #2A2A2A;
    border: none;
    padding: 15px;
    color: white;
    font-size: 15px;
    cursor: pointer;
    border-radius: 10px;
    width: 50%;
}
h2{
    margin-bottom: 30px;
    margin-top: 30px;
    font-size: 24px;
    text-align: left;
}
#checkboxContainer{
    display: flex;
    flex-direction: column;
    
    

}
.checkbox{
    display: flex;
    justify-content: center;
    gap: 10px;
    justify-content: left;
}
#checkmsg{
 margin-top:30px ;
}
button{
        background-color: #2A2A2A;
        color:#eae9e9;
        width: 200px;
        height: 90px;
        font-size: 24px;
        cursor: pointer;
        border-radius: 10px;
        position:relative;
        top:20px;
    &:hover{
        border: 2px solid #eae9e9;
        color: #7FCB27;
        transition:0.7s;

    }
}


`