import { StyledBlog } from "../styledBlogs/styled"



import { BsWhatsapp } from 'react-icons/bs';

import foto1 from '../../../assets/blogs/blog8/1.png'
import foto2 from '../../../assets/blogs/blog8/2.png'



import Header2 from "../../../componentes/Header2/Header2";
import Footer from "../../../componentes/Footer/Footer";





export default function Blog8() {
    return (
        <>
            <Header2 />
            <StyledBlog>
                <div id="container1" >

                    <a href="https://api.whatsapp.com/send?phone=3298501001" target="_blank" rel="noreferrer"><BsWhatsapp id="whattsapp" /></a>

                    <div id="titulo">
                        <h1>
                            90% dos brasileiros desejam gerar
                            a própria energia
                        </h1>
                    </div>
                    <div id="container2">
                        <div className="subTitulo" id="subTitulo1" >
                            <p>
                                Entenda a lei aprovada em 6 de janeiro de 2022
                            </p>
                        </div>
                        <div className="img">
                            <img src={foto1} alt="foto" />
                        </div>

                        <div className="texto" >
                            <p>
                                90% dos brasileiros desejam gerar
                                a própria energia
                                Entenda a lei aprovada em 6 de janeiro de 2022
                                Oitenta e quatro por cento dos entrevistados no estudo conduzido pelo IBOPE e pela
                                Abraceel (Associação Brasileira dos Comercializadores de Energia) expressaram a opinião de
                                que a energia elétrica é cara ou muito cara.
                            </p>
                        </div>
                        <div className="texto" >
                            <p>
                                Segundo a Abraceel, o valor pago pelos consumidores tem se tornado mais evidente nas
                                despesas das famílias e aumentando o seu descontentamento.
                            </p>
                        </div>
                        <div className="texto" >
                            <p>
                                Em 2014, quando a primeira pesquisa foi realizada, 67% dos participantes consideravam a
                                energia elétrica cara ou muito cara. No entanto, em 2020, o percentual de insatisfação foi
                                menor em comparação com os 87% registrados no ano anterior. Para este último
                                levantamento, foram ouvidas 2 mil pessoas de todas as regiões do país, entre os dias 24 de
                                março e 1º de abril.
                            </p>
                        </div>
                        <div className="texto" >
                            <p>
                                Em todas as regiões, o preço é o fator de maior destaque para a mudança de fornecedora
                                de energia. No Sudeste e Sul, a busca por fontes energéticas mais ambientalmente
                                sustentáveis ficou em segundo lugar, enquanto nas outras regiões, a qualidade do
                                atendimento ocupou essa posição. A região Centro-Oeste registrou o maior desejo de
                                autossuficiência energética, com 94%, enquanto no Sul e no Nordeste esse número é 6
                                pontos percentuais menor.
                            </p>
                        </div>
                        <div className="img">
                            <img src={foto2} alt="foto" />
                        </div>
                        <div className="texto" >
                            <p>
                                Quando questionados sobre a possibilidade de um mercado de energia mais livre, no qual
                                os consumidores podem escolher seu fornecedor de energia, 63% dos entrevistados
                                indicaram que considerariam mudar de empresa, e o principal motivo para essa decisão
                                seria o custo da energia.
                            </p>
                        </div>
                        <div className="texto" >
                            <p>
                                A solução garantida continua sendo gerar a própria energia, e a provinda do sol, por ser
                                ilimitada e sustentável, pode ser a melhor escolha para você que deseja ter redução de
                                custos na conta de luz e ainda contribuir para a economia ecológica. Conte com a Solar 4.0
                                para implementar soluções mais verdes na sua residência, empresa ou agronegócio!
                            </p>
                        </div>







                        <div className="dedicatoria" >
                            <p>
                                Escrito por: Lais Sindorf
                            </p>
                            <p>
                                Publicado em: 29/01/2024
                            </p>
                        </div>



                    </div>
                </div >
            </StyledBlog>

            <Footer />

        </>
    )
}