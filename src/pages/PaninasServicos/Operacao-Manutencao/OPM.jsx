import { useState,useEffect } from 'react';
import { StyledOPM } from "./styled";
import { CiCircleCheck } from 'react-icons/ci';
import { BsChevronDoubleDown } from 'react-icons/bs'

import antes from '../../../assets/antes.jpg'
import depois from '../../../assets/depois.jpg'
import placa from '../../../assets/fundoOem.jpg'
import logo from '../../../assets/logo2.png'


export default function OPM() {

    const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
          window.removeEventListener('scroll', handleScroll);
      };
  }, []);

  const handleScroll = () => {
      setScrollY(window.scrollY);
  };

    const [mostrarRespostas, setMostrarRespostas] = useState(false);

    const Respostas = () => {
        setMostrarRespostas(!mostrarRespostas);
    };

    return (
        <StyledOPM mostrarRespostas={mostrarRespostas} className={scrollY > 100 ? 'rolagem' : ''}>
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

                    <div className="foto" id='antes'>
                        <img src={antes} alt="" />
                        <h3>Antes</h3>
                        <h4>9.510,9kwh/m</h4>
                    </div>

                    <div className="foto" id='depois'>
                        <img src={depois} alt="" />
                        <h3>Depois</h3>
                        <h4>13.600kwh/m</h4>
                    </div>

                </div>



                <div id="containerduvida">
                    <h2>Dúvidas frequentes</h2>
                    <div id="containerBotao">

                        <button className="pergunta" onClick={Respostas}>O que a O&M da Solar 4.0 oferece?</button>
                        <div className="respostas">
                            <p>
                            Nós oferecemos um serviço completo de operação e manutenção do seu sistema 	fotovoltaico. Desde limpeza das placas solares, até o monitoramento da 	geração de energia 	que o seu sistema produz.
                            </p>
                        </div>
                        <button className="pergunta" onClick={Respostas}> Como tenho acesso a um orçamento personalizado?</button>
                        <div className="respostas">
                            <p>
                            Entrando em contato conosco, nós precisaremos apenas de algumas informações 	já te 	enviaremos um orçamento gratuito, personalizado, que atenda às suas 	necessidades e 	objetivos.
                            </p>
                        </div>
                        <button className="pergunta" onClick={Respostas}>Por que devo solicitar o serviço de Operação e Manutenção da Solar 4.0?</button>
                        <div className="respostas">
                            <p>
                            O serviço de operação e manutenção do sistema solar deve ser acionado 	conforme a 	necessclassNameade de conservação, a fim de proporcionar máxima eficiência dos módulos.
                            </p>
                        </div>
                        <button className="pergunta" onClick={Respostas}>A O&M da Solar 4.0 atende qualquer marca de inversor  e módulos?</button>
                        <div className="respostas">
                            <p>
                            Sim! Nossas instalações são feitas com produtos Intelbras, mas atendemos qualquer 	sistema fotovoltaico, independente da marca de fabricação.
                            </p>
                        </div>
                        <button className="pergunta" onClick={Respostas}> Qual a diferença entre Manutenção Preventiva, Corretiva e de Condição?</button>
                        <div className="respostas">
                            <p>
                            A manutenção preventiva, como o nome já sugere, previne desgastes das 	placas, evitando 	problemas futuros. A manutenção corretiva corrige alguma imperfeição do sistema, e a manutenção de condição.
                            </p>
                        </div>
                        <button className="pergunta" onClick={Respostas}> Como entrar em contato com a Solar 4.0?</button>
                        <div className="respostas">
                            <p>
                                contato...
                            </p>
                        </div>
                    </div>
                </div>

            </div>
            <img id="logo" src={logo} alt="" />
            <img id="imgPlaca" src={placa} alt="" />
        </StyledOPM>

    )
}
