import { StyledSobreEnergiaSolarP7 } from './styled';

import logo2 from '../../../../assets/logosIcones/intel-solar.png'
import logo3 from '../../../../assets/logosIcones/logoB.png'

import Formulario from "../../../../componentes/Formulario/Formulario";


export default function Pagina7() {
    return (
        <StyledSobreEnergiaSolarP7>
            <section className='cabecalho'>
                <div className='subtitulo'>
                    <h2>
                        Economize seu dinheiro
                    </h2>
                </div>
                <div className='logos'>
                    <img className='logo1' src={logo3} alt="" />
                    <img className='logo2' src={logo2} alt="" />
                </div>

            </section>
            <section className='cabecalho2'>
                <div>
                    <h2>
                        com energia Solar
                    </h2>
                </div>
            </section>

            <Formulario />

        </StyledSobreEnergiaSolarP7>
    )
}