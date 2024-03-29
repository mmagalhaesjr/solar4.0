import { StyledPagina4 } from "./styled";

import logo4 from '../../../../assets/logosIcones/logo2.png'
import logo5 from '../../../../assets/logosIcones/verde.png'
import foto from '../../../../assets/landingPage/usinaSolar/imgp4.png'




export default function Pagina4(){


    return(
        <StyledPagina4>

            <div id="container">


                <div className='cabecalho'>
                    <div className='subtitulo'>
                        <h2>
                            Como funciona a energia solar?
                        </h2>
                    </div>
                    <div className='cximg'>
                        <img src={logo4} alt="logo" />
                        <img className='intel' src={logo5} alt="logo" />
                    </div>
                </div>

                <div id="containerImg">
                   
                   <img src={foto} alt="foto" />

                </div>

              

            </div>



        </StyledPagina4>
    )
}