import express from 'express';
import User from '../models/User.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const login = express.Router();

login.post('/', async (req, res) => {

    // Recebe as informações de LOGIN
    const { email, password } = req.body;

    // Buscar EMAIL no banco de dados, se existente, e armazenar dentro de um obj
    const registeredUser = await User.findOne(
        { where: { email }}
    ).catch((err) => {console.log("Error: ", err)});

    // Caso NÃO EXISTA EMAIL, informar o usuário
    if (!registeredUser){
        return res
            .status(400)
            .json({message: 'Email ou Senha inválidos.'})
    }

    // Caso EMAIL EXISTENTE, verificar a SENHA do usuário
    if (!bcrypt.compareSync(password, registeredUser.password)) {
        return res
            .status(400)
            .json({message: 'Email ou Senha inválidos'})
    }
   

    // Caso SENHA CORRETA, gerar token de acesso
    const token = jwt.sign(
        // Payload - infos que estão armazenadas/contidas dentro do TOKEN
        {
            id: registeredUser.id,
            name: registeredUser.name,
            admin: registeredUser.admin
        },
        //secret or PRIVATE KEY / senha secreta - só quem tem ela sabe qual o token
        process.env.JWT_SECRET,
        // Options - senha válida para 1h
        {
            expiresIn: '1h'
        }


    )

    // Enviar confirmação de LOGIN e TOKEN para uso
    res.json(
        {
            message: "Bem-Vindo(a)",
            token: token
        }
    );

});

export default login;
