
// Set All MySql or XAMPP Profile

module.exports= {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "",
    DB: "upload",
    dialect: "mysql",
    pool:{
        max:5,
        min:0,
        acquire: 30000,
        idle: 10000
    }
}