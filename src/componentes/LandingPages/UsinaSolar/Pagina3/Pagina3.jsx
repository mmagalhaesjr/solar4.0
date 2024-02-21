import { StyledPagina3 } from "./styled";

import { BsCoin } from "react-icons/bs";
import logo4 from '../../../../assets/logosIcones/logoB.png'
import logo5 from '../../../../assets/logosIcones/intel-solar.png'

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';




export default function Pagina3() {

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <StyledPagina3>
            <div id="container">

                <div id='cabecalho'>
                    <div className='subtitulo'>
                        <h2>
                            Ganhar dinheiro com
                            energia solar
                        </h2>
                    </div>
                    <div className='cximg'>
                        <img src={logo4} alt="logo" />
                        <img className='intel' src={logo5} alt="logo" />
                    </div>
                </div>

                <div id="faixaBranca" data-aos="fade-right" data-aos-duration="2000">
                    <p>
                        Realizamos o planejamento e a construção da sua usina
                        com nossa equipe própria e especializada.
                    </p>

                    <div id="icone" data-aos="flip-up" data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000"><BsCoin /></div>
                </div>


                <ul>
                    <li>
                        Orçamos sem compromisso o projeto da sua usina em até 48
                        horas;
                    </li>
                    <li>
                        Realizamos o planejamento e a construção da sua usina;
                    </li>
                    <li>
                        Possuímos engenharia própria, facilitando todo o processo;
                    </li>
                    <li>
                        Equipamentos com garantia, assistencia técnica e pós-venda da Intelbras;
                    </li>
                </ul>


                <div className="texto3">
                    <h2>
                        Comece agora seu investimento
                    </h2>
                </div>

                <div className="faixaBranca2" data-aos="fade-right" data-aos-duration="2000">
                    <p>
                        Rendimentos mensais de 1,3% a 1,7% para o investidor.
                        O investimento é seu, portanto a usina é sua.
                    </p>
                </div>

                <div id="botao">
                    <p>
                        QUERO INVESTIR
                    </p>
                </div>

            </div>
        </StyledPagina3>
    )
}