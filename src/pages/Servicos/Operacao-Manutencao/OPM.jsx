import { useState, useEffect } from 'react';
import { StyledOPM } from "./styled";
import { CiCircleCheck } from 'react-icons/ci';
import { BsChevronDoubleDown } from 'react-icons/bs'

import antes from '../../../assets/antes.jpg'
import depois from '../../../assets/depois.jpg'
import placa from '../../../assets/fundoOem.jpg'
// import logo from '../../../assets/logosIcones/logo2.png'
import { FaWhatsapp } from "react-icons/fa6";
import Footer from '../../../componentes/Footer/Footer';
import Header2 from '../../../componentes/Header2/Header2';


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
        <>
         <Header2 />
            <StyledOPM mostrarRespostas={mostrarRespostas} className={scrollY > 100 ? 'rolagem' : ''}>
                <div id="container">

                    <div id="titulo">
                        <h1>OPERAÇÃO E MANUTENÇÃO</h1>
                    </div>

                    <div id="contInterno">
                        <div id="cont6">
                            <div id="caixa3">
                                <div className="funcoes"><CiCircleCheck /> <p>Gestão de Energia Elétrica</p></div>
                                <div className="funcoes"><CiCircleCheck /><p>Soluções Personalizadas</p></div>
                                <div className="funcoes"><CiCircleCheck /><p>Monitoramento</p></div>

                            </div>
                            <div id="caixa3">
                                <div className="funcoes"><CiCircleCheck /><p>Limpeza dos Módulos</p></div>
                                <div className="funcoes"><CiCircleCheck /><p>Garantias</p></div>
                                <div className="funcoes"><CiCircleCheck /><p>Suporte Técnico</p></div>
                            </div>
                        </div>
                        <div id="cont1">
                            <div id="caixa1">
                                <div className="funcoes"><CiCircleCheck /><p>Manutenções Preventiva, Corretiva e de Condição</p></div>
                            </div>
                        </div>
                    </div>

                    <a href="/Orcamento" target="_blank"> <button>SOLICITE UM ORÇAMENTO</button> </a>


                    <div id="icone">
                        <BsChevronDoubleDown />
                    </div>
                </div>



                <div id="container2">

                    <div id="containerFotos">

                        <div className="cxFoto" id='antes'>
                            <img src={antes} alt="" />
                            <h3>Antes</h3>
                            <h4>9.510,9kwh/m</h4>
                        </div>

                        <div className="cxFoto" id='depois'>
                            <img src={depois} alt="" />
                            <h3>Depois</h3>
                            <h4>13.600kwh/m</h4>
                        </div>

                    </div>



                    <div id="containerduvida">
                        <h2>Dúvidas frequentes</h2>
                        <div id="containerBotao">

                            <button className="pergunta" onClick={Respostas}><p>O que a O&M da Solar 4.0 oferece?</p></button>
                            <div className="respostas">
                                <p>
                                    Nós oferecemos um serviço completo de operação e manutenção do seu sistema 	fotovoltaico. Desde limpeza das placas solares, até o monitoramento da 	geração de energia 	que o seu sistema produz.
                                </p>
                            </div>
                            <button className="pergunta" onClick={Respostas}> <p>Como tenho acesso a um orçamento personalizado?</p></button>
                            <div className="respostas">
                                <p>
                                    Entrando em contato conosco, nós precisaremos apenas de algumas informações 	já te 	enviaremos um orçamento gratuito, personalizado, que atenda às suas 	necessidades e 	objetivos.
                                </p>
                            </div>
                            <button className="pergunta" onClick={Respostas}><p>Por que devo solicitar o serviço de Operação e Manutenção da Solar 4.0?</p></button>
                            <div className="respostas">
                                <p>
                                    O serviço de operação e manutenção do sistema solar deve ser acionado 	conforme a 	necessclassNameade de conservação, a fim de proporcionar máxima eficiência dos módulos.
                                </p>
                            </div>
                            <button className="pergunta" onClick={Respostas}><p>A O&M da Solar 4.0 atende qualquer marca de inversor  e módulos?</p></button>
                            <div className="respostas">
                                <p>
                                    Sim! Nossas instalações são feitas com produtos Intelbras, mas atendemos qualquer 	sistema fotovoltaico, independente da marca de fabricação.
                                </p>
                            </div>
                            <button className="pergunta" onClick={Respostas}> <p>Qual a diferença entre Manutenção Preventiva, Corretiva e de Condição?</p></button>
                            <div className="respostas">
                                <p>
                                    A manutenção preventiva, como o nome já sugere, previne desgastes das 	placas, evitando 	problemas futuros. A manutenção corretiva corrige alguma imperfeição do sistema, e a manutenção de condição.
                                </p>
                            </div>
                            <button className="pergunta" onClick={Respostas}><p>Como entrar em contato com a Solar 4.0?</p></button>
                            <div className="respostas">
                                <p>
                                    <a href="/Orcamento" target="_blank"> Solicite um orçamento ou entre em contato conosco através do WhatsApp. <a href="https://api.whatsapp.com/send?phone=31997749508" target="_blank" rel="noreferrer" className="ico"><FaWhatsapp /></a> </a>
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
                {/* <img id="logo" src={logo} alt="" /> */}
                <img id="imgPlaca" src={placa} alt="" />
            </StyledOPM>
            <Footer />
        </>


    )
}
