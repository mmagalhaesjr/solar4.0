import logo from '../../assets/logosIcones/logoBranca.png';

import { AiOutlineMail } from 'react-icons/ai';
import { CiFacebook } from 'react-icons/ci';
import { PiInstagramLogoThin } from 'react-icons/pi';
import { BsTelephone } from 'react-icons/bs';


import { StyledFooter } from "./styled"

import { useRef } from 'react';

export default function Footer() {
    const footerRef = useRef(null);


    return (

        <StyledFooter ref={footerRef} id='footer'>
            <div id="container">

                <div className="caixa">
                    <h3 >Contato</h3>
                    <div className="contContatos"  >
                        <div className="cxIcones">
                            <BsTelephone /> &nbsp;&nbsp; <p>(31)&nbsp;99774-9508 </p>
                        </div>
                        <div className="cxIcones" >
                            <AiOutlineMail />&nbsp;<p>contato@solar40.com.br</p>
                        </div>
                    </div>



                </div>

                <div className="caixa" >
                    <h3 >Redes Sociais</h3>
                    <div className="contRedes" >

                        <div className="cxIcones" >
                            <a href="https://www.instagram.com/solar4.0/" target="_blank" rel="noreferrer"> <PiInstagramLogoThin className='ico' /></a>
                        </div>

                        <div className="cxIcones"><a href="https://web.facebook.com/solar40mg">
                            <CiFacebook className='ico' /></a>
                        </div>

                    </div>
                </div>

                <div className="caixa">
                    <div className="cxLogo" >
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