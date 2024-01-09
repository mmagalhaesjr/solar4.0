import { StyledConfirmarEnvio } from "./styled";

import img1 from '../../assets/logosIcones/logoB.png'
import img2 from '../../assets/logosIcones/intel-solar.png'

export default function ConfirmarEnvio() {

    return (

        <StyledConfirmarEnvio>
            <div>
                <h1>MENSAGEM ENVIADA COM SUCESSO!</h1>
                <p>EM BREVE RETORNAREMOS O CONTATO</p>
            </div>

            <div className="cxLogo">
                <img src={img1} alt="logo" />
                <img id="img2" src={img2} alt="logo" />
            </div>

            <a href="#">VOLTAR PARA PAGINA INICIAL</a>
        </StyledConfirmarEnvio>
    )
}