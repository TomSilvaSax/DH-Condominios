import Logo2r from "../../assets/logo2-removebg-preview.png"
import IconeUsuario from "../../assets/Icone-usuario-Png-1024x1024.png"
import ImgMenu from "../../assets/menu.png"
import "../../styles/header.css"
import {  Link } from 'react-router-dom';



function Header() {

    return (
        <header>

            <div class="Superior">
                <img class="loga" src={Logo2r} />

            </div>

            <nav class="menu-superior">
                <ul>
                    <li><Link to="/sobre">Sobre</Link></li>
                    <li><Link to="/servicos">Serviços</Link></li>
                    <li><Link to="/sair">Sair</Link></li>
                </ul>

                <div class="usuario">
                    <Link to="/PerfilUsuario">Olá </Link>
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