import styled from 'styled-components';

export const StyledResidencial = styled.section`
width: 100%;
height: 300vh;
background-color: #eceeee; 
display: flex;
flex-direction: column;
text-align: center;

font-family: 'Montserrat', sans-serif;

#container{
  background-image: url('src/assets/residenciais.png');
  background-image: url('https://lh3.googleusercontent.com/pw/ADCreHcqFFPXmE_0MsaIOkYRlS-DVfAw_4JK8dGnqREke8aX3wHDGtbsYI3Q7Vd8jDXfP1s3-cuUTGDjbYLTFuoC7gGAjQ7maI03x-37bE_5hP6-B8eqyDraYoBmsbtDRSotiiradYkscx74GOluiA3vNAYJZ2Q_ExD2s5ysgyLlVivaGKX-IafF_qDLl0KOzrDofeejBoig-zevcehChTateQxVtf25izzhBvAiyxDdcx9qtivEFEzjwHAmU_JeCf2w80ABPEkC6NWUfN2RnW1G6EK7Qm0UBR29xZuN-yDz-kj2uIF-QcQZBB27BAtEoOT52i2UB8zdfhV45Fkl72hpxHecZJbJej3dTuHrwWfimuADrDZJxO22_DtFls7Yz22p85g8colAQ_l1p9z8k-1ZHShA52NbqklDlqAOx9i7ZIrCLC4q6KCD9bU1IvxOWdPlbKroDOE-JD0jZbqO-N3oBVS_AHXReUjHKvchg29AnGHKrPLnfTmxMlWFSdgBmGbYikcbyezPKzuExbfCIEqWCVUzfoq0GyjcG4K5PBLh9zkfyMMIIdfN_E-ZZ6_zMPRdbrGdWbHgm84n4j1408PXAPg4UHg-iTFqTFAzFdeUjWIsCLbgkCiElQPK8hATyU8USOrHsBs-gu05B1d_9IGN8HzXeQeDIEFu8ex8li5AlmCQAv_vuBGN6qkURZHI2snQWTvnQM6wqtbBT6akbezasjxKPG69aysaY_wyL8TqusKXyQIrRIFfn1hawtaSRZdl_DvP8pSFeG_shJw-5o6lDLNQziJJ96ksnChw8ZJIXygzLPN9VuKREnfwyyZWcjIb1I2iTBa4_WQgaEK-qYEApzNQncJ6pfjYQYVas4bF33xmarSpUtFLbt7NgA7KZ8GD_lZNyb8WH3--snL_HVM98Q=s250-k-rw-no');
  background-size:100%;
  background-repeat: no-repeat;
  width: 100%;
  height: 65vh;
  overflow:hidden ;
}

#titulo{
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: flex-start;

position: relative;
top: 50px;
left: 100px;


}

#titulo span h1{
  color:#ffffff;
}
h1{
  font-weight: 700;
  font-size:6rem;
  color:#00BF3E ;
}

#texto{
  width: 50%;
  position: relative;
  top: 100px;
  left: 40%;

  
}
#texto p{
  font-size: 1.7rem;
  color: #ffffff;
  font-weight: 400;
}
#texto p span{
  font-weight: 700;
}

@media(max-width:950px) {
  h1{
    font-size: 4rem;
  }
  #texto p{
    font-size: 1rem;
  }
}
@media(max-width:650px) {
#container{
  display: flex;
  flex-direction: column;
  align-items: center;
  
}

#titulo{
  top: 0;
  left: 0;
}
#texto{
  left: 0;
  top: 20px;
  width: 80%;
}
}
@media(max-width:500px) {
  #titulo{
  top: 10px;
  
}
#texto{
 
  top: 40px;
  
}
  #titulo h1{
 font-size: 3rem;
}
#texto p{
  font-size: .7rem;
}
}


// containerIcones ------------------------------
#containerIcones{
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content:center;
  gap: 70px;
  align-items: center;
  flex-wrap: wrap;
  position: relative;
}
#box{
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* border: solid 2px red; */

}
.box{
width: 450px;
height: 200px;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;

/* border: solid 1px blue; */

}
.box img{
  width: 50px;
  height: 50px;
}
.tituloBox{
font-weight: 700;
font-size: 20px;
margin-top: 5px;

}
.textoBox{
  margin-top: 20px;
}
@media(max-width:900px) {
  #box{
    flex-direction: column;
    align-items: center;
  }
  .box1{
    margin-top: -100px;
  }
  .box2{

  }
}
@media(max-width:800px) {
  
  .box1{
    margin-top: -200px;
  }
  .box2{

  }
}
@media(max-width:700px) {
 
  .box1{
    margin-top: -250px;
  }
  .box2{

  }
}
@media(max-width:600px) {
 
 .box1{
   margin-top: -300px;
 }
 .box2{

 }
}
@media(max-width:500px) {
 
 .box1{
   margin-top: -350px;
 }
 .box2{

 }
}
@media(max-width:460px) {
  .box{
    width: 90%;
  }
}

// containerFotos ------------------------------

#containerFotos{
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

#foto1{
width: 40%;
}
#foto2{
  width: 30%;
}
#foto3{
  width: 30%;
}
.fotos{
  height: 100%;
  display: flex;
  gap: 10px;
  flex-direction: column;
}
.fotos img{
  width: 100%;
  height: 100%;
}

@media (max-width:1000px) {
  height: 240vh;
}

@media (max-width:970px) {
  #containerFotos{
    position: relative;
    top: 400px;
  }
}
@media (max-width:800px) {
  #containerFotos{
    position: relative;
    top: 100px;
  }
}

`