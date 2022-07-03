import './App.css';
import './styleCadastro.ccs';
import Header from "../../components/Header"
import Footer from '../../components/Footer';
import MenuLateral from "../../components/MenuLateral"


function CadastroUsuario() {
    return (
        <body>

            {Header}

            <div class="TelaCadastro">
                {MenuLateral}
            </div>

            <div id="main-container">
                <h1>Cadastro de Usuário</h1>
                <form id="register-form" action="cadastro" method="post">
                    <label type="text">Nome</label>
                    <input type="text" name="nome" id="nome" placeholder="Digite o Nome do Usuário" />
                    <label for="CPF">CPF</label>
                    <input type="number" name="CPF" id="CPF" placeholder="Digite o CPF do Usuário" />
                    <label for="E-mail">E-Mail</label>
                    <input type="email" name="email" id="email" placeholder="Digite o E-mail do Usuário" />


                    <div class="form">
                        <label for="Apartamento">Apartamento</label>
                        <div class="half-box">
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


            {Footer}

        </body>
    );
}

export default CadastroUsuario;