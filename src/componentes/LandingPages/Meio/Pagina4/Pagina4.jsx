import { StyledSobreEnergiaSolarP4 } from './styled';



import logo4 from '../../../../assets/logosIcones/logo2.png'
import logo5 from '../../../../assets/logosIcones/verde.png'

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';





export default function Pagina4() {

    useEffect(() => {
        AOS.init();
    }, []);

    return (

        <StyledSobreEnergiaSolarP4>
            <div className='box1'>
                <div className='texto' >
                    <div className='subtitulo'>
                        <h2>
                            Energia solar funciona
                            em dias nublados?
                        </h2>
                    </div>
                    <ul>
                        <li>
                            Os painéis solares continuam a
                            gerar energia!
                        </li>
                        <li>
                            Eles captam radiação solar e
                            podem continuar gerando
                            eletricidade.
                        </li>
                        <li>
                            A energia gerada excedente gera
                            créditos e será utilizada quando a
                            geração for menor que o consumo.
                        </li>
                    </ul>
                </div>
              
            </div>
            <div className='box2' data-aos="fade-left" data-aos-duration="2000">
                <div className='cabecalho'>
                    <img className='logo1' src={logo4} alt="logo" />
                    <img className='logo2' src={logo5} alt="logo" />
                </div>


            </div>
        </StyledSobreEnergiaSolarP4>
    )
}