import { StyledServicos, StyledServicos2 } from "./styled";

import antes from '../../assets/antes.jpg'
import depois from '../../assets/depois.jpg'

import { AiOutlineCheck } from 'react-icons/ai';


export default function Servicos() {
    return (

        <>
            <StyledServicos>
                <div id="titulo">
                    <h1>PROJETO E INSTALAÇÃO DE ENRGIA SOLAR</h1>
                </div>

                <div id="container">
                    <div className="lado">

                        <div className="card">
                            <div className="circulo">1</div>
                            <h3>Orçamento</h3>
                            <p>Após análise do seu caso, receba um orçamento de forma gratuita.</p>
                        </div>

                        <div className="card">
                            <div className="circulo">2</div>
                            <h3>Projeto</h3>
                            <p>
                                Nós fazemos o projeto do seu sistema utilizando a
                                tecnologia intelbras, com foco em qualidade e segurança.
                            </p>
                        </div>

                        <div className="card">
                            <div className="circulo">3</div>
                            <h3>Validação</h3>
                            <p>
                                Gerenciamos todo o procedimento burocrático para registrar o seu sistema de geração solar junto às autoridades competentes e para
                                ativar sua conexão com a distribuidora de energia.
                            </p>
                        </div>
                    </div>


                    <div className="lado">
                        <div className="card">
                            <div className="circulo">4</div>
                            <h3>instalação</h3>
                            <p>
                                Instalação rápida e limpa. O sistema é instalado pela equipe de profissionais capacitados e experientes da Solar 4.0.
                            </p>
                        </div>

                        <div className="card">
                            <div className="circulo">5</div>
                            <h3>Conexão</h3>
                            <p>
                                Realizamos a troca do medidor comum pelo novo medidor bidirecional, que registra o consumo de energia fornecido à rede.
                            </p>
                        </div>

                        <div className="card">
                            <div className="circulo">6</div>
                            <h3>Monitoramento</h3>
                            <p>
                                Agora você possui autonomia energética.
                                Monitore sua geração em tempo real pelo smatphone ou computador. Seu sistema possui garantia total!
                            </p>
                        </div>
                    </div>

                </div>

                <a href="/Orcamento" target="_blank"><button>QUERO ENERGIA SOLAR</button></a>
            </StyledServicos>

            <StyledServicos2>
                <div id="titulo">
                    <h1>O&M</h1>
                    <h2>OPERAÇÃO E MANUTENÇÃO</h2>
                    <h3>Para você que já possui o sistema de energia solar e busca maxima performance</h3>
                </div>

                

                <div id="container">

                    <div className="lado1">

                        <div className="sessao">
                            <div className="icone"><AiOutlineCheck /></div>
                            <div className="divInterna"><p>Gestão de Energia Elétrica</p></div>
                        </div>

                        <div className="sessao">
                            <div className="icone"><AiOutlineCheck /></div>
                            <div className="divInterna"><p>Soluções Personalizadas</p></div>
                        </div>

                        <div className="sessao">
                            <div className="icone"><AiOutlineCheck /></div>
                            <div className="divInterna"><p>Monitoramento</p></div>
                        </div>

                        <div className="sessao">
                            <div className="icone"><AiOutlineCheck /></div>
                            <div className="divInterna"><p>Manutenção</p></div>
                        </div>

                        <div className="sessao">
                            <div className="icone"><AiOutlineCheck /></div>
                            <div className="divInterna"><p>Limpeza dos Módulos</p></div>
                        </div>

                        <div className="sessao">
                            <div className="icone"><AiOutlineCheck /></div>
                            <div className="divInterna"><p>Garantias</p></div>
                        </div>

                        <div className="sessao">
                            <div className="icone"><AiOutlineCheck /></div>
                            <div className="divInterna"><p>Suporte Técnico</p></div>
                        </div>


                    </div>
                    <div className="lado2">

                        <div className="cxFoto">
                            <p className="cxtitulo">Antes</p>
                            <img src={antes} alt="" />
                            <p>9.510,9KWH/m</p>
                        </div>

                        <div className="cxFoto">
                            <p className="cxtitulo">Depois</p>
                            <img src={depois} alt="" />
                            <p>13.600KWH/m</p>
                        </div>

                    </div>

                </div>

            </StyledServicos2>
        </>

    )
}
