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



    const blog = () => {
        window.open('/blog', "_blank");
    };
    const orcamento = () => {
        window.open('/orcamento', "_blank");
    };
    const residencial = () => {
        window.open('/projetoResidencial', "_blank");
    };
    const comercial = () => {
        window.open('/projetoComercial', "_blank");
    };
    const industrial = () => {
        window.open('/projetoIndustrial', "_blank");
    };
    const rural = () => {
        window.open('/projetoRural', "_blank");
    };
    const solucoes = () => {
        window.open('/solucoes', "_blank");
    };
    const servicos = () => {
        window.open('/servicos', "_blank");
    };
    const opm = () => {
        window.open('/opm', "_blank");
    };
    const vi = () => {
        window.open('/vi', "_blank");
    };

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
                            <a onClick={solucoes}>SOLUÇÕES</a>
                            <ul className="submenuSolucoes">
                                <li><a onClick={residencial}>RESIDENCIAL</a></li>
                                <li><a onClick={comercial} >COMERCIAL</a></li>
                                <li><a onClick={industrial}>INDUSTRIAL</a></li>
                                <li><a onClick={rural}>RURAL</a></li>
                            </ul>
                        </li>

                        <li className="dropServicos">
                            <a onClick={servicos}>SERVIÇOS</a>
                            <ul className="submenuServicos">
                                <li><a onClick={vi} >VENDAS E INSTALAÇÕES</a></li>
                                <li><a onClick={opm} >OPERAÇÃO/MANUTENÇÃO</a></li>
                            </ul>
                        </li>

                        <li><a onClick={orcamento} >ORÇAMENTO</a></li>
                        <li><a href="#">CONTATO</a></li>
                        <li><a onClick={blog}  >BLOG</a></li>
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
