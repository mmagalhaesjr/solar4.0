import Pagina1 from '../../../componentes/LandingPages/Topo/Pagina1/Pagina1';
import Pagina2 from '../../../componentes/LandingPages/Topo/Pagina2/Pagina2';
import Pagina3 from '../../../componentes/LandingPages/Topo/Pagina3/Pagina3';
import Pagina5 from '../../../componentes/LandingPages/Topo/Pagina5/Pagina5';
import Pagina6 from '../../../componentes/LandingPages/Topo/Pagina6/Pagina6';
import Pagina7 from '../../../componentes/LandingPages/Topo/Pagina7/Pagina7';
import RodapeLandingPages from '../../../componentes/RodapeLandingPages/RodapeLandingPages';
import ComponenteVideo from '../../../componentes/LandingPages/ComponenteVideo/ComponenteVideo';




export default function TopoFunil() {
    return (
        <>
            <Pagina1/>
            <Pagina2/>
            <Pagina3/>
            <ComponenteVideo />
            <Pagina5/>
            <Pagina6/>
            <Pagina7/>
            <RodapeLandingPages/>
        </>
    )
}