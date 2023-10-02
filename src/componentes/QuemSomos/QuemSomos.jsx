import { StyledQuemSomos } from "./styled";

import { useState, useEffect } from "react";

// import quemSomos from "../../assets/quemsomos.png"
// import sol1 from "../../assets/luz.png"
import sol2 from "../../assets/cor.png"
import sol3 from "../../assets/sombra.png"

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
      {/* <img id="img" src={quemSomos} alt="imagem" /> */}

      <div id="container">
        <div id="texto">
          <h1>QUEM SOMOS</h1>
          <p>
            A Solar 4.0 é uma empresa que faz a gestão da energia elétrica utilizando soluções verdes,
            atuando principalmente na Região Sudeste do país e possui polos em Minas Gerais,
            nas cidades de Belo Horizonte e Juiz de Fora. Reconhecida pelo serviço personalizado e inovador,
            ela proporciona autonomia para seus clientes e empresas por ser especializada em sistemas de geração
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




