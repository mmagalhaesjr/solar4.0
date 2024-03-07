

import logo1 from '../../../../assets/logosIcones/logoBranca.png'
import logo2 from '../../../../assets/logosIcones/intel-solar.png'


import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Botao from "../../../Botao/Botao";
import { StyledVideo } from "../../StyledVideo/StyledVideo";


export default function FundoVideo() {

    useEffect(() => {
        AOS.init();
    }, []);

    const scrollSimulador = () => {
        window.scrollTo({
            top: document.documentElement.scrollHeight, 
            behavior: "smooth"
        });
    };

    return (
        <StyledVideo>

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

                    <div className='subtitulo'>
                        <h2>
                            A melhor escolha para sua economia
                        </h2>
                    </div>
                </div>
                <div className="cxVideo" 
                    data-aos="fade-up"
                    data-aos-easing="linear"
                    data-aos-duration="1500"

                >
                  
                  <iframe width="100%" height="100%" src="https://www.youtube.com/embed/GA6sV4_TNE4?si=DhYVc5VppT_BfYqe" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

                </div>

                <Botao  onClick={scrollSimulador}  />

            </div>

        </StyledVideo>
    )
}