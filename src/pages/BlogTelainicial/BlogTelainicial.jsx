import { StyledBlogPagina } from "./styled";



import BlogMaior from "../../componentes/BlogMaior/BlogMaior";
import BlogMenor from "../../componentes/BlogMenor/BlogMenor";



import { BsWhatsapp } from 'react-icons/bs';
import Header2 from '../../componentes/Header2/Header2';
import Footer from '../../componentes/Footer/Footer';


import foto1 from "../../assets/blogs/blog1/1.png"




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
                                link='/blog1'
                                img={foto1}
                                titulo='Conheça 5 vantagens de energia
                                solar para empresas'
                                texto='Empresas de diferentes portes vêm investindo em Energia
                                Solar como solução para se libertar das altas contas de
                                energia elétrica.'
                            />
                        </div>

                        <div className="cx2blogs">
                            <BlogMenor
                                link='/blog1'
                                img={foto1}
                                titulo='Conheça 5 vantagens de energia
                                solar para empresas'
                                texto='Empresas de diferentes portes vêm investindo em Energia
                                Solar como solução para se libertar das altas contas de
                                 energia elétrica.'
                            />
                            <BlogMenor
                                link='/blog1'
                                img={foto1}
                                titulo='Conheça 5 vantagens de energia
                                solar para empresas'
                                texto='Empresas de diferentes portes vêm investindo em Energia
                                Solar como solução para se libertar das altas contas de
                                energia elétrica.'
                            />
                        </div>
                        <div className="cx1blog">
                            <BlogMaior
                                link='/blog1'
                                img={foto1}
                                titulo='Conheça 5 vantagens de energia
                                solar para empresas'
                                texto='Empresas de diferentes portes vêm investindo em Energia
                                Solar como solução para se libertar das altas contas de
                                energia elétrica.'
                            />
                        </div>


                    </div>
                   


                </div>

            </StyledBlogPagina>

            <Footer />


        </>
    )
}