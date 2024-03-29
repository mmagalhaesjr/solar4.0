import { StyledPagina7 } from './styled';


import logo4 from '../../../../assets/logosIcones/logoB.png'
import logo5 from '../../../../assets/logosIcones/intel-solar.png'

import gota from '../../../../assets/logosIcones/cor.png'

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';




export default function Pagina7() {

    useEffect(() => {
        AOS.init();
    }, []);


    return (

        <StyledPagina7>
            <section id='container'>

                <div className='cabecalho'>
                    <div className='subtitulo'>
                        <h2>
                            Por que escolher a Solar 4.0
                            para investir em uma usina solar?
                        </h2>
                    </div>
                    <div className='cximg'>
                        <img src={logo4} alt="logo" />
                        <img className='intel' src={logo5} alt="logo" />
                    </div>
                </div>


                <div className='cxTexto' 
                data-aos="fade-right" data-aos-duration="2000">
                    <div className='texto' >
                        <p>
                            Trabalhamos com equipamentos <span>Intelbras</span> de alta tecnologia
                            e uma equipe técnica qualificada que irá acompanhar todas
                            as etapas do seu projeto.
                        </p>
                    </div>
                    <img src={gota} alt="logo" data-aos="fade-down" data-aos-duration="2000" />
                </div>

                <ul>
                    <li data-aos="fade-right"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine">
                        Com o crescimento gigantesco do mercado de energia solar e repleto de
                        oportunidades, investir em uma usina solar, além de  economia na conta de energia,
                        permite que você faça dinheiro de forma segura durante anos com um único
                        investimento, baixo risco e pouquíssima manutenção.
                    </li>
                    <li data-aos="fade-left"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine">
                        Considerando ainda que o sol é a maior fonte de energia renovável, o Brasil por estar
                        localizado próximo a Linha do Equador, possui uma das médias de radiação solar mais elevadas
                        do mundo.
                    </li>
                    <li data-aos="fade-right"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine">
                        Com nossos serviços e  com os equipamentos Intelbras, podemos garantir maior
                        aproveitamento e desempenho para os sistemas fotovoltaicos.
                    </li>
                </ul>
            </section>


        </StyledPagina7>
    )
}