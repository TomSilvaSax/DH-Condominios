import './App.css';
import {BrowserRouter, Route, Routes, Redirect, Navigate} from 'react-router-dom';

import AlphaVille from "../src/pages/AlphaVile";
import Anuncios from "../src/pages/Anuncios";
import BoasVindas from '../src/pages/BoasVindas';
import CadastroUsuario from "../src/pages/CadastroUsuario";
import ControleGastos from '../src/pages/ControleGastos' ;
import GreenGraden from '../src/pages/GreenGranden';
import JardinOliveira from "../src/pages/JardeinOliveira"
import Login from "../src/pages/Login"
import PerfilUsuario from "../src/pages/PerfilUsuario"
import Reservas from "../src/pages/Reservas"
import Servicos from "../src/pages/Servicos"
import Valegopo from "../src/pages/Valegapo"


function App() { 
  return (
    <BrowserRouter>
<Routes>
    <Route path="/alphaVille" exact element={ <AlphaVille /> } />
    <Route  path="/anuncios" exact element={ <Anuncios /> } />
    <Route  path="/boasVindas" exact element={ <BoasVindas /> } />
    <Route  path="/cadastroUsuario" exact element={ <CadastroUsuario /> } />
    <Route  path="/controleGastos" exact element={ <ControleGastos /> } />
    <Route  path="/jardinOliveira" exact element={ <JardinOliveira /> } />
    <Route  path="/GreenGraden" exact element={ <GreenGraden /> } />
    <Route  path="/PerfilUsuario" exact element={ <PerfilUsuario /> } />
    <Route  path="/Reservas" exact element={ <Reservas /> } />
    <Route  path="/Servicos" exact element={ <Servicos /> } />
    <Route  path="/Valegopo" exact element={ <Valegopo /> } />

    <Route  path="/" exact element={ <Login /> } />
    <Route path="*" element={<Navigate to="/" /> }/>
    </Routes>
</BrowserRouter>

  );
}

export default App;
