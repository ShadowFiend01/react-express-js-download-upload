const dbConfig = require("../config/db.config.js");

// Connecting dbConfig from db.config.js to Sequelize Method

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,

    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});


// Create an Empty Object for db

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Assign sequelize and Sequelize into Models

db.models = require("./models.js")(sequelize, Sequelize);

module.exports = db;