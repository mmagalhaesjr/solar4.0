import logo from '../../assets/logo2.png';

import { AiOutlineMail } from 'react-icons/ai';
import { CiFacebook } from 'react-icons/ci';
import {PiInstagramLogoThin } from 'react-icons/pi';
import {BsTelephone } from 'react-icons/bs';

import { StyledFooter } from "./styled"

export default function Footer() {  
    return (

        <StyledFooter id='footer'>
            <div id="container">
                <div className="container">
                    <h3>Contato</h3>
                    <div className="contContatos" id="endereco" >
                        <div className="icones">
                            <div><BsTelephone /> &nbsp;Belo Horizonte &nbsp; <p>(31)99774-9508 </p></div>
                            <div><BsTelephone /> &nbsp; Juiz de Fora &nbsp; <p>(32)98888-6000 </p></div>
                        </div>
                        <div className="icones" >
                           <div><AiOutlineMail /><p>Solar@gmail.com</p></div> 
                        </div>
                    </div>

                    
                </div>

                <div className="container" id="endereço">
                    <h3>Redes Sociais</h3>
                    <ul className="containerRedesS" >
                       <li><a href="https://www.instagram.com/solar4.0zm/" target="_blank" rel="noreferrer"> <PiInstagramLogoThin className='ico' /></a></li> 
                        <li><a href="https://www.facebook.com/profile.php?id=100059271851196&paipv=0&eav=AfaPpUuxBUsCFiNX0ed7ApQJ6us1oh-EJBbX3IIbv75E8dcIVGNfD4gBAqqSXjicD_E&_rdr"><CiFacebook className='ico' /></a></li>
                        {/* <li><a href="https://www.linkedin.com/company/temasek-jf/about/?viewAsMember=true" target="_blank" rel="noreferrer"><AiFillLinkedin /></a></li> */}
                    </ul>
                </div>
                <div className="container">
                    <div className="contLogo" id="endereço" >
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