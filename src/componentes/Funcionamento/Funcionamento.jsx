import { StyledFuncionamento } from "./styled";
import { useState } from "react";

import img1 from "../../assets/1.png";
import img2 from "../../assets/2.png";
import img3 from "../../assets/3.png";
import img4 from "../../assets/4.png";
import img5 from "../../assets/5.png";

import { TbSolarPanel } from 'react-icons/tb';
import { MdModelTraining } from 'react-icons/md';
import { SiConvertio } from 'react-icons/si';
import { BsSpeedometer } from 'react-icons/bs';
import { GrDocumentDownload } from 'react-icons/gr';




export default function Funcionamento() {
    const [infoVisible, setInfoVisible] = useState(null);

    const handleCircleMouseEnter = (circleId) => {
        setInfoVisible(circleId);
    };

    const handleCircleMouseLeave = () => {
        setInfoVisible(null);
    };
    return (
        <StyledFuncionamento>

            <div id="titulo">
                <h1>
                    COMO FUNCIONA A <h2>ENERGIA SOLAR</h2>
                </h1>
            </div>

            <section id="telaMaior">
                <div id="container">

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
                            <p><h3>Painéis fotovoltaicos </h3>Captam a energia do sol</p>
                        </div>
                    </div>

                    <div
                        id="info2"
                        className={`info ${infoVisible === "info2" ? "info-visible" : ""}`}
                    >
                        <img id="img" src={img2} alt="imagem" />
                        <div className="imgInfo">
                            <p>
                                <h3>Medidor bidirecional</h3> Registra a energia que está sendo fornecida à
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
                                <h3>Inversor</h3>A energia é transformada pelo inversor e inserida na rede
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
                                <h3>Taxa mínima</h3> Você paga apenas a taxa mínima pelo uso da rede ou a
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
                                <h3>Energia</h3> Caso o seu sistema produza mais energia do que você
                                consome, o excesso é convertido em créditos que podem ser
                                transferidos para outras contas em seu nome.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="telaMenor">

                <div id="container2">

                    <div className="card">
                        <div className="informacao">
                            {/* <h3>1</h3> */}
                            <div className="icone">
                                <TbSolarPanel className="ico" />
                            </div>
                            <div className="texto">
                                <p>Os painéis fotovoltaicos captam a energia solar.</p>
                            </div>

                        </div>
                    </div>
                    <div className="card">
                        <div className="informacao">
                            {/* <h3>2</h3> */}
                            <div className="icone">
                                <MdModelTraining className="ico" />
                            </div>
                            <div className="texto">
                                <p>A energia é convertida pelo inversor e é injetada na rede local.</p>
                            </div>

                        </div>
                    </div>
                    <div className="card">
                        <div className="informacao">
                            {/* <h3>3</h3> */}
                            <div className="icone">
                                <BsSpeedometer className="ico" />
                            </div>
                            <div className="texto">
                                <p>O medidor bidirecional contabiliza a energia injetada na rede e a que está sendo consumida.</p>
                            </div>

                        </div>
                    </div>
                    <div className="card">
                        <div className="informacao">
                            {/* <h3>4</h3> */}
                            <div className="icone">
                                <GrDocumentDownload className="ico" />
                            </div>
                            <div className="texto">
                                <p>Você só paga a taxa mínima pelo uso da rede ou a diferença entre o valor consumido e o injetado.</p>
                            </div>

                        </div>
                    </div>
                    <div className="card">
                        <div className="informacao">
                            {/* <h3>5</h3> */}
                            <div className="icone">
                                <SiConvertio className="ico" />
                            </div>
                            <div className="texto">
                                <p>Se o seu sistema gerar mais energia do que você consome, o excedente é acumulado em créditos .  </p>

                            </div>

                        </div>
                    </div>
                </div>

            </section>

        </StyledFuncionamento>
    )
}