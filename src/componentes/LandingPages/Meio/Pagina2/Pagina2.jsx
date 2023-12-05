import { StyledSobreEnergiaSolarP2 } from './styled';

import logo2 from '../../../../assets/logosIcones/intel-solar.png'
import logo3 from '../../../../assets/logosIcones/logoB.png'

import foto2 from '../../../../assets/landingPage/meioFunil/foto2.webp'


export default function Pagina2() {
    return (
        <StyledSobreEnergiaSolarP2>
        <div className='pagina2-box1'>
            <div className='pagina2-texto'>
                <div className='subtitulo'>
                    <h2>
                    Qual o custo da
                    energia solar?
                    </h2>
                </div>
                <ul>
                    <li>
                        Com o passar dos anos, os
                        avanços tecnológicos e incentívos
                        fiscais, o custo para este
                        investimento vem reduzindo
                        cada vez mais.
                    </li>
                    <li>
                        Com nossa equipe de
                        especialistas e os equipamentos
                        da <span>Intelbras</span>, na <span>Solar 4.0</span> você
                        terá a solução adequada para o
                        seu bolso.
                    </li>
                </ul>
            </div>
        </div>
        <div className='pagina2-box2'>
            <div className='cabecalho'>
                <img className='logo1' src={logo3} alt="logo" />
                <img className='logo2' src={logo2} alt="logo" />
            </div>
            <img className='foto2' src={foto2} alt="foto" />

        </div>
    </StyledSobreEnergiaSolarP2>
    )
}