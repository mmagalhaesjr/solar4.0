import { StyledHeader } from './styled';
import logo from '../../assets/logo.png';
import MenuMobile from '../MenuMobile/MenuMobile';

import { useState, useEffect } from "react";


//import Form from "../../componentes/Form/Form";


export default function Header() {

    const [mobileAtivado, setMobileAtivado] = useState(false);
    const mobile = () => {
        setMobileAtivado(!mobileAtivado)
    }

    useEffect(() => {
        document.body.style.overflowY = mobileAtivado ? 'hidden' : 'auto';
    }, [mobileAtivado])


    return (
        <>
            <MenuMobile
                mobileAtivado={mobileAtivado}
                setMobileAtivado={setMobileAtivado} />
                
            <StyledHeader>

                <nav>
                    <a href="/" ><img src={logo} alt='logo' /></a>

                    <ul className="nav-list">
                        <li><a href="#">SOBRE NÓS</a></li>
                        <li><a href="#">SOLUÇÕES</a></li>
                        <li><a href="#">PROJETOS</a></li>
                        <li><a href="#">CONTATO</a></li>
                        <li><a >BLOG</a></li>
                    </ul>

                    <button onClick={mobile}  >
                        <span className='linha'></span>
                        <span className='linha'></span>
                        <span className='linha'></span>
                    </button>
                </nav>
            </StyledHeader>
        </>
    )
}