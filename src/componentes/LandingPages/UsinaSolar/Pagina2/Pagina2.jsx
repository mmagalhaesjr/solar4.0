import { StyledPagina2 } from './styled';


import logo4 from '../../../../assets/logosIcones/logo2.png'
import logo5 from '../../../../assets/logosIcones/verde.png'

import ico1 from '../../../../assets/landingPage/usinaSolar/ico1.webp'
import ico2 from '../../../../assets/landingPage/usinaSolar/ico2.webp'
import ico3 from '../../../../assets/landingPage/usinaSolar/ico3.webp'
import ico4 from '../../../../assets/landingPage/usinaSolar/ico4.webp'
import ico5 from '../../../../assets/landingPage/usinaSolar/ico5.webp'
import ico6 from '../../../../assets/landingPage/usinaSolar/ico6.webp'
import gota from '../../../../assets/logosIcones/cor.png'



import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';



export default function SobreEnergiaSolar() {

    useEffect(() => {
        AOS.init();
    }, []);

    return (

        <StyledPagina2>
            <section id='container'>

                <div className='cximg2'>
                    <img src={logo4} alt="logo" />
                    <img className='intel' src={logo5} alt="logo" />
                </div>


                <div className='cabecalho'>
                    <div className='subtitulo'>
                        <h2>
                            Energia solar precisa
                            de muito espaço?
                        </h2>
                    </div>
                    <div className='cximg'>
                        <img src={logo4} alt="logo" />
                        <img className='intel' src={logo5} alt="logo" />
                    </div>
                </div>
                <div className='cxTexto'>
                    <div className='texto'>
                        <p>
                            Aproveite a demanda crescente e garanta um investimento
                            rentável e ecologicamente correto. Usinas solares ganharam
                            força como opção de investimento nos últimos anos.
                            Conheça alguns benefícios de investir em USINAS SOLARES:
                        </p>
                    </div>
                    <img src={gota} alt="logo" data-aos="fade-right" data-aos-duration="2000" />
                </div>

            </section>

            <section id='containerImg'>
                <div id='cxIcones'>

                    <div className='boxIcones' data-aos="flip-up" data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000" >
                        <p>Baixo risco</p>
                        <img src={ico1} alt="foto" />
                    </div>
                    <div className='boxIcones' data-aos="flip-up" data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000">
                        <p>Renda garantida</p>
                        <img src={ico2} alt="foto" />
                    </div>
                    <div className='boxIcones' data-aos="flip-up" data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000">
                        <p>Manutenção barata</p>
                        <img src={ico3} alt="foto" />
                    </div>
                    <div className='boxIcones' data-aos="flip-up" data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000">
                        <p>Investimento consciente</p>
                        <img src={ico4} alt="foto" />
                    </div>
                    <div className='boxIcones' data-aos="flip-up" data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000">
                        <p>Economia</p>
                        <img src={ico5} alt="foto" />
                    </div>
                    <div className='boxIcones' data-aos="flip-up" data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000">
                        <p>Lucratividade</p>
                        <img src={ico6} alt="foto" />
                    </div>
                </div>
            </section>
        </StyledPagina2>
    )
}