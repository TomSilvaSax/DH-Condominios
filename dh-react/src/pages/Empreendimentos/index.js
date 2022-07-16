import '../../App.css';
import '../../styles/style-tela-controle-reserva.css';
import Header from "../../components/Header"
import Footer from '../../components/Footer';
import CaixaReserva1 from "../../assets/imagem-caixa-reserva-1.jpg"
import CaixaReserva2 from "../../assets/imagem-caixa-reserva-2.jpg"
import CaixaReserva3 from "../../assets/imagem-caixa-reserva-3.jpg"
import CaixaReserva4 from "../../assets/imagem-caixa-reserva-4.jpg"
import CaixaReserva5 from "../../assets/imagem-caixa-reserva-5.jpg"
import { Link } from 'react-router-dom';


function Reservas() {
    return (
        <body className='reserva'>

            {<Header />}

            <div class="TelaCadastro-reserva">

            </div>
            <div class="controle-reserva">
                <br></br>
                <p class="titulo-reserva">Conheça nossos Empreendimentos</p>
                <img src={CaixaReserva1} alt="foto do primeiro condominio" />
                <br></br>
                <br></br>
                <p>Condomínio Vale do Igapó</p>
                <br></br>
                <Link to="/ValeIgapo" class="link-informacoes-reserva">Ver mais informações</Link>
                <img src={CaixaReserva2} alt="foto do primeiro condominio" />
                <br></br>
                <br></br>
                <p>Condomínio Jardim das Oliveiras</p>
                <br></br>
                <Link to="/jardinOliveira" class="link-informacoes-reserva">Ver mais informações</Link>
                <img src={CaixaReserva3} alt="foto do primeiro condominio" />
                <br></br>
                <br></br>

                <p>Condomínio Boa Vista</p>
                <br></br>
                <Link to="/boaVista" class="link-informacoes-reserva">Ver mais informações</Link>
                <img src={CaixaReserva4} alt="foto do primeiro condominio" />
                <br></br>
                <br></br>
                <p>Condomínio AlphaVille</p>
                <br></br>
                <Link to="/AlphaVille" class="link-informacoes-reserva">Ver mais informações</Link>
                <img src={CaixaReserva5} alt="foto do primeiro condominio" />
                <br></br>
                <br></br>
                <p>Condomínio Green Garden</p>
                <br></br>
                <Link to="/GreenGraden" class="link-informacoes-reserva">Ver mais informações</Link>
            </div>

            {<Footer />}

        </body >
    );
}

export default Reservas;