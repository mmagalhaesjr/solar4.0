import {  StyledContainerIcones, StyledContainerImagens, StyledIndustrial } from "./styled";


import {useEffect } from "react";

import Header2 from '../../../componentes/Header2/Header2';
import Footer from "../../../componentes/Footer/Footer";

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css/effect-creative';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { EffectCreative, Navigation, Pagination, A11y } from 'swiper/modules';


import independencia from "../../../assets/icones projetos/independencia.png";
import manutencao from "../../../assets/icones projetos/manutencao.png";
import marketing from "../../../assets/icones projetos/marketing.png";
import reducao from "../../../assets/icones projetos/reducao-custo.png";
import retorno from "../../../assets/icones projetos/retorno-financeiro.png";
import lucro from "../../../assets/icones projetos/lucro.png";


import foto1 from '../../../assets/industrial/industrial1.jpeg'
import foto2 from '../../../assets/industrial/industrial2.jpeg'
import foto3 from '../../../assets/industrial/industrial3.jpeg'
import foto4 from '../../../assets/industrial/industrial4.jpeg'
import foto5 from '../../../assets/industrial/industrial5.jpeg'
import foto6 from '../../../assets/industrial/industrial6.jpeg'
import foto7 from '../../../assets/industrial/industrial7.jpeg'
import foto8 from '../../../assets/industrial/industrial8.jpeg'





export default function Comercial() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <Header2 />
            <StyledIndustrial>

                <section id="container">

                    <div id="titulo">
                        <h1>PROJETOS</h1>
                        <span><h1>INDUSTRIAIS</h1></span>
                    </div>

                    <div id="texto">
                        <p>Se você quer <span>reduzir os custos de energia, autonomia e aumento de lucro, </span>  a energia solar é ideal para você!</p>
                    </div>
                </section>
            </StyledIndustrial>


            <StyledContainerIcones>

                <div id="box">


                    <div className="box">
                        <img src={reducao} alt="" />
                        <h3 className="tituloBox">
                            Redução de custos
                        </h3>
                        <p className="textoBox">
                            A instalação de painéis solares permite que os proprietários gerem
                            sua própria eletricidade, reduzindo significativamente as contas de
                            energia elétrica.
                        </p>
                    </div>

                    <div className="box">
                        <img src={retorno} alt="" />
                        <h3 className="tituloBox">
                            Retorno Financeiro
                        </h3>
                        <p className="textoBox">
                            O Retorno sobre Investimento (ROI), mesmo variando de acordo com o consumo,
                            é obtido em um prazo máximo de 4 anos. Com a durabilidade do equipamento de pelo menos 25 anos,
                            em 21 anos você produzirá o lucro líquido.
                        </p>
                    </div>

                    <div className="box">
                        <img src={independencia} alt="" />
                        <h3 className="tituloBox">
                            Independência Energética
                        </h3>
                        <p className="textoBox">
                            Com a energia solar, você se torna menos dependente da concessionária,
                            o que proporciona mais autonomia e segurança energética.
                        </p>
                    </div>



                    <div className="box">
                        <img src={manutencao} alt="" />
                        <h3 className="tituloBox">
                            Durabilidade e Baixa Manutenção
                        </h3>
                        <p className="textoBox">
                            Os sistemas de energia solar têm uma vida útil longa e geralmente
                            requerem pouca manutenção ao longo do tempo.
                        </p>
                    </div>

                    <div className="box">
                        <img src={lucro} alt="" />
                        <h3 className="tituloBox">
                            Aumento de Lucro
                        </h3>
                        <p className="textoBox">
                            A redução da conta de luz por meio da energia solar otimiza significativamente
                            os custos operacionais e impulsiona os lucros do seu empreendimento.
                        </p>
                    </div>

                    <div className="box">
                        <img src={marketing} alt="" />
                        <h3 className="tituloBox">
                            Benefícios de marketing
                        </h3>
                        <p className="textoBox">
                            Ter energia limpa em seu empreendimento promove uma cultura de sustentabilidade que pode ser explorada no marketing,
                            consolidando o posicionamento da empresa e atraindo consumidores conscientes.
                        </p>
                    </div>

                </div>

            </StyledContainerIcones>


            {/* fotos ------------ */}
            <StyledContainerImagens>

                <div id="containerFoto">

                    <Swiper
                        modules={[EffectCreative, Navigation, Pagination, A11y]}
                        navigation
                        grabCursor={true}
                        effect={'creative'}
                        creativeEffect={{
                            prev: {
                                shadow: true,
                                translate: [0, 0, -400],
                            },
                            next: {
                                translate: ['100%', 0, 0],
                            },
                        }}

                        className="swiper-slide"
                    >
                        <SwiperSlide><img className="foto" src={foto1} alt="foto" /></SwiperSlide>
                        <SwiperSlide><img className="foto" src={foto2} alt="foto" /></SwiperSlide>
                        <SwiperSlide><img className="foto" src={foto3} alt="foto" /></SwiperSlide>
                        <SwiperSlide><img className="foto" src={foto4} alt="foto" /></SwiperSlide>
                        <SwiperSlide><img className="foto" src={foto5} alt="foto" /></SwiperSlide>
                        <SwiperSlide><img className="foto" src={foto6} alt="foto" /></SwiperSlide>
                        <SwiperSlide><img className="foto" src={foto7} alt="foto" /></SwiperSlide>
                        <SwiperSlide><img className="foto" src={foto8} alt="foto" /></SwiperSlide>

                    </Swiper>

                    {/* <div id="foto1" className="fotos">
                        <img src={foto1} alt="foto" />
                        <img src={foto2} alt="foto" />
                    </div>
                    <div id="foto2" className="fotos">
                        <img src={foto3} alt="foto" />
                        <img src={foto4} alt="foto" />
                        <img src={foto5} alt="foto" />
                    </div>
                    <div id="foto3" className="fotos">
                        <img src={foto6} alt="foto" />
                        <img src={foto7} alt="foto" />
                    </div> */}
                </div>
            </StyledContainerImagens>

            <Footer />
        </>
    )
}
