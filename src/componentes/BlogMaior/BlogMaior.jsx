import { StyledBlog } from "./styled";

export default function BlogMaior(p) {

    return (

        <StyledBlog>

            <a className="blog" href={p.link}  >

                <div id="foto">
                    <img src={p.img} alt="foto Coworking" />
                </div>
                
                <div id="texto">
                    
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