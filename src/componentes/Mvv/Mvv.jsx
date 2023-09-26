import { StyledMvv } from "./styled";


export default function Mvv() {
    return (
        <StyledMvv>
            <div id="container">
                <div className="card">
                    <h1>MISSÃO</h1>
                    <div className="texto">
                        <p>
                            Empoderar nossos clientes para terem autonomia
                            e controle sobre sua energia elétrica utilizando fontes de
                            energia renováveis como uma forma de investimento
                            para reduzir custos e colaborar para o desenvolvimento
                            sustentável do planeta.
                        </p>
                    </div>
                </div>
                <div className="card">
                    <h1>VISÃO</h1>
                    <div className="texto">
                        <p>
                            Ser a principal referência em gestão de energia elétrica
                            para o agronegócio na Região Sudeste oferecendo serviços inovadores,
                            personalizados e confiáveis.
                        </p>
                    </div>
                </div>
                <div className="card">
                    <h1>VALORES</h1>
                    <div className="texto">
                        <p>
                            Comprometimento,
                            Ética,
                            Sustentabilidade,
                            Excelência no atendimento,
                            Qualidade.
                        </p>
                    </div>
                </div>
            </div>
        </StyledMvv>
    )
}
