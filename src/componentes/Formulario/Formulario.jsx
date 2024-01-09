import { StyledFormulario } from "./styled";

import casa from '../../assets/orcamento/PNG/casa.png'
import ferramenta from '../../assets/orcamento/PNG/ferramenta.png'
import dinheiro from '../../assets/orcamento/PNG/dinheiro.png'
import mao from '../../assets/orcamento/PNG/mao.png'
import anos from '../../assets/orcamento/PNG/anos.png'
import medalha from '../../assets/orcamento/PNG/medalha.png'


import { FaPaperPlane } from "react-icons/fa";

export default function Formulario() {
    return (
        <StyledFormulario>

            <div className="cxForm">

                <div className="iconesLatetral">
                    <img src={casa} alt="icones" />
                    <img src={mao} alt="icones" />
                    <img src={anos} alt="icones" />
                </div>


                <form action="https://formsubmit.co/mariaclara22@gmail.com" method="POST">
                    <input type="hidden" name="_captcha" value="false"></input>
                    <input type="hidden" name="email" placeholder="email" />
                    <input type="hidden" name="_next" value='https://www.solar40.com.br/#/confirmar' /> {/* pagina apos o envio */}
                    <input type="hidden" name="_autoresponse" value="Agradecemos pelo contato, responderemos em breve. Atenciosamente, Solar 4.0"></input>

                    <div className="inputBox">
                        <div className="cxInput">
                            <label htmlFor="nome" className="labelImput">NOME:</label>
                            <input type="text" name="nome" className="nome" required />
                        </div>
                    </div>

                    <div className="inputBox">
                        <div className="cxInput">
                            <label htmlFor="email" className="labelImput">EMAIL:</label>
                            <input type="text" name="email" className="emailTelefone" required />
                        </div>

                        <div className="cxInput">
                            <label htmlFor="text" className="labelImput">TELEFONE:</label>
                            <input type="text" name="telefone" className="emailTelefone" required />
                        </div>
                    </div>

                    <div className="inputBox">
                        <div className="cxInput">
                            <label htmlFor="text" className="labelImput">CIDADE:</label>
                            <input type="text" name="cidade" className="endereco" required />
                        </div>

                        <div className="cxInput">
                            <label htmlFor="text" className="labelImput">BAIRRO:</label>
                            <input type="text" name="bairro" className="endereco" required />
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

                            <select name="padrao" id="padrao">
                                <option value="não forncido">Tipo de Padrão</option>
                                <option value="Monofásico">Monofásico </option>
                                <option value="Bifásico">Bifásico </option>
                                <option value="Trifásico">Trifásico </option>
                            </select>
                        </div>

                        <div className="cxInput">
                            <label htmlFor="text" className="labelImput">MÉDIA DA CONTA DE LUZ:</label>
                            <input type="number" name="medida da conta de luz" className="instalacao" />
                        </div>

                        <div className="cxInput">
                            <label htmlFor="text" className="labelImput">TELHADO:</label>
                            <select name="telhado" id="telhado">
                                <option value="não forncido">Tipo de Telhado</option>
                                <option value="Telhado Colonial">Telhado Colonial </option>
                                <option value="Telhado de Fibrocimento">Telhado de Fibrocimento </option>
                                <option value="elhado Metálico">Telhado Metálico</option>
                                <option value="Laje exposta">Laje exposta</option>
                            </select>
                        </div>
                    </div>

                    <div className="inputBox">
                        <div className="cxInput">
                            <label htmlFor="text" className="labelImput">MENSAGEM:</label>
                            <textarea rows="4" cols="50" type="text" name="mensagem" className="texto" />
                        </div>
                    </div>
                    {/* <div className="inputBox">
                        <label htmlFor="email" className="labelInput">Mensagem:</label>
                        <textarea id="msg" className="imputMesnsagem" name="msg" rows="4" cols="50"></textarea>
                    </div> */}

                    <button>ENVIAR  <FaPaperPlane /> </button>

                </form >

                <div className="iconesLatetral">
                    <img src={dinheiro} alt="icones" />
                    <img src={medalha} alt="icones" />
                    <img src={ferramenta} alt="icones" />
                </div>


            </div >

        </StyledFormulario>
    )
}