import {  StyledSobreEnergiaSolarp1 } from './styled';

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
        <StyledSobreEnergiaSolarp1>


        <div className='cabecalho'>
            <img className='logo1' src={logo1} alt="logo" data-aos="zoom-in-up"  data-aos-duration="2000"/>
            <img className='logo2' src={logo2} alt="logo" data-aos="zoom-in-up"  data-aos-duration="2000" />

        </div>
        <h1 className='pagina1-titulo' data-aos="zoom-in-up"  data-aos-duration="2000" >Perguntas sobre Energia Solar?</h1>
        <div className='pagina1-texto'>
            <h2>
                Nós temos as respostas para que você possa
                fazer um investimento com segurança!
            </h2>
        </div>

    </StyledSobreEnergiaSolarp1>
    )
}