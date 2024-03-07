import { StyledOrcamento } from "./styled";



// import logo from "../../assets/logosIcones/logo.png"
// import logo2 from "../../assets/logosIcones/intel-solar.png"
import orcamento from '../../assets/orcamento/orcamento.png'


import Formulario from "../../componentes/Formulario/Formulario";
import RodapeLandingPages from "../../componentes/RodapeLandingPages/RodapeLandingPages";
import Header2 from '../../componentes/Header2/Header2';

import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Orcamento() {

    useEffect(() => {
        AOS.init();
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (

        <>

            <Header2 />
            <StyledOrcamento >

                <section id="container">
                    <div className="cabecalho">
                        {/* <img src={logo} alt="logo" />
                        <img className="intel" src={logo2} alt="logo" /> */}
                    </div>

                    <div className="cx1" data-aos="fade-right"
                        data-aos-easing="linear"
                        data-aos-duration="1500">
                            
                        <img src={orcamento} alt="foto" />
                    </div>

                    {/* <div className="cxTexto">
                        <h1>Economize até 95% em sua conta de luz!</h1>

                        <h2>E ainda fique protegido dos aumentos de
                            energia elétrica por pelo menos 25 anos.</h2>
                    </div> */}



                    <div className="cxVideo"
                        data-aos="fade-up"
                        data-aos-easing="linear"
                        data-aos-duration="1500"

                    >

                        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/r2h1ZIowJaw?si=0W9N4ql7oQ43mswk" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

                    </div>

                    <p id="text">
                        PREENCHA O FORMULÁRIO ABAIXO E RECEBA SEU PROJETO COM ORÇAMENTO
                    </p>
                    
                   


                    <Formulario />
                    <RodapeLandingPages />


                </section>

            </StyledOrcamento >
        </>

    )
}
