import logo from '../../assets/logosIcones/logoBranca.png';

import { AiOutlineMail } from 'react-icons/ai';
import { CiFacebook } from 'react-icons/ci';
import {PiInstagramLogoThin } from 'react-icons/pi';
import {BsTelephone } from 'react-icons/bs';


import { StyledFooter } from "./styled"

import { useRef } from 'react';

export default function Footer() {  
    const footerRef = useRef(null);


    return (

        <StyledFooter ref={footerRef} id='footer'>
            <div id="container">
                
                <div className="container">
                    <h3 className='tituloContato'>Contato</h3>
                    <div className="contContatos" id="endereco" >
                        <div className="icones">
                            <div> <span> Belo Horizonte </span> &nbsp; <BsTelephone /> &nbsp;&nbsp; <p>(31)&nbsp;99774-9508 </p></div>
                            
                        </div>
                        <div className="icones" >
                           <div><AiOutlineMail />&nbsp;<p>contato@solar40.com.br</p></div> 
                        </div>
                    </div>

                    <div className="contContatos" id="endereco" >
                        <div className="icones">
                        <div> <span>Juiz de Fora </span> &nbsp; <BsTelephone /> &nbsp; &nbsp;  <p>(32)&nbsp;98888-6000 </p></div>
                            
                        </div>
                        <div className="icones" >
                           <div><AiOutlineMail />&nbsp;<p>zonadamata@solar40.com.br</p></div> 
                        </div>
                    </div>

                    
                </div>

                <div className="container" id="endereço">
                    <h3>Redes Sociais</h3>
                    <ul className="containerRedesS" >
                       <li><a href="https://www.instagram.com/solar4.0/" target="_blank" rel="noreferrer"> <PiInstagramLogoThin className='ico' /></a></li> 
                        <li><a href="https://web.facebook.com/solar40mg"><CiFacebook className='ico' /></a></li>
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