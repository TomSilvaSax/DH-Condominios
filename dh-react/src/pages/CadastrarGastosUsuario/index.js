import '../../styles/geraBoleto.css'
import Header from "../../components/Header"
import Footer from '../../components/Footer';
import BotaoAbriFecha from '../../components/BotaoFlutuante'
import api from '../../services/api';
import React, { useState } from 'react'
import *  as  yup from 'yup';
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import axios from 'axios'

function CadastraGastos() {
    return (
        <body>

            <Header />

            <div class="TelaCadastroGasto">

                <BotaoAbriFecha />

                <h1>Cadastra Gastos</h1>
                <form id='CPF' action='/cadastro' method="post"> <input type="" name="usuario" id="usuario" placeholder="Digite o E-mail ou CPF do Usuário" />
                </form>
                <div id="main-containerGasto">

                    <h3> Nome:  </h3>
                    <form id="register-formGasto" action="" method="post">
                        <div class="formUsuarioGAsto">
                            <label for="usuario">Data Leitura Inicial</label>
                            <input type="date" name="usuario" id="usuario" />

                            <label for="gas">Leitura Gás
                                <input type="number" name="gas" id="gas" placeholder="Consumo de Gás" /></label>
                            <label for="agua">Leitura Água
                                <input type="number" name="agua" id="agua" placeholder="Consumo de Agua" /></label>
                        </div>


                        <div class="formUsuarioGasto">
                            <label for="usuario">Data Leitura Final</label>
                            <input type="date" name="usuario" id="usuario" />

                            <label for="gas">Leitura Gás
                                <input type="number" name="gas" id="gas" placeholder="Consumo de Gás" /></label>
                            <label for="agua">Leitura Água</label>
                            <input type="number" name="agua" id="agua" placeholder="Consumo de Agua" />
                        </div>

                        <div className='formGasto'>
                            <div className='form1'>
                                <label for="Consumo">Consumo:

                                    <input type="email" name="Valor" id="Valor" placeholder="$$" /></label>
                                <label for="gas">Consumo Gás
                                    <input type="number" name="gas" id="gas" placeholder="Consumo de Gás" /></label>
                                <label for="agua">Consomo Água</label>
                            </div>

                            <div className='form2GAsto'>
                                <label> <input type="number" name="agua" id="agua" placeholder="Consumo de água" /></label>
                                <label for="multa">Multa
                                    <input type="number" name="multa" id="multa" placeholder="Valor da Multa" /></label>
                                <label for="taxa do condominio">Taxa do condominio
                                    <input type="number" name="taxa" id="taxa" placeholder="Taxa do condominio" /></label>

                            </div>

                        </div>
                    </form >
                </div>

                <button class="butao" type="button" id="Confirmar" value="Confirmar">Gerar Boleto</button>

            </div>
            {< Footer />}

        </body >
    );
}

export default CadastraGastos;