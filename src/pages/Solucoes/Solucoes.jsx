import { StyledSolucoes } from "./styled";

import residencial from "../../assets/residencial/residencial3.jpeg"
import comercial from "../../assets/comercial/comercial2.jpeg"
import industrial from "../../assets/industrial/industrial6.jpeg"
import agro from "../../assets/agro/agro2.jpeg"


export default function Solucoes() {
    return (
        <StyledSolucoes>
            <div id="container">

                <div id="titulo">
                    <h1>SOLUÇÕES<h2></h2></h1>
                </div>
                <div id="texto">
                    <p>
                        Oferecemos soluções personalizadas em energia fotovoltaica para <span> residências, comércio, indústrias
                        </span> e para o <span>agronegócio.</span><br /> <br /> <br />

                        Elaboramos um projeto personalizado para cada cliente: levamos em consideração todo o cenário
                         para potencializar a geração de energia, a partir dos equipamentos da Intelbras. <br></br><br></br>
                    </p>

                    <button>Invista na sua própria fonte de energia renovável!</button>

                    <p>
                        Com retorno a curto prazo e uma economia de até 95% na conta de luz,
                        o investimento em energia solar é a melhor escolha.
                    </p>
                </div>



                <div id="containerImg">

                    <div  id="subTitulo"><h1>Projetos</h1></div>

                    <div id="img">
                        <div className="img">
                            <li><a href="/projetoResidencial"><img src={residencial} alt="" /><p>RESIDENCIAL</p></a></li>
                        </div>
                        <div className="img">
                            <li><a href="/projetoComercial"><img src={comercial} alt="" /><p>COMERCIAL</p></a></li>
                        </div>
                        <div className="img">
                            <li><a href="/projetoIndustrial"><img src={industrial} alt="" /><p>INDUSTRIAL</p></a></li>
                        </div>
                        <div className="img">
                            <li><a href="/projetoRural"><img src={agro} alt="" /><p>AGRO</p></a></li>
                        </div>
                    </div>

                </div>
            </div>
        </StyledSolucoes>
    )
}
