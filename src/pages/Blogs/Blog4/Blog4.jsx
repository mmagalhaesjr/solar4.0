import { StyledBlog } from "../styledBlogs/styled"



import { BsWhatsapp } from 'react-icons/bs';

import foto1 from '../../../assets/blogs/blog4/1.png'


import Header2 from "../../../componentes/Header2/Header2";
import Footer from "../../../componentes/Footer/Footer";





export default function Blog4() {
    return (
        <>
            <Header2 />
            <StyledBlog>
                <div id="container1" >

                    <a href="https://api.whatsapp.com/send?phone=3298501001" target="_blank" rel="noreferrer"><BsWhatsapp id="whattsapp" /></a>

                    <div id="titulo">
                        <h1>
                            Como a energia solar pode
                            transformar a agricultura? Descubra
                            a relação entre luz solar e colheitas
                            sustentáveis.
                        </h1>
                    </div>

                    <div id="container2">
                        <div className="subTitulo" >
                            <p>
                                Abaixo, exploraremos a sinergia entre esses dois setores
                                aparentemente distintos, destacando como a energia solar
                                não apenas ilumina, mas também fertiliza o futuro da
                                agricultura.
                            </p>
                        </div>
                        <div className="img">
                            <img src={foto1} alt="foto" />
                        </div>
                        <div className="subTitulo" >
                            <p>
                                Irrigação sustentável
                            </p>
                        </div>
                        <div className="texto" >
                            <p>
                                A energia do sol oferece uma solução eficaz para a irrigação sustentável. Sistemas
                                fotovoltaicos podem alimentar bombas de água, garantindo o fornecimento regular para
                                sistemas de irrigação, especialmente em regiões remotas ou sem acesso fácil à eletricidade.
                            </p>
                        </div>
                        <div className="subTitulo" >
                            <p>
                                Eletrificação rura
                            </p>
                        </div>
                        <div className="texto" >
                            <p>
                                A implantação de energia fotovoltaica em áreas agrícolas rurais contribui para a eletrificação
                                dessas regiões. Isso não só melhora as condições de vida dos agricultores, proporcionando
                                eletricidade para suas residências, mas também impulsiona o desenvolvimento econômico
                                local.
                            </p>
                        </div>
                        <div className="subTitulo" >
                            <p>
                                Sistemas de energia descentralizada
                            </p>
                        </div>
                        <div className="texto" >
                            <p>
                                A instalação de sistemas de energia solar descentralizados permite que as fazendas gerem
                                sua própria eletricidade. Essa autonomia energética reduz a dependência de redes elétricas
                                externas, proporcionando uma solução eficiente e econômica para as operações agrícolas.
                            </p>
                        </div>
                        <div className="subTitulo" >
                            <p>
                                Telhados solares em estufas
                            </p>
                        </div>
                        <div className="texto" >
                            <p>
                                A integração de telhados solares em estufas é uma prática inovadora. Além de gerar
                                eletricidade, esses telhados proporcionam sombreamento para as plantas, regulam a
                                temperatura interna e oferecem uma abordagem sustentável para a produção de alimentos.
                            </p>
                        </div>
                        <div className="subTitulo" >
                            <p>
                                Bom para o bolso e para o meio ambiente
                            </p>
                        </div>
                        <div className="texto" >
                            <p>
                                A energia limpa do sol não só reduz os custos operacionais agrícolas, mas também contribui
                                para práticas mais sustentáveis. A transição para fontes energéticas verdes alinha-se com os
                                objetivos de redução da pegada de carbono e sustentabilidade ambiental.
                            </p>
                        </div>
                        <div className="subTitulo" >
                            <p>
                                Armazenamento de energia para uso noturno
                            </p>
                        </div>
                        <div className="texto" >
                            <p>
                                Com sistemas de armazenamento de energia, como baterias, a energia solar capturada
                                durante o dia pode ser armazenada para uso durante a noite. Isso garante um fornecimento
                                constante de eletricidade, independentemente das condições climáticas ou da hora do dia.
                            </p>
                        </div>
                        <div className="subTitulo" >
                            <p>
                                Agricultura vertical alimentada pelo sol
                            </p>
                        </div>
                        <div className="texto" >
                            <p>
                                A agricultura vertical, impulsionada por energia solar, está ganhando destaque. Sistemas de
                                iluminação provindos do sol possibilitam o cultivo vertical em ambientes urbanos, maximizando
                                o uso eficiente do espaço.
                            </p>
                        </div>
                        <div className="subTitulo" >
                            <p>
                                Conclusão: Plantando as sementes de um futuro sustentável
                            </p>
                        </div>
                        <div className="texto" >
                            <p>
                                A interação entre energia fotovoltaica e agricultura é um campo fértil para a inovação
                                sustentável. Ao integrar tecnologias solares em práticas agrícolas, não apenas colhemos os
                                frutos da eficiência energética, mas também plantamos as sementes para um futuro onde a
                                produção de alimentos e a preservação do meio ambiente caminham lado a lado. A parceria
                                entre energia solar e agricultura é, sem dúvida, uma jornada que modifica o presente e
                                promete um futuro mais verde e sustentável para todos.
                            </p>
                        </div>





                        <div className="dedicatoria" >
                            <p>
                                Escrito por: Lais Sindorf
                            </p>
                            <p>
                                Publicado em: 11/01/2024
                            </p>
                        </div>



                    </div>
                </div >
            </StyledBlog>

            <Footer />

        </>
    )
}