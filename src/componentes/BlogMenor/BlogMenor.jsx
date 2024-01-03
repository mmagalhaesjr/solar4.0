import { StyledBlog } from "./styled";


export default function BlogMenor(p) {
    

    return (

        <StyledBlog> 

            <a className="materia"  href={p.link}>

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