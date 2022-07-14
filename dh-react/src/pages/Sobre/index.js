import '../../styles/sobre.css';
import Header from "../../components/Header"
import Footer from '../../components/Footer';
import Fenseg from "../../assets/fenseg.jpeg"


function Sobre() {
    return (
        <body>

            {<Header />}

            <div class="sobre">
                <div class="imgSobre">
                    <img src={Fenseg} alt="imagem condominio" />
                </div>

                <div class="textSobre">
                    <h2>Sobre a DH Condominios</h2>
                    <p>
                        DH Condominios esta voltada ao ramo de administração de condominios, trazendo facilidade e
                        integração aos moradores dos condominios.
                    </p>
                </div>
                <article id="historia">
                    <h2>História</h2>
                    <p>
                        A DH Condominios surgiu a principio como um projeto integrador na realização do curso de Web
                        full Stack.
                        <br></br>
                        Uma ideia que trouxe facilidade e foi bem aceita por condominios de todo o pais!
                    </p>
                </article>
                <div id="trabalhos">
                    <h2>Área de atuação</h2>
                    <p>Visando facilidade ao condomino, a DH Condominios trás diversas ferramentas voltadas a
                        administração do Condominio.
                        <br></br>
                        Dentre elas estão:
                        <ul style="list-style:none">
                            <li>Emissão de boletos</li>
                            <li>Reservas de areas de lazer</li>
                            <li>Quadro de anuncios</li>
                            <li>Reclamaçoes anonimas</li>
                        </ul>
                        <p>
                            Venha você também ser nosso cliente!
                        </p>
                    </p>
                </div>
            </div>
            {<Footer />}

        </body >
    );
}

export default Sobre;