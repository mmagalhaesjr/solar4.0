import { StyledSobreEnergiaSolarP3 } from './styled';


import logo1 from '../../../../assets/logosIcones/logo2.png'
import logo2 from '../../../../assets/logosIcones/verde.png'



import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Botao from '../../../Botao/Botao';







export default function SobreEnergiaSolar() {

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

        <StyledSobreEnergiaSolarP3>
            <section className='secao1'>
                <div className='cabecalho'>
                    <div className='subtitulo'>
                        <h2>
                            Energia solar precisa
                            de muito espaço?
                        </h2>
                    </div>
                    <div className='cximg'>
                        <img src={logo1} alt="logo" />
                        <img className='intel' src={logo2} alt="logo" />
                    </div>
                </div>
                <div className='texto'>

                    <h3>
                        Não se preocupe com espaço!
                    </h3>
                   
                    <p>
                        Os painéis da <span> Intelbras</span> são extremamente adaptáveis em qualquer espaço,
                        elaboramos um projeto que atenda suas expectativas utilizando o espaço
                        disponível.
                    </p>

                </div>
               
            </section>
            
            <section className='secao2'>

                <div className='cximg2'>
                    <img src={logo1} alt="logo" />
                    <img className='intel' src={logo2} alt="logo" />


                </div>

                <Botao  onClick={scrollSimulador}   />

            </section>

           



        </StyledSobreEnergiaSolarP3>
    )
}