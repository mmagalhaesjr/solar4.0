import { StyledBlog } from "../styledBlogs/styled"



import { BsWhatsapp } from 'react-icons/bs';

import foto1 from '../../../assets/blogs/blog7/1.png'
import foto2 from '../../../assets/blogs/blog7/2.png'
import foto3 from '../../../assets/blogs/blog7/3.png'
import foto4 from '../../../assets/blogs/blog7/4.png'
import foto5 from '../../../assets/blogs/blog7/5.png'



import Header2 from "../../../componentes/Header2/Header2";
import Footer from "../../../componentes/Footer/Footer";





export default function Blog6() {
    return (
        <>
            <Header2 />
            <StyledBlog>
                <div id="container1" >

                    <a href="https://api.whatsapp.com/send?phone=3298501001" target="_blank" rel="noreferrer"><BsWhatsapp id="whattsapp" /></a>

                    <div id="titulo">
                        <h1>
                            Curiosidades sobre energia solar
                            que você não sabia
                        </h1>
                    </div>
                    <div id="container2">
                        <div className="subTitulo" >
                            <p>
                                A energia solar é uma fonte de energia renovável fascinante
                                e cheia de curiosidades que talvez você não conheça. Leia
                                este Blog até o fim e descubra!
                            </p>
                        </div>
                        <div className="subTitulo" >
                            <p>
                                Energia solar no Espaço
                            </p>
                        </div>
                        <div className="texto" >
                            <p>
                                Um passo importante para o futuro da energia renovável foi dado: cientistas do Instituto de
                                Tecnologia da Califórnia conseguiram pela primeira vez transmitir energia solar, sem fio,
                                diretamente do espaço para a Terra.
                                Este é um marco para o futuro da energia renovável! Pesquisadores do Caltech, Instituto de
                                Tecnologia da Califórnia, transmitiram pela primeira vez a energia de painéis solares no
                                espaço para a Terra, sem a necessidade de conexões físicas.
                                O experimento faz parte do Projeto de Energia Solar Espacial (SSPP, na sigla em inglês) do
                                Instituto e foi divulgado em um comunicado de imprensa em 1º de junho do ano passado,
                                confirmando o sucesso da transferência.
                            </p>
                        </div>
                        <div className="img">
                            <img src={foto1} alt="foto" />
                        </div>
                        <div className="subTitulo" >
                            <p>
                                Árvores que geram energia solar
                            </p>
                        </div>
                        <div className="texto" >
                            <p>
                                Um projeto de paisagismo, chamado GardensbytheBay, em Singapura, é um dos principais
                                pontos turísticos do local e um dos jardins botânicos mais famosos e modernos do mundo: 18
                                árvores gigantes artificiais que medem entre 25 e 50 metros e contam com células solares.
                                Isso lhe rendeu o prêmio BuildingoftheYear 2012, ano de sua inauguração oficial.
                                O complexo, que possui 101 hectares de terra recuperada, abriga cerca de 226 mil plantas e
                                flores de todas as partes do planeta e, aproximadamente, 8 mil variedades de espécies. Além
                                disso, há cúpulas com jardins temáticos, estufas, cachoeira coberta e árvores gigantes.
                            </p>
                        </div>
                        <div className="img">
                            <img src={foto2} alt="foto" />
                        </div>
                        <div className="subTitulo" >
                            <p>
                                Aeroporto solar
                            </p>
                        </div>
                        <div className="texto" >
                            <p>
                                O Aeroporto Internacional Cochin, em Querala, na Índia, passou a operar 100% com energia
                                solar, em agosto de 2015. Trata-se do primeiro aeroporto internacional a funcionar apenas
                                com a energia do sol.
                                Com isso, nos próximos 20 anos, 300 mil toneladas de carbono deixarão de ser emitidas na
                                atmosfera. Os 46.150 painéis solares abastecem 12 MW de potência no aeroporto, o que é
                                ideal para abastecer todas as funções operacionais.
                            </p>
                        </div>
                        <div className="img">
                            <img src={foto3} alt="foto" />
                        </div>
                        <div className="subTitulo" >
                            <p>
                                O maior barco solar do mundo
                            </p>
                        </div>
                        <div className="texto" >
                            <p>
                                O MS Turanor PlanetSolar é considerado o maior barco solar do mundo, o opera
                                exclusivamente com energia do sol captada pelos seus 512m² de painéis solares.
                                É conhecido como o barco que deu a volta mais rápida no mundo. A velocidade máxima
                                atingida foi de 26km/h.
                                Dotado de uma imensa cobertura de painéis fotovoltaicos, está em Nova York, em uma
                                viagem científica para estudar o efeito das mudanças climáticas na famosa Corrente do Golfo.
                            </p>
                        </div>
                        <div className="img">
                            <img src={foto4} alt="foto" />
                        </div>
                        <div className="subTitulo" >
                            <p>
                                Energia solar flutuante
                            </p>
                        </div>
                        <div className="texto" >
                            <p>
                                A usina solar flutuante também requer a instalação de painéis solares, porém, ao invés desses
                                painéis serem instalados nos telhados, eles são montados sobre lagos e sobre as águas das
                                represas das usinas hidrelétricas existentes. Isso ajuda a conservar espaço em terra e pode
                                reduzir a evaporação da água.
                                Um dos benefícios de se instalar uma usina solar flutuante no reservatório de uma hidrelétrica
                                é aproveitar a linha de transmissão existente que leva a energia para as cidades.
                            </p>
                        </div>
                        <div className="img">
                            <img src={foto5} alt="foto" />
                        </div>
                        <div className="texto" >
                            <p>
                                Essas curiosidades destacam o quão versátil e promissora a energia solar é como fonte de
                                energia limpa e sustentável. Para saber mais sobre energia solar, acompanhe o nosso Blog e
                                nos siga nas redes sociais. Se deseja implementar a energia do futuro na sua casa, empresa
                                ou fazenda, entre em contato com a Solar 4.0!
                            </p>
                        </div>






                        <div className="dedicatoria" >
                            <p>
                                Escrito por: Lais Sindorf
                            </p>
                            <p>
                                Publicado em: 26/01/2024
                            </p>
                        </div>



                    </div>
                </div >
            </StyledBlog>

            <Footer />

        </>
    )
}