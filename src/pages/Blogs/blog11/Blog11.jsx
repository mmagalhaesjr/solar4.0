import { StyledBlog } from "../styledBlogs/styled"



import { BsWhatsapp } from 'react-icons/bs';

import foto1 from '../../../assets/blogs/blog11/1.png'





import Header2 from "../../../componentes/Header2/Header2";
import Footer from "../../../componentes/Footer/Footer";





export default function Blog11() {
    return (
        <>
            <Header2 />
            <StyledBlog>
                <div id="container1" >

                    <a href="https://api.whatsapp.com/send?phone=3298501001" target="_blank" rel="noreferrer"><BsWhatsapp id="whattsapp" /></a>

                    <div id="titulo">
                        <h1>
                            Energia Solar como alternativa a
                            pobreza energética no Brasil
                        </h1>
                    </div>
                    <div id="container2">
                        <div className="subTitulo" >
                            <p>
                                Descubra por que a energia do sol pode ser uma aliada contra
                                a falta de energia no país
                            </p>
                        </div>
                        <div className="texto" >
                            <p>
                                Este blog explora como a energia solar emerge não apenas como uma fonte sustentável, mas
                                como uma solução inovadora para combater a pobreza energética que afeta comunidades em
                                todo o país.
                            </p>
                        </div>
                        <div className="img">
                            <img src={foto1} alt="foto" />
                        </div>
                        <div className="subTitulo" >
                            <p>
                                O cenário da pobreza energética no Brasil
                            </p>
                        </div>
                        <div className="texto" >
                            <p>
                                No Brasil, a pobreza energética é uma realidade que afeta diversas comunidades,
                                especialmente aquelas em áreas mais remotas e economicamente desfavorecidas. Milhões de
                                brasileiros enfrentam dificuldades para acessar serviços energéticos básicos, como
                                eletricidade para iluminação e uso doméstico. Essa situação cria barreiras significativas para o
                                desenvolvimento dessas comunidades, limitando o acesso a oportunidades educacionais,
                                serviços de saúde e desenvolvimento econômico.

                                A pobreza energética é um desafio multifacetado que reflete desigualdades sociais e destaca
                                a necessidade urgente de soluções acessíveis e sustentáveis para garantir que todos tenham
                                acesso a uma fonte confiável de energia.
                            </p>
                        </div>
                        <div className="subTitulo" >
                            <p>
                                Energia solar como fonte inesgotável
                            </p>
                        </div>
                        <div className="texto" >
                            <p>
                                Essa fonte de energia emerge como uma solução transformadora para a pobreza energética
                                no nosso país, e ainda por cima é ilimitada. Utilizar o sistema fotovoltaico elimina as barreiras
                                financeiras associadas a fontes tradicionais, proporcionando uma alternativa sustentável e
                                econômica. A abundância e constância da luz solar oferecem às comunidades a oportunidade
                                de superar as limitações energéticas, fornecendo uma fonte confiável de eletricidade que
                                atende às necessidades imediatas.
                            </p>
                        </div>
                        <div className="subTitulo" >
                            <p>
                                Projetos sociais e comunitários
                            </p>
                        </div>
                        <div className="texto" >
                            <p>
                                Projetos sociais e comunitários desempenham um papel crucial na implementação bem-
                                sucedida da energia solar como resposta à pobreza energética. Essas iniciativas visionárias
                                focam em levar soluções fotovoltaicas a comunidades carentes, proporcionando o acesso à
                                eletricidade. Integrar tecnologia solar em escolas, centros comunitários e áreas rurais,
                                possibilita oportunidades educacionais, estimulam atividades econômicas e fortalecem o
                                contexto social, contribuindo para a construção de comunidades mais resilientes e
                                autossuficientes.
                            </p>
                        </div>
                        <div className="subTitulo" >
                            <p>
                                Redução de custos e independência energética
                            </p>
                        </div>
                        <div className="texto" >
                            <p>
                                A energia solar emerge como uma solução econômica de longo prazo, oferecendo
                                independência energética às comunidades afetadas pela escassez de energia no país. Além
                                de reduzir significativamente os custos de eletricidade, ela promove a sustentabilidade
                                econômica. Por fim, a capacidade de gerar energia localmente confere autonomia, permitindo
                                que determinada população controle sua própria oferta de eletricidade e se proteja contra
                                flutuações nos preços e interrupções no fornecimento. Conte com a Solar 4.0, junto da
                                Intelbras, para fornecer equipamentos de excelência para o seu projeto de energia solar.
                                Vamos juntos fornecer a energia do sol para o país!
                            </p>
                        </div>









                        <div className="dedicatoria" >
                            <p>
                                Escrito por: Lais Sindorf
                            </p>
                            <p>
                                Publicado em: 26/02/2024
                            </p>
                        </div>



                    </div>
                </div >
            </StyledBlog>

            <Footer />

        </>
    )
}