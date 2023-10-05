import { StyledNossosProjetos } from "./styled";
import foto1 from "../../assets/projetos/1.jpg"
import foto2 from "../../assets/projetos/2.jpg"
import foto3 from "../../assets/projetos/3.jpg"
import foto4 from "../../assets/projetos/4.jpg"
import foto5 from "../../assets/projetos/5.jpg"
import foto6 from "../../assets/projetos/6.jpg"
import foto7 from "../../assets/projetos/7.jpg"
import foto8 from "../../assets/projetos/8.jpg"
import foto9 from "../../assets/projetos/9.jpg"
import foto10 from "../../assets/projetos/10.jpg"
import foto11 from "../../assets/projetos/11.jpg"
import foto12 from "../../assets/projetos/12.jpg"
import foto13 from "../../assets/projetos/12.jpg"
import foto14 from "../../assets/projetos/12.jpg"



export default function NossosProjetos() {
    return (
        <StyledNossosProjetos>

            <div id="linha"></div>

            <div id="titulo">
                <h1>NOSSOS PROJETOS</h1>
            </div>

            <div id="projetos">

                <section id="secao1">
                    <div className="projetos">
                        <img src={foto1} alt="" />
                        <p>NOME DA INSTALAÇÃO</p>
                    </div>
                    <div className="projetos">
                        <img src={foto2} alt="" />
                        <p>NOME DA INSTALAÇÃO</p>
                    </div>
                    <div className="projetos">
                        <img src={foto3} alt="" />
                        <p>NOME DA INSTALAÇÃO</p>
                    </div>
                    {/* <div className="projetos">

                    </div> */}
                </section>

                <section id="secao2">
                    <div className="projetos">
                        <img src={foto4} alt="" />
                        <p>NOME DA INSTALAÇÃO</p>
                    </div>
                    <div className="projetos">
                        <img src={foto5} alt="" />
                        <p>NOME DA INSTALAÇÃO</p>
                    </div>
                    <div className="projetos">
                        <img src={foto6} alt="" />
                        <p>NOME DA INSTALAÇÃO</p>
                    </div>
                    <div className="projetos">
                        <img src={foto7} alt="" />
                        <p>NOME DA INSTALAÇÃO</p>
                    </div>
                </section>

                <section id="secao3">
                    <div className="projetos">
                        <img src={foto8} alt="" />
                        <p>NOME DA INSTALAÇÃO</p>
                    </div>
                    <div className="projetos">
                        <img src={foto9} alt="" />
                        <p>NOME DA INSTALAÇÃO</p>
                    </div>
                    <div className="projetos">
                        <img src={foto10} alt="" />
                        <p>NOME DA INSTALAÇÃO</p>
                    </div>
                    {/* <div className="projetos">

                    </div> */}
                </section>

                <section id="secao4">
                    <div className="projetos">
                        <img src={foto11} alt="" />
                        <p>NOME DA INSTALAÇÃO</p>
                    </div>
                    <div className="projetos">
                        <img src={foto12} alt="" />
                        <p>NOME DA INSTALAÇÃO</p>
                    </div>
                    <div className="projetos">
                        <img src={foto13} alt="" />
                        <p>NOME DA INSTALAÇÃO</p>
                    </div>
                    <div className="projetos">
                        <img src={foto14} alt="" />
                        <p>NOME DA INSTALAÇÃO</p>
                    </div>
                </section>

            </div>




        </StyledNossosProjetos>
    )
}
