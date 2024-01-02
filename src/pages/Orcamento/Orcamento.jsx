import { StyledOrcamento } from "./styled";


// import logo from "../../assets/logosIcones/logo.png"
// import logo2 from "../../assets/logosIcones/intel-solar.png"
import orcamento from '../../assets/orcamento/orcamento.png'


import Formulario from "../../componentes/Formulario/Formulario";
import RodapeLandingPages from "../../componentes/RodapeLandingPages/RodapeLandingPages";
import Header2 from '../../componentes/Header2/Header2';

export default function Orcamento() {
    return (

        <>

            <Header2 />
            <StyledOrcamento >

                <section id="container">
                    <div className="cabecalho">
                        {/* <img src={logo} alt="logo" />
                        <img className="intel" src={logo2} alt="logo" /> */}
                    </div>

                    <div className="cx1">
                        <img src={orcamento} alt="foto" />
                    </div>

                    <div className="cxTexto">
                        <h1>Economize até 95% em sua conta de luz!</h1>

                        <h2>E ainda fique protegido dos aumentos de,
                            energia elétrica por pelo menos 25 anos.</h2>
                    </div>


                    <Formulario />
                    <RodapeLandingPages />


                </section>

            </StyledOrcamento >
        </>

    )
}
