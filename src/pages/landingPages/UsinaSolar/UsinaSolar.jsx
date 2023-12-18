import { StyledUsinaSolar } from "./styled";

import Pagina1 from "../../../componentes/LandingPages/UsinaSolar/Pagina1/Pagina1";
import Pagina2 from '../../../componentes/LandingPages/UsinaSolar/Pagina2/Pagina2';
import Pagina3 from "../../../componentes/LandingPages/UsinaSolar/Pagina3/Pagina3";
import Pagina4 from "../../../componentes/LandingPages/UsinaSolar/Pagina4/Pagina4";



export default function UsinaSolar(){
    return(
        <StyledUsinaSolar>

            <Pagina1 />
            <Pagina2 />
            <Pagina3 />
            <Pagina4 />

        </StyledUsinaSolar>
    )
}