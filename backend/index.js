const express = require("express");
const app = express();
const db = require("./models");
const cors = require("cors");
const initRoutes = require("./routes/routes.js");

global.__basedir = __dirname + "/..";

// APP USE initiate cors and express json for upload component to MySql

app.use(cors({origin:true, credentials:true}));
app.use(express.json());
app.use(express.urlencoded({extended:true}))
initRoutes(app);

// Sync The DataBase

db.sequelize.sync();

// Make a Console that Show Running PORT 

let port = 8080;
app.listen(port, ()=>{
    console.log(`Server Running On Port ${port}`);
});