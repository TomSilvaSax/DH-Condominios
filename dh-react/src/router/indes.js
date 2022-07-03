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
<Switchs>
    <Router exact path="/alphaVille" component={ AlphaVille } />
    <Router exact path="/anuncios" component={ Anuncios } />
    <Router exact path="/boasVindas" component={ BoasVindas } />
    <Router exact path="/cadastroUsuario" component={ CadastroUsuario } />
    <Router exact path="/controleGastos" component={ ControleGastos } />
    <Router exact path="/jardinOliveira" component={ JardinOliveira } />
    <Router exact path="/GreenGraden" component={ GreenGraden } />
    <Router exact path="/PerfilUsuario" component={ PerfilUsuario } />
    <Router exact path="/Reservas" component={ Reservas } />
    <Router exact path="/Servicos" component={ Servicos } />
    <Router exact path="/Valegopo" component={ Valegopo } />
    <Router exact path="/" component={ Login } />

</Switchs>

);
}