import { StyledMain } from "./styled";


import Header from "../../componentes/Header/Header"
import QuemSomos from "../../componentes/QuemSomos/QuemSomos";
import Beneficios from "../../componentes/Beneficios/Beneficios";
import Energiasolar from "../../componentes/EnergiaSolar/EnergiaSolar";
import TelaInicial from "../../componentes/TelaInicial/TelaInicial";




export default function Main() {
    return (
        <StyledMain>

            <Header />
                
            <TelaInicial/>
            
            <QuemSomos />
            <Energiasolar />
            <Beneficios />

        </StyledMain>
    )
}