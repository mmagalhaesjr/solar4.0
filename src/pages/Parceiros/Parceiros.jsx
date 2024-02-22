import foto1 from '../../assets/parceiros/1.png'
import foto2 from '../../assets/parceiros/2.png'
import foto3 from '../../assets/parceiros/3.png'
import foto4 from '../../assets/parceiros/4.png'
import foto5 from '../../assets/parceiros/5.png'
import foto6 from '../../assets/parceiros/6.png'
import foto7 from '../../assets/parceiros/7.png'
import foto8 from '../../assets/parceiros/8.png'
import foto9 from '../../assets/parceiros/9.png'

import { StyledParceiros } from "./styled";

import { useState, useEffect } from "react";


export default function Parceiros() {

    const [setScrollY] = useState(0);

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
        // <StyledParceiros id='contato' className={scrollY > 5000 ? 'rolagem' : ''}>

        <StyledParceiros >


            <div id="titulo">
                <h1>NOSSOS PARCEIROS</h1>
            </div>

            <div id="container">
                <img src={foto1} alt="logos" data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine" />
                <img src={foto2} alt="logos" data-aos="fade-left"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine" />
                <img src={foto3} alt="logos" data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine" />
                <img src={foto4} alt="logos" data-aos="fade-left"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine" />
                <img src={foto5} alt="logos" data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine" />
                <img src={foto6} alt="logos" data-aos="fade-left"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine" />
                <img src={foto7} alt="logos" data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine" />
                <img src={foto8} alt="logos" data-aos="fade-left"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine" />
                <img src={foto9} alt="logos" data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine" />
            </div>



        </StyledParceiros>
    )
}
