import { StyledRural } from "./styled";

// import economia from "../../../assets/icones projetos/economia-energia.png"
// import estabilidade from "../../../assets/icones projetos/estabilidade.png";
import independencia from "../../../assets/icones projetos/independencia.png";
import manutencao from "../../../assets/icones projetos/manutencao.png";
// import marketing from "../../../assets/icones projetos/marketing.png";
import reducao from "../../../assets/icones projetos/reducao-custo.png";
import retorno from "../../../assets/icones projetos/retorno-financeiro.png";
import sustentabilidade from "../../../assets/icones projetos/sustentabilidade.png";
import valorizacao from "../../../assets/icones projetos/valorizacao.png"



export default function Rural() {
    return (
        <StyledRural>


            <div id="container">

                <div id="titulo">
                    <h1>PROJETOS<h2>RURAIS</h2></h1>
                </div>

                <div id="texto">
                    <p>Se você quer <span>economia,
                        autossuficiência, e independência
                        energética </span> na sua fazenda,
                        a energia solar é ideal
                        para você!</p>
                </div>

            </div>

            <div id="containerIcones">

                <div className="box">
                    <img src={reducao} alt="" />
                    <h3 className="tituloBox">
                        Redução de custos
                    </h3>
                    <p className="textoBox">
                        A instalação de painéis solares permite que os proprietários gerem
                        sua própria eletricidade, reduzindo significativamente as contas de
                        energia elétrica.
                    </p>
                </div>

                <div className="box">
                    <img src={retorno} alt="" />
                    <h3 className="tituloBox">
                        Retorno Financeiro
                    </h3>
                    <p className="textoBox">
                        o Retorno sobre Investimento (ROI), mesmo variando de acordo com
                        o consumo, costuma ser obtido em um prazo médio de 6 anos. Com
                        a durabilidade do equipamento de 25 anos, em 19 anos você
                        produzirá energia solar com todo o seu investimento já pago.
                    </p>
                </div>

                <div className="box">
                    <img src={independencia} alt="" />
                    <h3 className="tituloBox">
                        Independência Energética
                    </h3>
                    <p className="textoBox">
                        Com a energia solar, você se torna menos dependente da rede
                        elétrica pública, o que proporciona mais segurança energética,
                        especialmente em áreas com interrupções frequentes no
                        fornecimento de energia.
                    </p>
                </div>

                <div className="box">
                    <img src={manutencao} alt="" />
                    <h3 className="tituloBox">
                        Durabilidade e Baixa Manutenção
                    </h3>
                    <p className="textoBox">
                        Os sistemas de energia solar têm uma vida útil longa e geralmente
                        requerem pouca manutenção ao longo do tempo.
                    </p>
                </div>

                <div className="box">
                    <img src={valorizacao} alt="" />
                    <h3 className="tituloBox">
                        Valorização da sua fazenda
                    </h3>
                    <p className="textoBox">
                        A valorização da propriedade associada aos painéis solares é um
                        investimento de longo prazo, que continua a render benefícios
                        financeiros ao longo dos anos.
                    </p>
                </div>

                <div className="box">
                    <img src={sustentabilidade} alt="" />
                    <h3 className="tituloBox">
                        Sustentabilidade
                    </h3>
                    <p className="textoBox">
                        Ter energia limpa em sua casa contribui para a redução das
                        emissões de carbono, contribuindo para um presente e futuro mais
                        sustentáveis
                    </p>
                </div>

            </div>

        </StyledRural>
    )
}