import { StyledSolucoes } from "./styled";

import foto from "../../assets/primeira.jpg"


export default function Solucoes() {
    return (
        <StyledSolucoes>
            <div id="titulo">
                <h1>SOLUÇÕES<h2></h2></h1>
            </div>

            <div id="container">
                <div id="texto">
                    <p>
                        Oferecemos soluções personalizadas em energia fotovoltaica para <span> residências</span>, <span> comércio</span>,
                        <span> indústrias</span> e <span> agronegócio</span>. <br></br><br></br>

                        {/* Elaboramos projetos personalizado para cada cliente. Levamos em conta o consumo de
                        energia e o espaço disponível para os painéis solares,
                        a fim de apresentar um plano com a quantidade ideal de painéis e o melhor ângulo de instalação.<br></br><br></br> */}

                        Invista na sua própria fonte de energia renovável!
                        Com retorno a curto prazo e uma economia de até 95% <br></br><br></br> na conta de luz, Estamos construindo um futuro mais verde.
                    </p>
                </div>

                <div id="img">
                    <div className="img">
                        <li><a href="/projetoResidencial"><img src={foto} alt=""/><p>RESIDENCIAL</p></a></li>
                    </div>
                    <div className="img">
                        <li><a href="/projetoComercial"><img src={foto} alt="" /><p>COMERCIAL</p></a></li>
                    </div>
                    <div className="img">
                        <li><a href="/projetoIndustrial"><img src={foto} alt="" /><p>INDUSTRIAL</p></a></li>
                    </div>
                    <div className="img">
                        <li><a href="/projetoRural"><img src={foto} alt="" /><p>RURAL</p></a></li>
                    </div>
                </div>
            </div>
        </StyledSolucoes>
    )
}
