import { useState, useEffect, lazy, Suspense } from "react";

import logo from '../../assets/logosIcones/logoBranca.png';
import { StyledHeader } from './styled';
import { useNavigate,useLocation  } from 'react-router-dom';

// import MenuMobile from '../MenuMobile/MenuMobile';
const MenuMobile = lazy(() => import('../MenuMobile/MenuMobile'));



export default function Header() {
    const navegar = useNavigate();
    const location = useLocation();
    

    const [scrollY, setScrollY] = useState(0);
    const [mobileAtivado, setMobileAtivado] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    useEffect(() => {
        // Rola até a seção "Contato" quando a URL muda para "/contato"
        if (location.pathname === "/contato") {
            scrollToFooter();
        }
    }, [location.pathname]);

    useEffect(() => {
        document.body.style.overflowY = mobileAtivado ? 'hidden' : 'auto';
    }, [mobileAtivado]);

    const handleScroll = () => {
        setScrollY(window.scrollY);
    };

    const mobile = () => {
        setMobileAtivado(!mobileAtivado);
    };

    const scrollToFooter = () => {
        // Substitua 'footerId' pelo ID real do elemento ao qual deseja rolar
        const footerElement = document.getElementById('footer');
        if (footerElement) {
            footerElement.scrollIntoView({ behavior: 'smooth' });
        }
    };


   
    return (
        <>
            <Suspense fallback={<div> Loading...</div>}>
                <MenuMobile mobileAtivado={mobileAtivado} setMobileAtivado={setMobileAtivado} />
            </Suspense>

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
                        {/* <li><a href="#sobreNos">Sobre nós</a></li> a rolagem para sobreNos nao funciona com HashRouter */}
                         <li><a href="/">Home</a></li> 
                        <li className="dropSolucoes">
                            <a onClick={() => navegar("/solucoes")}>Soluções</a>
                            <ul className="submenuSolucoes">
                                <li><a onClick={() => navegar("/projetoResidencial")}>Residenciais</a></li>
                                <li><a onClick={() => navegar("/projetoComercial")} >Comerciais</a></li>
                                <li><a onClick={() => navegar("/projetoIndustrial")}>Industriais</a></li>
                                <li><a onClick={() => navegar("/projetoRural")}>Agronegócio</a></li>
                            </ul>
                        </li>

                        <li className="dropServicos">
                            <a onClick={() => navegar("/servicos")}>Serviços</a>
                            <ul className="submenuServicos">
                                <li><a onClick={() => navegar("/vi")}>Vendas e Instalações</a></li>
                                <li><a onClick={() => navegar("/opm")}>Operação e Manutenção</a></li>
                            </ul>
                        </li>

                        <li><a onClick={() => navegar("/orcamento")} target="_blank">Orçamento</a></li>
                        <li><a onClick={scrollToFooter}>Contato</a></li>
                        
                        <li><a onClick={() => navegar("/blog")} target="_blank">Blog</a></li>
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
