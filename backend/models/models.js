// Create models to Uploading into Database

module.exports = (sequelize, Sequelize) =>{
    const model = sequelize.define("model", {

        // ID
        id:{
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            allowNull: false,
            autoIncrement: false,
            primaryKey: true,
        },
        
        // Name
        name:{
            type: Sequelize.STRING,
            allowNull: true
        },

        // Email
        email:{
            type: Sequelize.STRING,
            allowNull: true
        },

        // Phone Number
        phone:{
            type: Sequelize.STRING,
            allowNull: true
        },

    });

    return model
};