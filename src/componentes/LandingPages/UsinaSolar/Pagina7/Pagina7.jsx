import { StyledPagina7 } from './styled';


import logo4 from '../../../../assets/logosIcones/logoB.png'
import logo5 from '../../../../assets/logosIcones/intel-solar.png'

import gota from '../../../../assets/logosIcones/cor.png'



export default function Pagina7() {
    return (

        <StyledPagina7>
            <section id='container'>

                <div className='cabecalho'>
                    <div className='subtitulo'>
                        <h2>
                            Por que escolher a Solar 4.0
                            para investir em uma usina solar?
                        </h2>
                    </div>
                    <div className='cximg'>
                        <img src={logo4} alt="logo" />
                        <img className='intel' src={logo5} alt="logo" />
                    </div>
                </div>


                <div className='cxTexto'>
                    <div className='texto'>
                        <p>
                            Trabalhamos com equipamentos <h4>Intelbras</h4>  de alta tecnologia
                            e uma equipe técnica qualificada que irá acompanhar todas
                            as etapas do seu projeto.
                        </p>
                    </div>
                    <img src={gota} alt="" />
                </div>

                <ul>
                    <li>
                        Com o crescimento gigantesco do <span>mercado de energia solar e repleto de
                        oportunidades</span> , investir em uma usina solar, além de <span> economia na conta de energia</span>,
                        permite que você faça dinheiro de forma segura durante anos com <span>um único
                        investimento, baixo risco e pouquíssima manutenção.</span> 
                    </li>
                    <li>
                        Considerando ainda que o <span> sol é a maior fonte de energia renovável</span>, o Brasil por estar
                        localizado próximo a Linha do Equador, possui uma das médias de radiação solar mais elevadas
                        do mundo.
                    </li>
                    <li>
                        Com nossos serviços e <span> com os equipamentos Intelbras, podemos garantir maior
                        aproveitamento e desempenho</span> para os sistemas fotovoltaicos.
                    </li>
                </ul>
            </section>


        </StyledPagina7>
    )
}