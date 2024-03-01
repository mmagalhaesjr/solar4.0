import { StyledMeioVideo } from "./styled";

import logo4 from '../../../../assets/logosIcones/logoBranca.png'
import logo5 from '../../../../assets/logosIcones/intel-solar.png'


export default function MeioVideo() {
    return (
        <StyledMeioVideo>

            <div id="container">

                <div className='cabecalho'>
                    {/* <div className='subtitulo'>
                        <h2>
                           
                        </h2>
                    </div> */}
                    <div className='cximg'>
                        <img src={logo4} alt="logo" />
                        <img className='intel' src={logo5} alt="logo" />
                    </div>
                </div>
                <div className="cxVideo">
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/FhzTHqkd8yI?si=dCiyfVcRt33rEUGc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>

            </div>

        </StyledMeioVideo>
    )
}