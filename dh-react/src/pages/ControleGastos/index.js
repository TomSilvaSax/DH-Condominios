import '../../App.css';
import '../../styles/styleCadastro.css';
import Header from "../../components/Header"
import Footer from '../../components/Footer';
import MenuLateral from "../../components/MenuLateral"


function ControleGastos() {
    return (
        <body>

            {<Header/>}

            <div class="TelaCadastro">
                {MenuLateral}
            </div>

            <div id="main-container">
                <h1>Cadastro de Gastos</h1>

                <form id="register-form" action="" method="post">
                    <div class="formUsuario">
                        <label for="usuario">Usuário</label>
                        <input type="email" name="usuario" id="usuario" placeholder="Digite o E-mail ou CPF do Usuário" />
                        <label for="usuario">Nome Usuário</label>
                        <input type="email" name="usuario" id="usuario" placeholder="nome Usuário" />
                        <br></br>
                        <br></br>
                        <br></br>
                        <nav class="valor">
                            <label for="Valor">Valor a pagar</label>
                            <input type="email" name="Valor" id="Valor" placeholder="$$" />
                        </nav>
                    </div>

                    <div class="form">


                        <label for="gas">Consumo Gás</label>
                        <input type="number" name="gas" id="gas" placeholder="Consumo de Gás" />

                        <label for="agua">Consomo Água</label>
                        <input type="number" name="agua" id="agua" placeholder="Consumo de água" />

                        <label for="multa">Multa</label>
                        <input type="number" name="multa" id="multa" placeholder="Valor da Multa" />

                        <label for="taxa do condominio">Taxa do condominio</label>
                        <input type="number" name="taxa" id="taxa" placeholder="Taxa do condominio" />

                    </div>

                </form>
                <button class="butao" type="button" id="Confirmar" value="Confirmar">Gerar Boleto</button>
            </div>

            {<Footer/>}

        </body >
    );
}

export default ControleGastos;