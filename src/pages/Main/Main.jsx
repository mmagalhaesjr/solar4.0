import { StyledMain } from "./styled";
import placa from '../../assets/info.png';



export default function Main() {
    return (
        <StyledMain>
            <div id="container">
                <button>QUERO SABER MAIS</button>
                <img src={placa} alt='img placa solar' />
            </div>
           

        </StyledMain>
    )
}