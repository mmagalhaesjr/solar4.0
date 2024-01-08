import { StyledBlog } from "../styledBlogs/styled"



import { BsWhatsapp } from 'react-icons/bs';

import foto1 from '../../../assets/blogs/blog3/1.png'


import Header2 from "../../../componentes/Header2/Header2";
import Footer from "../../../componentes/Footer/Footer";





export default function Blog3() {
    return (
        <>
            <Header2 />
            <StyledBlog>
                <div id="container1" >

                    <a href="https://api.whatsapp.com/send?phone=3298501001" target="_blank" rel="noreferrer"><BsWhatsapp id="whattsapp" /></a>

                    <div id="titulo">
                        <h1>
                            Crescimento da energia solar no
                            Brasil e as implicações futuras
                        </h1>
                    </div>

                    <div id="container2">
                        <div className="subTitulo" id="subTitulo1" >
                            <p>
                                Hoje, o Brasil é um dos líderes em energia solar na América
                                Latina e no mundo. Saiba os principais motivos por trás desse
                                crescimento e os benefícios disponíveis.
                            </p>
                        </div>
                        <div className="subTitulo" >
                            <p>
                                Potencial solar abundante
                            </p>
                        </div>
                        <div className="texto" >
                            <p>
                                O Brasil é um país vasto, com uma abundância de luz solar durante todo o ano, especialmente
                                nas regiões Norte e Nordeste. Esse potencial solar significativo torna o país ideal para a
                                geração de energia solar fotovoltaica. A disponibilidade de luz do sol constante permite que as
                                placas fotovoltaicas operem de forma eficiente e gerem eletricidade de maneira consistente.
                            </p>
                        </div>
                        <div className="img">
                            <img src={foto1} alt="foto" />
                        </div>
                        <div className="subTitulo" >
                            <p>
                                Queda nos custos de tecnologia
                            </p>
                        </div>
                        <div className="texto">
                            <p>
                                Nos últimos anos, houve uma significativa redução nos custos da tecnologia solar fotovoltaica,
                                tornando-a mais acessível para consumidores e empresas. Isso inclui tanto a queda nos
                                preços dos painéis solares quanto a melhoria na eficiência desses painéis. A combinação de
                                custos mais baixos e maior eficiência tornou a energia solar uma opção econômica e atraente
                                para muitos brasileiros.
                            </p>
                        </div>
                        <div className="subTitulo" >
                            <p>
                                Incentivos e políticas públicas
                            </p>
                        </div>
                        <div className="texto">
                            <p>
                                O governo brasileiro implementou uma série de políticas e incentivos para promover a energia
                                solar. Um dos programas mais importantes é o Programa de Desenvolvimento da Geração
                                Distribuída de Energia Elétrica (ProGD), que permite que consumidores gerem sua própria
                                energia solar e vendam o excedente de volta para a rede elétrica. Além disso, vários estados
                                brasileiros oferecem incentivos fiscais para a instalação de sistemas de energia solar.
                            </p>
                        </div>
                        <div className="subTitulo" >
                            <p>
                                Geração distribuída
                            </p>
                        </div>
                        <div className="texto">
                            <p>
                                A geração distribuída é uma tendência crescente no Brasil. Nesse modelo, consumidores
                                residenciais e comerciais instalam sistemas de energia fotovoltaica em suas propriedades
                                para gerar eletricidade para uso próprio e, quando geram mais energia do que consomem,
                                podem enviar o excedente de volta para a rede elétrica, recebendo créditos ou compensações
                                em suas contas de energia. Isso tem incentivado ainda mais a adoção da energia solar em
                                todo o país.
                            </p>
                        </div>
                        <div className="subTitulo" >
                            <p>
                                Sustentabilidade e redução de emissões

                            </p>
                        </div>
                        <div className="texto">
                            <p>
                                A conscientização sobre a importância da sustentabilidade ambiental tem crescido no Brasil e
                                em todo o mundo. A energia solar é uma fonte limpa e renovável, o que a torna uma escolha
                                atraente para aqueles que desejam reduzir sua pegada de carbono e contribuir para a luta
                                contra as mudanças climáticas.
                            </p>
                        </div>
                        <div className="subTitulo" >
                            <p>
                                Desenvolvimento de Parques Solares e Usinas Fotovoltaicas
                            </p>
                        </div>
                        <div className="texto">
                            <p>
                                Além da geração distribuída, o Brasil também tem visto um aumento na construção de
                                parques solares e usinas fotovoltaicas em grande escala. Esses projetos contribuem
                                significativamente para a capacidade de geração de energia pelo sol e ajudam a diversificar a
                                matriz energética
                            </p>
                        </div>
                        <div className="texto">
                            <p>
                                O crescimento da energia solar no Brasil é resultado da combinação de um vasto potencial
                                solar, queda nos custos da tecnologia, incentivos governamentais e a busca por uma fonte de
                                energia mais limpa e sustentável. À medida que mais brasileiros adotam a energia solar, o
                                país está caminhando em direção a um futuro mais verde e energeticamente independente. A
                                expansão contínua da energia solar no Brasil é um exemplo inspirador de como as fontes de
                                energia limpa podem transformar o setor energético e contribuir para a redução das emissões
                                de gases de efeito estufa.
                            </p>
                        </div>

                        <div id="cxVideo">
                            <iframe height="315" src="https://www.youtube.com/embed/Zj37yaFxUBI?si=G1V9aRlUmr46P_ir" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
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