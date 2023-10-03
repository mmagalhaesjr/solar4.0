import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserProvider from "./contexts/UserContext";

import Main from "./pages/Main/Main"
import Blog from "./pages/Blog/Blog"
// import Orcamento from "./pages/Orcamento/Orcamento"
import Comercial  from "./pages/Projetos/Comercial/Comercial"
import Industrial from "./pages/Projetos/Industrial/Industrial"
import Residencial from "./pages/Projetos/Residencial/Residencial"
import Rural  from "./pages/Projetos/Rural/Rural"
import Solucoes  from "./pages/Solucoes/Solucoes"
import Servicos from "./pages/Servicos/Servicos"
import OPM from "./pages/PaninasServicos/Operacao-Manutencao/OPM"
import VI from "./pages/PaninasServicos/Vendas-Instalacao/VI"

import Orcamento from "./pages/Orcamento/Orcamento";






function App() {
  return (
    <BrowserRouter>

    <UserProvider>
        <div className="App">
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/orcamento" element={<Orcamento />} />
                <Route path="/projetoComercial" element={<Comercial />} />
                <Route path="/projetoIndustrial" element={<Industrial />} />
                <Route path="/projetoResidencial" element={<Residencial />} />
                <Route path="/projetoRural" element={<Rural />} />
                <Route path="/solucoes" element={<Solucoes />} />
                <Route path="/servicos" element={<Servicos />} />
                <Route path="/opm" element={<OPM />} />
                <Route path="/vi" element={<VI />} />
            </Routes>
        </div>
    </UserProvider>

</BrowserRouter>
  )
}

export default App
