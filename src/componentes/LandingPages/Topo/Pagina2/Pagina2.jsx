import { StyledPagina2 } from './styled';

import gota from '../../../../assets/logosIcones/cor.png'

import icone1 from '../../../../assets/orcamento/PNG/casa.png'
import icone2 from '../../../../assets/orcamento/PNG/dinheiro.png'
import icone3 from '../../../../assets/orcamento/PNG/ferramenta.png'
import icone4 from '../../../../assets/orcamento/PNG/mao.png'
import icone5 from '../../../../assets/orcamento/PNG/medalha.png'
import icone6 from '../../../../assets/orcamento/PNG/anos.png'



export default function Pagina2() {
    return (
        <StyledPagina2>


                <div className='meioVerde'>
                    <div className='cabecalho'>
                        <div className='txtTitulo' >
                            <h1>Benefícios</h1>
                            <h2>A energia solar traz diversas vantagens para você!</h2>
                        </div>
                        <img src={gota} alt="" />
                    </div>
                    <div className='containerIcones'>

                        <div className='cxCadaIcone'>
                            <img src={icone1} alt="icone" />
                            <p>
                                Valorização do imóvel
                            </p>
                        </div>
                        <div className='cxCadaIcone'>
                            <img src={icone2} alt="icone" />
                            <p>
                                Economia de até 95%
                                na conta de luz
                            </p>
                        </div>
                        <div className='cxCadaIcone'>
                            <img src={icone3} alt="icone" />
                            <p>
                                Assistência técnica
                                nacional
                            </p>
                        </div>
                        <div className='cxCadaIcone'>
                            <img src={icone4} alt="icone" />
                            <p>
                                Retorno garantido
                                do investimento
                            </p>
                        </div>
                        <div className='cxCadaIcone'>
                            <img src={icone5} alt="icone" />
                            <p>
                                Empresa reconhecida
                                em todo o Brasil
                            </p>
                        </div>
                        <div className='cxCadaIcone'>
                            <img src={icone6} alt="icone" />
                            <p>
                                Duração do investimento
                                de até 25 anos
                            </p>
                        </div>
                    </div>
                </div>

        

        </StyledPagina2>
    )
}