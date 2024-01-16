import { StyledBlogPagina } from "./styled";

import { BsWhatsapp } from 'react-icons/bs';
import Header2 from '../../componentes/Header2/Header2';
import Footer from '../../componentes/Footer/Footer';

import BlogMaior from "../../componentes/BlogMaior/BlogMaior";
import BlogMenor from '../../componentes/BlogMenor/BlogMenor';
import {arrayBlogs} from '../../componentes/BlogLista/BlogLista'
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
                                // link='/blog/4'
                                link='#/blog/4'
                                img={foto4}
                                titulo='Como a energia solar pode
                                transformar a agricultura?...'
                                texto='Abaixo, exploraremos a sinergia entre esses dois setores
                                aparentemente distintos...'
                            />
                        </div>

                        <div className="cx2blogs">
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

                </div>

            </StyledBlogPagina> 

            <Footer />
        </>
    )
}