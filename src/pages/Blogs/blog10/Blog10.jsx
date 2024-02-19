import { StyledBlog } from "../styledBlogs/styled"



import { BsWhatsapp } from 'react-icons/bs';

import foto1 from '../../../assets/blogs/blog10/1.png'





import Header2 from "../../../componentes/Header2/Header2";
import Footer from "../../../componentes/Footer/Footer";





export default function Blog10() {
    return (
        <>
            <Header2 />
            <StyledBlog>
                <div id="container1" >

                    <a href="https://api.whatsapp.com/send?phone=3298501001" target="_blank" rel="noreferrer"><BsWhatsapp id="whattsapp" /></a>

                    <div id="titulo">
                        <h1>
                            O poder da energia solar no século
                            XXI
                        </h1>
                    </div>
                    <div id="container2">
                        <div className="subTitulo" >
                            <p>
                                Bem-vindo ao nosso blog! Hoje vamos explorar o papel
                                crucial da energia solar no cenário atual
                            </p>
                        </div>
                        <div className="texto" >
                            <p>
                                Com as crescentes preocupações ambientais e a busca por fontes de energia sustentáveis, a
                                energia solar tem ganhado destaque como uma solução promissora para as demandas
                                crescentes de eletricidade.
                            </p>
                        </div>
                        <div className="subTitulo" >
                            <p>
                                A urgência da energia limpa
                            </p>
                        </div>
                        <div className="texto" >
                            <p>
                                A necessidade em adotar fontes de energia verde é incontestável diante dos problemas
                                ecológicos que enfrentamos. O aumento das emissões de gases de efeito estufa, o
                                esgotamento de recursos naturais e os impactos das mudanças climáticas exigem uma
                                transição rápida e eficaz para fontes sustentáveis. A dependência contínua de fontes não
                                renováveis compromete a segurança energética global. Sendo assim, a busca por energia
                                limpa, como a solar, torna-se crucial para a garantia de um futuro ecológico e viável para as
                                gerações presentes e futuras.
                            </p>
                        </div>
                        <div className="img">
                            <img src={foto1} alt="foto" />
                        </div>
                        <div className="subTitulo" >
                            <p>
                                Como funciona a energia solar
                            </p>
                        </div>
                        <div className="texto" >
                            <p>
                                De forma breve, os painéis solares são compostos por células fotovoltaicas, geralmente feitas
                                de silício, que capturam os fótons da luz solar. Quando os fótons atingem as células
                                fotovoltaicas, provocam a liberação de elétrons, gerando uma corrente elétrica. Esse processo
                                é conhecido como efeito fotovoltaico. A corrente elétrica gerada nas células fotovoltaicas é
                                então convertida de corrente contínua (CC) para corrente alternada (CA) por um inversor,
                                tornando-a compatível com a rede elétrica convencional. Esse método de geração de energia
                                tem se tornado cada vez mais acessível e eficiente!
                            </p>
                        </div>
                        <div className="subTitulo" >
                            <p>
                                Projetos inovadores ao redor do mundo
                            </p>
                        </div>
                        <div className="texto" >
                            <p>
                                Diversos projetos de energia solar têm demonstrado a versatilidade e eficácia dessa fonte de
                                energia limpa. Na Índia, por exemplo, o Parque Solar de Kamuthi é uma das maiores
                                instalações solares do mundo, cobrindo uma área de aproximadamente 2.500 acres e
                                fornecendo eletricidade para milhões de lares. Na Austrália, a usina solar de Sun Cable
                                pretende ser a maior do mundo, gerando energia solar para exportação para países do
                                Sudeste Asiático através de cabos submarinos. Já no coração dos Estados Unidos, a usina
                                solar Topaz Solar Farm na Califórnia é um exemplo de como a energia solar pode ser
                                integrada em grande escala, alimentando centenas de milhares de residências.
                            </p>
                        </div>
                        <div className="texto" >
                            <p>
                                Esses projetos não apenas destacam a capacidade da energia solar em atender às demandas
                                energéticas, mas também ilustram o impacto positivo que essas iniciativas têm na redução das
                                emissões de carbono e no impulso para uma matriz energética mais sustentável.
                            </p>
                        </div>
                        <div className="subTitulo" >
                            <p>
                                Políticas de apoio
                            </p>
                        </div>
                        <div className="texto" >
                            <p>
                                Incentivos e políticas de apoio têm desempenhado um papel vital na promoção da energia
                                solar em todo o mundo. Muitos governos têm implementado programas de subsídios e
                                descontos fiscais que incentivam a instalação de sistemas solares. Essas iniciativas reduzem
                                os custos iniciais para os consumidores e tornam a energia solar mais acessível, além de
                                estimularem investimentos no setor. As políticas de compra de energia limpa, como as
                                chamadas &quot; obrigações de energia renovável &quot; em alguns países, impulsionam a demanda por
                                energia solar, incentivando as empresas a investirem em projetos solares. A estabilidade
                                regulatória e a clareza nas políticas também desempenham um papel crucial, proporcionando
                                um ambiente propício para o crescimento do setor.
                            </p>
                        </div>
                        <div className="subTitulo" >
                            <p>
                                O que podemos esperar do futuro da energia solar?
                            </p>
                        </div>
                        <div className="texto" >
                            <p>
                                O porvir da energia solar promete uma transformação significativa no panorama energético
                                global, com avanços tecnológicos e crescente conscientização ambiental impulsionando sua
                                expansão. A contínua redução dos custos de instalação e o aprimoramento da eficiência dos
                                painéis solares estão tornando a energia solar cada vez mais competitiva em relação às fontes
                                tradicionais de energia. Além disso, a inteligência artificial e a digitalização estão sendo
                                empregadas para otimizar o desempenho dos sistemas solares, melhorando a gestão e
                                eficiência. Com políticas de incentivo em ascensão e o aumento da demanda por energia
                                limpa, o futuro da energia solar aponta para um cenário em que ela desempenhará um papel
                                central na matriz energética mundial, oferecendo uma fonte abundante de eletricidade.
                            </p>
                        </div>
                        <div className="texto" >
                            <p>
                            Conte com a Solar 4.0 para fazer parte dessa revolução verde!
                            </p>
                        </div>







                        <div className="dedicatoria" >
                            <p>
                                Escrito por: Lais Sindorf
                            </p>
                            <p>
                                Publicado em: 19/02/2024
                            </p>
                        </div>



                    </div>
                </div >
            </StyledBlog>

            <Footer />

        </>
    )
}