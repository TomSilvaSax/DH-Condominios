import './App.css';
import './style-tela-controle-reserva.css';
import Header from "../../components/Header"
import Footer from '../../components/Footer';
import MenuLateral from "../../components/MenuLateral"
import CaixaReserva1 from "./assets/imagem-caixa-reserva-1.jpg"
import CaixaReserva2 from "./assets/imagem-caixa-reserva-2.jpg"
import CaixaReserva3 from "./assets/imagem-caixa-reserva-3.jpg"
import CaixaReserva4 from "./assets/imagem-caixa-reserva-4.jpg"
import CaixaReserva5 from "./assets/imagem-caixa-reserva-5.jpg"


function Reservas() {
    return (
        <body>

            {Header}

            <div class="TelaCadastro">
                {MenuLateral}
            </div>
            <div class="controle-reserva">
                     <br></br>
                    <p class="titulo-reserva">Controle de Reservas</p>
                    <img src= {CaixaReserva1} alt="foto do primeiro condominio" />
                    <br></br>
                    <br></br>
                    <p>Condomínio Vale do Igapó</p>
                    <br></br>
                        <a href="ValeIgapo" class="link-informacoes-reserva">Ver mais informações</a>
                        <img src={CaixaReserva2} alt="foto do primeiro condominio" />
                        <br></br>
                        <br></br>
                        <p>Condomínio Jardim das Oliveiras</p>
                        <br></br>
                        <a href="JardinOliveiras" class="link-informacoes-reserva">Ver mais informações</a>
                        <img src= {CaixaReserva3} alt="foto do primeiro condominio" />
                        <br></br>
                        <br></br>

                        <p>Condomínio Boa Vista</p>
                        <br></br>
                        <a href="BoaVista" class="link-informacoes-reserva">Ver mais informações</a>
                        <img src= {CaixaReserva4} alt="foto do primeiro condominio" />
                        <br></br>
                        <br></br>
                        <p>Condomínio AlphaVille</p>
                        <br></br>
                        <a href="AlphaVille" class="link-informacoes-reserva">Ver mais informações</a>
                        <img src= {CaixaReserva5} alt="foto do primeiro condominio" />
                        <br></br>
                        <br></br>
                            <p>Condomínio Green Garden</p>
                            <br></br>
                            <a href="GreenGraden" class="link-informacoes-reserva">Ver mais informações</a>
            </div>

                        {Footer}

                    </body >
                    );
}

                    export default Reservas;