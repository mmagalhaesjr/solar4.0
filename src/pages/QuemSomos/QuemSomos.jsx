import { StyledQuemSomos } from "./styled";

import { useState, useEffect } from "react";

import { Swiper, SwiperSlide } from 'swiper/react';

// import 'swiper/css/effect-creative';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Autoplay, Navigation, Pagination, A11y } from 'swiper/modules';


import gota from "../../assets/logosIcones/tranparente.png"

// import sol2 from "../../assets/logosIcones/cor.png"
// import sol3 from "../../assets/logosIcones/luz.png"

export default function QuemSomos() {

    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleScroll = () => {
        setScrollY(window.scrollY);
    };

    return (
        <StyledQuemSomos id="sobreNos" className={scrollY > 300 ? 'rolagem' : ''}>


            <div id="container">
                <div id="texto">
                    <h1>Quem somos</h1>
                    <img data-aos="fade-up"
                        data-aos-anchor-placement="center-bottom"  data-aos-easing="ease-out-cubic"
                        data-aos-duration="3000" src={gota} alt="img" />
                    <p>
                        A <span>Solar 4.0 </span>é uma empresa que faz a gestão da energia elétrica utilizando soluções verdes,
                        atuando principalmente na Região Sudeste do país e possui polos em Minas Gerais,
                        nas cidades de<span> Belo Horizonte e Juiz de Fora.</span><br></br><br></br>  Reconhecidos pelo <span>serviço personalizado </span> e inovador,
                        proporcionamos autonomia energética para nossos clientes por sermos uma empresa  especializada em sistemas de geração
                        de energia solar fotovoltaica, oferecendo as melhores e mais completas soluções em energia limpa e renovável.
                    </p>
                </div>

                <div id="cxVideo">


                    <Swiper pagination={{ clickable: true }}
                        slidesPerView={window.innerWidth < 600 ? 1 : 1}
                        loop={true}
                        // autoplay={{
                        //     delay: 4000,
                        //     disableOnInteraction: false,
                        // }}

                        
                        
                        effect={'fade'}
                        navigation={true}
                        speed={5000}

                        className="salas"
                        modules={[Autoplay, Navigation, Pagination, A11y]}>


                        <SwiperSlide>
                            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/jt0PZPFlI3M?si=ggonBer67dPaNYbm" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </SwiperSlide>

                        <SwiperSlide>
                            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/H05Je4V9h4o?si=xLiuft-F-66D_j4e" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </SwiperSlide>

                        <SwiperSlide>
                            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/re85LxBj3fY?si=NsxO-6QiezOly_dm" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </SwiperSlide>

                        <SwiperSlide>
                            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/nOOEoEBDENs?si=CLtz4990F1MoVxnC" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </SwiperSlide>

                        <SwiperSlide>
                            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/FXvzcCcocWA?si=am1MfaMNUG9sGjXB" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </SwiperSlide>






                    </Swiper>
                </div>
            </div>

            {/* <div id="imgSois">
                    <img className="imgsol" id="imgsol1" src={sol2} alt="imagem" />
                    <img className="imgsol" id="imgsol2" src={sol3} alt="imagem" />
                </div> */}

        </StyledQuemSomos>
    );
}




