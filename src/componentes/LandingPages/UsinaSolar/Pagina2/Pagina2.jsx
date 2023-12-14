import { StyledPagina2 } from './styled';


import logo4 from '../../../../assets/logosIcones/logo2.png'
import logo5 from '../../../../assets/logosIcones/verde.png'




export default function SobreEnergiaSolar() {
    return (

        <StyledPagina2>
            <section id='container'>

                <div className='cximg2'>
                    <img src={logo4} alt="logo" />
                    <img className='intel' src={logo5} alt="logo" />
                </div>


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
                <div className='cxTexto'>
                    <div className='texto'>
                        <p>
                            Aproveite a demanda crescente e garanta um investimento
                            rentável e ecologicamente correto. Usinas solares ganharam
                            força como opção de investimento nos últimos anos.
                            Conheça alguns benefícios de investir em USINAS SOLARES:
                        </p>
                    </div>
                </div>

            </section>

            <section id='containerImg'>
                <div id='cxIcones'>

                    <div className='boxIcones'>

                    </div>
                    <div className='boxIcones'>

                    </div>
                    <div className='boxIcones'>

                    </div>
                    <div className='boxIcones'>

                    </div>
                    <div className='boxIcones'>

                    </div>
                    <div className='boxIcones'>

                    </div>
                </div>
            </section>
        </StyledPagina2>
    )
}