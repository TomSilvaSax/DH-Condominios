import Logo2r from "../../assets/logo2-removebg-preview.png"
import IconeUsuario from "../../assets/Icone-usuario-Png-1024x1024.png"
import ImgMenu from "../../assets/menu.png"
import "../../styles/header.css"
import { useParams } from 'react-router-dom';
import {  Link } from 'react-router-dom';
import { useState, useEffect } from 'react'
import api from '../../services/api'


function Header() {

      const {id} = useParams();
      const [Usuario, setUsuario] = useState()

      useEffect(() => {
        async function loadUsuario() {
 const response = await api.get('/cadastro/?{id}')

 setUsuario(response.data);
        }
        loadUsuario()

      }, []);

    return (
        <header>

            <div class="Superior">
                <img class="loga" src={Logo2r} />

            </div>

            <nav class="menu-superior">
                <ul>
                    <li><Link to="/Sobredh">Sobre</Link></li>
                    <li><Link to="/servicos">Serviços</Link></li>
                    <li><Link to="/sair">Sair</Link></li>
                </ul>

                <div class="usuario">
                    <Link to="/PerfilUsuario"><span>Olá </span> </Link>
                    <div class="fotousuario">
                        <img src={IconeUsuario} alt="menu" />
                    </div>
                </div>
            </nav>

            <nav class="menu-mobile">
                <img src={ImgMenu} alt="menu" />
            </nav>

        </header>

    )
}

export default Header;