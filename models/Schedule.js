import { Sequelize } from 'sequelize';
import connection from '../config/db.js';
import Studio from './Studio.js';
import User from './User.js';

const Schedule = connection.define(
    'schedule',
     {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        idUser: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'users',
                key: 'id'
            }
            
        },
 
        idStudio: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'studios',
                key: 'id'
            }
            
        },
        stars: {
            type: Sequelize.INTEGER,
            allowNull: false
        },

        comment: {
            type: Sequelize.STRING,
            allowNull: false
        }

     }
);
Schedule.belongsTo(Studio, {
    foreignKey: 'idStudios'
});

Schedule.belongsTo(User, {
    foreignKey: 'idUser'
});

export default Schedule;