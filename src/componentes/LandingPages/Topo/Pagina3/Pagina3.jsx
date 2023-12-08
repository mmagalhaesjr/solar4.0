import { StyledPagina3 } from "./styled";

import logo4 from '../../../../assets/logosIcones/logoBranca.png'
import logo5 from '../../../../assets/logosIcones/intel-solar.png'
import icone1 from '../../../../assets/landingPage/topoFunil/icone1.png'
import icone2 from '../../../../assets/landingPage/topoFunil/icone2.png'
import icone3 from '../../../../assets/landingPage/topoFunil/icone3.png'
import icone4 from '../../../../assets/landingPage/topoFunil/icone4.png'
import icone5 from '../../../../assets/landingPage/topoFunil/icone5.png'
import icone6 from '../../../../assets/landingPage/topoFunil/icone6.png'
import { FaLongArrowAltRight } from "react-icons/fa";

export default function Pagina3() {
    return (
        <StyledPagina3>
            <div className='cabecalho'>
                <div className='subtitulo'>
                    <h2>
                        Seu dinheiro trabalhando
                        para você
                    </h2>
                </div>
                <div className='cximg'>
                    <img src={logo4} alt="logo" />
                    <img className='intel' src={logo5} alt="logo" />
                </div>
            </div>

            <div className="container">

                <div className="caixa">
                    <div className="txt">
                        <h3>Antes da energia Solar:</h3>
                    </div>
                    <div className="cx">

                        <div className="divisaoCx">
                            <section><img src={icone1} alt="icone"/></section>
                            <section><p>Contas altas de luz</p></section>
                        </div>
                        <div className="divisaoCx">
                            <section><img src={icone2} alt="icone"/></section>
                            <section> <p>Gastos sem retorno </p></section>
                        </div>
                        <div className="divisaoCx">
                            <section><img src={icone3} alt="icone"/></section>
                            <section><p>Energia para um imóvel.</p></section>
                        </div>


                    </div>
                </div>


                <FaLongArrowAltRight id="seta" />


                <div className="caixa">
                    <div className="txt">
                        <h3>Depois da energia Solar:</h3>
                    </div>
                    <div className="cx">

                        <div className="divisaoCx">
                        <section> <img src={icone4} alt="icone" /></section>
                        <section> <p>Contas que se pagam</p></section>
                        </div>
                        <div className="divisaoCx">
                        <section> <img src={icone5} alt="icone" /></section>
                        <section> <p>Gastos viram investimentos</p></section>
                        </div>
                        <div className="divisaoCx">
                        <section> <img src={icone6} alt="icone" /></section>
                        <section> <p>Energia para vários imóveis</p></section>
                        </div>

                    </div>
                </div>

            </div>
        </StyledPagina3>
    )
}