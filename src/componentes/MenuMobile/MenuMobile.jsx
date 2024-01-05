import { StyledMenuMobile } from "./styled";
import { useContext, useEffect } from 'react';
import { useNavigate,useLocation } from 'react-router-dom';
import { HomeContext } from '../../contexts/HomeContext';

import PropTypes from 'prop-types';


export default function MenuMobile({ mobileAtivado, setMobileAtivado }) {
    const navegar = useNavigate();
    const location = useLocation();

   

    useEffect(() => {
        document.body.style.overflowY = mobileAtivado ? 'hidden' : 'auto';
    }, [mobileAtivado]);

    const { setHomeComponent } = useContext(HomeContext);

    const component = (componentName) => {
        setMobileAtivado(false);
        setHomeComponent(componentName);
        navegar('/');
    };


    useEffect(() => {
        // Rola até a seção "Contato" quando a URL muda para "/contato"
        if (location.pathname === "/contato") {
            scrollToFooter();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location.pathname]);

    const scrollToFooter = () => {
        // Substitua 'footerId' pelo ID real do elemento ao qual deseja rolar
        const footerElement = document.getElementById('footer');
        if (footerElement) {
            footerElement.scrollIntoView({ behavior: 'smooth' });
            setMobileAtivado(false);
        }
    };

    return (
        <StyledMenuMobile mobile={mobileAtivado}>
            <nav className="nav-lista">
                <a href="/" onClick={() => component('/')}>HOME</a>
                <a onClick={() => navegar("/solucoes")}>SOLUÇÕES</a>
                <a onClick={() => navegar("/servicos")}>SERVIÇOS</a>
                <a onClick={() => navegar("/orcamento")}>ORÇAMENTO</a>
                <a onClick={scrollToFooter}>CONTATO</a>
                <a onClick={() => navegar("/blog")}>BLOG</a>
            </nav>
        </StyledMenuMobile>
    );
}

MenuMobile.propTypes = {
    mobileAtivado: PropTypes.bool.isRequired,
    setMobileAtivado: PropTypes.func.isRequired,
};