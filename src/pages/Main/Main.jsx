import { StyledMain } from "./styled";

import { BsWhatsapp } from 'react-icons/bs';


import Header from "../../componentes/Header/Header"
import QuemSomos from "../../componentes/QuemSomos/QuemSomos";
import Beneficios from "../../componentes/Beneficios/Beneficios";
import TelaInicial from "../../componentes/TelaInicial/TelaInicial";
import NossosProjetos from '../../componentes/NossosProjetos/NossosProjetos';
import Footer from "../../componentes/Footer/Footer";
import Mvv from "../../componentes/Mvv/Mvv";
import Numeros from "../../componentes/Numeros/Numeros";
import Depoimentos from "../../componentes/Depoimentos/Depoimentos";
import Funcionamento from "../../componentes/Funcionamento/Funcionamento";
import Parceiros from "../../componentes/Parceiros/Parceiros";









export default function Main() {
    return (
        <StyledMain>

            <Header />

            <a href="https://api.whatsapp.com/send?phone=31997749508" target="_blank" rel="noreferrer"><BsWhatsapp id="whattsapp" /></a>
                
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