import { StyledComercial } from "./styled";

import economia from "../../../assets/icones projetos/economia-energia.png"
import estabilidade from "../../../assets/icones projetos/estabilidade.png";
import independencia from "../../../assets/icones projetos/independencia.png";
import manutencao from "../../../assets/icones projetos/manutencao.png";
import marketing from "../../../assets/icones projetos/marketing.png";
// import reducao from "../../../assets/icones projetos/reducao-custo.png";
import retorno from "../../../assets/icones projetos/retorno-financeiro.png";
// import sustentabilidade from "../../../assets/icones projetos/sustentabilidade.png";
// import valorizacao from "../../../assets/icones projetos/valorizacao.png"


export default function Comercial() {
    return (
        <StyledComercial>
        
            <div id="container">
                <h1>PROJETOS <h2>COMERCIAIS</h2></h1>

                <div id="texto">
                    <p>Se você quer <span>estabilidade </span> nos custos
                        de energia, <span> autossuficiência, economia
                            e valorização do seu empreendimento,</span>
                        a energia solar é ideal
                        para você!</p>
                </div>
            </div>

            <div id="containerIcones">
                <div className="box">
                    <img src={economia } alt="" />
                    <h3 className="tituloBox">

                    </h3>
                    <p className="textoBox">

                    </p>
                </div>

                <div className="box">
                    <img src={retorno } alt="" />
                    <h3 className="tituloBox">

                    </h3>
                    <p className="textoBox">

                    </p>
                </div>

                <div className="box">
                    <img src={independencia } alt="" />
                    <h3 className="tituloBox">

                    </h3>
                    <p className="textoBox">

                    </p>
                </div>

                <div className="box">
                    <img src={manutencao } alt="" />
                    <h3 className="tituloBox">

                    </h3>
                    <p className="textoBox">

                    </p>
                </div>

                <div className="box">
                    <img src={estabilidade } alt="" />
                    <h3 className="tituloBox">

                    </h3>
                    <p className="textoBox">

                    </p>
                </div>

                <div className="box">
                    <img src={marketing } alt="" />
                    <h3 className="tituloBox">

                    </h3>
                    <p className="textoBox">

                    </p>
                </div>

            </div>
        </StyledComercial>
    )
}
