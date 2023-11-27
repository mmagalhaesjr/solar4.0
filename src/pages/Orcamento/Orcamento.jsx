import { StyledOrcamento } from "./styled";


import logo from "../../assets/logosIcones/logo.png"
import logo2 from "../../assets/logosIcones/intel-solar.png"
import casal from '../../assets/orcamento/casal.jpg'

import { AiOutlineFacebook } from "react-icons/ai";
import { MdOutlineMail } from "react-icons/md";
import { FiInstagram } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa6";


export default function Orcamento() {
    return (
        <StyledOrcamento id="orcamento">

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
                <form action="https://formsubmit.co/contato@temasekjf.com.br" method="POST"  >

                    <div id="nome">
                        <input type="text" name="" className="nome" />
                    </div>

                    <div id="emailTelefone">
                        <input type="email" name="" className="emailTelefone" />
                        <input type="text" name="" className="emailTelefone" />
                    </div>

                    <div id="endereco">
                        <input type="text" name="" className="endereco" />
                        <input type="text" name="" className="endereco" />
                        <input type="text" name="" className="endereco" id="estado" />
                    </div>

                    <div id="instalacao">
                        <input type="text" name="" className="instalacao" />
                        <input type="text" name="" className="instalacao" />
                        <input type="text" name="" className="instalacao" />
                    </div>

                    <div id="msg">
                        <label htmlFor="email" className="msg"></label>
                        <textarea id="msg" className="imputMesnsagem" name="msg" rows="4" cols="50"></textarea>
                    </div>

                    <button>ENVIAR</button>



                </form>
            </div>

            <div className="rodape">
                <img src={logo} alt="logo" />
                <p>Todos Direitos Reservados</p>

                <div className="icones">

                    <div className="ico"><AiOutlineFacebook /></div>
                    <div className="ico"><MdOutlineMail /></div>
                    <div className="ico"><FiInstagram /></div>
                    <div className="ico"><IoLocationOutline /></div>
                    <div className="ico"><FaWhatsapp /></div>

                </div>
            </div>

        </StyledOrcamento>
    )
}
