import { StyledtextoInicial } from "./styled";
import primeira from "../../assets/fundo.jpg"



export default function TelaInicial() {
    return (
        <StyledtextoInicial>

            <img id="imgInicial" src={primeira} alt="imagem" />

            <div id="container">
                <div id="texto">
                    <h1>
                       Conquiste sua independência energética.<br></br>
                       <span>Transforme luz solar em economia!</span> 
                    </h1>
                    <a href=" href=/Orcamento" target="_blank"><button>SOLICITE UM ORÇAMENTO</button></a>
                </div>
            </div>

        </StyledtextoInicial>
    )
}