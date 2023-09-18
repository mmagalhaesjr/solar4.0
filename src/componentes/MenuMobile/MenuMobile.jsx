// import { useNavigate } from 'react-router-dom';
import { StyledMenuMobile } from "./styled";
import { useEffect } from 'react';



export default function MenuMobile({ mobileAtivado, setMobileAtivado }) {
   
    useEffect(()=> {
        document.body.style.overflowY = mobileAtivado ? 'hidden' : 'auto';
    }, [mobileAtivado])

    return (

        <StyledMenuMobile mobile={mobileAtivado}>
            
            <nav className="nav-lista" >
                <a onClick={() => setMobileAtivado(false) } href="#espacos">SOBRE NÓS</a>
                <a onClick={() => setMobileAtivado(false) } href="#servicos">SOLUÇÕES</a>
                <a onClick={() => setMobileAtivado(false) } href="#planos">PROJETOS</a>
                <a onClick={() => setMobileAtivado(false) } href="#contato">CONTATO</a>
                <a >BLOG</a>
               
            </nav>
            

        </StyledMenuMobile>

    )
}

