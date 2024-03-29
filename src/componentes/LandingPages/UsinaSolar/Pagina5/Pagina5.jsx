import { StyledPagina5 } from "./styled";

import logo4 from '../../../../assets/logosIcones/logoB.png'
import logo5 from '../../../../assets/logosIcones/intel-solar.png'

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';




export default function Pagina5() {

    useEffect(() => {
        AOS.init();
    }, []);

    const scrollSimulador = () => {
        window.scrollTo({
            top: document.documentElement.scrollHeight, 
            behavior: "smooth"
        });
    };

    return (
        <StyledPagina5>
            <div id='container'>

                <div className='cxContainer'>
                    <div className='subtitulo'>
                        <h2>
                            Como montar uma
                            usina solar?
                        </h2>
                    </div>
                    <ul>
                        <li>
                            Encontrar uma empresa capacitada para
                            dimensionamento, construção e
                            gerenciamento de grandes projetos é um
                            excelente começo. Nós da <span>Solar 4.0 </span>
                            possuímos diferenciais que você pode
                            conhecer aqui.
                        </li>
                        <li>
                            <span>
                                Tem interesse em investir em uma usina
                                solar de investimento? Entre em contato
                                conosco e marque um horário para
                                conversar com um de nossos
                                técnicos!
                            </span>
                        </li>
                        {/* <li>
                            Para conferir mais benefícios da Energia
                            Solar e acompanhar mais conteúdos como
                            este, siga nossos perfis no <a href="http://www.instagram.com/solar4.0/"> Instagram</a> e
                             <a href="http://www.facebook.com/solar40mg?_rdc=1&_rdr"> Facebook</a>.
                        </li> */}
                    </ul>

                    <div id="botao" onClick={scrollSimulador}>
                        <p>
                            QUERO INVESTIR
                        </p>
                    </div>

                </div>
            </div>
            <div id='containerDireito' data-aos="fade-left" data-aos-duration="2000">

                <div className='cabecalho'>
                    <img className='logo1' src={logo4} alt="logo" />
                    <img className='logo2' src={logo5} alt="logo" />
                </div>

            </div>
        </StyledPagina5>
    )
}