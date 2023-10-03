import { StyledMvv } from "./styled";
import logo from "../../assets/logoB.png"


export default function Mvv() {
    return (
        <StyledMvv>
            <div id="container">
                <div className="card">
                    <h1>Missão</h1>
                    <div className="texto">
                        <p>
                            Empoderar nossos clientes para terem<span> autonomia </span>
                            e controle <span> sobre sua energia elétrica </span>utilizando fontes de
                            energia renováveis como uma forma de investimento
                            para reduzir custos e colaborar para o desenvolvimento<br></br>
                            sustentável do planeta.
                        </p>
                    </div>
                </div>
                <div className="card">
                    <h1>Visão</h1>
                    <div className="texto">
                        <p>
                            Ser a principal referência em gestão de energia elétrica
                            para o agronegócio na Região Sudeste oferecendo serviços<span> inovadores,
                            personalizados e confiáveis.</span>
                        </p>
                    </div>
                </div>
                <div className="card">
                    <h1>Valores</h1>
                    <div className="texto">
                        <p>
                           <span> Comprometimento,<br />
                            Ética,<br />
                            Sustentabilidade,<br />
                            Excelência no atendimento,<br />
                            Qualidade.</span>
                        </p>
                    </div>
                </div>
            </div>

            <img  id="logo" src={logo} alt="" />
        </StyledMvv>
    )
}
