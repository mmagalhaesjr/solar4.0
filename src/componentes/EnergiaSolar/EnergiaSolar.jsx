import { useState } from "react";
import { StyledEnergiasolar } from "./styled";
import img1 from "../../assets/1.png";
import img2 from "../../assets/2.png";
import img3 from "../../assets/3.png";
import img4 from "../../assets/4.png";
import img5 from "../../assets/5.png";

// import casa from "../../assets/casa.png"

export default function Energiasolar() {
    const [infoVisible, setInfoVisible] = useState(null);

    const handleCircleMouseEnter = (circleId) => {
        setInfoVisible(circleId);
    };

    const handleCircleMouseLeave = () => {
        setInfoVisible(null);
    };

    return (
        <StyledEnergiasolar>
            <div id="container">

                <div id="titulo">
                    <h1>
                        COMO FUNCIONA A <h2>ENERGIA SOLAR</h2>{" "}
                    </h1>
                </div>

                

                <div
                    className="circulo"
                    id="circulo1"
                    onMouseEnter={() => handleCircleMouseEnter("info1")}
                    onMouseLeave={handleCircleMouseLeave}
                >
                    1
                </div>
                <div
                    className="circulo"
                    id="circulo2"
                    onMouseEnter={() => handleCircleMouseEnter("info2")}
                    onMouseLeave={handleCircleMouseLeave}
                >
                    2
                </div>
                <div
                    className="circulo"
                    id="circulo3"
                    onMouseEnter={() => handleCircleMouseEnter("info3")}
                    onMouseLeave={handleCircleMouseLeave}
                >
                    3
                </div>
                <div
                    className="circulo"
                    id="circulo4"
                    onMouseEnter={() => handleCircleMouseEnter("info4")}
                    onMouseLeave={handleCircleMouseLeave}
                >
                    4
                </div>
                <div
                    className="circulo"
                    id="circulo5"
                    onMouseEnter={() => handleCircleMouseEnter("info5")}
                    onMouseLeave={handleCircleMouseLeave}
                >
                    5
                </div>
            </div>

            <div id="ContainerInfo">
                <div
                    id="info1"
                    className={`info ${infoVisible === "info1" ? "info-visible" : ""}`}
                >
                    <img id="img" src={img5} alt="imagem" />
                    <div className="imgInfo">
                        <p>Painéis fotovoltaicos: Captam a energia do sol</p>
                    </div>
                </div>

                <div
                    id="info2"
                    className={`info ${infoVisible === "info2" ? "info-visible" : ""}`}
                >
                    <img id="img" src={img2} alt="imagem" />
                    <div className="imgInfo">
                        <p>
                            Medidor bidirecional: Registra a energia que está sendo fornecida à
                            rede e a que está sendo utilizada.
                        </p>
                    </div>
                </div>

                <div
                    id="info3"
                    className={`info ${infoVisible === "info3" ? "info-visible" : ""}`}
                >
                    <img id="img" src={img3} alt="imagem" />
                    <div className="imgInfo">
                        <p>
                            Inversor: A energia é transformada pelo inversor e inserida na rede
                            elétrica local.
                        </p>
                    </div>
                </div>

                <div
                    id="info4"
                    className={`info ${infoVisible === "info4" ? "info-visible" : ""}`}
                >
                    <img id="img" src={img1} alt="imagem" />
                    <div className="imgInfo">
                        <p>
                            Taxa mínima: Você paga apenas a taxa mínima pelo uso da rede ou a
                            diferença entre o consumo total e a energia injetada.
                        </p>
                    </div>
                </div>

                <div
                    id="info5"
                    className={`info ${infoVisible === "info5" ? "info-visible" : ""}`}
                >
                    <img id="img" src={img4} alt="imagem" />
                    <div className="imgInfo">
                        <p>
                            Energia: Caso o seu sistema produza mais energia do que você
                            consome, o excesso é convertido em créditos que podem ser
                            transferidos para outras contas em seu nome.
                        </p>
                    </div>
                </div>
            </div>

        </StyledEnergiasolar>
    );
}
