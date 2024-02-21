import { StyledPagina5 } from './styled';



import logo4 from '../../../../assets/logosIcones/logo2.png';
import logo5 from '../../../../assets/logosIcones/verde.png';
import ico1 from '../../../../assets/landingPage/fundoFunil/icone1.png';
import ico2 from '../../../../assets/landingPage/fundoFunil/icone2.png';
import ico4 from '../../../../assets/landingPage/fundoFunil/icone5.png';
import ico5 from '../../../../assets/landingPage/fundoFunil/icone7.png';
import ico8 from '../../../../assets/landingPage/fundoFunil/icone8.png';


import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';




export default function Pagina5() {

    useEffect(() => {
        AOS.init();
    }, []);
    return (

        <StyledPagina5>
            <div className='box1'>
                <div className='texto'>
                    <div className='subtitulo'>
                        <h2>
                            Orçamento prático
                        </h2>
                    </div>
                    <ul>
                        <li>
                            Seu orçamento é montado
                            por profissionais de ponta.
                        </li>
                    </ul>

                    <div className='containerBoxIcones'>
                        <div className='boxIcones' data-aos="flip-up" data-aos-duration="2000"  >
                            <div className='ico'> <img src={ico1} alt="foto" /> <h3>Preencha o formulário</h3> </div>
                        </div>
                        <div className='boxIcones' data-aos="flip-up" data-aos-duration="2000">
                            <div className='ico'> <img src={ico2} alt="foto" /> <h3>Consulta com especialista</h3> </div>
                        </div>
                        <div className='boxIcones' data-aos="flip-up" data-aos-duration="2000">
                            <div className='ico'> <img src={ico4} alt="foto" /> <h3>Proposta detalhada</h3> </div>
                        </div>
                        <div className='boxIcones' data-aos="flip-up" data-aos-duration="2000">
                            <div className='ico'> <img src={ico5} alt="foto" /> <h3>Visita técnica</h3> </div>
                        </div>
                        <div className='boxIcones' data-aos="flip-up" data-aos-duration="2000">
                            <div className='ico'> <img src={ico8} alt="foto" /> <h3>Instalação e pós-venda</h3> </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className='box2'>
                <div className='cabecalho'>
                    <img className='logo1' src={logo4} alt="logo" />
                    <img className='logo2' src={logo5} alt="logo" />
                </div>
            </div>
        </StyledPagina5>
    )
}