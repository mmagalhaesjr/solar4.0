import { StyledBlog } from "../styledBlogs/styled"



import { BsWhatsapp } from 'react-icons/bs';

import foto1 from '../../../assets/blogs/blog6/1.png'



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
                            Por que energia solar e mobilidade
                            elétrica formam a dupla sustentável
                            do futuro?
                        </h1>
                    </div>
                    <div id="container2">
                        <div className="subTitulo" id="subTitulo1" >
                            <p>
                                Confira este blog para entender como a integração desses
                                sistemas pode moldar um futuro mais limpo e eficiente
                            </p>
                        </div>
                        <div className="img">
                            <img src={foto1} alt="foto" />
                        </div>
                        <div className="subTitulo" >
                            <p>
                                O poder do sol na geração de eletricidade limpa
                            </p>
                        </div>
                        <div className="texto" >
                            <p>
                                A energia solar é uma fonte inesgotável e ambientalmente amigável. A captura da luz do sol
                                por meio de painéis fotovoltaicos não apenas reduz a dependência de fontes não renováveis,
                                mas também diminui as emissões de gases de efeito estufa. Este é o primeiro pilar da nossa
                                jornada ambientalmente responsável.
                            </p>
                        </div>
                        <div className="subTitulo" >
                            <p>
                                Mobilidade elétrica: Transformando a forma como nos deslocamos
                            </p>
                        </div>
                        <div className="texto" >
                            <p>
                                Os veículos de emissão zero surgem como uma alternativa revolucionária aos veículos
                                tradicionais movidos a combustíveis fósseis. Com motores elétricos e baterias eficientes, os
                                veículos elétricos (VEs) promovem uma condução limpa, eliminando emissões diretas e
                                contribuindo para a melhoria da qualidade do ar em áreas urbanas.
                            </p>
                        </div>
                        <div className="subTitulo" >
                            <p>
                                A convergência: Carregando automóveis ecológicos com energia solar
                            </p>
                        </div>
                        <div className="texto" >
                            <p>
                                A combinação ideal: utilizar a energia solar para carregar carros elétricos. Esta prática não
                                apenas reduz os custos de operação dos VEs, mas também amplia a pegada ecológica
                                positiva, tornando o ciclo de vida desses veículos ainda mais verde.
                            </p>
                        </div>
                        <div className="subTitulo" >
                            <p>
                                Benefícios econômicos e ambientais
                            </p>
                        </div>
                        <div className="texto" >
                            <p>
                                Unir a energia do sol a veículos elétricos não apenas representa uma escolha ecologicamente
                                correta, mas também faz sentido financeiro. A redução nos custos operacionais, o acesso a
                                incentivos fiscais e a contribuição para a sustentabilidade corporativa são fatores que tornam
                                essa combinação atrativa.
                            </p>
                        </div>
                        <div className="subTitulo" >
                            <p>
                                Carregamento sustentável em espaços urbanos
                            </p>
                        </div>
                        <div className="texto" >
                            <p>
                                A implementação de infraestrutura de carregamento para veículos elétricos alimentada por
                                energia solar é um passo crucial para viabilizar essa transição sustentável. Sistemas
                                inteligentes que gerenciam a carga e a descarga, juntamente com a integração de energias
                                renováveis, definem o caminho para cidades mais limpas e eficientes energeticamente.
                            </p>
                        </div>
                        <div className="texto" >
                            <p>
                                Empresas e fornecedores estão direcionando investimentos para o desenvolvimento de
                                soluções de recarga, respondendo à crescente demanda. Isso se deve à essencialidade de
                                contar com uma infraestrutura de recarga eficiente. Afinal, proporcionar uma experiência
                                positiva aos usuários de veículos elétricos exige abastecimento conveniente e ágil.
                            </p>
                        </div>
                        <div className="subTitulo" >
                            <p>
                                Rumo a um futuro sustentável
                            </p>
                        </div>
                        <div className="texto" >
                            <p>
                                A combinação de sistemas solares e veículos elétricos representa uma revolução silenciosa
                                em nossas ruas e casas. À medida que mais pessoas adotam essa aliança ecológica,
                                contribuímos para um futuro onde a energia limpa e a mobilidade eficiente convergem para
                                criar um ambiente mais saudável e equilibrado.
                            </p>
                        </div>









                        <div className="dedicatoria" >
                            <p>
                                Escrito por: Lais Sindorf
                            </p>
                            <p>
                                Publicado em: 22/01/2024
                            </p>
                        </div>



                    </div>
                </div >
            </StyledBlog>

            <Footer />

        </>
    )
}