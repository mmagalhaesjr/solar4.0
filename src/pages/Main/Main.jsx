import { StyledMain } from "./styled";


import Header from "../../componentes/Header/Header"
import QuemSomos from "../../componentes/QuemSomos/QuemSomos";
import Beneficios from "../../componentes/Beneficios/Beneficios";
import Energiasolar from "../../componentes/EnergiaSolar/EnergiaSolar";
import TelaInicial from "../../componentes/TelaInicial/TelaInicial";
import NossosProjetos from '../../componentes/NossosProjetos/NossosProjetos';
import Footer from "../../componentes/Footer/Footer";
import Mvv from "../../componentes/Mvv/Mvv";
import Numeros from "../../componentes/Numeros/Numeros";
import Depoimentos from "../../componentes/Depoimentos/Depoimentos";






export default function Main() {
    return (
        <StyledMain>

            <Header />
                
            <TelaInicial/>
    
            <QuemSomos />
            <Mvv/>
            <Energiasolar />
            <Beneficios />
            <NossosProjetos/>
            <Numeros/>
            <Depoimentos/>
            <Footer/>
         

        </StyledMain>
    )
}