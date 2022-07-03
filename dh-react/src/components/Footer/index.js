import './App.css';
import facebook from "./assets/facebook.svg"
import instagram from "./assets/instagram.svg"
import linkedin from "./assets/linkedin.svg"
import './footer.css';

function Footer() {

    return (
        <footer  class="rodape">
        <ul class="redes-sociais">
          <li><a href="#">
            <img src= {facebook} alt="icone facebook" width="50px"/>
          </a></li>
          <li><a href="#">
            <img src= {instagram} alt="icone instagram" width="50px"/>
          </a></li>
          <li><a href="#">
            <img src= {linkedin} alt="icone linkedin" width="50px"/>
          </a></li>
          </ul>
        
       </footer>

    )
}

export default Footer;


