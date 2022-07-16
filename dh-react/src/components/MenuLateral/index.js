import '../../App.css';
import '../../styles/menuLateral.css';
import { Link } from 'react-router-dom';



function MenuLateral() {


  return (

    <>
      <div class="TelaCadastroMenu">
        <Link to="/cadastroUsuario">Cadastra Usuario</Link>
        <div class="separador"></div>
        <Link to="/anuncios">Anuncios Condominio</Link>
        <div class="separador"></div>
        <Link to="/Empreendimentos">Empreendimentos</Link>
        <div class="separador"></div>
        <Link to="/gerarboleto">Gerar Boleto</Link>
        <div class="separador"></div>
        <Link to="/cadastragastos">Cadastra Gastos</Link>
        <div class="separador"></div>
        <Link to=""></Link>
        <div class="separador"></div>
        <Link to=""></Link>
        <div to="separador"></div>
      </div>
      <div class="TelaCadastroOcultMenu">
      </div>
    </>
  )
}

export default MenuLateral;
