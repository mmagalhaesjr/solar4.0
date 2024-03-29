import { StyledBlog } from "./styled";


export default function BlogMenor(p) {


    return (

        <StyledBlog>

            <a className="blog" href={p.link}>

                <div className="foto">
                    <img src={p.img} alt="foto Coworking" />
                </div>
                <div className="texto">
                    <h1>
                        {p.titulo}
                    </h1>
                    <p>
                        {p.texto}
                    </p>
                </div>

            </a>

        </StyledBlog>



    )
}