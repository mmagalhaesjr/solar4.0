import { StyledMvv } from "./styled";

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

import { useState, useEffect } from "react";

import logo from "../../assets/logosIcones/logoB.png"


export default function Mvv() {
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

    AOS.init();

    return (
        <StyledMvv className={scrollY > 900 ? 'rolagem' : ''}>

            <div id="container">
                <div className="card" data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000" >
                    <h1>Missão</h1>
                    <div className="cxTexto" >
                        <p>
                            Empoderar nossos clientes para terem<span> autonomia </span>
                            e controle <span> sobre sua energia elétrica </span>utilizando fontes de
                            energia renováveis como uma forma de investimento
                            para reduzir custos e colaborar para o desenvolvimento<br></br>
                            sustentável do planeta.
                        </p>
                    </div>
                </div>
                <div className="card" data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000" >
                    <h1>Visão</h1>
                    <div className="cxTexto">
                        <p>
                            Ser a principal referência em gestão de energia elétrica
                            para o agronegócio na Região Sudeste oferecendo serviços<span> inovadores,
                                personalizados e confiáveis.</span>
                        </p>
                    </div>
                </div>
                <div className="card" data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000"  >
                    <h1>Valores</h1>
                    <div className="cxTexto" id="textoCentralizado">
                        <p>
                            Ética<br />
                            Qualidade<br />
                            Sustentabilidade<br />
                            Comprometimento<br />
                            Excelência no atendimento<br />
                        </p>
                    </div>
                </div>
            </div>


            <img id="logo" src={logo} alt="" />


        </StyledMvv>
    )
}
