import { StyledBlog } from "../styledBlogs/styled"



import { BsWhatsapp } from 'react-icons/bs';

import foto1 from '../../../assets/blogs/blog14/1.png'
import foto2 from '../../../assets/blogs/blog14/2.png'





import Header2 from "../../../componentes/Header2/Header2";
import Footer from "../../../componentes/Footer/Footer";





export default function Blog14() {
    return (
        <>
            <Header2 />
            <StyledBlog>
                <div id="container1" >

                    <a href="https://api.whatsapp.com/send?phone=3298501001" target="_blank" rel="noreferrer"><BsWhatsapp id="whattsapp" /></a>

                    <div id="titulo">
                        <h1>
                            Energia solar e economia: Incentivos
                            fiscais no Brasil
                        </h1>
                    </div>
                    <div id="container2">
                        <div className="subTitulo" >
                            <p>
                                À medida que a busca por fontes de energia limpa cresce, os
                                incentivos fiscais para energia solar assumem um papel de
                                aceleração da transição para uma matriz energética mais
                                verde. Confira a seguir os incentivos fiscais disponíveis no
                                Brasil
                            </p>
                        </div>

                        <div className="img">
                            <img src={foto1} alt="foto" />
                        </div>
                        <div className="subTitulo" >
                            <p>
                                Isenção de ICMS sobre a geração própria
                            </p>
                        </div>
                        <div className="texto" >
                            <p>
                                Um dos principais incentivos para adotar energia solar no Brasil é a isenção de ICMS sobre a
                                geração própria. Essa isenção varia de estado para estado, com alguns oferecendo uma
                                isenção de 100% sobre a energia produzida para consumo próprio. Estados como São Paulo,
                                Rio de Janeiro, Minas Gerais e Paraná são reconhecidos por implementar políticas favoráveis
                                nesse sentido. Entender a legislação específica do seu estado é crucial para maximizar os
                                benefícios dessa isenção.
                            </p>
                        </div>
                        <div className="subTitulo" >
                            <p>
                                Linhas de financiamento com taxas atrativas
                            </p>
                        </div>
                        <div className="texto" >
                            <p>
                                Instituições financeiras incentivam a adoção de energia solar oferecendo linhas de
                                financiamento específicas com taxas de juros reduzidas. Bancos como o Banco Nacional de
                                Desenvolvimento Econômico e Social (BNDES) disponibilizam linhas de crédito específicas
                                para projetos de energia renovável, facilitando o acesso a financiamentos para a instalação de
                                sistemas fotovoltaicos.
                            </p>
                        </div>
                        <div className="subTitulo" >
                            <p>
                                Resolução normativa 482/2012 da ANEEL
                            </p>
                        </div>
                        <div className="texto" >
                            <p>
                                A Agência Nacional de Energia Elétrica (ANEEL) estabeleceu a Resolução Normativa
                                482/2012, um marco para a geração distribuída no Brasil. Essa resolução permite que
                                consumidores gerem sua própria energia, reduzindo significativamente suas contas de
                                eletricidade. Além disso, a resolução permite a compensação de créditos, o que significa que o
                                excedente de energia gerado pode ser utilizado para abater o consumo em outros momentos
                                ou mesmo ser vendido à distribuidora local.
                            </p>
                        </div>
                        <div className="subTitulo" >
                            <p>
                                Desconto no IPI para equipamentos fotovoltaicos
                            </p>
                        </div>
                        <div className="texto" >
                            <p>
                                O governo brasileiro concede descontos no Imposto sobre Produtos Industrializados (IPI) para
                                equipamentos fotovoltaicos. Este desconto visa impulsionar a indústria solar, tornando os
                                sistemas mais acessíveis para os consumidores. Essa medida também incentiva a produção
                                nacional de componentes solares, contribuindo para o desenvolvimento da cadeia produtiva
                                no país.
                            </p>
                        </div>
                        <div className="subTitulo" >
                            <p>
                                Créditos de energia e compensação de excedentes
                            </p>
                        </div>
                        <div className="texto" >
                            <p>
                                A compensação de excedentes permite que consumidores recebam créditos pela energia que
                                injetam na rede. Esses créditos podem ser utilizados nos meses em que a geração é menor,
                                proporcionando uma gestão inteligente da energia. Pesquise mais sobre como funcionam os
                                créditos de energia e como eles podem representar uma economia adicional para quem adota
                                sistemas fotovoltaicos.
                            </p>
                        </div>
                        <div className="img">
                            <img src={foto2} alt="foto" />
                        </div>
                        <div className="texto" >
                            <p>
                                Ao explorar os incentivos fiscais para energia solar no Brasil, fica evidente que o governo está
                                comprometido em facilitar a transição para fontes de energia mais sustentáveis. Esses
                                incentivos não apenas impulsionam a indústria solar, mas também tornam a energia solar uma
                                escolha acessível e economicamente vantajosa para consumidores conscientes. Fique de olho
                                no Blog da Solar 4.0 para ficar por dentro das últimas novidades sobre energia solar no Brasil
                                e no mundo!
                            </p>
                        </div>



                        <div className="dedicatoria" >
                            <p>
                                Escrito por: Lais Sindorf
                            </p>
                            <p>
                                Publicado em: 18/03/2024
                            </p>
                        </div>



                    </div>
                </div >
            </StyledBlog>

            <Footer />

        </>
    )
}