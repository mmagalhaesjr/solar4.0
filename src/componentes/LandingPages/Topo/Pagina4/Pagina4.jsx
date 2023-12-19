import { StyledPagina4 } from "./styled";

import logo4 from '../../../../assets/logosIcones/logoBranca.png'
import logo5 from '../../../../assets/logosIcones/intel-solar.png'

export default function Pagina4() {
    return (
        <StyledPagina4>

            <div id="container">

                <div className='cabecalho'>
                    <div className='subtitulo'>
                        <h2>
                            Vídeo informativo
                        </h2>
                    </div>
                    <div className='cximg'>
                        <img src={logo4} alt="logo" />
                        <img className='intel' src={logo5} alt="logo" />
                    </div>
                </div>
                <div className="cxVideo">

                </div>
                
            </div>

        </StyledPagina4>
    )
}