import { StyledPagina1 } from './styled';

import logo1 from '../../../../assets/logosIcones/logoBranca.png'
import logo2 from '../../../../assets/logosIcones/intel-solar.png'

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';





export default function Pagina1() {

    useEffect(() => {
        AOS.init();
    }, []);
  
    return (
        <StyledPagina1>

            <div id='container'>

                <div className='txt'>
                    <h1 className='pagina1-titulo' >
                        Economize com Energia Solar!
                    </h1>

                    <h2>
                        A melhor escolha para se proteger
                        dos aumentos das contas de luz
                    </h2>
                </div>

                {/* <div className='pagina1-texto'>
                        <h2>
                            RECEBA SUA PROPOSTA
                        </h2>
                    </div> */}

                <div className='cabecalho'>
                    <img className='logo1' src={logo1} alt="logo" data-aos="zoom-in" data-aos-duration="2000"/>

                    <img className='logo2' src={logo2} alt="logo" data-aos="zoom-in" data-aos-duration="2000" />

                </div>


            </div>

        </StyledPagina1>
    )
}