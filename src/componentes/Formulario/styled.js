import styled from "styled-components";

export const StyledFormulario = styled.section`
width: 100%;

display: flex;
align-items: center;
justify-content: center;

.cxForm{
  width: 90%;
  margin-top: 5%;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
}

.iconesLatetral{
  display: flex;
  flex-direction: column;
  justify-content:center;
  gap:4rem;
  margin-top: -5%;

}
.iconesLatetral img{
 width:8rem;
 height: 7.5rem;
}
form{
    width:90%; 
    /* max-width: 700px; */
  
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap:10px;
    align-items: center;
    color:#101010 ;

    /* -webkit-backdrop-filter: blur(10px);
    -webkit-background-color: rgba(18, 18, 18, 0.458);
    backdrop-filter: blur(10px);
    background-color: rgba(12, 12, 12, 0.333);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);  */

}

.inputBox{
width: 98%;
height: fit-content;

display: flex;
align-items: center;
justify-content: center;
}
.cxInput{
    position: relative;
    width: 100%;
    height: fit-content;
    align-items: center;
    border: solid 5px transparent; 
}
input{
  width: 100%;
  height: 40px;
  
  border: none;
  margin-top: 20px;
  padding: 1%;
  outline: none;
}
.labelImput{
    color: #ffffff;
    position: absolute;
    top: 0px;
    left: 0px;
    pointer-events: none; 
  
} 
.texto{
    width: 100%;
    height: 100px;
    color: #101010;
    font-size: 15px;
    letter-spacing: 2px;
    border-radius: 5px;
    margin-top: 20px;
    border:none;
    outline: none;
    padding: 1%;
}
button{
  width:150px;
  height: 50px;
  border-radius: 200px;
  border: none;

  margin-top:50px;
  margin-bottom: 20px;

  display: flex;
  align-items: center;
  justify-content: space-evenly;
  color:#14a238;
  font-size: 1.2rem;
  cursor: pointer;
}
button:hover{
  background-color: #14a238;
  color: #ffffff;
}
select{
  width: 100%;
  height: 40px;
  border-radius: 10px;
  border: none;
  margin-top: 20px;
 padding: 1%;
  outline: none;
}
@media(max-width:1020px) {
  .iconesLatetral{
    display: none;
  }
}

@media(max-width:760px) {
  .cxForm{
    width: 100%;
  }
  form{
    width: 100%;
  }
}
@media(max-width:610px) {
  .labelImput{
    font-size: .7rem;
    top: -10px;

  }

}


`