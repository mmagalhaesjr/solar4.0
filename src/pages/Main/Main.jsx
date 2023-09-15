import { StyledMain } from "./styled";
import Header from "../../componentes/Header/Header"


export default function Main() {
    return (
        <StyledMain>
            <Header />

            <div id="texto">
                <h1>
                    <span style={{ color: '#7FCB27' }}>ECONOMIZE </span>
                    <span style={{ color: '#ffffff' }}>ATÉ 95%</span><br /><br />
                    <span style={{ color: '#ffffff' }}>NA CONTA DE</span><br /><br />
                    <span style={{ color: '#7FCB27' }}>ENERGIA ELÉTRICA</span>
                </h1>
                <button>SOLICITE UM ORÇAMENTO</button>
            </div>
            <div id="texto2">
                <h2>
                    <span style={{ color: '#ffffff' }}>PROJETOS</span>
                    <span style={{ color: '#7FCB27' }}> RESIDENCIAIS</span>

                    <span style={{ color: '#ffffff' }}> |</span>

                    <span style={{ color: '#ffffff' }}> PROJETOS EM</span>
                    <span style={{ color: '#7FCB27' }}> CONDOMÍNIOS</span>

                    <span style={{ color: '#ffffff' }}> |</span>

                    <span style={{ color: '#ffffff' }}> PROJETOS</span>
                    <span style={{ color: '#7FCB27' }}> EMPRESARIAIS</span>

                    <span style={{ color: '#ffffff' }}> |</span>

                    <span style={{ color: '#ffffff' }}> PROJETOS</span>
                    <span style={{ color: '#7FCB27' }}> RURAIS</span>
                </h2>
            </div>
        </StyledMain>
    )
}