import { StyledErro } from "./styled";

import foto from '../../assets/logosIcones/logo2.png'


export default function Error404() {
    return (
        <StyledErro>
            <img src={foto} alt="logo" />
            <div>
                <h1>404 - Página não encontrada</h1>
                <p>Desculpe, a página que você está procurando não pode ser encontrada no momento.</p>
            </div>
            <a href="/" > Voltar para Home</a>
        </StyledErro>
    );
}
