import { StyledBlogPagina } from "./styled";



import BlogMaior from "../../componentes/BlogMaior/BlogMaior";
import BlogMenor from '../../componentes/BlogMenor/BlogMenor';




import { BsWhatsapp } from 'react-icons/bs';
import Header2 from '../../componentes/Header2/Header2';
import Footer from '../../componentes/Footer/Footer';


import foto1 from "../../assets/blogs/blog1/1.png"
import foto2 from "../../assets/blogs/blog2/1.png"
import foto3 from "../../assets/blogs/blog3/1.png"
import foto4 from "../../assets/blogs/blog4/1.png"






export default function BlogTelainicial() {
    return (


        <>
            <Header2 />

            <StyledBlogPagina>

                <a href="https://api.whatsapp.com/send?phone=3298501001" target="_blank" rel="noreferrer"><BsWhatsapp id="whattsapp" /></a>

                <div id="titulo">
                    <h1>
                        Confira nosso conteúdo em Blog
                    </h1>
                </div>

                <div id="container">

                    <div className="cxBlogs">

                        <div className="cx1blog">
                            <BlogMaior
                                link='#/blog4'
                                img={foto4}
                                titulo='Como a energia solar pode
                                 transformar a agricultura?...'
                                texto='Abaixo, exploraremos a sinergia entre esses dois setores
                                 aparentemente distintos...'
                            />
                        </div>
                        <div className="cx2blogs">
                            <BlogMenor
                                link='#/blog3'
                                img={foto3}
                                titulo='Crescimento da energia solar no
                                 Brasil e as implicações futuras'
                                texto='Hoje, o Brasil é um dos líderes em energia solar na América
                                 Latina e no mundo. Saiba os principais motivos por trás desse
                                 crescimento e os benefícios disponíveis.'
                            />
                            <BlogMenor
                                link='#/blog2'
                                img={foto2}
                                titulo='O futuro é solar: tendências e
                                tecnologias'
                                texto='Neste blog, vamos explorar as tendências que estão moldando
                                o futuro solar e impulsionando a transição para uma matriz
                                energética mais sustentável.'
                            />
                             <BlogMenor
                                link='#/blog1'
                                img={foto1}
                                titulo='Conheça 5 vantagens de energia
                                 solar para empresas'
                                texto='Empresas de diferentes portes vêm investindo em Energia
                                 Solar como solução para se libertar das altas contas de
                                 energia elétrica.'
                            />
                             

                        </div>
                        {/* <div className="cx3blogs">
                            <BlogMenor
                                link='#/blog1'
                                img={foto1}
                                titulo='Conheça 5 vantagens de energia
                                 solar para empresas'
                                texto='Empresas de diferentes portes vêm investindo em Energia
                                 Solar como solução para se libertar das altas contas de
                                 energia elétrica.'
                            />
                        </div> */}
                        {/* <div className="cx1blog">
                        <BlogMaior
                                 link='#/blog1'
                                 img={foto1}
                                 titulo='Conheça 5 vantagens de energia
                                 solar para empresas'
                                 texto='Empresas de diferentes portes vêm investindo em Energia
                                 Solar como solução para se libertar das altas contas de
                                 energia elétrica.'
                            />
                        </div> */}
                    </div>

                </div>

            </StyledBlogPagina>

            <Footer />
        </>
    )
}