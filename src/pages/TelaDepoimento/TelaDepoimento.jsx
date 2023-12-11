import Depoimento from "../../componentes/Depoimento/Depoimento"

import { Navigation, Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { StyledTelaDepoimento } from "./styled";

export default function CadaDepoimento() {
    return (
        <StyledTelaDepoimento>
            <div id="titulo">
                <h1>DEPOIMENTOS</h1>
            </div>

            <div id="container">
                <Swiper
                    modules={[Navigation, Pagination, A11y]}
                    navigation
                    pagination={{ clickable: true }}
                    slidesPerView={window.innerWidth < 700 ? 1 : 3}
                >
                    <SwiperSlide>
                        <Depoimento
                            img="https://lh3.googleusercontent.com/a/ACg8ocKb8-imfmxl5HlXUuxmEIq2_oJgnSOUcWtZqQJg53i-=w75-h75-p-rp-mo-br100"
                            nome="Andreia Castro"
                            data="1 ano atrás"
                            texto=" Eu já tinha a 4 anos instalado por uma outra empresa e o equipamento não estava gerando.
                            Procurei a empresa solar 4.0 soluções verdes e o Fábio que me atendeu prontamente acionou a
                            garantia e conseguiu que trocassem o conversor.instalaram o conversor e logo começou a gerar.
                            Fiquei muito satisfeita com trabalho deles!atendimento rápido e eficiente,recomendo muito!"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Depoimento
                            img="https://lh3.googleusercontent.com/a-/ALV-UjWBykHkhKHVMVVHpxLJw2hW_ApQtvYtMMLtDwaKZmgrg1Ds=w75-h75-p-rp-mo-br100"
                            nome="Zilma Reis"
                            data="5 meses atrás"
                            texto=" Instalei em minha residência um sistema com 4 placas e um microinversor.
                            A produção mensal tem sido em torno de 180kWh. Já estou com a conta mínima em duas residências.
                            O atendimento da Solar 4.0 foi eficiente,
                            com gentileza e sem atrasos, seja na venda e também no pós-venda."
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Depoimento
                            img="https://lh3.googleusercontent.com/a-/ALV-UjUfriJpzQ25yRrTF97oRYNQgCTS2mG8FJ-CnxEQxUsjYwo=w75-h75-p-rp-mo-br100"
                            nome="Jose Candido Oliveira Silva"
                            data="8 meses atrás"
                            texto="A empresa que nos atendeu cumpriu com todos os requisitos que foram prometidos;
                            a equipe técnica muito responsável e eficiente; o sistema implantado para geração de energia fotovoltaica
                            vem correspondendo  ao que esperávamos com resultados surpreendentes; recomendamos aos interessados a
                            contratação desta empresa por ter sido muito honesta e responsável com o que foi prometido."
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Depoimento
                            img="https://lh3.googleusercontent.com/a-/ALV-UjX-0hTSTOqrADJKl_ALGsrMV38-fCk1gdCAujnjYye93Vg=w75-h75-p-rp-mo-br100"
                            nome="Júnia Borges"
                            data="8 meses atrás"
                            texto=" Fizemos a instalação do sistema fotovoltaico com o Sr. Fábio e ficamos impressionados com o atendimento.
                            Desde a apresentação da tecnologia, a compra, presteza em nos atender sempre que precisávamos,
                            na instalação (muito rápida, por sinal) e no pós-venda, sempre atencioso! Estamos muito satisfeitos com a geração da energia,
                            sistema muito bom! Enfim, recomendamos a Solar 2.0 de olhos fechados!"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Depoimento
                            img="https://lh3.googleusercontent.com/a/ACg8ocKHpeLUZ44DDsSZLisfNUMsk7p5Lu0crm9rs-mEFadk=w75-h75-p-rp-mo-br100"
                            nome="Carlos Eduardo de Almeida Ribeiro"
                            data=" anos atrás"
                            texto=" A Solar 4.0 instalou 12 painéis na minha residência e a geração superou as minhas expectativas.
                            O atendimento foi excelente antes, durante e depois da instalação por profissionais qualificados e dedicados.
                            Recomendo a empresa pela excelência do atendimento,
                            qualidade do serviço executado, transparência e responsabilidade."
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Depoimento
                            img="https://lh3.googleusercontent.com/a/ACg8ocIpAFgUgRNp_FlUdrg1Q2Q4n0r7yS1E9dtFpR92akGH=w75-h75-p-rp-mo-br100"
                            nome="Fabiano Pardini"
                            data="3 anos atrás"
                            texto=" Atendimento sensacional de toda a equipe. Todo o trabalho de instalação
                            foi feito com muito capricho e ainda com monitoramento a todo o tempo após a instalação.
                            Estou extremamente satisfeito com a Solar 4.0 e com a solução de energia solar que tem me
                            garantido logo após a instalação o retorno financeiro na minha conta de energia.
                            Super recomendo a empresa e a solução fornecida por eles que é da Intelbras."
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Depoimento
                            img="https://lh3.googleusercontent.com/a-/ALV-UjWrkz6qFVcGcXtTfgix5897w7tZ5XYOcfq6LMWT7sti8Mk=w75-h75-p-rp-mo-br100"
                            nome="Clesio Domiciano"
                            data="6 meses atrás"
                            texto="AExcelente experiência com a Solar 4.0. Atendimento com muita competência, domínio técnico, funcionários treinados, capacitados e ótima conduta.
                            Tudo foi cumprido exatamente como contratado.
                            Suporte muito detalhado desde a apresentação do equipamento, venda, entrega e início da geração de energia.
                            Atendimento nota 10 em todas as etapas.
                            Estou muito satisfeito e super recomendo."
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Depoimento
                            img="https://lh3.googleusercontent.com/a/ACg8ocJaK6UIZKT2e93Gi1ADg-MS6ydtSlU2Hb4OQ9v5G6fh=w75-h75-p-rp-mo-br100"
                            nome="Denilson Ferreira da Silva"
                            data=" meses atrás"
                            texto=" Eu achava que era muito complicado instalar energia solar,
                            mas fiquei surpreso com a praticidade, rapidez e qualidade na instalação. Estou muito satisfeito,
                            muita economia, recomendo muito a SOLAR 4.0, técnicos preparados e excelente atendimento."
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Depoimento
                            img="https://lh3.googleusercontent.com/a-/ALV-UjVH1iipJlA6bYmMB-0RwjWD3K6HxhcF9yPXv-5aERimn2Q=w75-h75-p-rp-mo-br100"
                            nome="Heloiza Cançado"
                            data="8 meses atrás"
                            texto=" Instalamos a energia fotovoltaica em nossa casa da Aldeias do Lago no inicio de 2022.
                            Estamos muito satisfeitos.  O serviço de instalação e esclarecimentos foi perfeito.
                            A economia gerada está atendendo às nossas expectativas.  Obrigada a Solar 4.0."
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Depoimento
                            img="https://lh3.googleusercontent.com/a/ACg8ocI6ywi0V03Drz-BVW-LoZtKiEXdvJ_H67FvA8GySsEw=w75-h75-p-rp-mo-br100"
                            nome="Bruno Godinho"
                            data="9 meses atrás"
                            texto=" Fiz a instalação do sistema de geração de energia fotovoltaica,
                            bem como do aquecimento solar da água da nossa residência. Serviço de excelente qualidade,
                            ótimos profissionais, engenheiro presente em todo o processo de instalação do sistema de geração de energia.
                            Além disso, a produção de energia está acima do esperado. Super recomendo.
                            Já indiquei para várias pessoas que também ficaram muito satisfeitas com o
                            resultado do serviço e com o atendimento prestado por todos os funcionários da empresa! Nota 1000"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Depoimento
                            img="https://lh3.googleusercontent.com/a-/ALV-UjWsxHB5ZffItZXXfSj3Df3wKbBBiBqnOgh3yAbD3EG0hdA=w75-h75-p-rp-mo-br100"
                            nome="David Salgado"
                            data="9 meses atrás"
                            texto="Combinamos à instalação que necessitava de cuidados especiais pois o
                            local para instalação era de difícil acesso. Tudo correu dentro do tempo combinado,
                            sem transtornos. E a economia REALMENTE compensou superando até o prometido."
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Depoimento
                            img="https://lh3.googleusercontent.com/a/ACg8ocJt5-r21CeNtwbOODpW-rt6pyXoFb81TbLlaEdPNNCU=w75-h75-p-rp-mo-br100"
                            nome="Pedro Bastos Altomari"
                            data="1 mês atrás"
                            texto="07 painéis de 590W e inversor de 3,6K gerando 350kWh/mês, proporcionando uma economia de
                            R$ 400,00 por mês, muito satisfeito e pretendo colocar em outros lugares..."
                        />
                    </SwiperSlide>



                </Swiper>
            </div>
        </StyledTelaDepoimento>
    )
}