import { StyledOPM } from "./styled";
import { CiCircleCheck } from 'react-icons/ci';


export default function OPM() {
    return (
        <StyledOPM>
            <div id="titulo">
                <h1>OPERAÇÕES E MANUTENÇÃO</h1>
            </div>

            <div id="container">
                <div id="cont">
                    <div className="funcoes"><CiCircleCheck /> <p>Gestão de Energia Elétrica</p></div>
                    <div className="funcoes"><CiCircleCheck /><p>Soluções Personalizadas</p></div>
                    <div className="funcoes"><CiCircleCheck /><p>Monitoramento</p></div>
                    {/* <div className="funcoes"><CiCircleCheck/><p>Manutenções Preventiva, Corretiva e de Condição</p></div> */}
                </div>
                <div id="cont">
                    <div className="funcoes"><CiCircleCheck /><p>Limpeza dos Módulos</p></div>
                    <div className="funcoes"><CiCircleCheck /><p>Garantias</p></div>
                    <div className="funcoes"><CiCircleCheck /><p>Suporte Técnico</p></div>
                </div>

                
            </div>

            <a href="/Orcamento" target="_blank"> <button>SOLICITE UM ORÇAMENTO</button> </a>
        </StyledOPM>
    )
}
