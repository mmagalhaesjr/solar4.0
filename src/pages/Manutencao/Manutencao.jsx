import { SttledManutencao } from "./styled";
// import logo from '../../assets/logosIcones/logob.png'
import RodapeLandingPages from '../../componentes/RodapeLandingPages/RodapeLandingPages';


export default function Manutencao(){
    return(
        <SttledManutencao>

            <div id="container">
                
                <h1> Estamos em manutenção. </h1>
                <p>Para dúvidas, entre em contato.</p>
            </div>

            <RodapeLandingPages/>
        
        </SttledManutencao>
    )
}