import { StyledIndustrial } from "./styled";

// import economia from "../../../assets/icones projetos/economia-energia.png"
// import estabilidade from "../../../assets/icones projetos/estabilidade.png";
import independencia from "../../../assets/icones projetos/independencia.png";
import manutencao from "../../../assets/icones projetos/manutencao.png";
import marketing from "../../../assets/icones projetos/marketing.png";
import reducao from "../../../assets/icones projetos/reducao-custo.png";
import retorno from "../../../assets/icones projetos/retorno-financeiro.png";
// import sustentabilidade from "../../../assets/icones projetos/sustentabilidade.png";
import valorizacao from "../../../assets/icones projetos/valorizacao.png"

import foto1 from '../../../assets/industrial/industrial1.jpeg'
import foto2 from '../../../assets/industrial/industrial2.jpeg'
import foto3 from '../../../assets/industrial/industrial3.jpeg'
import foto4 from '../../../assets/industrial/industrial4.jpeg'
import foto5 from '../../../assets/industrial/industrial5.jpeg'
import foto6 from '../../../assets/industrial/industrial6.jpeg'
import foto7 from '../../../assets/industrial/industrial7.jpeg'
import foto8 from '../../../assets/industrial/industrial8.jpeg'



export default function Industrial() {
    return (
        <StyledIndustrial>

            <div id="container">

                <div id="titulo">
                    <h1>PROJETOS</h1>
                    <span><h1>INDUSTRIAIS</h1></span>
                </div>

                <div id="texto">
                    <p>Se você quer <span>estabilidade</span> nos custos
                        de energia, <span>autossuficiência, economia
                            e valorização do seu empreendimento,</span>
                        a energia solar é ideal
                        para você!</p>
                </div>
            </div>

            <div id="containerIcones">

                <div id="box" className="box1">

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

                </div>


                <div id="box" className="box2">

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
                            Valorização do Imóvel
                        </h3>
                        <p className="textoBox">
                            A valorização da propriedade associada aos painéis solares é um
                            investimento de longo prazo, que continua a render benefícios
                            financeiros ao longo dos anos.
                        </p>
                    </div>

                    <div className="box">
                        <img src={marketing} alt="" />
                        <h3 className="tituloBox">
                            Benefícios de marketing
                        </h3>
                        <p className="textoBox">
                            Ter energia limpa em sua indústria promove uma cultura de
                            sustentabilidade que pode ser explorada no marketing da empresa,
                            atraindo consumidores conscientes.
                        </p>
                    </div>

                </div>

            </div>

            {/* fotos ------------ */}
            <div id="containerFotos">

                <div id="foto1" className="fotos">
                    <img src={foto1} alt="" />
                    <img src={foto2} alt="" />
                </div>
                <div id="foto2" className="fotos">
                    <img src={foto3} alt="" />
                    <img src={foto4} alt="" />
                    <img src={foto5} alt="" />
                </div>
                <div id="foto3" className="fotos">
                    <img src={foto6} alt="" />
                    <img src={foto7} alt="" />
                    <img src={foto8} alt="" />
                </div>


            </div>

        </StyledIndustrial >
    )
}
