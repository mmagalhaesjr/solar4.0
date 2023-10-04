import { StyledtextoInicial } from "./styled";
import fundo from "../../assets/fundo.jpg"



export default function TelaInicial() {
    return (
        <StyledtextoInicial>

            <img id="imgInicial" src={fundo} alt="imagem" />

            <div id="container">
                <div id="texto">
                    <h1>
                       Conquiste sua independência energética.<br></br>
                       <span>Transforme luz solar em economia!</span> 
                    </h1>
                    <a href="/Orcamento" target="_blank"><button>SOLICITE UM ORÇAMENTO</button></a>
                </div>
            </div>

        </StyledtextoInicial>
    )
}