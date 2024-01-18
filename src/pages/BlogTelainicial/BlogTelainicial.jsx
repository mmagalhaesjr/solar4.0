import { StyledBlogPagina } from "./styled";

import { BsWhatsapp } from 'react-icons/bs';
import Header2 from '../../componentes/Header2/Header2';
import Footer from '../../componentes/Footer/Footer';

import BlogMaior from "../../componentes/BlogMaior/BlogMaior";
import BlogMenor from '../../componentes/BlogMenor/BlogMenor';
import {arrayBlogs} from '../../componentes/BlogLista/BlogLista'

import foto5 from "../../assets/blogs/blog5/foto1.png"


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
                                // link='/blog/5'
                                link='#/blog/5'
                                img={foto5}
                                titulo='Como escolher o melhor projeto de
                                energia solar para o seu imóvel?'
                                texto='A seguir, confira passos importantes para ajudá-lo na escolha
                                do projeto de energia solar que atenda às necessidades
                                específicas do seu imóvel.'
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