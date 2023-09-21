import { StyledMain } from "./styled";


import Header from "../../componentes/Header/Header"
import QuemSomos from "../../componentes/QuemSomos/QuemSomos";
import Beneficios from "../../componentes/Beneficios/Beneficios";
import Energiasolar from "../../componentes/EnergiaSolar/EnergiaSolar";
import TelaInicial from "../../componentes/TelaInicial/TelaInicial";
import NossosProjetos from '../../componentes/NossosProjetos/NossosProjetos';
// import Footer from '../../componentes/Footer/Footer';




export default function Main() {
    return (
        <StyledMain>

            <Header />
                
            <TelaInicial/>
    
            <QuemSomos />
            <Energiasolar />
            <NossosProjetos/>
            <Beneficios />
            <NossosProjetos/>
           {/* <Footer/> */}

        </StyledMain>
    )
}