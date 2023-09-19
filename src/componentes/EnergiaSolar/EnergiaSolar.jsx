import { StyledEnergiasolar } from "./styled";
// import imgCasa from "../../assets/casinha_sbol.svg"


export default function Energiasolar() {
    return (
        <StyledEnergiasolar>
            <div id="titulo">
                <h1>COMO FUNCIONA A <h2>ENERGIA SOLAR</h2> </h1>
            </div>

            <div id="imgCasa">
                {/* <img id="img" src={imgCasa} alt="imagem" /> */}
                
                <div className="circulo" id="circulo1" >1</div>
                <div className="circulo" id="circulo2" >2</div>
                <div className="circulo" id="circulo3" >3</div>
                <div className="circulo" id="circulo4" >4</div>
                <div className="circulo" id="circulo5" >5</div>
            </div>
        </StyledEnergiasolar>
    )
}
