const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
    process.env.PG_DATABASE, // Nombre de la base de datos
    process.env.PG_USER,     // Usuario de PostgreSQL
    process.env.PG_PASSWORD, // Contraseña de PostgreSQL
    {
        host: process.env.PG_HOST, // Host de la base de datos
        port: process.env.PG_PORT, // Puerto de PostgreSQL (por defecto 5432)
        dialect: 'postgres',      // Dialecto de la base de datos
        logging: false            // Desactiva los logs de Sequelize (opcional)
    }
);

module.exports = sequelize;