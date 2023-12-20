import { StyledtextoInicial } from "./styled";
// import fundo from "../../assets/fundo.jpg"



export default function TelaInicial() {
    return (
        <StyledtextoInicial>

            {/* <img id="imgInicial" src={fundo} alt="imagem" /> */}

            <div id="container">
                <div id="cxTexto">
                    <h1>
                       Conquiste sua independência energética.<br></br>
                       <span>Transforme energia solar em economia!</span> 
                    </h1>
                    <a href="/Orcamento" target="_blank"><button> <p>SOLICITE UM ORÇAMENTO</p></button></a>
                </div>
            </div>

        </StyledtextoInicial>
    )
}