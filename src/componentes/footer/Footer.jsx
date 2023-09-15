import logo from '../../assets/logo.png';

import { AiOutlineInstagram, AiOutlineFacebook, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai';
import { BsFillTelephoneFill } from 'react-icons/bs';
// import { ImLocation2 } from 'react-icons/im';

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

                {/* <ul className="container" id='endereco'>
                    <li>
                        <a href="https://www.google.com.br/maps/@-21.758616,-43.3502606,3a,75y,51.19h,78.22t/data=!3m6!1e1!3m4!1sUnOASUSPrhLND_fyIgVOvw!2e0!7i16384!8i8192?entry=ttu" target="_blank" rel="noreferrer" >
                            <h3>Endereço</h3>
                            <div className="contInterno" id="endereço">
                                <div className="icones">
                                    <ImLocation2 /><p>Av Rio Branco, 1899 </p>
                                </div>
                                <p></p>
                                <p> CEP:  </p>
                            </div>
                        </a>
                    </li>
                </ul> */}

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
                Todos os direitos reservados | Temasek Coworking | Política de Privacidade
            </h6>
        </StyledRodape>

    )
}