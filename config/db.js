
import { Sequelize } from "sequelize";
import dotenv from 'dotenv';

// Carregar as configurações

dotenv.config({ path: './config/config.env' });

//tudo que precisar fazer que envolva o banco de dados, será mexido aqui no connection
const connection = new Sequelize(
    process.env.MYSQL_DATABASE, 
    process.env.MYSQL_USER, 
    process.env.MYSQL_PASSWORD, 
    {
        host: process.env.MYSQL_HOST,
        dialect: 'mysql'
    }
);

export default connection;