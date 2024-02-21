import { StyledUsinaSolar } from "./styled";

import Pagina1 from "../../../componentes/LandingPages/UsinaSolar/Pagina1/Pagina1";
import Pagina2 from '../../../componentes/LandingPages/UsinaSolar/Pagina2/Pagina2';
import Pagina3 from "../../../componentes/LandingPages/UsinaSolar/Pagina3/Pagina3";
import Pagina4 from "../../../componentes/LandingPages/UsinaSolar/Pagina4/Pagina4";
import Pagina5 from "../../../componentes/LandingPages/UsinaSolar/Pagina5/Pagina5";
import Pagina7 from "../../../componentes/LandingPages/UsinaSolar/Pagina7/Pagina7";
import Pagina8 from "../../../componentes/LandingPages/UsinaSolar/Pagina8/Pagina8";
import RodapeLandingPages from '../../../componentes/RodapeLandingPages/RodapeLandingPages';
import ComponenteVideo from '../../../componentes/LandingPages/ComponenteVideo/ComponenteVideo';



export default function UsinaSolar(){
    return(
        <StyledUsinaSolar>

            <Pagina1 />
            <ComponenteVideo />
            <Pagina2 />
            <Pagina3 />
            <Pagina4 />
            <Pagina5 />
            <Pagina7 />
            <Pagina8 />
            <RodapeLandingPages/>
            
            

        </StyledUsinaSolar>
    )
}