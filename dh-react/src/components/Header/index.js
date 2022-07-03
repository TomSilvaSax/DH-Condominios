import './App.css';
import Logo2r from "./assets/logo2-removebg-preview.png"
import IconeUsuario from "./assets/Icone-usuario-Png-1024x1024.png"
import ImgMenu from "./assets/menu.png"
import "./header.css"


function Header() {

    return (
        <header>

            <div class="Superior">
                <img class="loga" src={Logo2r} />

            </div>

            <nav class="menu-superior">
                <ul>
                    <li><a href="sobre">Sobre</a></li>
                    <li><a href="/servicos">Serviços</a></li>
                    <li><a href="/sair">Sair</a></li>
                </ul>

                <div class="usuario">
                    <a href="perfil">Olá </a>
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

