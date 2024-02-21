import { StyledSobreEnergiaSolarP5 } from './styled';



// import logo4 from '../../../../assets/logosIcones/logo2.png'


import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';




export default function Pagina5() {

    useEffect(() => {
        AOS.init();
    }, []);
    return (

        <StyledSobreEnergiaSolarP5>

            <div id='container'>
               
               

                <section className='fundo' >

                    <section className='cxTexto' data-aos="fade-right" data-aos-duration="2000">

                        <div className='subtitulo'>
                            <h2>
                                A manutenção dos painéis
                                é complicada?
                            </h2>
                        </div>
                        <ul>
                            <li>
                                Na <span>Solar 4.0</span> oferecemos <span>serviços de Operação e
                                    Manutenção (O&M)</span>  de alta qualidade, buscando
                                a melhor performance para potencializar a
                                geração e aumentar o retorno sobre seu
                                investimento.
                            </li>
                            <li>
                                Nossos especialistas em <span> O&M </span> cuidam desde a
                                limpeza e inspeção dos painéis até o
                                monitoramento contínuo do desempenho,
                                independente do tamanho do sistema.
                            </li>
                        </ul>

                    </section>

                </section>

            </div>





        </StyledSobreEnergiaSolarP5>
    )
}