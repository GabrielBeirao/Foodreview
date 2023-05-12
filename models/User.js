import { Sequelize } from 'sequelize';
import connection from '../config/db.js';
import bcrypt from 'bcrypt';

const User = connection.define(
    'user',
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
        email: {
            type: Sequelize.STRING,
            allowNull: false,
            //ele não permite que o email seja em branco
            unique: true,
            //quer dizer que o email é unico. Não da pra ter dois emails iguais
            validade: {
             //coloco tudo aqui o que o Sequelize pode validar
            isEmail: true  //confere se é um email mesmo. Se n for, não da pra cadastrar
            }
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false
        },
        admin: {
            type: Sequelize.BOOLEAN,
            allowNull: false
        }
     },

     {
        hooks: {
            beforeCreate: async (user) => {
                if(user.password) {
                    const salt = await bcrypt.genSaltSync(10, 'a');
                    user.password = bcrypt.hashSync(user.password, salt);
                }
            },
            beforeUpdate: async (user) => {
                if(user.password) {
                    const salt = await bcrypt.genSaltSync(10, 'a');
                    user.password = bcrypt.hashSync(user.password, salt);
                }
            }
        }
     }
);

export default User;