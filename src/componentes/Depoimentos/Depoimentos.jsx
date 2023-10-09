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
    }, 10000);

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
              <div className="img"> <img src="https://lh3.googleusercontent.com/a/ACg8ocJt5-r21CeNtwbOODpW-rt6pyXoFb81TbLlaEdPNNCU=w75-h75-p-rp-mo-br100" alt="" /></div>

              <h2>Pedro Bastos Altomari</h2>
              <div className="star" >
                <img src={estrela} alt="" />
                <p>1 ano atrás</p>
              </div>
              <div className="texto">
                <p>
                  07 painéis de 590W e inversor de 3,6K gerando 350kWh/mêsproporcionando uma
                  economia de R$ 400,00 por mês, muito satisfeito e pretendo colocar em outros lugares...
                </p>
              </div>
            </div>
          </div>

          <div className="carrosselDiv">
            <div className="contCarrossel">
              <div className="img"><img src="https://lh3.googleusercontent.com/a-/ALV-UjWbM551Ho8wD8DjjO1Osh81YgR6_uHWzHurdlpFucV7Dq4=w75-h75-p-rp-mo-br100" alt="" /></div>
              <h2>Denise Aglio</h2>
              <div className="star" >
                <img src={estrela} alt="" />
                <p>5 meses atrás</p>
              </div>
              <div className="texto">
                <p>
                  A instalação foi rápida e funcionou perfeitamenteAtendimento com prestezaeducação e cuidados. Recomendo por ser muito bom.
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
                <p>8 meses atrás</p>
              </div>
              <div className="texto">
                <p>
                  Combinamos à instalação que necessitava de cuidados especiais pois o local para instalação era de difícil acesso Tudo correu dentro do tempo
                  combinadosem transtornos, a economia REALMENTE compensou superando até o prometido
                </p>
              </div>
            </div>
          </div>

          <div className="carrosselDiv">
            <div className="contCarrossel">
              <div className="img"><img src="https://lh3.googleusercontent.com/a/ACg8ocLHOkmKjksIWrY02cVjkPumezgpgUsiZHXX7xmt7zni=w75-h75-p-rp-mo-br100" alt="" /></div>
              <h2>Alexandre Carneiro</h2>
              <div className="star" >
                <img src={estrela} alt="" />
                <p>8 meses atrás</p>
              </div>
              <div className="texto">
                <p>Eles atendem com hora marcada e possuem várias opções de solução em energia
                  solar que se adequam a necessidade do cliente.Recomendo fortemente</p>
              </div>

            </div>
          </div>
          <div className="carrosselDiv">
            <div className="contCarrossel">
              <div className="img"><img src="https://img.freepik.com/fotos-gratis/homem-barbudo-com-oculos-de-sol-sentado-e-olhando-para-a-camera_23-2148181519.jpg?w=1060&t=st=1696611653~exp=1696612253~hmac=6e7bfdf1547d7862f46d418ddaf82f0c019598cced76c89419888ce3523cd091" alt="" /></div>
              <h2>Carlos Eduardo de Souza </h2>
              <div className="star" >
                <img src={estrela} alt="" />
                <p>2 anos atrás</p>
              </div>
              <div className="texto">
                <p>
                  O melhor investimento que eu fiz pro meu imóvel foi colocar energia solar. Muito obrigado a equipe da Solar 4.0
                  que me atendeu rapidamente e me ofereceu um serviço de ponta, com todo suporte e qualidade,
                  além do serviço de manutenção que já garanti para os próximos meses. Estou satisfeito
                </p>
              </div>

            </div>
          </div>

          <div className="carrosselDiv">
            <div className="contCarrossel">
              <div className="img"><img src="https://lh3.googleusercontent.com/a-/ALV-UjUOpo8Z7elAoGZkvJby-AO25wgUKXuNKlL1N3CWHddtWgQ=w75-h75-p-rp-mo-br100" alt="" /></div>
              <h2>Bruno Lery </h2>
              <div className="star" >
                <img src={estrela} alt="" />
                <p>3 anos atrás</p>
              </div>
              <div className="texto">
                <p>
                  Excelente. Material de primeira qualidade e cumprindo o seu papel.
                  Foi investimento excelentepois o retorno e certo!
                </p>
              </div>
            </div>
          </div>

          <div className="carrosselDiv">
            <div className="contCarrossel">
              <div className="img"><img src="https://lh3.googleusercontent.com/a-/ALV-UjW4pKwgDQV7KhKkgPAli2hNLpqlK9HrzjhE8h-eQHIkDTo=w75-h75-p-rp-mo-br100" alt="" /></div>
              <h2>Joaquim Barbosa Ribeiro </h2>
              <div className="star" >
                <img src={estrela} alt="" />
                <p>6 meses atrás</p>
              </div>
              <div className="texto">
                <p>
                  Os equipamentos que eles trabalham são da intelbras. Muita qualidade tanto no atendimento quanto na instalação em si.
                  Em 1 mês tendo energia solar eu já tive retorno na conta de luz. Nota 10
                </p>
              </div>
            </div>
          </div>

          <div className="carrosselDiv">
            <div className="contCarrossel">
              <div className="img"><img src="https://lh3.googleusercontent.com/a-/ALV-UjV3Fkk6-sLKG6y-LY1CWzoowjYnS_vdTMn5Dq5xIIC6F-pn=w75-h75-p-rp-mo-br100" alt="" /></div>
              <h2>Paula Guimarães</h2>
              <div className="star" >
                <img src={estrela} alt="" />
                <p>2 meses atrás</p>
              </div>
              <div className="texto">
                <p>
                  Eu confesso que não sabia que de 6 em 6 meses precisava fazer manutenção das placas solares.
                  Agradeço ao time da Solar 4.0 por me lembrar e por realizar o serviço de maneira excepcional!
                </p>
              </div>
            </div>
          </div>

          <div className="carrosselDiv">
            <div className="contCarrossel">
              <div className="img"><img src="https://lh3.googleusercontent.com/a/ACg8ocIe4QU1US-7NjviUztcxyzyLYxAtRvvd2TcJgTIMZjI=w75-h75-p-rp-mo-br100" alt="" /></div>
              <h2>Ademir Júnior</h2>
              <div className="star" >
                <img src={estrela} alt="" />
                <p>8 meses atrás</p>
              </div>
              <div className="texto">
                <p>
                  A empresa tem atendimento espetacular, esclarece as dúvidas de forma imediata e com clareza.
                  Equipamento não apresentou qualquer instabilidade e aparenta ser de excelente qualidade.
                  Em períodos chuvosos a produção de energia cai bastante,
                  mas mesmo assim na média produzida cumpre ao que foi proposto pela empresa.
                  Estou muito satisfeito com a aquisição
                </p>
              </div>
            </div>
          </div>

          <div className="carrosselDiv">
            <div className="contCarrossel">
              <div className="img"><img src="https://lh3.googleusercontent.com/a-/ALV-UjX9MrUoxkBvZFNDkxZtcFyaCAq0tZPLiaCoWhqcIn3oLef_=w75-h75-p-rp-mo-br100" alt="" /></div>
              <h2>João Victor Motta </h2>
              <div className="star" >
                <img src={estrela} alt="" />
                <p>9 meses atrás</p>
              </div>
              <div className="texto">
                <p>
                  Atendimento excelenteMuito profissionalismo e competência técnica
                </p>
              </div>
            </div>
          </div>

          <div className="carrosselDiv">
            <div className="contCarrossel">
              <div className="img"><img src="https://lh3.googleusercontent.com/a-/ALV-UjXwmlzlIIzVUOxEMg9h7-auaUQ8D_9YlswWGfRVH7DMEw=w75-h75-p-rp-mo-br100" alt="" /></div>
              <h2>Bianca Costa </h2>
              <div className="star" >
                <img src={estrela} alt="" />
                <p>9 meses atrás</p>
              </div>
              <div className="texto">
                <p>
                  A economia que a Solar 4.0 me permitiu investir muito mais no meu negócio.
                  Projeto personalizado e equipamentos intelbras. Recomendo!
                </p>
              </div>
            </div>
          </div>

          <div className="carrosselDiv">
            <div className="contCarrossel">
              <div className="img"><img src="https://lh3.googleusercontent.com/a/ACg8ocIDqCHQgjS5kwUsWA93uw-DEOxrQ9J5ZHUF2AWeoiQm=w75-h75-p-rp-mo-br100" alt="" /></div>
              <h2>Maria Antônia Gomes </h2>
              <div className="star" >
                <img src={estrela} alt="" />
                <p>1 mês atrás</p>
              </div>
              <div className="texto">
                <p>
                  A visita na minha casa foi rápida e gostei muito do atendimento. Mesmo não tendo muito conhecimento de energia solar,
                  a solar 4.0 me instruiu muito bem. Investimento muito bom
                </p>
              </div>
            </div>
          </div>

        </Slider>

      </div>

      <button id="voltar" onClick={handlePrevClick}><GrPrevious/></button>
      <button id="proximo" onClick={handleNextClick}><GrNext/></button>
      
    </StyledDepoimentos>
  );
}
