import logo from '../../assets/logo-preto.png';

import { AiOutlineInstagram, AiOutlineFacebook, /*AiFillLinkedin*/ AiOutlineMail } from 'react-icons/ai';
import {BsFillTelephoneFill } from 'react-icons/bs';

import { StyledFooter } from "./styled"

export default function Footer() {  
    return (

        <StyledFooter>
            <div id="container">
                <div className="container">
                    <h3>Contato</h3>
                    <div className="contInterno" id="endereco" >
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
                       <li><a href="https://www.instagram.com/solar4.0zm/" target="_blank" rel="noreferrer"> <AiOutlineInstagram /></a></li> 
                        <li><a href="https://www.facebook.com/profile.php?id=100059271851196&paipv=0&eav=AfaPpUuxBUsCFiNX0ed7ApQJ6us1oh-EJBbX3IIbv75E8dcIVGNfD4gBAqqSXjicD_E&_rdr"><AiOutlineFacebook /></a></li>
                        {/* <li><a href="https://www.linkedin.com/company/temasek-jf/about/?viewAsMember=true" target="_blank" rel="noreferrer"><AiFillLinkedin /></a></li> */}
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
            
        </StyledFooter>

    )
}