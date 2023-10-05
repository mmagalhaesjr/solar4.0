import foto1 from '../../assets/parceiros/1.png'
import foto2 from '../../assets/parceiros/2.png'
import foto3 from '../../assets/parceiros/3.png'
import foto4 from '../../assets/parceiros/4.png'
import foto5 from '../../assets/parceiros/5.png'
import foto6 from '../../assets/parceiros/6.png'
import { StyledParceiros } from "./styled";


export default function Parceiros() {
    return (
        <StyledParceiros>
            
            <div id="linha"></div>

            <div id="titulo">
                <h1>NOSSOS PARCEIROS</h1>
            </div>

            <div id="container">
                <img src={foto1} alt="" />
                <img src={foto2} alt="" />
                <img src={foto3} alt="" />
                <img src={foto4} alt="" />
                <img src={foto5} alt="" />
                <img src={foto6} alt="" />


            </div>

            <div id="linha"></div>

        </StyledParceiros>
    )
}
