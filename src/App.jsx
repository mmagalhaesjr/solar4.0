import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import HomeContextProvider from './contexts/HomeContext';
import Main from './pages/Main/Main';
import Error404 from './pages/Error/Error';
import Solucoes from './pages/Solucoes/Solucoes';
import Comercial from './pages/Solucoes/Comercial/Comercial';
import Industrial from './pages/Solucoes/Industrial/Industrial';
import Residencial from './pages/Solucoes/Residencial/Residencial';
import Rural from './pages/Solucoes/Rural/Rural';
import Servicos from './pages/Servicos/Servicos';
import OPM from './pages/Servicos/Operacao-Manutencao/OPM';
import VI from './pages/Servicos/Vendas-Instalacao/VI';

import Orcamento from './pages/Orcamento/Orcamento';
import ConfirmarEnvio from './pages/ConfirmarEnvio/ConfirmarEnvio';

import MeioFunil from './pages/landingPages/MeioFunil/MeioFunil';
import TopoFunil from './pages/landingPages/TopoFunil/TopoFunil';
import FundoFunil from './pages/landingPages/FundoFunil/FundoFunil';
import UsinaSolar from './pages/landingPages/UsinaSolar/UsinaSolar';

// import BlogTelainicial from './pages/BlogTelainicial/BlogTelainicial';
// import Blog from './pages/Blogs/Blog/Blog';


function App() {
  return (
    <Router>
      <HomeContextProvider>
        <div className="App">
          <Routes>
            <Route path="*" element={<Error404 />} />
            <Route path="/" element={<Main />} />
            <Route path="/orcamento" element={<Orcamento />} />
            <Route path="/projetoComercial" element={<Comercial />} />
            <Route path="/projetoIndustrial" element={<Industrial />} />
            <Route path="/projetoResidencial" element={<Residencial />} />
            <Route path="/projetoRural" element={<Rural />} />
            <Route path="/solucoes" element={<Solucoes />} />
            <Route path="/servicos" element={<Servicos />} />
            <Route path="/opm" element={<OPM />} />
            <Route path="/vi" element={<VI />} />
            <Route path="/confirmar" element={<ConfirmarEnvio />} />
           
            {/* landinpages---------- */}
            <Route path="/economizeenergia" element={<TopoFunil />} />
            <Route path="/energiasolar" element={<MeioFunil />} />
            <Route path="/economize" element={<FundoFunil />} />
            <Route path="/usinaSolar" element={<UsinaSolar />} />
            {/* blog---------- */}
            {/* <Route path="/blog" element={<BlogTelainicial />} />
            <Route path="/blog/:blogId" element={<Blog />} /> */}
           
          </Routes>
        </div>
      </HomeContextProvider>
    </Router>
  );
}

export default App;





// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import HomeContextProvider from "./contexts/HomeContext";

// import Main from "./pages/Main/Main"

// import Error404 from "./pages/Error/Error";

// import Solucoes  from "./pages/Solucoes/Solucoes"
// import Comercial  from "./pages/Solucoes/Comercial/Comercial"
// import Industrial from "./pages/Solucoes/Industrial/Industrial"
// import Residencial from "./pages/Solucoes/Residencial/Residencial"
// import Rural  from "./pages/Solucoes/Rural/Rural"

// import Servicos from "./pages/Servicos/Servicos"
// import OPM from "./pages/Servicos/Operacao-Manutencao/OPM"
// import VI from "./pages/Servicos/Vendas-Instalacao/VI"

// import Orcamento from "./pages/Orcamento/Orcamento";
// import ConfirmarEnvio from "./pages/ConfirmarEnvio/ConfirmarEnvio";

// import MeioFunil from "./pages/landingPages/MeioFunil/MeioFunil";
// import TopoFunil from './pages/landingPages/TopoFunil/TopoFunil';
// import FundoFunil from './pages/landingPages/FundoFunil/FundoFunil';
// import UsinaSolar from './pages/landingPages/UsinaSolar/UsinaSolar';


// import BlogTelainicial from "./pages/BlogTelainicial/BlogTelainicial";
// import Blog1 from './pages/Blogs/Blog1/Blog1';




// function App() {
//   return (
//     <BrowserRouter>

//     <HomeContextProvider>
//         <div className="App">
//             <Routes>
//                 <Route path="*" exact element={<Error404 />} />
//                 <Route path="/" exact element={<Main />} />
//                 <Route path="/orcamento" exact element={<Orcamento />} />
//                 <Route path="/projetoComercial" exact element={<Comercial />} />
//                 <Route path="/projetoIndustrial" exact element={<Industrial />} />
//                 <Route path="/projetoResidencial" exact element={<Residencial />} />
//                 <Route path="/projetoRural" exact element={<Rural />} />
//                 <Route path="/solucoes" exact element={<Solucoes />} />
//                 <Route path="/servicos" exact element={<Servicos />} />
//                 <Route path="/opm" exact element={<OPM />} />
//                 <Route path="/vi" exact element={<VI />} />

//                 <Route path="/confirmar" exact element={<ConfirmarEnvio />} />

//                 {/* blog-------------- */}
//                 <Route path="/blog" exact element={<BlogTelainicial />} />
//                 <Route path="/blog1" exact element={<Blog1 />} />
//                 {/* blog-------------- */}

//                 {/* Lanading Pages----  */}
//                 <Route path="/economizeenergia" exact element={<TopoFunil />} />
//                 <Route path="/energiasolar" exact element={<MeioFunil />} />
//                 <Route path="/economize" exact element={<FundoFunil />} />
//                 <Route path="/usinaSolar" exact element={<UsinaSolar />} />
//                  {/* Lanading Pages----  */}
//             </Routes>
//         </div>
//     </HomeContextProvider>

// </BrowserRouter>
//   )
// }

// export default App
