import { StyledBotao } from "./StyledBotao";
import PropTypes from 'prop-types'; // Importe o PropTypes

export default function Botao({ onClick }) {
 

    return (
        <StyledBotao onClick={onClick} >
            <h3>CLIQUE AQUI E RECEBA SEU PROJETO COM O ORÇAMENTO</h3>
        </StyledBotao>
    );
}

Botao.propTypes = {
    onClick: PropTypes.func.isRequired // O onClick deve ser uma função e é obrigatório
};