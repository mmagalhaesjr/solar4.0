import { StyledContainerIcones, StyledContainerImagens, StyledResidencial } from "./styled";

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css/effect-creative';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { EffectCreative, Navigation, Pagination, A11y } from 'swiper/modules';



import reducao from "../../../assets/icones projetos/reducao-custo.png";
import independencia from "../../../assets/icones projetos/independencia.png";
import manutencao from "../../../assets/icones projetos/manutencao.png";
import retorno from "../../../assets/icones projetos/retorno-financeiro.png";
import sustentabilidade from "../../../assets/icones projetos/sustentabilidade.png";
import valorizacao from "../../../assets/icones projetos/valorizacao.png"

import foto3 from '../../../assets/residencial/residencial1.jpeg'
import foto2 from '../../../assets/residencial/residencial2.jpeg'
import foto1 from '../../../assets/residencial/residencial3.jpeg'
import foto4 from '../../../assets/residencial/residencial4.jpeg'
import foto5 from '../../../assets/residencial/residencial5.jpeg'
import foto6 from '../../../assets/residencial/residencial6.jpeg'
import foto7 from '../../../assets/residencial/residencial7.jpeg'

import Footer from "../../../componentes/Footer/Footer";
import Header2 from '../../../componentes/Header2/Header2';




export default function Residencial() {
    return (
        <>
            <Header2 />
            <StyledResidencial>

                <section id="container">

                    <div id="titulo">
                        <h1>PROJETOS </h1>
                        <span><h1>RESIDENCIAIS</h1></span>
                    </div>

                    <div id="texto">
                        <p>Se você quer <span> economia, conforto,  autonomia e valorização do seu imóvel,</span> a energia solar é ideal para você!</p>
                    </div>

                </section>
            </StyledResidencial>


            <StyledContainerIcones>

                <div id="box">


                    <div className="box">
                        <img src={reducao} alt="foto" />
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
                        <img src={retorno} alt="foto" />
                        <h3 className="tituloBox">
                            Retorno Financeiro
                        </h3>
                        <p className="textoBox">
                            O Retorno sobre Investimento (ROI), mesmo variando de acordo com o consumo,
                            é obtido em um prazo máximo de 4 anos. Com a durabilidade
                            do equipamento de pelo menos 25 anos, em 21 anos <br /> você produzirá o lucro líquido.
                        </p>
                    </div>

                    <div className="box">
                        <img src={independencia} alt="foto" />
                        <h3 className="tituloBox">
                            Independência Energética
                        </h3>
                        <p className="textoBox">
                            Com a energia solar, você se torna menos dependente da concessionária,
                            o que proporciona mais autonomia e segurança energética.

                        </p>
                    </div>



                    <div className="box">
                        <img src={manutencao} alt="foto" />
                        <h3 className="tituloBox">
                            Durabilidade e Baixa Manutenção
                        </h3>
                        <p className="textoBox">
                            Os sistemas de energia solar têm uma vida útil longa e geralmente
                            requerem pouca manutenção ao longo do tempo
                        </p>
                    </div>

                    <div className="box">
                        <img src={valorizacao} alt="foto" />
                        <h3 className="tituloBox">
                            Valorização do Imóvel
                        </h3>
                        <p className="textoBox">
                            Residências com sistemas de energia fotovoltaica possuem um valor de mercado mais elevado,
                            sendo mais atrativas para compradores em potencial.
                        </p>
                    </div>

                    <div className="box">
                        <img src={sustentabilidade} alt="foto" />
                        <h3 className="tituloBox">
                            Consciência Ambiental
                        </h3>
                        <p className="textoBox">
                            Ter energia limpa em sua casa contribui para a redução das emissões de carbono,
                            contribuindo para o desenvolvimento sustentável do planeta.
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
