import React from 'react';
import {useDispatch} from 'react-redux';
import  {Switch} from 'react-router-dom';
import Route from '•/Route';

import AlphaVille from "../pages/AlphaVile";
import Anuncios from "../pages/Anuncios";
import BoasVindas from '../pages/BoasVindas';
import CadastroUsuario from "../pages/CadastroUsuario";
import ControleGastos from '../pages/ControleGastos' ;
import GreenGraden from '../pages/GreenGranden';
import JardinOliveira from "../pages/JardeinOliveira"
import Login from "../pages/Login"
import PerfilUsuario from "../pages/PerfilUsuario"
import Reservas from "../pages/Reservas"
import Servicos from "../pages/Servicos"
import Valegopo from "../pages/Valegapo"


export default function Routes() {  
const dispatch = useDispatch();

dispatch(signInRequest());

return(
<BrowserRouter>
<Routes>
    <Route exact path="/alphaVille" component={ <AlphaVille /> } />
    <Route exact path="/anuncios" component={ <Anuncios /> } />
    <Route exact path="/boasVindas" component={ <BoasVindas /> } />
    <Route exact path="/cadastroUsuario" component={ <CadastroUsuario /> } />
    <Route exact path="/controleGastos" component={ <ControleGastos /> } />
    <Route exact path="/jardinOliveira" component={ <JardinOliveira /> } />
    <Route exact path="/GreenGraden" component={ <GreenGraden /> } />
    <Route exact path="/PerfilUsuario" component={ <PerfilUsuario /> } />
    <Route exact path="/Reservas" component={ <Reservas /> } />
    <Route exact path="/Servicos" component={ <Servicos /> } />
    <Route exact path="/Valegopo" component={ <Valegopo /> } />
    <Route exact path="/" component={ <Login /> } />
    </Routes>
</BrowserRouter>

);
}