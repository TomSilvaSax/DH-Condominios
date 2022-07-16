import './App.css';
import {BrowserRouter, Route, Routes, Redirect, Navigate} from 'react-router-dom';

import AlphaVille from "../src/pages/AlphaVile";
import Anuncios from "../src/pages/Anuncios";
import BoasVindas from '../src/pages/BoasVindas';
import BoaVista from '../src/pages/BoaVista';
import CadastroUsuario from "../src/pages/CadastroUsuario";
import CadastraGastos from "../src/pages/CadastrarGastosUsuario";
import GeraBoleto from '../src/pages/GeraBoleto' ;
import GreenGraden from '../src/pages/GreenGranden';
import JardinOliveira from "../src/pages/JardeinOliveira"
import Login from "../src/pages/Login"
import PerfilUsuario from "../src/pages/PerfilUsuario"
import Empreendimentos from "./pages/Empreendimentos"
import Servicos from "../src/pages/Servicos"
import Valeigapo from "../src/pages/Valeigapo"
import Sobre from "../src/pages/Sobre";


function App() { 
  return (
    <BrowserRouter>
<Routes>
    <Route  path="/alphaVille" exact element={ <AlphaVille /> } />
    <Route  path="/anuncios" exact element={ <Anuncios /> } />
    <Route  path="/boasVindas" exact element={ <BoasVindas /> } />
    <Route  path="/boaVista" exact element={<BoaVista />} />
    <Route  path="/cadastrousuario" exact element={ <CadastroUsuario /> } />
    <Route  path="/gerarboleto" exact element={ <GeraBoleto /> } />
    <Route  path="/cadastragastos" exact element={ <CadastraGastos /> } />
    <Route  path="/jardinOliveira" exact element={ <JardinOliveira /> } />
    <Route  path="/GreenGraden" exact element={ <GreenGraden /> } />
    <Route  path="/PerfilUsuario" exact element={ <PerfilUsuario /> } />
    <Route  path="/Empreendimentos" exact element={ <Empreendimentos /> } />
    <Route  path="/servicos" exact element={ <Servicos /> } />
    <Route  path="/Valeigapo" exact element={ <Valeigapo /> } />
    <Route  path="/Sobredh" exact element={<Sobre />} />
    <Route  path="/" exact element={ <Login /> } />
    <Route path="*" element={<Navigate to="/" /> }/>
    </Routes>
</BrowserRouter>

  );
}

export default App;
