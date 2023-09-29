import { useState } from "react";
import { StyledFuncionamento } from "./styledMaior";

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

        <StyledFuncionamento>

            <div id="titulo">
                <h1>
                    COMO FUNCIONA A <h2>ENERGIA SOLAR</h2>
                </h1>
            </div>

            
            <section id="telaMenor">

            </section>



        </StyledFuncionamento>




    );
}
