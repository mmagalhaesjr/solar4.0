import { StyledBeneficios } from './styled';

import icone1 from '../../assets/icones projetos/reducao-custo.png'
import icone2 from '../../assets/icones projetos/sustentabilidade.png'
import icone3 from '../../assets/icones projetos/valorizacao.png'
import icone4 from '../../assets/icones projetos/tarifa.png'
import icone5 from '../../assets/icones projetos/economia-energia.png'




export default function Beneficios() {
    return (
        <StyledBeneficios>
            <div id="titulo">
                <h1>VANTAGENS E BENEFÍCIOS DA ENERGIA SOLAR</h1>
            </div>

            <div id='ContainerIcones'>
                <div className="divIcone"> <img className='icone' src={icone1} alt="" /> <p>Redução de até 95% <br></br>na conta de luz</p></div>
                <div className="divIcone"> <img className='icone' src={icone2} alt="" /> <p>Energia limpa e renovável</p></div>
                <div className="divIcone"> <img className='icone' src={icone3} alt="" /><p>Valorização do imóvel</p></div>
                <div className="divIcone"> <img className='icone' src={icone4} alt="" /><p>Sem ajuste de tarifa</p></div>
                <div className="divIcone"> <img className='icone' src={icone5} alt="" /><p>Tempo de retorno do investimento  entre 2 e 5 anos</p></div>

            </div>



            <h3>&ldquo;Especialmente no Brasil, onde temos a maior taxa de irradiação solar do mundo, e em Minas Gerais,<br></br>
                onde temos as mais altas tarifas e variações, a energia solar é a solução ideal.&rdquo;</h3>

            <div id='button'>
              
              <a href="/Orcamento" target="_blank"> <button>SOLICITE UM ORÇAMENTO</button> </a>
              
            </div>


        </StyledBeneficios>
    )
}