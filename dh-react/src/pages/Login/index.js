
import '../../styles/Login.css';
import Logo2 from '../../assets/logo2-removebg-preview.png';

function Login() {
  return (
    <body>
      <header>
        <div class="BordaSuperior">
          <a class="Superior">
            <img class="loga" src={Logo2} />
          </a>

        </div>
      </header>
      <div class="center">
        <div class="boxVerde">
          <nav class="login">
            <h1>Login</h1>
            <form class="menu" action="/login" method="post">


              <label for="email">E-mail</label>
              <input type="email" name="email" id="" required />

              <label for="senha">Senha</label>
              <input type="password" name="senha" id="" required />

              <nav class="logado">
                <input type="checkbox" name="logado" id="" />
                <label for="">Manter logado?</label>
              </nav>
              <br></br>
              <button type="submit">Entrar</button>
              <p class="saudaçōes">Nossa Prioridade é morar bem!</p>
            </form>
          </nav>
        </div>
      </div>

      <footer class="rodape">
      </footer>
    </body>
  );
}

export default Login;
