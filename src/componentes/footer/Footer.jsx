import logo from '../../assets/logo.png';

import { AiOutlineInstagram, AiOutlineFacebook, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai';
import {BsFillTelephoneFill } from 'react-icons/Bs';



import { StyledRodape } from "./styled"

export default function Rodape() {  
    return (

        <StyledRodape>
            <div id="container">
                <div className="container">
                    <h3>Contato</h3>
                    <div className="contInterno" id="endereço" >
                        <div className="icones">
                            <BsFillTelephoneFill /> <p>(32) 99999999</p>
                        </div>
                        <div className="icones" >
                            <AiOutlineMail /><p>Solar@gmail.com</p>
                        </div>
                    </div>
                </div>

              

                <div className="container" id="endereço">
                    <h3>Redes Sociais</h3>
                    <ul className="containerRedesS" >
                        <li><a href="https://www.instagram.com/temasekjf" target="_blank" rel="noreferrer"><AiOutlineInstagram /></a></li>
                        <li><a href="https://www.facebook.com/profile.php?id=100095096174475" target="_blank" rel="noreferrer"><AiOutlineFacebook /></a></li>
                        <li><a href="https://www.linkedin.com/company/temasek-jf/about/?viewAsMember=true" target="_blank" rel="noreferrer"><AiFillLinkedin /></a></li>
                    </ul>
                </div>
                <div className="container">
                    <div className="contInterno" id="endereço" >
                        <a href="#" className="logo"><img src={logo} alt='logo' /></a>
                    </div>
                </div>
            </div>
            <h6>
                © 2023
                Todos os direitos reservados | Solar 4.0 | Política de Privacidade
            </h6>
            
        </StyledRodape>

    )
}