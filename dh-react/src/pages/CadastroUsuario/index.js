import '../../styles/styleCadastro.css';
import Header from "../../components/Header"
import Footer from '../../components/Footer';
import BotaoAbriFecha from '../../components/BotaoFlutuante'


function CadastroUsuario() {
    return (
        <div class='cadastro'>

            <Header />

            <div class="TelaCadastro">
                
                <BotaoAbriFecha />

                <div id="main-container">
                    <h1>Cadastro de Usuário</h1>

                    <form id="register-form" action="cadastro" method="post">
                        <label type="text">Nome</label>
                        <input type="text" name="nome" id="nome" placeholder="Digite o Nome do Usuário" />
                        <label for="CPF">CPF</label>
                        <input type="text" name="CPF" id="CPF" placeholder="Digite o CPF do Usuário" />
                        <label for="E-mail">E-Mail</label>
                        <input type="email" name="email" id="email" placeholder="Digite o E-mail do Usuário" />

                        <br></br>
                        <div class="form">
                            <label for="Apartamento">Apartamento</label>
                            <div class="half-box">
                                <br></br>
                                <input type="number" name="Apartamento" id="Apartamento" placeholder="Ap" />
                                <input type="number" name="Bloco" id="Bloco" placeholder="Bl" />
                            </div>
                        </div>

                        <label for="observação">Observação:</label>
                        <div>

                            <div class="CaixaText">
                                <textarea name="Observação" id="" cols="60" rows="5"></textarea>
                                <button class="butao" type="submit">Confirmar</button>
                            </div>

                        </div>

                    </form>
                </div>

            </div>


            {<Footer />}

        </div>
    );
}

export default CadastroUsuario;