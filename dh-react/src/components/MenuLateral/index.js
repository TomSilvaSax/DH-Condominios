import './App.css';



function MenuLateral() {

    return (

        <>
        <div class="">

        <a href="" class="botao-flutuante">
          <i class="fa-solid fa-angles-left"></i>
        </a>
        
      
        <a href="../controle">Gera Boletos</a>
        <div class="separador"></div>
        <a href="../anuncios">Anuncios Condominio</a>
        <div class="separador"></div>
        <a href="../reservas">Reservar Área</a>
        <div class="separador"></div>
        <a href=""></a>
        <div class="separador"></div>
        <a href=""></a>
        <div class="separador"></div>
        <a href=""></a>
        <div class="separador"></div>
        <a href=""></a>
        <div class="separador"></div>
      </div>
      <div class="TelaCadastroOcultMenu">
      
        <a href="rec-Menu/<%=rota %>" class="botao-flutuante">
          <i class="fa-solid fa-angles-right"></i>
        </a>
</div>
</>
    )
}

export default MenuLateral;
