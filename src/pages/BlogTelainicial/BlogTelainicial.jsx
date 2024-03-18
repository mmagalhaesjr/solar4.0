import { StyledBlogPagina } from "./styled";

import { BsWhatsapp } from 'react-icons/bs';
import Header2 from '../../componentes/Header2/Header2';
import Footer from '../../componentes/Footer/Footer';


import BlogMenor from '../../componentes/BlogMenor/BlogMenor';
import { arrayBlogs } from '../../componentes/BlogLista/BlogLista'

import BlogMaior from "../../componentes/BlogMaior/BlogMaior";
import foto14 from "../../assets/blogs/blog14/1.png"


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

                    


                        <div className="cx1">
                            <BlogMaior
                                // link='/blog/7'
                                link='#/blog/14'
                                img={foto14}
                                titulo='Energia solar e economia: Incentivos
                                fiscais no Brasil'
                                texto='À medida que a busca por fontes de energia limpa cresce, os
                                incentivos fiscais para energia solar assumem um papel de
                                aceleração ...'
                            />
                        </div>

                        <div className="cx2">
                            {arrayBlogs.map((blog) => (
                                <BlogMenor
                                    key={blog.id}
                                    // link={`/blog/${blog.id}`}
                                    link={`#/blog/${blog.id}`}
                                    img={blog.img}
                                    titulo={blog.titulo}
                                    texto={blog.texto}
                                />
                            ))}
                        </div>

                    </div>

               

            </StyledBlogPagina>

            <Footer />
        </>
    )
}