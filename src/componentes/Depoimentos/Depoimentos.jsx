import { useRef, useEffect } from "react";
import estrela from '../../assets/estrela.png'
import { StyledDepoimentos } from "./styled";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { GrNext } from 'react-icons/gr';
import { GrPrevious } from 'react-icons/gr';



export default function Depoimentos() {
  const sliderRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      sliderRef.current.slickNext();
    }, 50000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const handleNextClick = () => {
    sliderRef.current.slickNext();
  };

  const handlePrevClick = () => {
    sliderRef.current.slickPrev();
  };

  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    autoplay: false,
    speed: 8000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <StyledDepoimentos>
      <div id="titulo">
        <h1>DEPOIMENTOS</h1>
      </div>

      <div id="container">


        <Slider {...settings} ref={sliderRef}>


          <div className="carrosselDiv">
            <div className="contCarrossel">
              <div className="img"> <img src="https://lh3.googleusercontent.com/a/ACg8ocKb8-imfmxl5HlXUuxmEIq2_oJgnSOUcWtZqQJg53i-=w75-h75-p-rp-mo-br100" alt="" /></div>

              <h2>Andreia Castro</h2>
              <div className="star" >
                <img src={estrela} alt="" />
                <p>1 ano atrás</p>
              </div>
              <div className="texto">
                <p>
                  Eu já tinha a 4 anos instalado por uma outra empresa e o equipamento não estava gerando.
                  Procurei a empresa solar 4.0 soluções verdes e o Fábio que me atendeu prontamente acionou a
                  garantia e conseguiu que trocassem o conversor.instalaram o conversor e logo começou a gerar.
                  Fiquei muito satisfeita com trabalho deles!atendimento rápido e eficiente,recomendo muito!
                </p>
              </div>
            </div>
          </div>

          <div className="carrosselDiv">
            <div className="contCarrossel">
              <div className="img"><img src="https://lh3.googleusercontent.com/a-/ALV-UjWBykHkhKHVMVVHpxLJw2hW_ApQtvYtMMLtDwaKZmgrg1Ds=w75-h75-p-rp-mo-br100" alt="" /></div>
              <h2>Zilma Reis</h2>
              <div className="star" >
                <img src={estrela} alt="" />
                <p>5 meses atrás</p>
              </div>
              <div className="texto">
                <p>
                  Instalei em minha residência um sistema com 4 placas e um microinversor.
                  A produção mensal tem sido em torno de 180kWh. Já estou com a conta mínima em duas residências.
                  O atendimento da Solar 4.0 foi eficiente,
                  com gentileza e sem atrasos, seja na venda e também no pós-venda.
                </p>
              </div>
            </div>
          </div>

          <div className="carrosselDiv">
            <div className="contCarrossel">
              <div className="img"><img src="https://lh3.googleusercontent.com/a-/ALV-UjUfriJpzQ25yRrTF97oRYNQgCTS2mG8FJ-CnxEQxUsjYwo=w75-h75-p-rp-mo-br100" alt="" /></div>
              <h2>Jose Candido Oliveira Silva</h2>
              <div className="star" >
                <img src={estrela} alt="" />
                <p>8 meses atrás</p>
              </div>
              <div className="texto">
                <p>
                  A empresa que nos atendeu cumpriu com todos os requisitos que foram prometidos;
                  a equipe técnica muito responsável e eficiente; o sistema implantado para geração de energia fotovoltaica
                  vem correspondendo  ao que esperávamos com resultados surpreendentes; recomendamos aos interessados a
                  contratação desta empresa por ter sido muito honesta e responsável com o que foi prometido.
                </p>
              </div>
            </div>
          </div>

          <div className="carrosselDiv">
            <div className="contCarrossel">
              <div className="img"><img src="https://lh3.googleusercontent.com/a-/ALV-UjX-0hTSTOqrADJKl_ALGsrMV38-fCk1gdCAujnjYye93Vg=w75-h75-p-rp-mo-br100" alt="" /></div>
              <h2>Júnia Borges</h2>
              <div className="star" >
                <img src={estrela} alt="" />
                <p>8 meses atrás</p>
              </div>
              <div className="texto">
                <p>Fizemos a instalação do sistema fotovoltaico com o Sr. Fábio e ficamos impressionados com o atendimento.
                  Desde a apresentação da tecnologia, a compra, presteza em nos atender sempre que precisávamos,
                  na instalação (muito rápida, por sinal) e no pós-venda, sempre atencioso! Estamos muito satisfeitos com a geração da energia,
                  sistema muito bom! Enfim, recomendamos a Solar 2.0 de olhos fechados!</p>
              </div>

            </div>
          </div>
          <div className="carrosselDiv">
            <div className="contCarrossel">
              <div className="img"><img src="https://lh3.googleusercontent.com/a/ACg8ocKHpeLUZ44DDsSZLisfNUMsk7p5Lu0crm9rs-mEFadk=w75-h75-p-rp-mo-br100" alt="" /></div>
              <h2>Carlos Euardo de Almeida Ribeiro </h2>
              <div className="star" >
                <img src={estrela} alt="" />
                <p>2 anos atrás</p>
              </div>
              <div className="texto">
                <p>
                  A Solar 4.0 instalou 12 painéis na minha residência e a geração superou as minhas expectativas.
                  O atendimento foi excelente antes, durante e depois da instalação por profissionais qualificados e dedicados.
                  Recomendo a empresa pela excelência do atendimento,
                  qualidade do serviço executado, transparência e responsabilidade.
                </p>
              </div>

            </div>
          </div>

          <div className="carrosselDiv">
            <div className="contCarrossel">
              <div className="img"><img src="https://lh3.googleusercontent.com/a/ACg8ocIpAFgUgRNp_FlUdrg1Q2Q4n0r7yS1E9dtFpR92akGH=w75-h75-p-rp-mo-br100" alt="" /></div>
              <h2>Fabiano Pardini</h2>
              <div className="star" >
                <img src={estrela} alt="" />
                <p>3 anos atrás</p>
              </div>
              <div className="texto">
                <p>
                  Atendimento sensacional de toda a equipe. Todo o trabalho de instalação
                  foi feito com muito capricho e ainda com monitoramento a todo o tempo após a instalação.
                  Estou extremamente satisfeito com a Solar 4.0 e com a solução de energia solar que tem me
                  garantido logo após a instalação o retorno financeiro na minha conta de energia.
                  Super recomendo a empresa e a solução fornecida por eles que é da Intelbras.
                </p>
              </div>
            </div>
          </div>

          <div className="carrosselDiv">
            <div className="contCarrossel">
              <div className="img"><img src="https://lh3.googleusercontent.com/a-/ALV-UjWrkz6qFVcGcXtTfgix5897w7tZ5XYOcfq6LMWT7sti8Mk=w75-h75-p-rp-mo-br100" alt="" /></div>
              <h2>Clesio Domiciano</h2>
              <div className="star" >
                <img src={estrela} alt="" />
                <p>6 meses atrás</p>
              </div>
              <div className="texto">
                <p>
                  Excelente experiência com a Solar 4.0. Atendimento com muita competência, domínio técnico, funcionários treinados, capacitados e ótima conduta.
                  Tudo foi cumprido exatamente como contratado.
                  Suporte muito detalhado desde a apresentação do equipamento, venda, entrega e início da geração de energia.
                  Atendimento nota 10 em todas as etapas.
                  Estou muito satisfeito e super recomendo.
                </p>
              </div>
            </div>
          </div>

          <div className="carrosselDiv">
            <div className="contCarrossel">
              <div className="img"><img src="https://lh3.googleusercontent.com/a/ACg8ocJaK6UIZKT2e93Gi1ADg-MS6ydtSlU2Hb4OQ9v5G6fh=w75-h75-p-rp-mo-br100" alt="" /></div>
              <h2>Denilson Ferreira da Silva</h2>
              <div className="star" >
                <img src={estrela} alt="" />
                <p>2 meses atrás</p>
              </div>
              <div className="texto">
                <p>
                  Eu achava que era muito complicado instalar energia solar,
                  mas fiquei surpreso com a praticidade, rapidez e qualidade na instalação. Estou muito satisfeito,
                  muita economia, recomendo muito a SOLAR 4.0, técnicos preparados e excelente atendimento.
                </p>
              </div>
            </div>
          </div>

          <div className="carrosselDiv">
            <div className="contCarrossel">
              <div className="img"><img src="https://lh3.googleusercontent.com/a-/ALV-UjVH1iipJlA6bYmMB-0RwjWD3K6HxhcF9yPXv-5aERimn2Q=w75-h75-p-rp-mo-br100" alt="" /></div>
              <h2>Heloiza Cançado</h2>
              <div className="star" >
                <img src={estrela} alt="" />
                <p>8 meses atrás</p>
              </div>
              <div className="texto">
                <p>
                  Instalamos a energia fotovoltaica em nossa casa da Aldeias do Lago no inicio de 2022.
                  Estamos muito satisfeitos.  O serviço de instalação e esclarecimentos foi perfeito.
                  A economia gerada está atendendo às nossas expectativas.  Obrigada a Solar 4.0.
                </p>
              </div>
            </div>
          </div>

          <div className="carrosselDiv">
            <div className="contCarrossel">
              <div className="img"><img src="https://lh3.googleusercontent.com/a/ACg8ocI6ywi0V03Drz-BVW-LoZtKiEXdvJ_H67FvA8GySsEw=w75-h75-p-rp-mo-br100" alt="" /></div>
              <h2>Bruno Godinho</h2>
              <div className="star" >
                <img src={estrela} alt="" />
                <p>9 meses atrás</p>
              </div>
              <div className="texto">
                <p>
                  Fiz a instalação do sistema de geração de energia fotovoltaica,
                  bem como do aquecimento solar da água da nossa residência. Serviço de excelente qualidade,
                  ótimos profissionais, engenheiro presente em todo o processo de instalação do sistema de geração de energia.
                  Além disso, a produção de energia está acima do esperado. Super recomendo.
                  Já indiquei para várias pessoas que também ficaram muito satisfeitas com o
                  resultado do serviço e com o atendimento prestado por todos os funcionários da empresa! Nota 1000
                </p>
              </div>
            </div>
          </div>

          <div className="carrosselDiv">
            <div className="contCarrossel">
              <div className="img"><img src="https://lh3.googleusercontent.com/a-/ALV-UjWsxHB5ZffItZXXfSj3Df3wKbBBiBqnOgh3yAbD3EG0hdA=w75-h75-p-rp-mo-br100" alt="" /></div>
              <h2>David Salgado</h2>
              <div className="star" >
                <img src={estrela} alt="" />
                <p>9 meses atrás</p>
              </div>
              <div className="texto">
                <p>
                  Combinamos à instalação que necessitava de cuidados especiais pois o
                  local para instalação era de difícil acesso. Tudo correu dentro do tempo combinado,
                  sem transtornos. E a economia REALMENTE compensou superando até o prometido.
                </p>
              </div>
            </div>
          </div>

          <div className="carrosselDiv">
            <div className="contCarrossel">
              <div className="img"><img src="https://lh3.googleusercontent.com/a/ACg8ocJt5-r21CeNtwbOODpW-rt6pyXoFb81TbLlaEdPNNCU=w75-h75-p-rp-mo-br100" alt="" /></div>
              <h2>Pedro Bastos Altomari</h2>
              <div className="star" >
                <img src={estrela} alt="" />
                <p>1 mês atrás</p>
              </div>
              <div className="texto">
                <p>
                  07 painéis de 590W e inversor de 3,6K gerando 350kWh/mês, proporcionando uma economia de
                  R$ 400,00 por mês, muito satisfeito e pretendo colocar em outros lugares...
                </p>
              </div>
            </div>
          </div>

        </Slider>

      </div>

      <button id="voltar" onClick={handlePrevClick}><GrPrevious /></button>
      <button id="proximo" onClick={handleNextClick}><GrNext /></button>

    </StyledDepoimentos>
  );
}
