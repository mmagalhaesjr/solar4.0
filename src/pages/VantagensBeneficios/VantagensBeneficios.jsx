import { StyledBeneficios } from './styled';

import { useState } from "react";
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import icone1 from '../../assets/icones projetos/reducao-custo.png'
import icone2 from '../../assets/icones projetos/sustentabilidade.png'
import icone3 from '../../assets/icones projetos/valorizacao.png'
import icone4 from '../../assets/icones projetos/tarifa.png'
import icone5 from '../../assets/icones projetos/economia-energia.png'




export default function Beneficios() {
    const navegar = useNavigate();
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
        <StyledBeneficios className={scrollY > 2500 ? 'rolagem' : ''}>

            <div id="titulo">
                <h1>VANTAGENS E BENEFÍCIOS DA ENERGIA SOLAR</h1>
            </div>

            <div id='ContainerIcones'>

                <div className="divIcone" data-aos="fade-up-right"  data-aos-duration="1000">
                    <img className='icone' src={icone1} alt="" /> <p>Redução de até 95% <br></br>na conta de luz</p>
                </div>
                <div className="divIcone" data-aos="fade-up-right"  data-aos-duration="1000">
                    <img className='icone' src={icone2} alt="" /> <p>Energia limpa e renovável</p>
                </div>
                <div className="divIcone" data-aos="fade-up-right"  data-aos-duration="1000">
                    <img className='icone' src={icone3} alt="" /><p>Valorização do imóvel</p>
                </div>
                <div className="divIcone" data-aos="fade-up-right"  data-aos-duration="1000">
                    <img className='icone' src={icone4} alt="" /><p>Proteção contra aumento das tarifas</p>
                </div>
                <div className="divIcone" data-aos="fade-up-right"  data-aos-duration="1000">
                    <img className='icone' src={icone5} alt="" /><p>Tempo de retorno do investimento  entre 2 e 5 anos</p>
                </div>
                
            </div>



            <h3>&ldquo;Especialmente no Brasil, onde temos a maior taxa de irradiação solar do mundo, e em Minas Gerais,<br></br>
                onde temos os maiores aumentos e as tarifas mais altas, a energia solar é a solução ideal.&rdquo;</h3>

            <div id='button' >

                <a onClick={() => navegar("/orcamento") }target="_blank"> <button>SOLICITE UM ORÇAMENTO</button> </a>

            </div>


        </StyledBeneficios>
    )
}