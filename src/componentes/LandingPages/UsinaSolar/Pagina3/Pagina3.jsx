import { StyledPagina3 } from "./styled";

import logo4 from '../../../../assets/logosIcones/logoB.png'
import logo5 from '../../../../assets/logosIcones/intel-solar.png'


export default function Pagina3() {
    return (
        <StyledPagina3>
            <div id="container">

                <div id='cabecalho'>
                    <div className='subtitulo'>
                        <h2>
                            Ganhar dinheiro com
                            energia solar
                        </h2>
                    </div>
                    <div className='cximg'>
                        <img src={logo4} alt="logo" />
                        <img className='intel' src={logo5} alt="logo" />
                    </div>
                </div>

                <div id="faixaBranca">
                    <p>
                        Realizamos o planejamento e a construção da sua usina
                        com nossa equipe própria e especializada.
                    </p>
                </div>

                <ul>
                    <li>
                        Orçamos sem compromisso o projeto da sua usina em até 48
                        horas;
                    </li>
                    <li>
                        Realizamos o planejamento e a construção da sua usina;
                    </li>
                    <li>
                        Possuímos engenharia própria, facilitando todo o processo;
                    </li>
                    <li>
                        Equipamentos com garantia, assistencia técnica e pós-venda da
                        Intelbras;
                    </li>
                </ul>

                <div className="texto3">
                    <h2>
                        Comece agora seu investimento
                    </h2>
                </div>

                <div className="faixaBranca2">

                </div>

                <div id="botao">

                </div>

            </div>
        </StyledPagina3>
    )
}