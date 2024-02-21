import { StyledSobreEnergiaSolarP6 } from './styled';

import logo2 from '../../../../assets/logosIcones/intel-solar.png'
import logo3 from '../../../../assets/logosIcones/logoB.png'

import foto2 from '../../../../assets/landingPage/meioFunil/foto5.webp'

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function Pagina6() {

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <StyledSobreEnergiaSolarP6>
            <div className='pagina2-box1'>
                <div className='pagina2-texto'>
                    <div className='subtitulo'>
                        <h2>
                            Por onde começar?
                        </h2>
                    </div>
                    <ul>
                        <li className='liForte'>
                            Comece agora mesmo!
                        </li>
                        <li>
                            Entre em contato conosco e faça a sua simulação.
                        </li>
                        <li>
                            Nossos especialistas em energia solar estão
                            a disposição para guiá-lo pelo processo
                            e desenvolver um projeto personalizado
                            para você.
                        </li>
                    </ul>
                </div>
                <div className='botao'>
                    <h2>
                        Quer economizar?
                    </h2>
                </div>
            </div>
            <div className='pagina2-box2'>
                <div className='cabecalho'>
                    <img className='logo1' src={logo3} alt="logo" />
                    <img className='logo2' src={logo2} alt="logo" />
                </div>
                <img className='foto2' src={foto2} alt="foto" data-aos="fade-right" data-aos-duration="2000" />

            </div>
        </StyledSobreEnergiaSolarP6>
    )
}