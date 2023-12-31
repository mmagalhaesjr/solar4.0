import { StyledMain } from "./styled";

import { BsWhatsapp } from 'react-icons/bs';
import intelb from '../../assets/logosIcones/verde.png'


import Header from "../../componentes/Header/Header"
import Footer from "../../componentes/Footer/Footer";

import Parceiros from "../../pages/Parceiros/Parceiros";

import Funcionamento from "../TelaCasinha/TelaCasinha";
import VantagensBeneficios from "../VantagensBeneficios/VantagensBeneficios"
import NossosProjetos from '../NossosProjetos/NossosProjetos';
import TelaInicial from "../../pages/TelaInicial/TelaInicial";
import QuemSomos from "../../pages/QuemSomos/QuemSomos";
import Mvv from "../MissaoVisaoValores/MissaoVisaoValores";
import Numeros from "../../pages/Numeros/Numeros";
import TelaDepoimento from "../TelaDepoimento/TelaDepoimento";
// import Orcamento from "../Orcamento/Orcamento";




export default function Main() {
    return (
        <StyledMain>

            {/* <Orcamento/> */}

            <Header />

            <div id="cxIcones">
                <a href="https://api.whatsapp.com/send?phone=31997749508" target="_blank" rel="noreferrer">
                    <BsWhatsapp id="whattsapp" /></a>
                    <img id="intel" src={intelb} alt="intel" />
            </div>


            <TelaInicial />
           
            <QuemSomos />
            <Mvv />
            <Funcionamento />
            <VantagensBeneficios />

            <Numeros />

            <NossosProjetos />

            
          
            <TelaDepoimento />

            <Parceiros />

            <Footer />


        </StyledMain>
    )
}