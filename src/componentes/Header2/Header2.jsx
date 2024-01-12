import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logosIcones/logoBranca.png';
import MenuMobile from '../MenuMobile/MenuMobile';
import { StyledHeader } from './styled';

export default function Header2() {
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

    const [mobileAtivado, setMobileAtivado] = useState(false);

    const mobile = () => {
        setMobileAtivado(!mobileAtivado);
    };

    useEffect(() => {
        document.body.style.overflowY = mobileAtivado ? 'hidden' : 'auto';
    }, [mobileAtivado]);

    return (
        <>
            <MenuMobile
                mobileAtivado={mobileAtivado}
                setMobileAtivado={setMobileAtivado}
            />

            <StyledHeader
                mobile={mobileAtivado}
                id="header"
                className={scrollY > 100 ? 'rolagem' : ''}
            >
                <nav>
                    <a href="/">
                        <img src={logo} alt='logo' />
                    </a>
                    <ul className="nav-list">
                        <li><a href="/">Home</a></li>

                        <li className="dropSolucoes">
                            <a href="/solucoes">Soluções</a>
                            <ul className="submenuSolucoes">
                            <li><a  onClick={() => navegar("/projetoResidencial") }>Residenciais</a></li>
                                <li><a  onClick={() => navegar("/projetoComercial") } >Comerciais</a></li>
                                <li><a  onClick={() => navegar("/projetoIndustrial") }>Industriais</a></li>
                                <li><a  onClick={() => navegar("/projetoRural") }>Agronegócio</a></li>
                            </ul>
                        </li>

                        <li className="dropServicos">
                            <a onClick={() => navegar("/servicos") }>Serviços</a>
                            <ul className="submenuServicos">
                                <li><a onClick={() => navegar("/vi") }>Vendas e Instalações</a></li>
                                <li><a onClick={() => navegar("/opm") }>Operação e Manutenção</a></li>
                            </ul>
                        </li>

                        <li><a  onClick={() => navegar("/orcamento") } target="_blank">Oçamento</a></li>
                        {/* <li><a onClick={() => navegar("/blog") }target="_blank">Blog</a></li> */}
                    </ul>
                    <button onClick={mobile}>
                        <span className='linha'></span>
                        <span className='linha'></span>
                        <span className='linha'></span>
                    </button>
                </nav>
            </StyledHeader>
        </>
    );
}
