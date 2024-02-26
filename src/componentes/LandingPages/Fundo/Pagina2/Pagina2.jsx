import { StyledPagina2 } from './styled';



import logo4 from '../../../../assets/logosIcones/logo2.png';
import logo5 from '../../../../assets/logosIcones/verde.png';
import ico1 from '../../../../assets/landingPage/fundoFunil/icone3.png';
import ico2 from '../../../../assets/landingPage/fundoFunil/icone4.png';
import ico3 from '../../../../assets/landingPage/fundoFunil/icone6.png';



import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';



export default function Pagina2() {

    useEffect(() => {
        AOS.init();
    }, []);
    return (

        <StyledPagina2>
            <div className='box1'>
                <div className='texto'>
                    <div className='subtitulo'>
                        <h2>
                            Parceria de Confiança
                        </h2>
                    </div>
                    <ul>
                        <li>
                            A <span>Solar 4.0 </span> é orgulhosamente parceira da 
                            <span> Intelbras</span>, líder em tecnologia para geração
                            de energia solar.
                        </li>
                        <li>
                            Oferecemos equipamentos de qualidade,
                            utilizando os produtos mais tecnológicos da
                            <span> Intelbras</span> para garantir eficiência e
                            durabilidade.
                        </li>
                    </ul>

                    <div className='containerBoxIcones'>
                        <div className='boxIcones'  data-aos="flip-up" data-aos-duration="2000">
                            <div className='ico'> <img src={ico1} alt="foto" /> <h3>Tecnologia de Ponta</h3> </div>
                        </div>
                        <div className='boxIcones'  data-aos="flip-up" data-aos-duration="2000">
                            <div className='ico'> <img src={ico2} alt="foto" /> <h3>Monitoramento Remoto</h3> </div>
                        </div>
                        <div className='boxIcones'  data-aos="flip-up" data-aos-duration="2000">
                            <div className='ico'> <img src={ico3} alt="foto" /> <h3>Manutenção Simplificada</h3> </div>
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
        </StyledPagina2>
    )
}