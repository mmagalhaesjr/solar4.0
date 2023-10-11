import { StyledOPM } from "./styled";
import { CiCircleCheck } from 'react-icons/ci';
import { BsChevronDoubleDown } from 'react-icons/bs'

import antes from '../../../assets/antes.jpg'
import depois from '../../../assets/depois.jpg'
import placa from '../../../assets/fundoOem.jpg'
import logo from '../../../assets/logo2.png'


export default function OPM() {
    return (
        <StyledOPM>
            <div id="container">

                <div id="titulo">
                    <h1>OPERAÇÃO E MANUTENÇÃO</h1>
                </div>

                <div id="contInterno">
                    <div id="cont6">
                        <div id="cont">
                            <div className="funcoes"><CiCircleCheck /> <p>Gestão de Energia Elétrica</p></div>
                            <div className="funcoes"><CiCircleCheck /><p>Soluções Personalizadas</p></div>
                            <div className="funcoes"><CiCircleCheck /><p>Monitoramento</p></div>

                        </div>
                        <div id="cont">
                            <div className="funcoes"><CiCircleCheck /><p>Limpeza dos Módulos</p></div>
                            <div className="funcoes"><CiCircleCheck /><p>Garantias</p></div>
                            <div className="funcoes"><CiCircleCheck /><p>Suporte Técnico</p></div>
                        </div>
                    </div>
                    <div id="cont">
                        <div className="funcoes"><CiCircleCheck /><p>Manutenções Preventiva, Corretiva e de Condição</p></div>
                    </div>
                </div>

                <a href="/Orcamento" target="_blank"> <button>SOLICITE UM ORÇAMENTO</button> </a>


                <div id="icone">
                    <BsChevronDoubleDown />
                </div>
            </div>



            <div id="container2">

                <div id="containerFotos">

                    <div className="foto">
                        <img src={antes} alt="" />
                        <h3>Antes</h3>
                        <h4>9.510,9kwh/m</h4>
                    </div>

                    <div className="foto">
                        <img src={depois} alt="" />
                        <h3>Depois</h3>
                        <h4>9.510,9kwh/m</h4>
                    </div>

                </div>

                <div id="containerduvida">
                    <h2>Dúvidas frequentes</h2>
                    <div id="containerBotao">
                        <button className="pergunta">O que a O&M da Solar 4.0 oferece?</button>
                        <button className="pergunta"> Como tenho acesso a um orçamento personalizado?</button>
                        <button className="pergunta">Por que devo solicitar o serviço de Operação e Manutenção da Solar 4.0?</button>
                        <button className="pergunta">A O&M da Solar 4.0 atende qualquer marca de inversor  e módulos?</button>
                        <button className="pergunta"> Qual a diferença entre Manutenção Preventiva, Corretiva e de Condição?</button>
                        <button className="pergunta"> Como entrar em contato com a Solar 4.0?</button>
                    </div>
                </div>

            </div>
            <img  id="logo" src={logo} alt="" />
            <img  id="imgPlaca" src={placa} alt="" />
        </StyledOPM>

    )
}
