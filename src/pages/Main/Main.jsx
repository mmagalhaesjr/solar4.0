import { StyledMain } from "./styled";

import { BsWhatsapp } from 'react-icons/bs';
import intelb from '../../assets/logosIcones/intelb.png'


import Header from "../../componentes/Header/Header"
import Footer from "../../componentes/Footer/Footer";
import Depoimentos from "../../componentes/Depoimentos/Depoimentos";
import Parceiros from "../../componentes/Parceiros/Parceiros";

import Funcionamento from "../Funcionamento/Funcionamento";
import Beneficios from "../Beneficios/Beneficios";
import NossosProjetos from '../NossosProjetos/NossosProjetos';
import TelaInicial from "../../pages/TelaInicial/TelaInicial";
import QuemSomos from "../../pages/QuemSomos/QuemSomos";
import Mvv from "../../pages/Mvv/Mvv";
import Numeros from "../../pages/Numeros/Numeros";




export default function Main() {
    return (
        <StyledMain>

            <Header />

            <a href="https://api.whatsapp.com/send?phone=31997749508" target="_blank" rel="noreferrer"><BsWhatsapp id="whattsapp" /></a>
            <img id="intel" src={intelb} alt="" />
                
            <TelaInicial/>
    
            <QuemSomos />
            <Mvv/>
            <Funcionamento/>
            <Beneficios />
            <NossosProjetos/>
            
            <Numeros/>
            <Depoimentos/>

            <Parceiros/>
        
            <Footer/>
         

        </StyledMain>
    )
}