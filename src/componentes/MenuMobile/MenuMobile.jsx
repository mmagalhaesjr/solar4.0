import { StyledMenuMobile } from "./styled";
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { HomeContext } from '../../contexts/HomeContext';

import PropTypes from 'prop-types';


export default function MenuMobile({ mobileAtivado, setMobileAtivado }) {
    const navegar = useNavigate();

    useEffect(() => {
        document.body.style.overflowY = mobileAtivado ? 'hidden' : 'auto';
    }, [mobileAtivado]);

    const { setHomeComponent } = useContext(HomeContext);

    const component = (componentName) => {
        setMobileAtivado(false);
        setHomeComponent(componentName);
        navegar('/');
    };

    return (
        <StyledMenuMobile mobile={mobileAtivado}>
            <nav className="nav-lista">
                <a href="#sobreNos" onClick={() => component('sobreNos')}>SOBRE NÓS</a>
                <a onClick={() => navegar("/solucoes")}>SOLUÇÕES</a>
                <a onClick={() => navegar("/servicos")}>SERVIÇOS</a>
                <a onClick={() => navegar("/orcamento")}>ORÇAMENTO</a>
                <a href="#contato" onClick={() => component('contato')}>CONTATO</a>
                <a onClick={() => navegar("/blog")}>BLOG</a>
            </nav>
        </StyledMenuMobile>
    );
}

MenuMobile.propTypes = {
    mobileAtivado: PropTypes.bool.isRequired,
    setMobileAtivado: PropTypes.func.isRequired,
};