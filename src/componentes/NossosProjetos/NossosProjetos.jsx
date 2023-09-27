import { StyledNossosProjetos } from "./styled";
import foto from "../../assets/primeira.jpg"


export default function NossosProjetos() {
    return (
        <StyledNossosProjetos>



            <div id="titulo">
                <h1>NOSSOS<h2>PROJETOS</h2></h1>
            </div>

            <div id="projetos">

                <section id="secao1">
                    <div className="projetos">
                        <img src={foto} alt="" />
                        <p>NOME DA INSTALAÇÃO</p>
                    </div>
                    <div className="projetos">
                        <img src={foto} alt="" />
                        <p>NOME DA INSTALAÇÃO</p>
                    </div>
                    <div className="projetos">
                        <img src={foto} alt="" />
                        <p>NOME DA INSTALAÇÃO</p>
                    </div>
                    {/* <div className="projetos">

                    </div> */}
                </section>

                <section id="secao2">
                    <div className="projetos">
                        <img src={foto} alt="" />
                        <p>NOME DA INSTALAÇÃO</p>
                    </div>
                    <div className="projetos">
                        <img src={foto} alt="" />
                        <p>NOME DA INSTALAÇÃO</p>
                    </div>
                    <div className="projetos">
                        <img src={foto} alt="" />
                        <p>NOME DA INSTALAÇÃO</p>
                    </div>
                    <div className="projetos">
                        <img src={foto} alt="" />
                        <p>NOME DA INSTALAÇÃO</p>
                    </div>
                </section>

                <section id="secao3">
                    <div className="projetos">
                        <img src={foto} alt="" />
                        <p>NOME DA INSTALAÇÃO</p>
                    </div>
                    <div className="projetos">
                        <img src={foto} alt="" />
                        <p>NOME DA INSTALAÇÃO</p>
                    </div>
                    <div className="projetos">
                        <img src={foto} alt="" />
                        <p>NOME DA INSTALAÇÃO</p>
                    </div>
                    {/* <div className="projetos">

                    </div> */}
                </section>

                <section id="secao4">
                    <div className="projetos">
                        <img src={foto} alt="" />
                        <p>NOME DA INSTALAÇÃO</p>
                    </div>
                    <div className="projetos">
                        <img src={foto} alt="" />
                        <p>NOME DA INSTALAÇÃO</p>
                    </div>
                    <div className="projetos">
                        <img src={foto} alt="" />
                        <p>NOME DA INSTALAÇÃO</p>
                    </div>
                    <div className="projetos">
                        <img src={foto} alt="" />
                        <p>NOME DA INSTALAÇÃO</p>
                    </div>
                </section>

            </div>




        </StyledNossosProjetos>
    )
}
