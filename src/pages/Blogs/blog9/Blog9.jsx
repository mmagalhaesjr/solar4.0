import { StyledBlog } from "../styledBlogs/styled"



import { BsWhatsapp } from 'react-icons/bs';

import foto1 from '../../../assets/blogs/blog9/1.png'




import Header2 from "../../../componentes/Header2/Header2";
import Footer from "../../../componentes/Footer/Footer";





export default function Blog9() {
    return (
        <>
            <Header2 />
            <StyledBlog>
                <div id="container1" >

                    <a href="https://api.whatsapp.com/send?phone=3298501001" target="_blank" rel="noreferrer"><BsWhatsapp id="whattsapp" /></a>

                    <div id="titulo">
                        <h1>
                            Energia solar e hidrogênio verde
                        </h1>
                    </div>
                    <div id="container2">
                        <div className="subTitulo" >
                            <p>
                                Neste blog, exploraremos como a energia solar e o hidrogênio
                                verde estão interligados
                            </p>
                        </div>
                        <div className="texto" >
                            <p>
                                A energia solar e o hidrogênio verde surgem como fontes promissoras e ecologicamente
                                corretas. A seguir, investigaremos como os dois estão interligados e como o hidrogênio verde
                                emergiu como um combustível do futuro.
                            </p>
                        </div>
                        <div className="img">
                            <img src={foto1} alt="foto" />
                        </div>
                        <div className="subTitulo" >
                            <p>
                                O contexto da transição energética
                            </p>
                        </div>
                        <div className="texto" >
                            <p>
                                A crescente preocupação com as emissões de carbono e a necessidade de fontes energéticas
                                mais limpas impulsionaram a busca por alternativas sustentáveis. O hidrogênio verde surge
                                como uma opção atraente devido à sua produção livre de carbono e seu potencial para
                                abastecer uma variedade de setores.
                            </p>
                        </div>
                        <div className="subTitulo" >
                            <p>
                                Produção sustentável
                            </p>
                        </div>
                        <div className="texto" >
                            <p>
                                Diferentemente do hidrogênio convencional, o hidrogênio verde é produzido através da
                                eletrólise da água utilizando energia renovável, principalmente a solar e a eólica. Esse método
                                limpo de produção elimina as emissões de carbono associadas, tornando-o uma alternativa
                                sustentável e eco-friendly.
                            </p>
                        </div> 
                        <div className="subTitulo" >
                            <p>
                                Viabilidade econômica
                            </p>
                        </div>
                        <div className="texto" >
                            <p>
                                Avanços tecnológicos e investimentos significativos reduziram os custos de produção do
                                hidrogênio verde, tornando-o mais competitivo em comparação com fontes tradicionais de
                                energia. Essa viabilidade econômica é um impulsionador fundamental para sua ascensão
                                como um combustível do futuro.
                            </p>
                        </div>
                        <div className="subTitulo" >
                            <p>
                                Aplicações versáteis
                            </p>
                        </div>
                        <div className="texto" >
                            <p>
                                O hidrogênio verde não se limita a um setor específico. Exploraremos como suas propriedades
                                versáteis o tornam adequado para uma variedade de aplicações, desde o abastecimento de
                                veículos até o fornecimento de energia para processos industriais.
                            </p>
                        </div>
                        <div className="subTitulo" >
                            <p>
                                Incentivos governamentais e políticas de estímulo
                            </p>
                        </div>
                        <div className="texto" >
                            <p>
                                Examinaremos o papel dos incentivos governamentais e políticas de estímulo no apoio à
                                adoção do hidrogênio verde em larga escala. Essas iniciativas são cruciais para criar um
                                ambiente favorável e acelerar a transição para um futuro baseado em energias mais limpas.
                            </p>
                        </div>






                        <div className="dedicatoria" >
                            <p>
                                Escrito por: Lais Sindorf
                            </p>
                            <p>
                                Publicado em: 05/02/2024
                            </p>
                        </div>



                    </div>
                </div >
            </StyledBlog>

            <Footer />

        </>
    )
}