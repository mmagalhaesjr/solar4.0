import { useState, useEffect, lazy, Suspense } from "react";
import logo from '../../assets/logosIcones/logoBranca.png';

import { StyledHeader } from './styled';

// import MenuMobile from '../MenuMobile/MenuMobile';
const MenuMobile = lazy(() => import('../MenuMobile/MenuMobile'));



export default function Header() {
    
    const [scrollY, setScrollY] = useState(0);
    const [mobileAtivado, setMobileAtivado] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        document.body.style.overflowY = mobileAtivado ? 'hidden' : 'auto';
    }, [mobileAtivado]);

    const handleScroll = () => {
        setScrollY(window.scrollY);
    };

    const mobile = () => {
        setMobileAtivado(!mobileAtivado);
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
                        <li><a href="#sobreNos">Sobre nós</a></li>

                        <li className="dropSolucoes">
                            <a href="/solucoes">Soluções</a>
                            <ul className="submenuSolucoes">
                                <li><a href="/projetoResidencial">Residenciais</a></li>
                                <li><a href="/projetoComercial">Comerciais</a></li>
                                <li><a href="/projetoIndustrial">Industriais</a></li>
                                <li><a href="/projetoRural">Agronegócio</a></li>
                            </ul>
                        </li>

                        <li className="dropServicos">
                            <a href="/servicos">Serviços</a>
                            <ul className="submenuServicos">
                                <li><a href="/vi">Vendas e Instalações</a></li>
                                <li><a href="/opm">Operação e Manutenção</a></li>
                            </ul>
                        </li>

                        <li><a href="/Orcamento" target="_blank" >Orçamento</a></li>
                        <li><a href="#footer">Contato</a></li>
                        <li><a href="/blog" target="_blank">Blog</a></li>
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
