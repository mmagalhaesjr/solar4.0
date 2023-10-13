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
background-image:url('/src/assets/fundo-baixo.jpeg') ;
background-image: url('https://lh3.googleusercontent.com/pw/ADCreHcruYkQ2VXIZT27dfy6SlQy76U9VW4FeL4d29TWklTfO8y04F5CA019vbpHzen0dRunh44LCIfZigEb7ouZegaGP4obBCJcgRIislbH5f2SOcivAW6uLDgnh6qoLz2TOAz9z60M7OZSVyi03z9gqV72RHdM7OG9QakspEItDr_0hHRr1GoiQ2W2iKROuBXcuD62QbhwuLqV-pkBA0acmEOB6kYSf_G24hWP-fU792GppQ0dUu5vkmZEaVoEDannkZJVxVxErYuU3DJ-SBB5cJQwUca9giChPFBAcw-Adfw_i6BuOM86-YXA2bGZ2ByGvfDrZJLN_6HkT6pjwAwv_nsa8-_ksLjHXv8k-4BNVPdfWFI1GgTKy_LhT7-QvOmz4UTgsNxApGuBypabNReMz9qTbipxFNukseTHi6a2OPa-4OOMAvdrTdUnpXABPO6hEn9PIbqrCjoCQX6CHafEFfGFxzA4ouOlaZ4suvjG75vk4qGLWvhla9Mpgv7SzebdA0nsAsSGhgV1NlWompv0MLvjJH-xQDL245nJ_2TeFjvOj0IAkjG8NSGnegM6aQLQFRwogJz3Yza9IH6JY9x5WCrpE8T5OYqWkmPq6-El29bBPgwIjFqdAiSJdav23t-Dp8NTUc0dLgT_z6KumJ--eEK7ovIWE0lzKnJuCwL-aV710iaaZHOeyrcqSeEEyu-7BZ1gIZ1EKvXkUSyW2CPAlrGicZR0qk8-aH0aeEVqNBkoeXqakD0WwU0KxUFGXgwPu7RpLSZpEvjeXRbzuiFfFQUHJPj8MaHfGw3CpuU_JELDIePj_3gson_WuFXGxjJHlmpWL3aYsTEkVmF2hvtvnlWA9m7WAbX01WiNCDI_FZpBjXMtal7JZGO4ATc74NLJyMqT9rlipp9AD6Zw5zAbHw=w1600-h900-s-no?authuser=0');
background-size: cover;
background-repeat: no-repeat;

display: flex;
flex-direction: column;
align-items: center;


#container{
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}
.card{
  position: relative;
  width: 25%;
  height: 55vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.537); 
  backdrop-filter: blur(10px); 
  box-shadow: 5px 5px 10px  rgba(0, 0, 0, 0.5);
  border-radius:10px ;
  top: 20px;
}
.texto{
  width: 80%;
  height: 11rem;
  font-size: 1.5rem;
  margin-top: 50px;
  display: flex;
  justify-content: center;
  text-align: center;
  line-height: 1.2; 

}
h1{
  font-size: 50px;
  font-weight: 700;
  color: #000000;
  font-family: 'Montserrat', sans-serif;
  position: relative;
  top: 100px;
  transition: 1s;
 
}
&.rolagem {
  h1{
    transform: translateY(-100px);
    z-index: 1;
    transition: 1s;
   }
  }


.card p{
  font-size: 80%;
  margin-top: -20px;
}

span{
  font-weight: 700;
}

#logo{
position: relative;
left: 500px;
width: 240px;
height: 80px;
margin-bottom: 70px;
}
&.rolagem {
  #logo{
    transform: translatex(-500px);
    z-index: 1;
    transition: 1s;
   }
  }

@media (max-width:1076px) {
  #container{
    justify-content: space-between;
  }
  .card{
    width: 90%;
  }
}

@media (max-width:920px) {
  #container{
    flex-direction: column;
    justify-content: center;
  }
  .card{
    width: 95%;
    height: 28vh;
  }

  img{
  display: none;
}
}

@media (max-width:450px) {
.card .texto p{
  font-size: 70%;
}
}

`
