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
            <div className='cabecalho'>
                <img className='logo1' src={logo1} alt="logo" data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1500" />
                <img className='logo2' src={logo2} alt="logo" data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1500" />

            </div>
            <div className='boxVerde' data-aos="fade-right" data-aos-duration="2000">
                <h1 className='titulo'>
                    A melhor escolha
                    para sua economia
                </h1>
            </div>
            <div className='boxVerde' data-aos="fade-left" data-aos-duration="2000">
                <h2>
                    SOLICITE SEU ORÇAMENTO
                </h2>
            </div>
        </StyledPagina1 >
    )
}