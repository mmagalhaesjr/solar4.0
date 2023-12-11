import { StyledPagina6 } from "./styled";

import logo4 from '../../../../assets/logosIcones/logoBranca.png'
import logo5 from '../../../../assets/logosIcones/intel-solar.png'

export default function Pagina6() {
    return (
        <StyledPagina6>

            <section id="tela">

                <div className='cabecalho'>
                    <div className='subtitulo'>
                        <h2>
                            Informações técnicas
                        </h2>
                    </div>
                    <div className='cximg'>
                        <img src={logo4} alt="logo" />
                        <img className='intel' src={logo5} alt="logo" />
                    </div>
                </div>

            </section>

            <div className="container">

                <div className="cxAmarela">
                    <div className="numero">
                        <h3>1.</h3>
                    </div>

                    <div className="texto">
                        <p>
                            Durante o dia, a luz solar
                            que incide nos painéis é
                            absorvida e convertida
                            em energia elétrica.
                        </p>
                    </div>
                </div>
                <div className="cxAmarela">
                    <div className="numero">
                        <h3>2.</h3>
                    </div>

                    <div className="texto">
                        <p>
                            O inversor é o &#34;cérebro&#34;
                            do sistema, responsável
                            por processar essa
                            energia e controlar a
                            geração.
                        </p>
                    </div>
                </div>
                <div className="cxAmarela">
                    <div className="numero">
                        <h3>3.</h3>
                    </div>

                    <div className="texto">
                        <p>
                            A energia que sai do
                            inversor é consumida em
                            casa ou nas empresas,
                            suprindo lâmpadas,
                            eletrodomésticos e todos
                            os outros aparelhos
                            elétricos.
                        </p>
                    </div>
                </div>
                <div className="cxAmarela">
                    <div className="numero">
                        <h3>4.</h3>
                    </div>

                    <div className="texto">
                        <p>
                            O excedente de energia
                            que o sistema gera é
                            injetado na rede, e o
                            medidor da distribuidora
                            contabiliza créditos!
                        </p>
                    </div>
                </div>
                <div className="cxAmarela">
                    <div className="numero">
                        <h3>5.</h3>
                    </div>

                    <div className="texto">
                        <p>
                            A noite, quando não há
                            geração, utiliza-se a
                            eletricidade da
                            distribuidora.
                        </p>
                    </div>
                </div>

            </div>

        </StyledPagina6>
    )
}