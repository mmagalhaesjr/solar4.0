import { StyledForm } from "./styled";

export default function Form() {
    return (
        <StyledForm>
            <div id="titulo">
                <h1>
                    Reduza sua conta de energia elétrica
                </h1>
                <p>
                    Preencha os campos a baixo para <br></br>p receber seu orçamento
                </p>
            </div>

            <form action="">

                <input type="hidden" name="_next" value='' />
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
                    <label htmlFor="email" className="labelInput">Telefone</label>
                </div>

               

                <div id="checkboxContainer">
                    <h2> Custo médio de energia</h2>

                    <div className="checkbox">
                        <input type="checkbox" name="valor" id="" />
                        <label htmlFor="" className="">Até R$200,00</label>
                    </div>

                    <div className="checkbox">
                        <input type="checkbox" name="valor" id="" />
                        <label htmlFor="" className="">De R$200,00 a R$400,00</label>
                    </div>

                    <div className="checkbox">
                        <input type="checkbox" name="valor" id="" />
                        <label htmlFor="" className="">De R$400,00 a R$800,00</label>
                    </div>

                    <div className="checkbox">
                        <input type="checkbox" name="valor" id="" />
                        <label htmlFor="" className="">Mais de R$800,00</label>
                    </div>

                    <div className="checkbox">
                        <input type="checkbox" name="valor" id="checkmsg" />
                        <label htmlFor="" className="" id="checkmsg" >Eu concordo em receber conteúdos da  SOLAR 4.0</label>
                    </div>

                </div>




                <button>ENVIAR</button>

            </form>

        </StyledForm>
    )
}