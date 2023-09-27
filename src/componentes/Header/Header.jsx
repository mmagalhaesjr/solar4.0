import { useState, useEffect } from "react";
import logo from '../../assets/logo.png';
import MenuMobile from '../MenuMobile/MenuMobile';
import { StyledHeader } from './styled';

export default function Header() {
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
                        <li><a href="#">SOBRE NÓS</a></li>

                        <li className="dropSolucoes">
                            <a href="#">SOLUÇÕES</a>
                            <ul className="submenuSolucoes">
                                <li><a href="#">RESIDENCIAL</a></li>
                                <li><a href="#">COMERCIAL</a></li>
                                <li><a href="#">RESIDENCIAL</a></li>
                                <li><a href="#">RURAL</a></li>
                            </ul>
                        </li>

                        <li className="dropServicos">
                            <a href="#">SERVIÇOS</a>
                            <ul className="submenuServicos">
                                <li><a href="#">VENDAS E INSTALAÇÕES</a></li>
                                <li><a href="#">OPERAÇÃO/MANUTENÇÃO</a></li>
                            </ul>
                        </li>

                        <li><a href="#">ORÇAMENTO</a></li>
                        <li><a href="#">CONTATO</a></li>
                        <li><a >BLOG</a></li>
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
