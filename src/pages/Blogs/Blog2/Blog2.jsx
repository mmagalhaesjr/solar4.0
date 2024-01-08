import { StyledBlog } from "../styledBlogs/styled"



import { BsWhatsapp } from 'react-icons/bs';

import foto1 from '../../../assets/blogs/blog2/1.png'
import foto2 from '../../../assets/blogs/blog2/2.png'

import Header2 from "../../../componentes/Header2/Header2";
import Footer from "../../../componentes/Footer/Footer";





export default function Blog2() {
    return (
        <>
            <Header2 />
            <StyledBlog>
                <div id="container1" >

                    <a href="https://api.whatsapp.com/send?phone=3298501001" target="_blank" rel="noreferrer"><BsWhatsapp id="whattsapp" /></a>

                    <div id="titulo">
                        <h1>
                            O futuro é solar: Tendências e
                            tecnologias
                        </h1>
                    </div>

                    <div id="container2">
                        <div className="subTitulo" id="subTitulo1" >
                            <p>
                                Neste blog, vamos explorar as tendências que estão moldando
                                o futuro solar e impulsionando a transição para uma matriz
                                energética mais sustentável.
                            </p>
                        </div>
                        <div className="texto" >
                            <p>
                                Nos últimos anos, a energia solar emergiu como uma força transformadora no cenário
                                energético global. Com o aumento da conscientização sobre as mudanças climáticas e a
                                necessidade de fontes de energia mais sustentáveis, a energia solar está na vanguarda das
                                soluções para um futuro mais limpo e renovável.
                            </p>
                        </div>
                        <div className="img">
                            <img src={foto1} alt="foto" />
                        </div>

                        <div className="subTitulo" >
                            <p>
                                Crescimento exponencial da capacidade solar
                            </p>
                        </div>
                        <div className="texto">
                            <p>
                                O crescimento da capacidade de geração de energia solar tem sido notável em todo o mundo.
                                Países estão investindo massivamente em projetos solares, desde instalações em grande
                                escala até sistemas de geração distribuída. Esta tendência sugere que a energia solar está se
                                tornando uma parte central da matriz energética global, desempenhando um papel crucial na
                                transição para fontes de energia mais limpas
                            </p>
                        </div>
                        <div className="subTitulo" >
                            <p>
                                Avanços tecnológicos em painéis solares
                            </p>
                        </div>
                        <div className="texto">
                            <p>
                                Os avanços tecnológicos na eficiência e na produção de painéis solares têm sido
                                fundamentais para impulsionar a adoção da energia solar. Novos materiais, como células
                                solares de perovskita, estão sendo pesquisados para aumentar ainda mais a eficiência dos
                                painéis e reduzir os custos de produção. A inovação contínua está tornando a energia solar
                                mais acessível e eficiente.

                            </p>
                        </div>

                        <div className="subTitulo" >
                            <p>
                                Armazenamento de energia
                            </p>
                        </div>
                        <div className="texto">
                            <p>
                                O armazenamento de energia é uma peça-chave no quebra-cabeça da energia solar.
                                Tecnologias avançadas de armazenamento, como baterias de íon de lítio e sistemas de
                                armazenamento de energia térmica, estão se tornando mais acessíveis. Isso permite que a
                                energia solar seja utilizada mesmo quando o sol não está brilhando, proporcionando uma fonte
                                de energia estável e confiável.

                            </p>
                        </div>
                        <div className="subTitulo" >
                            <p>
                                Integração de energias renováveis
                            </p>
                        </div>
                        <div className="texto">
                            <p>
                                A sinergia entre diferentes fontes de energia renovável é uma tendência crescente. A
                                combinação de energia solar com outras fontes, como eólica e hidrelétrica, forma sistemas de
                                energia híbridos que maximizam a eficiência e a confiabilidade. Essa abordagem integrada é
                                essencial para garantir um suprimento constante de energia limpa.

                            </p>
                        </div>
                        <div className="subTitulo" >
                            <p>
                                Energia solar em edifícios inteligentes
                            </p>
                        </div>
                        <div className="texto">
                            <p>
                                A integração de sistemas solares em edifícios inteligentes é uma tendência arquitetônica e
                                tecnológica em ascensão. Painéis solares integrados em fachadas de edifícios, janelas solares
                                transparentes e telhados solares estão transformando estruturas convencionais em geradores
                                de energia sustentável.
                            </p>
                        </div>
                        <div className="img">
                            <img src={foto2} alt="foto" />
                        </div>

                        <div className="texto">
                            <p>
                                O futuro é solar, e as tendências e tecnologias que estamos testemunhando hoje estão
                                pavimentando o caminho para um amanhã mais sustentável. Com avanços contínuos,
                                investimentos globais e uma conscientização crescente, a energia solar está se tornando uma
                                força dominante na transição para um mundo movido por fontes de energia limpas e
                                renováveis.

                            </p>
                        </div>
                        <div className="texto">
                            <p>
                                Conte com a Solar 4.0! Ao abraçar essas tendências e tecnologias, estamos construindo não
                                apenas uma matriz energética mais verde, mas também um futuro mais resiliente e
                                sustentável!
                            </p>
                        </div>
                    
            

                        <div className="dedicatoria" >
                            <p>
                                Escrito por: Lais Sindorf
                            </p>
                            <p>
                                Publicado em: 08/01/2024
                            </p>
                        </div>



                    </div>
                </div >
            </StyledBlog>

            <Footer />

        </>
    )
}