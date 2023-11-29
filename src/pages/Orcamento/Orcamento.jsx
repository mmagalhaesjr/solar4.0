import { StyledOrcamento } from "./styled";


import logo from "../../assets/logosIcones/logo.png"
import logo2 from "../../assets/logosIcones/intel-solar.png"
import casal from '../../assets/orcamento/casal.jpg'

import casa from '../../assets/orcamento/PNG/casa.png'
import ferramenta from '../../assets/orcamento/PNG/ferramenta.png'
import dinheiro from '../../assets/orcamento/PNG/dinheiro.png'
import mao from '../../assets/orcamento/PNG/mao.png'
import anos from '../../assets/orcamento/PNG/anos.png'
import medalha from '../../assets/orcamento/PNG/medalha.png'

import { AiOutlineFacebook } from "react-icons/ai";
import { MdOutlineMail } from "react-icons/md";
import { FiInstagram } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa6";
import { FaPaperPlane } from "react-icons/fa";




export default function Orcamento() {
    return (
        <StyledOrcamento >

            <section id="container">
                <div className="cabecalho">
                    <img src={logo} alt="logo" />
                    <img className="intel" src={logo2} alt="logo" />
                </div>

                <div className="cx1">
                    <img src={casal} alt="foto" />
                </div>

                <div className="cxTexto">
                    <h1>Economize até 95% em sua conta de luz!</h1>

                    <h2>E ainda fique protegido dos aumentos de,<br />
                        energia elétrica por pelo menos 25 anos.</h2>
                </div>



                <div className="cxForm">

                    <div className="iconesLatetral">
                        <img src={casa} alt="icones" />
                        <img src={mao} alt="icones" />
                        <img src={anos} alt="icones" />
                    </div>


                    <form action="https://formsubmit.co/contato@solar40.com.br" method="POST"  >

                        <input type="hidden" name="_cc" value="zonadamata@solar40.com.br"></input>
                        <input type="hidden" name="_captcha" value="false"></input>
                        <input type="hidden" name="email" placeholder="email" />
                        <input type="hidden" name="_next" value='https://www.instagram.com/solar4.0zm/' /> {/* pagina apos o envio */}
                        <input type="hidden" name="_autoresponse" value="Agradecemos pelo contato, responderemos em breve. Atenciosamente, Solar 4.0"></input>

                        <div className="inputBox">
                            <div className="cxInput">
                                <label htmlFor="text" className="labelImput">NOME:</label>
                                <input type="text" name="" className="nome" required />
                            </div>
                        </div>

                        <div className="inputBox">
                            <div className="cxInput">
                                <label htmlFor="email" className="labelImput">EMAIL:</label>
                                <input type="email" name="" className="emailTelefone" required />
                            </div>

                            <div className="cxInput">
                                <label htmlFor="text" className="labelImput">TELEFONE:</label>
                                <input type="text" name="" className="emailTelefone" required />
                            </div>
                        </div>

                        <div className="inputBox">
                            <div className="cxInput">
                                <label htmlFor="text" className="labelImput">CIDADE:</label>
                                <input type="text" name="" className="endereco" required />
                            </div>

                            <div className="cxInput">
                                <label htmlFor="text" className="labelImput">BAIRRO:</label>
                                <input type="text" name="" className="endereco" required />
                            </div>

                            <div className="cxInput" >
                                <label htmlFor="text" className="labelImput">ESTADO:</label>

                                <select name="estado" id="estado" required>
                                    <option value="trp">Selecione um estado</option>
                                    <option value="AC">Acre</option>
                                    <option value="AL">Alagoas</option>
                                    <option value="AP">Amapá</option>
                                    <option value="AM">Amazonas</option>
                                    <option value="BA">Bahia</option>
                                    <option value="CE">Ceará</option>
                                    <option value="DF">Distrito Federal</option>
                                    <option value="ES">Espírito Santo</option>
                                    <option value="GO">Goiás</option>
                                    <option value="MA">Maranhão</option>
                                    <option value="MT">Mato Grosso</option>
                                    <option value="MS">Mato Grosso do Sul</option>
                                    <option value="MG">Minas Gerais</option>
                                    <option value="PA">Pará</option>
                                    <option value="PB">Paraíba</option>
                                    <option value="PR">Paraná</option>
                                    <option value="PE">Pernambuco</option>
                                    <option value="PI">Piauí</option>
                                    <option value="RJ">Rio de Janeiro</option>
                                    <option value="RN">Rio Grande do Norte</option>
                                    <option value="RS">Rio Grande do Sul</option>
                                    <option value="RO">Rondônia</option>
                                    <option value="RR">Roraima</option>
                                    <option value="SC">Santa Catarina</option>
                                    <option value="SP">São Paulo</option>
                                    <option value="SE">Sergipe</option>
                                    <option value="TO">Tocantins</option>
                                </select>

                            </div>
                        </div>

                        <div className="inputBox">
                            <div className="cxInput">
                                <label htmlFor="text" className="labelImput">PADRÃO:</label>

                                <select name="adrao" id="padrao">
                                    <option value="trp">Tipo de Padrão</option>
                                    <option value="trp">Monofásico </option>
                                    <option value="tpa">Bifásico </option>
                                    <option value="tbn">Trifásico </option>
                                </select>
                            </div>

                            <div className="cxInput">
                                <label htmlFor="text" className="labelImput">MÉDIA DA CONTA DE LUZ:</label>
                                <input type="text" name="" className="instalacao" />
                            </div>

                            <div className="cxInput">
                                <label htmlFor="text" className="labelImput">TELHADO:</label>
                                <select name="telhado" id="telhado">
                                    <option value="trp">Tipo de Telhado</option>
                                    <option value="trp">Telhado de cerâmica </option>
                                    <option value="tpa">Telhado de concreto </option>
                                    <option value="tbn">Telhado de fibrocimento </option>
                                    <option value="tbn">Telhado de metal</option>
                                </select>
                            </div>
                        </div>

                        <div className="inputBox">
                            <div className="cxInput">
                                <label htmlFor="text" className="labelImput">MENSAGEM:</label>
                                <textarea rows="4" cols="50" type="text" name="" className="texto" />
                            </div>
                        </div>

                        <button>ENVIAR  <FaPaperPlane /> </button>

                    </form >

                    <div className="iconesLatetral">
                        <img src={dinheiro} alt="icones" />
                        <img src={medalha} alt="icones" />
                        <img src={ferramenta} alt="icones" />
                    </div>


                </div >

                <div className="rodape">
                    <img src={logo} alt="logo" />
                    <p>Todos Direitos Reservados</p>

                    <div className="icones">

                        <a href="https://www.facebook.com/profile.php?id=100059271851196&paipv=0&eav=AfaPpUuxBUsCFiNX0ed7ApQJ6us1oh-EJBbX3IIbv75E8dcIVGNfD4gBAqqSXjicD_E&_rdr" className="ico"><AiOutlineFacebook /></a>
                        <a href="https://www.contato@solar40.com.br" className="ico"><MdOutlineMail /></a>
                        <a href="https://www.instagram.com/solar4.0zm/" className="ico"><FiInstagram /></a>
                        <a href="https://api.whatsapp.com/send?phone=31997749508" target="_blank" rel="noreferrer" className="ico"><FaWhatsapp /></a>

                    </div>
                </div>
            </section>

        </StyledOrcamento >
    )
}
