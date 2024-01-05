import { StyledSolucoes } from "./styled";

import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

import residencial from "../../assets/residencial/residencial3.jpeg"
import comercial from "../../assets/comercial/comercial2.jpeg"
import industrial from "../../assets/industrial/industrial6.jpeg"
import agro from "../../assets/agro/agro2.jpeg"
import Footer from "../../componentes/Footer/Footer";
import Header2 from '../../componentes/Header2/Header2';


export default function Solucoes() {
    const navegar = useNavigate();
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

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
        <>
            <Header2 />
            <StyledSolucoes  className={scrollY > 300 ? 'rolagem' : ''}>

                <div id="container">

                    <div id="titulo">
                        <h1>SOLUÇÕES<h2></h2></h1>
                    </div>
                    <div id="texto">
                        <p>
                            Oferecemos soluções personalizadas em energia fotovoltaica para <span> residências, comércio, indústrias
                            </span> e para o <span>agronegócio.</span><br /> <br /> <br />

                            Elaboramos um projeto personalizado para cada cliente: levamos em consideração todo o cenário
                            para potencializar a geração de energia, a partir dos equipamentos da Intelbras. <br></br><br></br>
                        </p>

                        <a onClick={() => navegar("/orcamento") }target="_blank">
                            <button>
                                <p>
                                    Invista na sua própria fonte de energia renovável!
                                </p>
                            </button>
                        </a>

                        <p className="textoVerde">
                            Com retorno a curto prazo e uma economia de até 95% na conta de luz,
                            o investimento em energia solar é a melhor escolha.
                        </p>
                    </div>


                    <div id="containerImg">

                        <div id="subTitulo"><h1>PROJETOS</h1></div>

                        <div id="cxImg">
                            <div className="img">
                                <li><a  onClick={() => navegar("/projetoResidencial") }><img src={residencial} alt="foto" /><p>RESIDENCIAL</p></a></li>
                            </div>
                            <div className="img">
                                <li><a onClick={() => navegar("/projetoComercial") } ><img src={comercial} alt="foto" /><p>COMERCIAL</p></a></li>
                            </div>
                            <div className="img">
                                <li><a onClick={() => navegar("/projetoIndustrial") } ><img src={industrial} alt="foto" /><p>INDUSTRIAL</p></a></li>
                            </div>
                            <div className="img">
                                <li><a onClick={() => navegar("/projetoRural") }  ><img src={agro} alt="foto" /><p>AGRO</p></a></li>
                            </div>
                        </div>

                    </div>
                </div>
            </StyledSolucoes>
            <Footer />
        </>
    )
}
