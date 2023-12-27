import { StyledOrcamento } from "./styled";


import logo from "../../assets/logosIcones/logo.png"
import logo2 from "../../assets/logosIcones/intel-solar.png"
import casal from '../../assets/orcamento/casal2.jpg'


import Formulario from "../../componentes/Formulario/Formulario";
import RodapeLandingPages from "../../componentes/RodapeLandingPages/RodapeLandingPages";

export default function Orcamento() {
    return (
        <StyledOrcamento >

            <section id="container">
                <div className="cabecalho">
                    <img src={logo} alt="logo" />
                    <img className="intel" src={logo2} alt="logo" />
                </div>

                <div className="cx1">
                    <img src={casal} alt="foto" />
                </div>

                <div className="cxTexto">
                    <h1>Economize até 95% em sua conta de luz!</h1>

                    <h2>E ainda fique protegido dos aumentos de,<br />
                        energia elétrica por pelo menos 25 anos.</h2>
                </div>


                <Formulario/>
                <RodapeLandingPages/>

               
            </section>

        </StyledOrcamento >
    )
}
