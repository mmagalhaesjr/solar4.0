import { StyledMain } from "./styled";

import { BsWhatsapp } from 'react-icons/bs';
import intelb from '../../assets/logosIcones/intelb.png'


import Header from "../../componentes/Header/Header"
import Footer from "../../componentes/Footer/Footer";

import Parceiros from "../../pages/Parceiros/Parceiros";

import Funcionamento from "../TelaCasinha/TelaCasinha";
import Beneficios from "../Beneficios/Beneficios";
import NossosProjetos from '../NossosProjetos/NossosProjetos';
import TelaInicial from "../../pages/TelaInicial/TelaInicial";
import QuemSomos from "../../pages/QuemSomos/QuemSomos";
import Mvv from "../MissaoVisaoValores/MissaoVisaoValores";
import Numeros from "../../pages/Numeros/Numeros";
import Depoimento from "../Depoimento/Depoimento";




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
            <Depoimento/>

            <Parceiros/>
        
            <Footer/>
         

        </StyledMain>
    )
}