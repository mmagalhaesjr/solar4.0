import { StyledtextoInicial } from "./styled";
import primeira from "../../assets/primeira.jpg"


export default function TelaInicial() {
    return (
        <StyledtextoInicial>

            <img id="imgInicial" src={primeira} alt="imagem" />

            <div id="container">
                <div id="texto">
                    <h1>
                        <span style={{ color: '#7FCB27' }}>ECONOMIZE </span>
                        <span style={{ color: '#ffffff' }}>ATÉ 95%</span><br /><br />
                        <span style={{ color: '#ffffff' }}>NA CONTA DE</span><br /><br />
                        <span style={{ color: '#7FCB27' }}>ENERGIA ELÉTRICA</span>
                    </h1>
                    <button>SOLICITE UM ORÇAMENTO</button>
                </div>

                <div id="texto2">
                    <h2>
                        <span style={{ color: '#ffffff' }}>PROJETOS</span>
                        <span style={{ color: '#88ff00' }}> RESIDENCIAIS</span>

                        <span style={{ color: '#ffffff' }}> |</span>

                        <span style={{ color: '#ffffff' }}> PROJETOS</span>
                        <span style={{ color: '#88ff00' }}> COMERCIAL</span>

                        <span style={{ color: '#ffffff' }}> |</span>

                        <span style={{ color: '#ffffff' }}> PROJETOS</span>
                        <span style={{ color: '#88ff00' }}> INDUSTRIAL</span>

                        <span style={{ color: '#ffffff' }}> |</span>

                        <span style={{ color: '#ffffff' }}> PROJETOS</span>
                        <span style={{ color: '#88ff00' }}> RURAL</span>
                    </h2>
                </div>
            </div>

        </StyledtextoInicial>
    )
}