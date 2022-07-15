import '../../App.css';
import '../../styles/menuLateral.css';
import { Link } from 'react-router-dom';



function MenuLateral() {


  return (

    <>
      <div class="TelaCadastroMenu">
        <Link to="/controleGastos">Gera Boletos</Link>
        <div class="separador"></div>
        <Link to="/anuncios">Anuncios Condominio</Link>
        <div class="separador"></div>
        <Link to="/reservas">Reservar Área</Link>
        <div class="separador"></div>
        <Link to=""></Link>
        <div class="separador"></div>
        <Link to=""></Link>
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
