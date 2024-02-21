import { StyledPagina5 } from "./styled";

import logo4 from '../../../../assets/logosIcones/logoBranca.png'
import logo5 from '../../../../assets/logosIcones/intel-solar.png'

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Pagina5() {

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <StyledPagina5>

            <div id="container">

                <div className='cabecalho'>
                    <div className='subtitulo'>
                        <h2>
                            Depoimentos
                        </h2>
                    </div>
                    <div className='cximg'>
                        <img src={logo4} alt="logo" />
                        <img className='intel' src={logo5} alt="logo" />
                    </div>
                </div>
                <div className="container">
                    <div className="cxDepoimento" >

                        <div className="cadaDepoimento" data-aos="fade-down-left" data-aos-duration="2000" >
                            <img src="https://lh3.googleusercontent.com/a-/ALV-UjWrkz6qFVcGcXtTfgix5897w7tZ5XYOcfq6LMWT7sti8Mk=w75-h75-p-rp-mo-br100" alt="foto" />
                            <div className="texto">
                                <h3>
                                    CLESIO DOMICIANO
                                </h3>
                                <p>
                                    &#34;
                                    Excelente experiência com a
                                    Solar 4.0. Atendimento com
                                    muita competência, domínio
                                    técnico, funcionários treinados,
                                    capacitados e ótima conduta...
                                    &#34;
                                </p>
                            </div>
                        </div>

                    </div>
                    <div className="cxDepoimento" >
                        <div className="cadaDepoimento" data-aos="fade-down-right" data-aos-duration="2000">
                            <img src="https://lh3.googleusercontent.com/a-/ALV-UjUfriJpzQ25yRrTF97oRYNQgCTS2mG8FJ-CnxEQxUsjYwo=w75-h75-p-rp-mo-br100" alt="foto" />
                            <div className="texto">
                                <h3>
                                    DENISE AGLIO
                                </h3>
                                <p>
                                    &#34;
                                    A empresa solar4.0 cumpriu com todos os requisitos que foram prometidos;
                                    a equipe técnica muito responsável e eficiente; o sistema implantado para geração de energia fotovoltaica
                                    vem correspondendo  ao que esperávamos com resultados surpreendentes...
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="cxDepoimento" >
                        <div className="cadaDepoimento" data-aos="fade-down-left" data-aos-duration="2000">
                            <img src="https://lh3.googleusercontent.com/a-/ALV-UjVH1iipJlA6bYmMB-0RwjWD3K6HxhcF9yPXv-5aERimn2Q=w75-h75-p-rp-mo-br100" alt="foto" />
                            <div className="texto">
                                <h3>
                                    Heloiza Cançado
                                </h3>
                                <p>
                                    &#34;
                                    Excelente. Material de primeira
                                    qualidade e cumprindo o seu
                                    papel. Foi investimento
                                    excelente, pois o retorno e certo!
                                    &#34;
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="cxDepoimento" >
                        <div className="cadaDepoimento" data-aos="fade-down-right" data-aos-duration="2000">
                            <img src="https://lh3.googleusercontent.com/a-/ALV-UjWBykHkhKHVMVVHpxLJw2hW_ApQtvYtMMLtDwaKZmgrg1Ds=w75-h75-p-rp-mo-br100" alt="foto" />
                            <div className="texto">
                                <h3>
                                    ZILMA REIS
                                </h3>
                                <p>
                                    &#34;
                                    ...Já estou com a conta mínima
                                    em duas residências. O
                                    atendimento da Solar 4.0 foi
                                    eficiente, com gentileza e sem
                                    atrasos, seja na venda e também
                                    no pós-venda.
                                    &#34;
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </StyledPagina5>
    )
}