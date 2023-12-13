import { StyledPagina1 } from './styled';

import logo1 from '../../../../assets/logosIcones/logoBranca.png'
import logo2 from '../../../../assets/logosIcones/intel-solar.png'

export default function Pagina1() {
    return (
        <StyledPagina1>
            <div className='cabecalho'>
                <img className='logo1' src={logo1} alt="logo" />
                <img className='logo2' src={logo2} alt="logo" />

            </div>
            <div className='boxVerde'>
                <h1 className='pagina1-titulo'>
                    A melhor escolha
                    para sua economia
                </h1>
            </div>
            <div className='boxVerde'>
                <h2>
                    SOLICITE SEU ORÇAMENTO
                </h2>
            </div>
        </StyledPagina1 >
    )
}