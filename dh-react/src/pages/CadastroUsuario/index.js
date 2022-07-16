import '../../styles/styleCadastro.css';
import Header from "../../components/Header"
import Footer from '../../components/Footer';
import BotaoAbriFecha from '../../components/BotaoFlutuante'
import React, { useState } from 'react'
import *  as  yup from 'yup';
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import axios from 'axios'


function CadastroUsuario() {

    const [user, setUser] = useState({
        name: '',
        CPF: '',
        Email: '',
        Apartamento: '',
        Bloco: '',
        Senha: '',
        Observacao: ''
    });

    const [status, setStatus] = useState({
        name: '',
        CPF: '',
        Email: '',
        Apartamento: '',
        Bloco: '',
        Senha: '',
        Observacao: ''

    });

    //Receber os dados do formulário
    const valueImput = e => setUser({ ...user, [e.target.namo]: e.target.value })

    //Enviar os dados para o back-end
    const addUser = async e => {
        e.preventDefault();

        if (!(await validate())) return;

        const saveDataForm = true;


        if (saveDataForm) {
            setStatus({
                type: 'Sucesso',
                mensagem: 'Usuario cadastrado com sucessso'
            });

            setUser({
                name: '',
                CPF: '',
                Email: '',
                Apartamento: '',
                Bloco: '',
                Senha: '',
                Observacao: ''

            });
        } else {
            setStatus({
                type: 'error',
                mensagem: "Erro: Usuário não cadastrado com sucesso!"
            });
        }
    }

    async function validate() {
        const schema = yup.object().shape({
            Senha: yup.string("Erro: Necessário preencher o campo senha!")
                .required("Erro: Necessário preencher o campo senha!")
                .min(6, "Erro: A senha deve ter no mínimo 6 caracteres!"),

            Bloco: yup.string("Erro: Necessário preencher o campo Bloco!")
                .required("Erro: Necessário preencher o campo Bloco"),

            Apartamento: yup.string("Erro: Necessário preencher o campo Apartamento!")
                .required("Erro: Necessário preencher o campo Apartamento"),

            email: yup.string("Erro: Necessário preencher o campo e-mail!")
                .required("Erro: Necessário preencher o campo e-mail!")
                .email("Erro: Necessário preencher o campo com e-mail válido!"),

            CPF: yup.string("Erro: Necessário preencher o campo CPF!")
                .required("Erro: Necessário preencher o campo CPF"),

            name: yup.string("Erro: Necessário preencher o campo nome!")
                .required("Erro: Necessário preencher o campo nome!"),

        });
        try {
            await schema.validate(user);
            return true;
        } catch (err) {
            setStatus({
                type: 'error',
                mensagem: err.errors
            });
            return false;
        }

         function Post() { 
            
            const {register, handleSubmit, formState: { errors } } = useForm({
            resolver: yupResolver(validate)
        })

        const assPost = data => axios.post('/cadastro', data)
            .then(() => {
                console.log('Usuario cadastrado com sucesso')
            })
            .catch(() => {
                console.log('error')
            })
            return  Post = data => console.log('/cadastro')
        }
    }
    return (
        <div class='cadastro'>

            <Header />

            <div class="TelaCadastro-cadastro">

                <BotaoAbriFecha />

                <div id="main-container-cadastro">
                    <h1>Cadastro de Usuário</h1>

                    {status.type === 'success' ? <p style={{ color: "green" }}>{status.mensagem}</p> : ""}
                    {status.type === 'error' ? <p style={{ color: "#ff0000" }}>{status.mensagem}</p> : ""}

                    <form onSubmit={addUser}>
                        <label type="text">Nome</label>
                        <input type="text" name='name' placeholder="Digite o Nome do Usuário" onChange={valueImput}></input>
                        <label for="CPF">CPF</label>
                        <input type="text" name='CPF' placeholder="Digite o CPF do Usuário" onChange={valueImput} />
                        <label for="E-mail">E-Mail</label>
                        <input type="email" name='Email' placeholder="Digite o E-mail do Usuário" onChange={valueImput} />
                        <label for="Apartamento">Apartamento</label>
                        <input name='Apartamento' type="number" placeholder="Apartamento" onChange={valueImput} />
                        <label for="Bloco">Bloco</label>
                        <input name='Bloco' type="number" placeholder="Bloco" onChange={valueImput} />
                        <label for="Senha">Senha</label>
                        <input name='Senha' type="password" placeholder="Bloco" onChange={valueImput} />
                        <br></br>

                        <label for="observação-cadastro">Observação:</label>
                        <div>
                            <div class="CaixaText-cadastro">

                                <input name='Observacao' type="text" placeholder="Bl" cols="60" rows="5" sonChange={valueImput} />
                                <button class="butao-cadastro" type="submit">Confirmar</button>
                            </div>

                        </div>

                    </form>
                </div>

            </div>


            {<Footer />}

        </div>
    );
}

export default CadastroUsuario;