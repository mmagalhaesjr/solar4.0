import { StyledBlog } from "./styled";
import { useNavigate } from 'react-router-dom';

export default function BlogMenor(p) {
    const navegar = useNavigate();

    return (

        <StyledBlog>

            <a className="materia"  onClick={() => navegar(`${p.link}`) } >

                <div className="foto">
                    <img src={p.img} alt="foto Coworking" />
                </div>
                <div className="texto">
                    <h1>
                        {p.titulo}
                    </h1>
                </div>
                <p>
                    {p.texto}
                </p>
            </a>
           
        </StyledBlog>



    )
}