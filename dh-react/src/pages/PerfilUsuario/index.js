import '../../App.css';
import '../../styles/stylePerfil.css';
import Header from "../../components/Header"
import Footer from '../../components/Footer';
import BotaoAbriFecha from '../../components/BotaoFlutuante'
import ImgUsuario from '../../assets/Icone-usuario-Png-1024x1024.png'


function PerfilUsuario() {
    return (
        <div class='prefil'>

            <Header />

            <div class="TelaCadastro-perfil">

                <BotaoAbriFecha />

                <div id="main-container-perfil">
                    <h1>Perfil Usuário</h1>
                    <form id="register-form-perfil">

                        <div class="formUsuario-perfil">
                            <label for="Nome">Nome</label>

                            <input type="text" name="nome" id="nome" placeholder="Digite o Nome do Usuário" />

                            <label for="CPF">CPF</label>
                            <input type="number" name="CPF" id="CPF" placeholder="Digite o CPF do Usuário" />

                            <label for="E-mail">E-Mail</label>
                            <input type="email" name="email" id="email" placeholder="Digite o E-mail do Usuário" />

                        </div>
                        <div class="foto-perfil">
                            <div class="ajuste-foto-perfil">
                                <img src={ImgUsuario} alt="Foto Usuario" />
                            </div>
                            <form action="" method="post" enctype="addimi">
                                <input type="file" name="avatarFile" id="file" />
                            </form>
                        </div>
                    </form>

                    <div class="form-perfil">
                        <label for="Apartamento">Apartamento</label>
                        <div class="half-box-perfil">
                            <input type="text" name="Apartamento" id="Apartamento" placeholder="AP" />
                            <input type="text" name="Bloco" id="Bloco" placeholder="BL" />

                        </div>
                    </div>

                    <div class="obs-perfil">
                        <div>

                            <label for="observação">Observação</label>
                            <input type="text" name="Observação" size="120" maxlength="30" />
                        </div>

                        <button class="butao-perfil" type="button" id="Confirmar" value="Confirmar">Confirmar</button>
                    </div>

                </div>
            </div>

            <Footer />

        </div >
    );
}

export default PerfilUsuario;