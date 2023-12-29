import { StyledContainerIcones, StyledContainerImagens, StyledRural } from "./styled";

import Header2 from "../../../componentes/Header2/Header2";
import Footer from "../../../componentes/Footer/Footer";

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css/effect-creative';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { EffectCreative, Navigation, Pagination, A11y } from 'swiper/modules';



import independencia from "../../../assets/icones projetos/independencia.png";
import manutencao from "../../../assets/icones projetos/manutencao.png";
import reducao from "../../../assets/icones projetos/reducao-custo.png";
import retorno from "../../../assets/icones projetos/retorno-financeiro.png";
import sustentabilidade from "../../../assets/icones projetos/sustentabilidade.png";
import lucro from "../../../assets/icones projetos/lucro.png";

import foto1 from '../../../assets/agro/agro1.jpeg'
import foto2 from '../../../assets/agro/agro2.jpeg'
import foto3 from '../../../assets/agro/agro3.jpeg'
import foto4 from '../../../assets/agro/agro4.jpeg'
import foto5 from '../../../assets/agro/agro5.jpeg'
import foto6 from '../../../assets/agro/agro6.jpeg'
import foto7 from '../../../assets/agro/agro7.jpeg'






export default function Comercial() {
    return (
        <>
            <Header2 />
            <StyledRural>

                <section id="container">

                    <div id="titulo">
                        <h1>PROJETOS </h1>
                        <span><h1>RURAIS</h1></span>
                    </div>

                    <div id="texto">
                        <p>Se você quer <span>reduzir os custos de energia, autonomia e aumento de lucro </span>   no seu Agronegócio, a energia solar é ideal para você!</p>
                    </div>

                </section>
            </StyledRural>


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
                            o Retorno sobre Investimento (ROI), mesmo variando de acordo com
                            o consumo, costuma ser obtido em um prazo médio de 6 anos. Com
                            a durabilidade do equipamento de 25 anos, em 19 anos você
                            produzirá energia solar com todo o seu investimento já pago.
                        </p>
                    </div>

                    <div className="box">
                        <img src={independencia} alt="" />
                        <h3 className="tituloBox">
                            Independência Energética
                        </h3>
                        <p className="textoBox">
                            Com a energia solar, você se torna menos dependente da rede
                            elétrica pública, o que proporciona mais segurança energética,
                            especialmente em áreas com interrupções frequentes no
                            fornecimento de energia.
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
                        <img src={sustentabilidade} alt="" />
                        <h3 className="tituloBox">
                            Sustentabilidade
                        </h3>
                        <p className="textoBox">
                            Ter energia limpa em sua casa contribui para a redução das
                            emissões de carbono, contribuindo para um presente e futuro mais
                            sustentáveis
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
