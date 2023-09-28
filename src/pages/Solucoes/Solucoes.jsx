import { StyledTeste } from "./styled";

import foto from "../../assets/primeira.jpg"


export default function Teste() {
    return (
        <StyledTeste>
            <div id="titulo">
                <h1>SOLUÇÕES<h2></h2></h1>
            </div>

            <div id="container">
                <div id="texto">
                    <p>
                        Oferecemos soluções personalizadas em energia fotovoltaica para <span>residências</span>, <span>comércio</span>,
                        <span>indústrias</span>e para o <span>agronegócio</span>. <br></br><br></br>

                        Elaboramos um projeto personalizado para cada cliente. Levamos em conta o consumo de
                        energia e o espaço disponível para os painéis solares,
                        a fim de apresentar um plano com a quantidade ideal de painéis e o melhor ângulo de instalação.<br></br><br></br>

                        Invista na sua própria fonte de energia renovável!
                        Com retorno a curto prazo e uma economia de até 95% na conta de luz, estamos construindo um futuro mais verde.
                    </p>
                </div>

                <div id="img">
                    <div className="img">
                        <img src={foto} alt="" />
                    </div>
                    <div className="img">
                        <img src={foto} alt="" />
                    </div>
                    <div className="img">
                        <img src={foto} alt="" />
                    </div>
                    <div className="img">
                        <img src={foto} alt="" />
                    </div>
                </div>
            </div>
        </StyledTeste>
    )
}
