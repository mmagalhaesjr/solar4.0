import {  StyledSobreEnergiaSolarp1 } from './styled';

import logo1 from '../../../../assets/logosIcones/logoBranca.png'
import logo2 from '../../../../assets/logosIcones/intel-solar.png'



export default function Pagina1() {
    return (
        <StyledSobreEnergiaSolarp1>


        <div className='cabecalho'>
            <img className='logo1' src={logo1} alt="logo" />
            <img className='logo2' src={logo2} alt="logo" />

        </div>
        <h1 className='pagina1-titulo'>Perguntas sobre Energia Solar?</h1>
        <div className='pagina1-texto'>
            <h2>
                Nós temos as respostas para que você possa
                fazer um investimento com segurança!
            </h2>
        </div>

    </StyledSobreEnergiaSolarp1>
    )
}