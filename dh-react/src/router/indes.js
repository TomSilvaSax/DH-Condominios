import React from 'react';
import { useDispatch } from 'react-redux';
import Route from '•/Route';

import AlphaVille from "../pages/AlphaVile";
import Anuncios from "../pages/Anuncios";
import BoasVindas from '../pages/BoasVindas';
import BoaVista from '../pages/BoaVista';
import CadastroUsuario from "../pages/CadastroUsuario";
import CadastraGastos from "../pages/CadastrarGastosUsuario";
import GeraBoleto from '../pages/GeraBoleto';
import GreenGraden from '../pages/GreenGranden';
import JardinOliveira from "../pages/JardeinOliveira";
import Login from "../pages/Login";
import PerfilUsuario from "../pages/PerfilUsuario";
import Reservas from "../pages/Empreendimentos";
import Servicos from "../pages/Servicos";
import Valeigapo from "../pages/Valeigapo";
import Sobre from "../pages/Sobre";


export default function Routes() {
    const dispatch = useDispatch();

    dispatch(signInRequest());

    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/alphaVille" component={<AlphaVille />} />
                <Route exact path="/anuncios" component={<Anuncios />} />
                <Route exact path="/boasVindas" component={<BoasVindas />} />
                <Route exact path="/boaVista" component={<BoaVista />} />
                <Route exact path="/gerarboleto" component={<GeraBoleto />} />
                <Route exact path="/cadastroUsuario" component={<CadastroUsuario />} />
                <Route exact path="/cadastragastos" component={<CadastraGastos />} />
                <Route exact path="/jardinOliveira" component={<JardinOliveira />} />
                <Route exact path="/GreenGraden" component={<GreenGraden />} />
                <Route exact path="/PerfilUsuario" component={<PerfilUsuario />} />
                <Route exact path="/reservas" component={<Reservas />} />
                <Route exact path="/servicos" component={<Servicos />} />
                <Route exact path="/Valeigapo" component={<Valeigapo />} />
                <Route exact path="/Sobredh" component={<Sobre />} />
                <Route exact path="/" component={<Login />} />
            </Routes>
        </BrowserRouter>
    );
}