import { StyledSobreEnergiaSolarP3} from './styled';


import logo4 from '../../../../assets/logosIcones/logo2.png'
import logo5 from '../../../../assets/logosIcones/verde.png'




export default function SobreEnergiaSolar() {
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
                    <img src={logo4} alt="logo" />
                    <img className='intel' src={logo5} alt="logo" />
                </div>
            </div>
            <div className='texto'>

                <h3>
                    Não se preocupe com espaço!
                </h3>
                <p>
                    Os painéis da <span> Solar 4.0</span> são extremamente adaptáveis em qualquer espaço,
                    elaboramos um projeto que atende suas expectativas utilizando o espaço
                    disponível.
                </p>

            </div>
        </section>
        <section className='secao2'>

        <div className='cximg2'>
                    <img src={logo4} alt="logo" />
                    <img className='intel' src={logo5} alt="logo" />
                </div>

        </section>

    </StyledSobreEnergiaSolarP3>
    )
}