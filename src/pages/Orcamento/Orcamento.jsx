import { StyledOrcamento } from "./styled";


export default function Orcamento() {
    return (
        <StyledOrcamento id="orcamento">

            <div id="titulo">
                <h1>FAÇA UM ORÇAMENTO</h1>
            </div>

            <div id="container">

                <form action="https://api.whatsapp.com/send?phone=32988475771" method="POST">
                    <section>
                        <div className="cont">

                            <input type="hidden" name="_next" value='http://localhost:5173/confirmar/' />
                            <input type="hidden" name="_captcha" value="false"></input>

                            <div className="inputBox">
                                <input type="text" name="nome" id="nome" className="inputUser" required />
                                <label htmlFor="nome" className="labelInput">Nome completo</label>
                            </div>

                            <div className="inputBox">
                                <input type="text" name="email" id="email" className="inputUser" required />
                                <label htmlFor="email" className="labelInput">Email</label>
                            </div>

                            <div className="inputBox">
                                <input type="text" name="telefone" id="email" className="inputUser" required />
                                <label htmlFor="number" className="labelInput">Telefone</label>
                            </div>

                            <div className="inputBox">
                                <input type="text" name="nome" id="nome" className="inputUser" required />
                                <label htmlFor="nome" className="labelInput">Cidade</label>
                            </div>

                        </div>


                        <div className="cont">

                            <div className="inputBox">
                                <input type="text" name="email" id="email" className="inputUser" required />
                                <label htmlFor="nome" className="labelInput">Estado</label>
                            </div>

                            <div className="inputBox">
                                <input type="text" name="nome" id="nome" className="inputUser" required />
                                <label htmlFor="nome" className="labelInput">Tipo de telhado </label>
                            </div>

                            <div className="inputBox">
                                <input type="text" name="nome" id="nome" className="inputUser" required />
                                <label htmlFor="nome" className="labelInput">Padrão CEMIG</label>
                            </div>

                            <div className="inputBox">
                                <input type="number" name="telefone" id="email" className="inputUser" required />
                                <label htmlFor="number" className="labelInput">Media mensal</label>
                            </div>
                        </div>
                    </section>


                    <button>ENVIAR</button>


                </form>

            </div>

        </StyledOrcamento>
    )
}
