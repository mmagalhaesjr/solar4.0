import  { useEffect } from 'react';
import PropTypes from 'prop-types';
import { StyledMenuMobile } from "./styled";

export default function MenuMobile({ mobileAtivado, setMobileAtivado }) {
   
    useEffect(() => {
        document.body.style.overflowY = mobileAtivado ? 'hidden' : 'auto';
    }, [mobileAtivado]);

    return (
        <StyledMenuMobile mobile={mobileAtivado}>
            <nav className="nav-lista">
                <a onClick={() => setMobileAtivado(false)} href="#espacos">SOBRE NÓS</a>
                <a onClick={() => setMobileAtivado(false)} href="#servicos">SOLUÇÕES</a>
                <a onClick={() => setMobileAtivado(false)} href="#planos">SERVIÇOS</a>
                <a onClick={() => setMobileAtivado(false)} href="#contato">ORÇAMENTO</a>
                <a onClick={() => setMobileAtivado(false)} href="#contato">CONTATO</a>
                <a>BLOG</a>
            </nav>
        </StyledMenuMobile>
    );
}

MenuMobile.propTypes = {
    mobileAtivado: PropTypes.bool.isRequired,
    setMobileAtivado: PropTypes.func.isRequired,
};