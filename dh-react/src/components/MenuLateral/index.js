import '../../App.css';
import '../../styles/menuLateral.css';
import {  Link } from 'react-router-dom';


function MenuLateral() {
  
  
    return (

        <>
        <div class="TelaCadastroMenu">

        <a href="" class="">
        <ion-icon name="chevron-back-outline"></ion-icon>
        </a>
        
      
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
      
        <a href="rec-Menu/<%=rota %>" class="botao-flutuante">
        <ion-icon name="chevron-forward-outline"></ion-icon>
        </a>
</div>
</>
    )
}

export default MenuLateral;
