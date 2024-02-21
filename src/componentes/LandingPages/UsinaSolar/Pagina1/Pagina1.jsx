import { StyledPagina1 } from './styled';



import logo4 from '../../../../assets/logosIcones/logoB.png'
import logo5 from '../../../../assets/logosIcones/intel-solar.png'

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

            <div className='cabecalho'>
                    <img className='logo1' src={logo4} alt="logo" data-aos="fade-down" data-aos-duration="2000" />
                    <img className='logo2' src={logo5} alt="logo" data-aos="fade-down" data-aos-duration="2000"/>
                </div>

                <div className='cxContainer'>
                    <div className='subtitulo' data-aos="fade-up" data-aos-duration="2000">
                        <h2>
                            Uma usina solar é a
                            melhor escolha de
                            investimento!
                        </h2>
                    </div>
                    <ul>
                        <li>
                            São diversas vantagens e benefícios que
                            você pode ter, além de ser um investimento
                            seguro e lucrativo.
                        </li>
                    </ul>
                    <div id='botao'>
                        <p>
                            FAÇA UMA SIMULAÇÃO
                        </p>
                    </div>
                </div>
            </div>
            <div id='containerDireito' data-aos="fade-left" data-aos-duration="2000">
                
            </div>
            
        </StyledPagina1>
    )
}