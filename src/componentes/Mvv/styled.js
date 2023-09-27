import styled from 'styled-components';

export const StyledMvv = styled.section`
width: 100%;
height: 100vh;

/* scroll-snap-align: start;
position: sticky;
top: 0;
left: 0; */

/* border: solid 3px #00BF3E; */
background-color: #eceeee;
background-image:url('https://windmar.com/wp-content/uploads/2020/02/shutterstock_306298271-scaled.jpg') ;
background-size: cover;
background-repeat: no-repeat;


#container{
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}
.card{
  width: 25%;
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.5); 
  backdrop-filter: blur(10px); 
  box-shadow: 5px 5px 10px  rgba(0, 0, 0, 0.5);
  border-radius:10px ;
}
.texto{
  width: 80%;
  height: 11rem;
  font-size: 1.5rem;
  margin-top: 50px;
  display: flex;
  justify-content: center;

}
h1{
  font-size: 60px;
  font-weight: 700;
  color: #004000;
}
.card p{
  font-size: 80%;
}
@media (max-width:920px) {
  #container{
    flex-direction: column;
  }
  .card{
    width: 100%;
    height: 30vh;
  }
}

`