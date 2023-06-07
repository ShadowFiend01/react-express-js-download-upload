const express = require("express");
const router = express.Router();
const excelController = require("../controllers/excel.controller.js");
const upload = require("../middlewares/upload.js");

let routes = (app)=>{
    router.post("/upload", upload.single('file'), excelController.upload);
    router.get("/capaian", excelController.getDatas);
    router.get("/download", excelController.downloadData);
    app.use("/api/excel", router);
}

module.exports = routes;