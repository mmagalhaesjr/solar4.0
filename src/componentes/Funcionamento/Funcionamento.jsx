import { StyledFuncionamento } from "./styled";
import { useState } from "react";

import img1 from "../../assets/1.png";
import img2 from "../../assets/2.png";
import img3 from "../../assets/3.png";
import img4 from "../../assets/4.png";
import img5 from "../../assets/5.png";
import img6 from "../../assets/6.png"

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
        <StyledFuncionamento className={scrollY > 1000 ? 'rolagem' : ''}>

            <div id="titulo">
                <h1>
                    COMO FUNCIONA A ENERGIA SOLAR
                </h1>
              
            </div>

            <section id="telaMaior">

                {/* <img id="casinha" src={casa} alt="" /> */}

                <div id="container" >
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
                    <div
                        className="circulo"
                        id="circulo6"
                        onMouseEnter={() => handleCircleMouseEnter("info6")}
                        onMouseLeave={handleCircleMouseLeave}
                    >
                        6
                    </div>
                </div>

                <div id="ContainerInfo">

                    <div
                        id="info1"
                        className={`info ${infoVisible === "info1" ? "info-visible" : ""}`}
                    >
                        <img id="img" src={img1} alt="imagem" />
                        <div className="imgInfo">
                            <p><h3>Painéis</h3>Captam a energia do sol</p>
                        </div>
                    </div>

                    <div
                        id="info2"
                        className={`info ${infoVisible === "info2" ? "info-visible" : ""}`}
                    >
                        <img id="img" src={img2} alt="imagem" />
                        <div className="imgInfo">
                            <p>
                                <h3>Inversor</h3>A energia é transformada e inserida na rede elétrica local.
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
                                <h3>Quadro de luz</h3>A energia solar é enviada para o quadro de luz e distribuída para a casa ou empresa.

                            </p>
                        </div>
                    </div>

                    <div
                        id="info4"
                        className={`info ${infoVisible === "info4" ? "info-visible" : ""}`}
                    >
                        <img id="img" src={img4} alt="imagem" />
                        <div className="imgInfo">
                            <p>
                            
                                <h3>Medidor bidirecional</h3>O relógio de luz bidirecional registra o seu consumo de energia fornecido à rede.
                           
                            </p>
                        </div>
                    </div>

                    <div
                        id="info5"
                        className={`info ${infoVisible === "info5" ? "info-visible" : ""}`}
                    >
                        <img id="img" src={img5} alt="imagem" />
                        <div className="imgInfo">
                            <p>
                            <h3>Energia</h3>O excesso de energia vai para a rede da distribuidora, gerando créditos!
                            </p>
                        </div>
                    </div>

                    <div
                        id="info6"
                        className={`info ${infoVisible === "info6" ? "info-visible" : ""}`}
                    >
                        <img id="img" src={img6} alt="imagem" />
                        <div className="imgInfo">
                            <p>
                            <h3>Taxa mínima</h3> você só paga o valor mínimo pelo uso da rede ou pela diferença entre o consumo total e a energia injetada!
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