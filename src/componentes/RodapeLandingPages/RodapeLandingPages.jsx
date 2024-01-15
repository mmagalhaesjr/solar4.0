import { StyledRodapeLandingPages } from "./styled";

import { AiOutlineFacebook } from "react-icons/ai";
import { MdOutlineMail } from "react-icons/md";
import { FiInstagram } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa6";

import logo from "../../assets/logosIcones/logo.png"


export default function RodapeLandingPages() {
    return (
        <StyledRodapeLandingPages>

            <div className="rodape">
                <img src={logo} alt="logo" />
                <p>Todos Direitos Reservados</p>

                <div className="icones">

                    <a href="https://www.facebook.com/solar40mg?mibextid=ZbWKwL" className="ico"><AiOutlineFacebook /></a>
                    <a href="https://www.contato@solar40.com.br" className="ico"><MdOutlineMail /></a>
                    <a href="https://www.instagram.com/solar4.0?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="ico"><FiInstagram /></a>
                    <a href="https://api.whatsapp.com/send?phone=31997749508" target="_blank" rel="noreferrer" className="ico"><FaWhatsapp /></a>

                </div>
            </div>

        </StyledRodapeLandingPages>
    )
}