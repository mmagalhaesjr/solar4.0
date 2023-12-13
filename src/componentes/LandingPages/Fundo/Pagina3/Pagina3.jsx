import { StyledPagina3 } from "./styled";

import logo4 from '../../../../assets/logosIcones/logoBranca.png'
import logo5 from '../../../../assets/logosIcones/intel-solar.png'


export default function Pagina3() {
    return (
        <StyledPagina3>
            <div className='cabecalho'>
                <div className='subtitulo'>
                    <h2>
                        Planejamento desde o início
                    </h2>
                    <p>
                        É simples o processo de instalação de sua energia solar
                    </p>
                </div>
                <div className='cximg'>
                    <img src={logo4} alt="logo" />
                    <img className='intel' src={logo5} alt="logo" />
                </div>
            </div>

            <div className="container">
                <div className="boxBranco" >
                    <div>
                        <h3>1. Alinhamento de Expectativas</h3>
                        <p>Nossa equipe entende suas necessidades e expectativas.</p>
                    </div>
                </div>
                <div className="boxBranco" >
                    <div>
                        <h3>2. Projeto Personalizado</h3>
                        <p>
                            Desenvolvemos um projeto utilizando os melhores equipamentos <span>Intelbras</span>  adequados
                            para o seu imóvel.
                        </p>
                    </div>
                </div>
                <div className="boxBranco" >
                    <div>
                        <h3>3. Instalação Profissional</h3>
                        <p>
                            Nossa equipe é altamente capacitada, para entregar o máximo de performance dos
                            equipamentos.
                        </p>
                    </div>
                </div>
                <div className="boxBranco" >
                    <div>
                        <h3>4. Acesso Inteligente</h3>
                        <p>Monitore sua usina com o aplicativo  <span>Intelbras</span>  direto do seu celular.</p>
                    </div>
                </div>
                <div className="boxBranco" >
                    <div>
                        <h3>5. Aproveite sua Economia</h3>
                        <p>
                            Com o sistema instalado e legalizado pela <span>Solar 4.0</span>  sua conta de luz tem uma redução
                            de <span>até 95%</span>.
                        </p>
                    </div>
                </div>



            </div>
        </StyledPagina3>
    )
}