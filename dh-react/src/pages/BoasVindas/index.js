import '../../styles/detalhesEmp.css';
import fenseg from "../../assets/fenseg.jpeg"
import Header from "../../components/Header"
import Footer from '../../components/Footer';


function BoasVindas() {
    return (
        <div class='detalhe'>

            {<Header />}

            <div class="sessao_detalhe">

                <div class="imgSobre_detalhe">
                    <img src={fenseg} alt="imagem condominio" />
                </div>
                <div class="servicos_detalhe">

                    <h1> Anuncios</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quaerat adipisci blanditiis, numquam
                        magni, illum illo voluptate eveniet suscipit molestiae sapiente qui perspiciatis quidem asperiores
                        delectus doloribus distinctio excepturi itaque?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum voluptatibus mollitia inventore
                        distinctio dolores culpa et non neque possimus nam libero doloribus iste adipisci, itaque, sint
                        nihil excepturi officia. Eos?</p>


                    <br></br>
                    <br></br>
                    <h2>Obrigado pela compreeção!</h2>


                </div>
            </div>


            {<Footer />}

        </div>
    );
}

export default BoasVindas;