import { StyledQuemSomos } from "./styled";
import quemSomos from "../../assets/quemSomos.png"

export default function QuemSomos() {
    return(
        <StyledQuemSomos>
                <img id="img" src={quemSomos} alt="imagem" />

                <div id="texto">
                    <p>
                        A Solar 4.0 é uma empresa que faz a gestão da energia elétrica utilizando soluções verdes, 
                        atuando principalmente na Região Sudeste do país e possui polos em Minas Gerais, 
                        nas cidades de Belo Horizonte e Juiz de Fora. Reconhecida pelo serviço personalizado e inovador, 
                        ela proporciona autonomia para seus clientes e empresas por ser especializada em sistemas de geração 
                        de energia solar fotovoltaica, oferecendo as melhores e mais completas soluções em energia limpa e renovável.
                    </p>
                </div>

        </StyledQuemSomos>
    )
}
