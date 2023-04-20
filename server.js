// npm start - para conectar no server
// Importação de pacotes necessários


import express from 'express';
import bodyParser from 'body-parser';
import router from './routes/routes.js'

// Rodar o Servidor Express

const server = express();
const port = 3000;

server.listen(port, console.log(`Servidor rodando na porta ${port}...`))

server.use(bodyParser.urlencoded( { extended: true} ));
server.use(bodyParser.json());
server.use(router);

server.get('/', (req, res) => {
//  const nome = req.body.nome;
//  const cpf = req.body.cpf;
    const {nome, cpf} = req.body;
    res.send(`Olá ${nome}, o seu CPF é ${cpf}`)
})

server.get('/user', (req, res) => { 
    res.send('Página do Usuário')
})





