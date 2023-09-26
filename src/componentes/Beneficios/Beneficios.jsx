import { StyledBeneficios } from './styled';

import { BsGraphDownArrow } from 'react-icons/bs';
import { GiSolarPower,GiReceiveMoney } from 'react-icons/gi';
import { TbHomeDollar } from 'react-icons/tb';
import { GrDocumentExcel } from 'react-icons/gr';



export default function Beneficios() {
    return (
        <StyledBeneficios>
            <div id="titulo">
                <h1>VANTAGENS E BENEFÍCIOS</h1>
                <h2>DA ENERGIA SOLAR</h2>
            </div>

            <div id='ContainerIcones'>
                <div className="divIcone"><BsGraphDownArrow className='icone' /> <p>Redução de até 95% na conta de luz</p></div>
                <div className="divIcone"><GiSolarPower className='icone' /> <p>Energia limpa e renovável</p></div>
                <div className="divIcone"><TbHomeDollar className='icone' /><p>Valorização do imóvel</p></div>
                <div className="divIcone"><GrDocumentExcel className='icone' /><p>Sem ajuste de tarifa</p></div>
                <div className="divIcone"><GiReceiveMoney className='icone' /><p>Tempo de investimento pago entre 2 e 5 anos</p></div>
                
            </div>

            

            <h3>&ldquo;Especialmente no Brasil, onde temos a maior taxa de irradiação solar do mundo, e em Minas Gerais,
                onde temos as mais altas tarifas e variações, a energia solar é a solução ideal.&rdquo;</h3>

            <div id='button'><button>SOLICITE UM ORÇAMENTO</button></div>
            

        </StyledBeneficios>
    )
}