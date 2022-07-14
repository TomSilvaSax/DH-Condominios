import '../../styles/styleCadastro.css';
import Header from "../../components/Header"
import Footer from '../../components/Footer';
import BotaoAbriFecha from '../../components/BotaoFlutuante'
import api from '../../services/api';

function ControleGastos() {

    //useEffect(() => {
    // async function loadGastos() {

    // await api.get("")

    // }

    // }, []);



    return (
        <body>

            <Header />

            <div class="TelaCadastro">

                <BotaoAbriFecha />

                <div id="main-container">
                    <h1>Cadastro de Gastos</h1>

                    <form id="register-form" action="" method="post">
                        <div class="formUsuario">
                            <label for="usuario">Usuário</label>
                            <input type="email" name="usuario" id="usuario" placeholder="Digite o E-mail ou CPF do Usuário" />
                            <label for="usuario">Nome Usuário</label>
                            <input type="email" name="usuario" id="usuario" placeholder="nome Usuário" />
                            <br></br>

                            <div className='form'>
                                <div className='form1'>
                                    <label for="Valor">Valor a pagar
                                        <input type="email" name="Valor" id="Valor" placeholder="$$" /></label>
                                    <label for="gas">Consumo Gás
                                        <input type="number" name="gas" id="gas" placeholder="Consumo de Gás" /></label>
                                    <label for="agua">Consomo Água</label>
                                </div>

                                <div className='form2'>
                                    <label> <input type="number" name="agua" id="agua" placeholder="Consumo de água" /></label>
                                    <label for="multa">Multa
                                        <input type="number" name="multa" id="multa" placeholder="Valor da Multa" /></label>
                                    <label for="taxa do condominio">Taxa do condominio
                                        <input type="number" name="taxa" id="taxa" placeholder="Taxa do condominio" /></label>

                                </div>
                            </div>
                        </div>

                    </form>

                    <button class="butao" type="button" id="Confirmar" value="Confirmar">Gerar Boleto</button>
                </div>
            </div>
            {<Footer />}

        </body >
    );
}

export default ControleGastos;