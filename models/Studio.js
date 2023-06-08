import { Sequelize } from 'sequelize';
import connection from '../config/db.js';

const Studio = connection.define(
    'studio',
     {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false
            //ele não permite que o nome seja em branco
        },
        type: {
            type: Sequelize.STRING,
            allowNull: false,
            //ele não permite que o email seja em branco
            
        },
        description: {
            type: Sequelize.STRING,
            allowNull: false
        },
        address: {
            type: Sequelize.STRING,
            allowNull: false
        }
     }
);

export default Studio;