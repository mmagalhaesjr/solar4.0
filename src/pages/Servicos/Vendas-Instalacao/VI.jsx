import { StyledVI } from "./styled";

import foto1 from '../../../assets/ve/contaAntes.png'
import foto2 from '../../../assets/ve/contaDepois.png'
import iconeV from '../../../assets/ve/iconeV.png'
import placa from '../../../assets/fundoOem.jpg'
// import logo from '../../../assets/logosIcones/logo2.png'
import { FaWhatsapp } from "react-icons/fa6";

import { CiCircleCheck } from 'react-icons/ci';
import { BsChevronDoubleDown } from 'react-icons/bs'

import { useState } from 'react';
import Footer from "../../../componentes/Footer/Footer";
import Header2 from '../../../componentes/Header2/Header2';




export default function VI() {

    const [mostrarRespostas, setMostrarRespostas] = useState(false);

    const Respostas = () => {
        setMostrarRespostas(!mostrarRespostas);
    };

    return (
        <>
            <Header2 />
            <StyledVI mostrarRespostas={mostrarRespostas}>
                <div id="container">
                    <div id="titulo">
                        <h1>VENDAS E INSTALAÇÕES</h1>
                    </div>

                    <div id="subTitulo">
                        <p>
                            Invista em sua própria fonte de energia sustentável e reduza
                            os gastos de energia  na sua casa, empresa ou agronegócio.
                        </p>
                    </div>

                    <div id="contInterno">
                        <div id="cont6">
                            <div id="cont">
                                <div className="funcoes"><CiCircleCheck className="chek" /><p>Gestão de Energia Elétrica</p></div>
                                <div className="funcoes"><CiCircleCheck className="chek" /><p>Soluções Personalizadas</p></div>
                                <div className="funcoes"><CiCircleCheck className="chek" /><p>Garantia Iltelbras</p></div>
                            </div>
                            <div id="cont">
                                <div className="funcoes"><CiCircleCheck className="chek" /><p>Manutenções</p></div>
                                <div className="funcoes"><CiCircleCheck className="chek" /><p>Garantias</p></div>
                                <div className="funcoes"><CiCircleCheck className="chek" /><p>Suporte Técnico</p></div>
                            </div>
                        </div>

                    </div>

                    <div id="icone">
                        <BsChevronDoubleDown />
                    </div>

                </div>

                <div id="containerContas">
                    <section>
                        <div id="antes" className="contas">
                            <img src={foto1} alt="foto" />
                            <h3>Antes</h3>
                            <div className="valores" id="valorAntes"><h2>R$ 637,74</h2></div>
                        </div>

                        <div id="iconeV">
                            <img src={iconeV} alt="foto" />
                        </div>

                        <div id="depois" className="contas">
                            <img src={foto2} alt="foto" />
                            <h3>Depois</h3>
                            <div className="valores" id="valorDepois"><h2>R$ 113,74</h2></div>
                        </div>
                    </section>
                </div>

                <div id="containerduvida">

                    <h1 id="tituloDuvidas">Dúvidas frequentes </h1>

                    <div id="containerBotao">
                        <button className="pergunta" onClick={Respostas}><p>Como funciona um sistema de energia solar fotovoltaico?</p></button>
                        <div className="respostas">
                            <p>
                                sistemas são compostos por dois componentes principais: os painéis solares, que captam a 	luz do sol e a transforma em energia elétrica, e os inversores, que são responsáveis por 	compatibilizar e gerenciar a energia gerada pelos painéis em conjunto à rede elétrica. Esse 	sistema funciona de forma completamente automática, além disso, contamos com a garantia 	Intelbras!
                            </p>
                        </div>
                        <button className="pergunta" onClick={Respostas}><p>Como é calculado o custo para instalação do sistema de energia solar?</p></button>
                        <div className="respostas">
                            <p>
                                Realizamos um projeto a partir da sua conta de luz, além de entender as condições de 	instalação do local, limite de disponibilidade do ramal de entrada, e outras variáveis de 	cada caso e necessidade de cada cliente. Oferecemos um orçamento personalizado e gratuito.
                            </p>
                        </div>
                        <button className="pergunta" onClick={Respostas}><p>A geração de energia solar é suficiente para suprir toda casa ou só parte dela?</p></button>
                        <div className="respostas">
                            <p>
                                Isso vai depender do projeto que foi contratado para sua propriedade. O sistema 	fotovoltaico é modular e você vai adquirir e dimensionar conforme sua necessidade de 	consumo. Você pode dimensionar um sistema para gerar só parte da energia consumida, ou até 	95% de toda energia que consumir. Você também pode gerar um excedente para consumo no mesmo 	local quando necessário, ou compartilhar esses créditos em um outro imóvel da mesma 	titularidade.
                            </p>
                        </div>
                        <button className="pergunta" onClick={Respostas}><p>É necessária alguma adaptação no local de instalação?</p></button>
                        <div className="respostas">
                            <p>
                                Não, você pode utilizar a fiação elétrica já existente da sua casa ou empresa, bem como o 	seu telhado ou laje para fixação dos painéis. É necessário realizar a troca do relógio de 	força por um relógio bidirecional.
                            </p>
                        </div>
                        <button className="pergunta" onClick={Respostas}><p>Como tenho acesso a um orçamento personalizado?</p></button>
                        <div className="respostas">
                            <p>
                            <a href="/Orcamento" target="_blank"> Solicite um orçamento ou entre em contato conosco através do WhatsApp. <a href="https://api.whatsapp.com/send?phone=31997749508" target="_blank" rel="noreferrer" className="ico"><FaWhatsapp /></a> </a>
                            </p>
                        </div>
                    </div>
                </div>

                {/* <img id="logo" src={logo} alt="" /> */}
                <img id="imgPlaca" src={placa} alt="" />
            </StyledVI>
            <Footer />
        </>

    )
}
