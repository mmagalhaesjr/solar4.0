import styled from 'styled-components';

export const StyledtextoInicial = styled.div `

width: 100%;
height: 100vh;
display: flex;
flex-direction: column;

/* scroll-snap-align: start;
position: sticky;
top: 0;
left: 0; */

background-image: url(src/assets/fundo.jpg);
/* background-image: url('https://lh3.googleusercontent.com/pw/ADCreHfg0XQpvpxzw5lFz3Ki3C0RmqTAQ5E6Gzd0KtDLr0JmKedakmgrqUv45Q7JSe3LPo60SG3jqDLa8qxt3jIE6LQ8c8BQFlmurS_URBvKyWyuBUSf1aqY4DN2FOWwwKUgzoerWAfmKHUm0A7_KMJpvF41OodaAevXnh4ChFw5WKWMWRzO2DrVFWgqUktQ1r2nbjCtYM4IGvLTilBsEngeVo3FFyZtOLMfY5400Mkp4usuVM1mDFV97zjwah8yqUt2vrzZB64m2CC-Xo77iZIhpm61gmqkcpI22qln8GmkF8L4G0bjCbukKLu_aDdJh_2NghOYxK2cyu8t7hz3P9ONkcYjzeNNhNqKXjg2ZUnCQti_8IaKPoEhuEvWGXUbZiXPLiqFlABOQRVev0kFntAWQTz2TOh5vXTssrcwMLIA1kDFLIwvjWoxeRvOWiq0z9dI1pulYejLHWftesrm4iUipPaMsZxcIEdfICQmMY3uYiKYDFznX0_wrHyDoP2R7OlXz1ple7V9BdI5OvzOSw9JsxbFMjv3A42jsR2oumguK0MY9OdLfElFrnXV4_eWXVYNrEDgWyAOES5hBc1Cooi8CHLRTzSSpOqWYA_ga0RPrWRRJ0twmyGKz6U0UnRxYzzg6HQ4LueUwQSXiL9Uwo03MdJmplwEUg9lr5vNGv4DozNRPw2Mnn1Gj5n9_4LfumI8JOZaowpi2f1TIp88Sb6pG209AUVOoVRQ4d7Dar4P8-8nlLvp9czO9at6k6xwoBb4tovXUGmyHe7tBtIwQxa10zDDyOWP9mecXVrgTpLpAItCwkmY5Q5IsoHqi-pmWsD3LClkzE41UFStMtyNj2tTU53904qKXLqCQ8eSyt3ov5THa3m--HmcHKQtO0LBh6K6qtYruTlz3RUwI57Gy736Rg=w1600-h900-s-no?authuser=0'); */
background-repeat: no-repeat;
background-size: cover;


#imgInicial{
    position: relative;
    width: 100%;
    height: 100vh;
    z-index: 0;
  }

  #container{
    width: 100%;
    height: 100vh;
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;

    /* border: solid 3px red; */
  }
#texto{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  width: 100%;
  height: 50%;
  font-size: 40px;
  font-weight:700;
 
  margin-top: 210px;

  

  /* border: solid 3px blue; */
}
#texto h1 {
  line-height: 1.5; 
  color: #ffffff;
}
span{
  font-size: 50px;
}

button{
  width: 300px;
  height: 50px;
  border-radius: 20px;
  border: none;
  background-color:#00a335;
  color: #ffffff;
  font-weight:700;
  font-size: 17px;
  margin-top: 50px;
  cursor: pointer;
  font-family: 'Montserrat', sans-serif;
  
  &:hover{
     background-color: #00BF3E;
  }
}

@media(max-width:934px) {
  height: 70vh;
}

`