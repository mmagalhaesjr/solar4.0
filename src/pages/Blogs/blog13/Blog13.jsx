import { StyledBlog } from "../styledBlogs/styled"



import { BsWhatsapp } from 'react-icons/bs';

import foto1 from '../../../assets/blogs/blog13/1.png'
import foto2 from '../../../assets/blogs/blog13/2.png'





import Header2 from "../../../componentes/Header2/Header2";
import Footer from "../../../componentes/Footer/Footer";





export default function Blog13() {
    return (
        <>
            <Header2 />
            <StyledBlog>
                <div id="container1" >

                    <a href="https://api.whatsapp.com/send?phone=3298501001" target="_blank" rel="noreferrer"><BsWhatsapp id="whattsapp" /></a>

                    <div id="titulo">
                        <h1>
                            As últimas tendências em tecnologia
                            solar
                        </h1>
                    </div>
                    <div id="container2">
                        <div className="subTitulo" >
                            <p>
                                Vamos explorar as últimas tendências em energia solar,
                                revelando como essas mudanças estão moldando o futuro da
                                energia renovável
                            </p>
                        </div>

                        <div className="img">
                            <img src={foto1} alt="foto" />
                        </div>
                        <div className="subTitulo" >
                            <p>
                                Eficiência dos painéis solares
                            </p>
                        </div>
                        <div className="texto" >
                            <p>
                                Os painéis solares estão se tornando cada vez mais eficientes na conversão da luz solar em
                                eletricidade. Novos materiais e designs estão sendo desenvolvidos para maximizar a captura
                                de energia solar, aumentando assim o rendimento dos sistemas fotovoltaicos.
                            </p>
                        </div>
                        <div className="subTitulo" >
                            <p>
                                Nanotecnologia e eficiência energética
                            </p>
                        </div>
                        <div className="texto" >
                            <p>
                                A nanotecnologia está trazendo uma revolução silenciosa para os painéis solares. Ao explorar
                                materiais em escala nanométrica, os cientistas estão aprimorando a eficiência na conversão
                                de luz solar em eletricidade. Esses materiais estão transformando a captura de luz solar,
                                impulsionando a eficiência para níveis inéditos e aproximando-nos de uma era de geração
                                solar mais potente.
                            </p>
                        </div>
                        <div className="subTitulo" >
                            <p>
                                Armazenamento de energia
                            </p>
                        </div>
                        <div className="texto" >
                            <p>
                                O armazenamento de energia é uma peça fundamental para a expansão da energia solar.
                                Tecnologias avançadas de baterias estão permitindo que os sistemas solares armazenem
                                energia durante o dia para uso durante a noite ou em dias nublados, tornando a energia solar
                                uma fonte mais confiável e independente.
                            </p>
                        </div>
                        <div className="subTitulo" >
                            <p>
                                Integração de sistemas inteligentes
                            </p>
                        </div>
                        <div className="texto" >
                            <p>
                                A inteligência artificial e a Internet das Coisas (IoT) estão sendo integradas aos sistemas
                                solares para otimizar o desempenho, monitorar o consumo de energia em tempo real e
                                realizar ajustes automáticos para maximizar a eficiência e economizar custos.
                            </p>
                        </div>
                        <div className="subTitulo" >
                            <p>
                                Inovações em design e instalação
                            </p>
                        </div>
                        <div className="texto" >
                            <p>
                                Novas técnicas de design e instalação estão tornando a energia solar mais acessível e
                                esteticamente atraente. Telhados solares integrados, sistemas flutuantes em reservatórios e
                                até mesmo estradas solares estão surgindo como opções viáveis para aproveitar o potencial
                                da energia solar.
                            </p>
                        </div>

                        <div className="img">
                            <img src={foto2} alt="foto" />
                        </div>
                        <div className="subTitulo" >
                            <p>
                                Energia solar urbana e comunitária
                            </p>
                        </div>
                        <div className="texto" >
                            <p>
                                Projetos de energia solar comunitária e iniciativas de energia solar urbana estão se tornando
                                mais populares, permitindo que comunidades e áreas urbanas aproveitem os benefícios da
                                energia solar compartilhada, reduzindo custos e promovendo a sustentabilidade.
                            </p>
                        </div>
                        <div className="subTitulo" >
                            <p>
                                Energia solar orgânica
                            </p>
                        </div>
                        <div className="texto" >
                            <p>
                                A pesquisa está em andamento para desenvolver células solares orgânicas que podem ser
                                impressas em materiais flexíveis e leves, abrindo novas possibilidades para aplicações
                                portáteis e integradas em objetos do dia a dia.
                            </p>
                        </div>
                        <div className="texto" >
                            <p>
                                Essas tendências representam apenas uma visão geral do que está acontecendo no mundo
                                da tecnologia solar. À medida que continuamos a avançar em direção a um futuro mais
                                sustentável, podemos esperar ver ainda mais inovações emocionantes que impulsionam o
                                crescimento e a adoção da energia solar em todo o mundo. Fique ligado aos conteúdos da
                                Solar 4.0 para mais atualizações sobre o mundo da energia solar!
                            </p>
                        </div>


                        <div className="dedicatoria" >
                            <p>
                                Escrito por: Lais Sindorf
                            </p>
                            <p>
                                Publicado em: 11/03/2024
                            </p>
                        </div>



                    </div>
                </div >
            </StyledBlog>

            <Footer />

        </>
    )
}