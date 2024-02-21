import { StyledtextoInicial } from "./styled";
import { Link } from 'react-router-dom';
// import fundo from "../../assets/fundo.jpg"

// import { useNavigate } from 'react-router-dom';





export default function TelaInicial() {
    
    // const navegar = useNavigate();
    return (
        <StyledtextoInicial>

            {/* <img id="imgInicial" src={fundo} alt="imagem" /> */}

            <div id="container">
                <div id="cxTexto">
                    <h1 data-aos="flip-left"  data-aos-duration="2000">
                       Conquiste sua independência energética.<br></br>
                       <span>Transforme energia solar em economia!</span> 
                    </h1>
                     <Link to="/orcamento" target="_blank"><button > <p>SOLICITE UM ORÇAMENTO</p></button></Link>
                    
                </div>
            </div>

        </StyledtextoInicial>
    )
}