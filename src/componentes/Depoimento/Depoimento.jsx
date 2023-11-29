import { StyledDepoimento } from "./styled";

import estrela from '../../assets/logosIcones/estrela.png'


export default function Depoimento(p) {

    return (
        <StyledDepoimento>
            <div className="box-depoimento">
                <div className="cx-img">
                    <img className="pessoas" src={p.img} alt="imagem" />
                    <h3>{p.nome}</h3>
                </div>
                <div className="estrelas">
                    <img src={estrela} alt="estrelas" />
                    <p>{p.data}</p>
                </div>

                <div className="texto">
                    <p>
                        {p.texto}
                    </p>
                </div>
            </div>
        </StyledDepoimento>

    )
}