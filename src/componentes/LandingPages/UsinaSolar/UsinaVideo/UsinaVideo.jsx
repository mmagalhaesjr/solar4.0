import { StyledUsinaVideo } from "./styled";

import logo1 from '../../../../assets/logosIcones/logoBranca.png'
import logo2 from '../../../../assets/logosIcones/intel-solar.png'
import Botao from "../../../Botao/Botao";


export default function UsinaVideo() {

    const scrollSimulador = () => {
        window.scrollTo({
            top: document.documentElement.scrollHeight, 
            behavior: "smooth"
        });
    };

    return (
        <StyledUsinaVideo>

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
                    Investir em uma usina solar é inteligente e sustentável, proporciona retornos sólidos e contribui para um futuro mais limpo e verde.
                    </h1>
                    {/* <div className='subtitulo'>

                        <h2>
                            A melhor escolha para se proteger
                            dos aumentos das contas de luz
                        </h2>
                    </div> */}
                </div>
                <div className="cxVideo"
                    data-aos="fade-up"
                    data-aos-easing="linear"
                    data-aos-duration="1500"

                >
                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/tvn5YU9PIrI?si=hAwi_OnQkD6ScVWn" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>

                <Botao onClick={scrollSimulador} />

            </div>
        </StyledUsinaVideo>
    )
}