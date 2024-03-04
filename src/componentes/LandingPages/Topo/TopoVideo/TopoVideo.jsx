import { StyledTopoVideo } from "./styled";

import logo1 from '../../../../assets/logosIcones/logoBranca.png'
import logo2 from '../../../../assets/logosIcones/intel-solar.png'


import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function TopoVideo() {

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <StyledTopoVideo>

            <div id="container">

                <div className='cabecalho'>

                    <div className='cximg'>
                        <img className='logo1' src={logo1} alt="logo" data-aos="fade-down"
                            data-aos-easing="linear"
                            data-aos-duration="1500" />
                        <img className='logo2' src={logo2} alt="logo" data-aos="fade-down"
                            data-aos-easing="linear"
                            data-aos-duration="1500" />
                    </div>
                    <h1 className='pagina1-titulo' data-aos="zoom-in-up" data-aos-duration="2000" >
                        Economize com Energia Solar!
                    </h1>
                    <div className='subtitulo'>

                        <h2>
                        A melhor escolha para se proteger
                        dos aumentos das contas de luz
                        </h2>
                    </div>
                </div>
                <div className="cxVideo"
                    data-aos="fade-up"
                    data-aos-easing="linear"
                    data-aos-duration="1500"

                >
                     <iframe width="100%" height="100%" src="https://www.youtube.com/embed/KoOhkeAhcdo?si=D-NrZD0_LwcR4xim" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>

            </div>

        </StyledTopoVideo>
    )
}