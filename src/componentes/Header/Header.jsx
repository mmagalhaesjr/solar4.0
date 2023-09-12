import { StyledHeader } from './styled';
import logo from '../../assets/logo.png';


export default function Header() {
    return (
        <StyledHeader>
            <nav>
                <a href="/" ><img src={logo} alt='logo' /></a>

                <ul className="nav-list">
                    <li><a href="#">SOBRE NÓS</a></li>
                    <li><a href="#">SOLUÇOES</a></li>
                    <li><a href="#">PROJETOS</a></li>
                    <li><a href="#">CONTATO</a></li>
                    <li><a /*onClick={blog}*/ >BLOG</a></li>
                </ul>

                {/* <button onClick={mobile}  >
                        <span className='linha'></span>
                        <span className='linha'></span>
                        <span className='linha'></span>
                    </button> */}
            </nav>
        </StyledHeader>
    )
}