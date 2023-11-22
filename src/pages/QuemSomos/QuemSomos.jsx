import { StyledQuemSomos } from "./styled";

import { useState, useEffect } from "react";

import quemSomos from "../../assets/fundoCima.jpeg"


import sol2 from "../../assets/logosIcones/cor.png"
import sol3 from "../../assets/logosIcones/sombra.png"

export default function QuemSomos() {
  
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
          window.removeEventListener('scroll', handleScroll);
      };
  }, []);

  const handleScroll = () => {
      setScrollY(window.scrollY);
  };

  return (
    <StyledQuemSomos id="quemSomos"   className={scrollY > 100 ? 'rolagem' : ''}>
      <img id="img" src={quemSomos} alt="imagem" />

      <div id="container">
        <div id="texto">
          <h1>Quem somos</h1>
          <p>
            A <span>Solar 4.0 </span>é uma empresa que faz a gestão da energia elétrica utilizando soluções verdes,
            atuando principalmente na Região Sudeste do país e possui polos em Minas Gerais,
            nas cidades de<span> Belo Horizonte e Juiz de Fora.</span><br></br><br></br>  Reconhecida pelo <span>serviço personalizado </span> e inovador,
            proporcionamos autonomia para nossos clientes e empresas por sermos  especializada em sistemas de geração
            de energia solar fotovoltaica, oferecendo as melhores e mais completas soluções em energia limpa e renovável.
          </p>
        </div>

        <div id="imgSois">
          <img className="imgsol" id="imgsol1" src={sol2} alt="imagem"  />
          <img className="imgsol" id="imgsol2" src={sol3} alt="imagem"  />
        </div>
      </div>
    </StyledQuemSomos>
  );
}




