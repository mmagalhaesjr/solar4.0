import { StyledBlog } from "../styledBlogs/styled"



import { BsWhatsapp } from 'react-icons/bs';

import foto1 from '../../../assets/blogs/blog12/1.png'





import Header2 from "../../../componentes/Header2/Header2";
import Footer from "../../../componentes/Footer/Footer";





export default function Blog12() {
    return (
        <>
            <Header2 />
            <StyledBlog>
                <div id="container1" >

                    <a href="https://api.whatsapp.com/send?phone=3298501001" target="_blank" rel="noreferrer"><BsWhatsapp id="whattsapp" /></a>

                    <div id="titulo">
                        <h1>
                            Cultura de sustentabilidade e
                            energia solar: Uma aliança para um
                            futuro mais limpo
                        </h1>
                    </div>
                    <div id="container2">
                        <div className="subTitulo" >
                            <p>
                                Entenda como a sustentabilidade e a energia solar estão se
                                unindo para criar um mundo mais verde e consciente.
                            </p>
                        </div>

                        <div className="img">
                            <img src={foto1} alt="foto" />
                        </div>
                        <div className="texto" >
                            <p>
                                À medida que enfrentamos desafios ambientais cada vez mais urgentes, a cultura de
                                sustentabilidade tornou-se uma força motriz para mudanças significativas em nossa
                                sociedade. Uma das formas mais impactantes dessa mudança é a adoção crescente da
                                energia solar como parte integrante da nossa busca por um futuro sustentável.
                            </p>
                        </div> <div className="texto" >
                            <p>
                                A cultura de sustentabilidade envolve uma conscientização crescente sobre a importância de
                                viver de maneira mais consciente e tomar medidas para proteger o nosso planeta. Isso inclui
                                ações como reduzir o consumo de recursos, minimizar o desperdício, apoiar práticas agrícolas
                                sustentáveis e promover fontes de energia limpa. Essa cultura tem impulsionado a inovação e
                                a adoção de práticas mais ecológicas em todas as esferas da sociedade.
                            </p>
                        </div> <div className="texto" >
                            <p>
                                A energia solar se destaca como um símbolo concreto de sustentabilidade em ação. Aqui
                                estão algumas maneiras pelas quais a energia solar se alinha com os princípios da cultura de
                                sustentabilidade:
                            </p>
                        </div>
                        <div className="subTitulo" >
                            <p>
                                Redução de emissões de carbono
                            </p>
                        </div>
                        <div className="texto" >
                            <p>
                                A energia do sol é uma fonte de energia limpa que não emite gases de efeito estufa durante a
                                geração de eletricidade. Ela desempenha um papel significativo na redução das emissões de
                                carbono e na mitigação das mudanças climáticas, um dos desafios ambientais mais
                                prementes de nosso tempo.
                            </p>
                        </div>
                        <div className="subTitulo" >
                            <p>
                                Uso responsável de recursos
                            </p>
                        </div>
                        <div className="texto" >
                            <p>
                                A captação de energia solar não envolve o esgotamento de recursos finitos, como os
                                combustíveis fósseis. Em vez disso, ela aproveita a energia inesgotável do sol, preservando
                                os recursos naturais para as gerações futuras.
                            </p>
                        </div>
                        <div className="subTitulo" >
                            <p>
                                Energia local e autossuficiência
                            </p>
                        </div>
                        <div className="texto" >
                            <p>
                                Os sistemas solares permitem que indivíduos, empresas e comunidades gerem energia
                                localmente. Isso promove a independência energética, reduz a dependência de fontes de
                                energia centralizadas e contribui para a resiliência em situações de crise.
                            </p>
                        </div>
                        <div className="subTitulo" >
                            <p>
                                Educação e conscientização
                            </p>
                        </div>
                        <div className="texto" >
                            <p>
                                A instalação de painéis solares em residências, empresas e instituições promove a
                                conscientização sobre a importância da energia renovável. Ela inspira outras pessoas a
                                considerarem a energia provinda do sol como uma opção viável e a adotarem práticas mais
                                ecologicamente sustentáveis.
                            </p>
                        </div>
                        <div className="subTitulo" >
                            <p>
                                Compartilhando valores sustentáveis
                            </p>
                        </div>
                        <div className="texto" >
                            <p>
                                A ética ambiental e a energia do sol compartilham valores fundamentais, incluindo consciência
                                ecológica e a busca por soluções mais limpas e eficientes. Essa afinidade torna a energia
                                solar uma declaração de compromisso com um estilo de vida mais sustentável.
                            </p>
                        </div>
                        <div className="subTitulo" >
                            <p>
                                Desafios e oportunidades futuras
                            </p>
                        </div>
                        <div className="texto" >
                            <p>
                                Apesar dos avanços nos sistemas solares, ainda existem desafios a serem superados, como o
                                armazenamento eficiente de energia e a integração com a rede elétrica. No entanto, esses
                                percalços também representam oportunidades para a inovação e o aprimoramento contínuo
                                da tecnologia.
                            </p>
                        </div>
                        <div className="subTitulo" >
                            <p>
                                O futuro sustentável está ao nosso alcance
                            </p>
                        </div>
                        <div className="texto" >
                            <p>
                                Preservação e energia solar estão unidos por uma visão compartilhada de um mundo mais
                                verde e consciente. À medida que continuamos a agir de modo mais sustentável e a promover
                                a energia limpa, estamos construindo um futuro em que as próximas gerações possam
                                desfrutar de um planeta saudável e próspero. Juntos, podemos criar uma realidade onde o
                                eco-amigável não se resuma uma escolha, mas uma parte fundamental de nossa cultura e
                                estilo de vida.
                            </p>
                        </div>
                        <div className="texto" >
                            <p>
                                Escolha Soluções Verdes!
                            </p>
                        </div>






                        <div className="dedicatoria" >
                            <p>
                                Escrito por: Lais Sindorf
                            </p>
                            <p>
                                Publicado em: 04/03/2024
                            </p>
                        </div>



                    </div>
                </div >
            </StyledBlog>

            <Footer />

        </>
    )
}