import { StyledPagina5 } from './styled';



import logo4 from '../../../../assets/logosIcones/logo2.png';
import logo5 from '../../../../assets/logosIcones/verde.png';
import ico1 from '../../../../assets/landingPage/fundoFunil/icone3.png';
import ico2 from '../../../../assets/landingPage/fundoFunil/icone4.png';
import ico3 from '../../../../assets/landingPage/fundoFunil/icone6.png';





export default function Pagina5() {
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
                        <div className='boxIcones'>
                            <div className='ico'> <img src={ico1} alt="foto" /> <h3>Tecnologia de Ponta</h3> </div>
                        </div>
                        <div className='boxIcones'>
                            <div className='ico'> <img src={ico2} alt="foto" /> <h3>Monitoramento Remoto</h3> </div>
                        </div>
                        <div className='boxIcones'>
                            <div className='ico'> <img src={ico3} alt="foto" /> <h3>Manutenção Simplificada</h3> </div>
                        </div>
                        <div className='boxIcones'>
                            <div className='ico'> <img src={ico3} alt="foto" /> <h3>Manutenção Simplificada</h3> </div>
                        </div>
                        <div className='boxIcones'>
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
        </StyledPagina5>
    )
}