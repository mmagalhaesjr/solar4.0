import { StyledBlog } from "../styledBlogs/styled"



import { BsWhatsapp } from 'react-icons/bs';

import foto1 from '../../../assets/blogs/blog5/foto1.png'
import foto2 from '../../../assets/blogs/blog5/foto2.png'


import Header2 from "../../../componentes/Header2/Header2";
import Footer from "../../../componentes/Footer/Footer";





export default function Blog5() {
    return (
        <>
            <Header2 />
            <StyledBlog>
                <div id="container1" >

                    <a href="https://api.whatsapp.com/send?phone=3298501001" target="_blank" rel="noreferrer"><BsWhatsapp id="whattsapp" /></a>

                    <div id="titulo">
                        <h1>
                            Como escolher o melhor projeto de
                            energia solar para o seu imóvel?
                        </h1>
                    </div>
                    <div id="container2">
                        <div className="subTitulo" id="subTitulo1" >
                            <p>
                                A seguir, confira passos importantes para ajudá-lo na escolha
                                do projeto de energia solar que atenda às necessidades
                                específicas do seu imóvel.
                            </p>
                        </div>
                        <div className="texto" >
                            <p>
                                A busca por fontes de energia mais sustentáveis tem levado muitos proprietários a considerar
                                a instalação de sistemas de energia solar em suas residências e negócios. No entanto, diante
                                de diversas opções e considerações técnicas, escolher o projeto certo pode ser desafiador.
                            </p>
                        </div>
                        <div className="img">
                            <img src={foto1} alt="foto" />
                        </div>
                        <div className="subTitulo" >
                            <p>
                                Adiante, separamos 6 passos que vão te guiar para a melhor escolha:
                            </p>
                        </div>
                        <div className="subTitulo" >
                            <p>
                                1. Avalie o potencial solar da propriedade.
                            </p>
                        </div>
                        <div className="texto" >
                            <p>
                                Antes de investir em um projeto de energia solar, é crucial avaliar o potencial solar do local.
                                Considere a exposição ao sol, sombreamentos e a inclinação do telhado. É imprescindível a
                                consulta com profissionais do ramo para que você tenha conhecimento da incidência do sol na
                                sua propriedade. Nós, da Solar 4.0, possuímos uma equipe altamente qualificada e pronta
                                para avaliar os projetos possíveis para o seu imóvel.
                            </p>
                        </div>
                        <div className="subTitulo" >
                            <p>
                                2. Determine a capacidade necessária.
                            </p>
                        </div>
                        <div className="texto" >
                            <p>
                                Analise o consumo de energia do seu imóvel para determinar a capacidade do sistema solar
                                necessário. Verifique suas contas de eletricidade para entender o consumo médio mensal.
                                Essa informação ajudará a dimensionar o sistema de energia solar de acordo com suas
                                necessidades.
                            </p>
                        </div>
                        <div className="subTitulo" >
                            <p>
                                3. Considere a estética e o espaço disponível.
                            </p>
                        </div>
                        <div className="texto" >
                            <p>
                                A estética do sistema solar e a quantidade de espaço disponível também são fatores
                                importantes. Painéis solares vêm em diversas formas e tamanhos, e algumas tecnologias,
                                como telhas solares integradas, podem ser mais discretas e visualmente atraentes.
                            </p>
                        </div>
                        <div className="subTitulo" >
                            <p>
                                4. Escolha entre painéis solares tradicionais e novas tecnologias.
                            </p>
                        </div>
                        <div className="texto" >
                            <p>
                                Além dos painéis solares convencionais, novas tecnologias estão surgindo, como células
                                solares de perovskita e filmes solares finos. Considere as opções disponíveis e avalie a
                                eficiência, a durabilidade e o custo-benefício de cada tecnologia antes de tomar uma decisão.
                            </p>
                        </div>
                        <div className="subTitulo" >
                            <p>
                                5. Avalie o retorno sobre o investimento (ROI).
                            </p>
                        </div>
                        <div className="texto" >
                            <p>
                                Calcular o retorno sobre o investimento é essencial para entender o período necessário para
                                recuperar os custos iniciais. Considere os incentivos fiscais, a economia na conta de
                                eletricidade e outros benefícios ao calcular o ROI do seu projeto de energia solar.
                            </p>
                        </div>
                        <div className="subTitulo" >
                            <p>
                                6. Obtenha diferentes orçamentos e consulte profissionais.
                            </p>
                        </div>
                        <div className="texto" >
                            <p>
                                Para garantir que você está obtendo o melhor projeto para o seu imóvel, é recomendável obter
                                orçamentos de várias empresas e consultar profissionais do setor, que vão te apresentar as
                                opções disponíveis e orientar na escolha do sistema mais adequado às suas necessidades.
                            </p>
                        </div>
                        <div className="subTitulo" >
                            <p>
                                Faça uma escolha consciente para um futuro sustentável.
                            </p>
                        </div>
                        <div className="texto" >
                            <p>
                                Escolher o melhor projeto de energia fotovoltaica para o seu imóvel envolve uma análise
                                cuidadosa das condições locais, necessidades de energia e considerações financeiras. Ao
                                seguir esses passos e buscar orientação profissional, você estará dando um passo
                                significativo em direção a um futuro mais sustentável, economizando energia e contribuindo
                                para a redução das emissões de carbono. Invista no projeto certo e colha os benefícios da
                                energia solar por muitos anos!
                            </p>
                        </div>
                        <div className="img">
                            <img src={foto2} alt="foto" />
                        </div>







                        <div className="dedicatoria" >
                            <p>
                                Escrito por: Lais Sindorf
                            </p>
                            <p>
                                Publicado em: 19/01/2024
                            </p>
                        </div>



                    </div>
                </div >
            </StyledBlog>

            <Footer />

        </>
    )
}