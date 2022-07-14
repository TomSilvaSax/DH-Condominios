import '../../styles/footer.css';
import '../../styles/botaoFlutuante.css'
import AbriMenu from '../../assets/chevron-back-outline.svg'
import FachaMenu from '../../assets/chevron-forward-outline.svg'
import {useState} from 'react';
import MenuLateral from "../../components/MenuLateral"


function BotaoFlutuante({onClick}) {

    const [darkMode, setDarkMode] = useState(false);
    
    function onClick() {
      setDarkMode(!darkMode)
    }

    return (
        <> 
     <a className='botao-flutuante' onClick={onClick}>


         <img src={darkMode? {AbriMenu}:{FachaMenu} } alt='botao'></img>


     </a>

           {darkMode ? <MenuLateral /> : ""}
           </>
    )
}

export default BotaoFlutuante;