import './App.css';
import './servicos.css';
import Header from "./components/Header"
import Footer from './components/Footer';
import fenseg from "./assets/fenseg.jpeg"



function Servicos() {
    return (
        <body>

            {Header}

            <div class="sessao">

                <div class="imgSobre">
                    <img src={fenseg} alt="imagem condominio" />
                </div>
                <div class="servicos">

                    <p>O contrato de prestação de um serviço precisa ter primeiramente a necessidade do cliente.</p>
                    <p>Uma vez sendo útil para o cliente, o síndico deverá seguir os trâmites para efetuar o contrato.</p>
                    <p>Normalmente submete aos conselheiros e conduz para a aprovação AG (assembléia geral).</p>

                    <p>A forma com o contrato será pago depende do condomínio.</p>
                    <br></br>
                    <p>Há os que possuem caixa disponível - não sendo necessário taxa extra. E há os que não têm folga e a
                        contratação exigiria taxa extra.</p>
                    <p> Nesse último seriam 2 etapas de aprovação (na mesma AG):</p>
                    <br></br>
                        <ul style="list-style:none">
                            <li>1o) Aprovação (ou não) de contratação do serviço; </li>
                            <li>2o) Aprovação (ou não) da taxa extra e seu valor.</li>

                        </ul>
                        <br></br>
                        <p>
                        Pode-se ter o caso da necessidade e contratação do serviço ser aprovada/reconhecida, porém o valor não
                        ser adequado para o bolso do condomínio/condôminos. Daí retorna-se a mesa de negociação e/ou busca-se
                        outro fornecedor.

                        Vender serviço é um pouco mais difícil já que vende-se um "bem" não "visível" como o caso de vender
                        produto.
                    </p>
                    <br></br>
                    <br></br>
                    <h2>Boa sorte e Sucesso!</h2>


                </div>
            </div>

            {Footer}

        </body >
    );
}

export default Servicos;