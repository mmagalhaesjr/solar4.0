import { StyledBlog } from "./styled";

export default function BlogMaior(p) {

    return (

        <StyledBlog>

            <a className="materia" href={p.link}  >

                <div className="foto">
                    <img src={p.img} alt="foto Coworking" />
                </div>
                
                <div id="texto">
                    <div className="texto">
                        <h1>
                            {p.titulo}
                        </h1>
                    </div>
                    <p>
                        {p.texto}
                    </p>
                </div>

            </a>

        </StyledBlog>



    )
}