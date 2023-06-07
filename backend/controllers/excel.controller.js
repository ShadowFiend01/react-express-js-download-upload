const db = require("../models");
const Model = db.models;

// Define readXlsxFile and excel js used to create an upload function
const readXlsxFile= require("read-excel-file/node");
const excel = require("exceljs");


// Create Upload Function using Try Catch Method

const upload = async (req, res) =>{
    try {
        if(req.file == undefined){
            return res.status(400).send("Please Upload an Excel File");
        }

        // Location of Uploaded Excel File (Stored)
        let path = __basedir + "/backend/resources/static/assets/uploads/" + req.file.filename;

        readXlsxFile(path).then((rows)=>{
        // Skip Header
        rows.shift();

        let models = [];

        // Read Data from Every Rows

        rows.forEach((row)=>{

            let model = {
                id: row[0],
                name: row[1],
                email: row[2],
                phone: row[3],               
            };
            models.push(model);
        });

        Model.bulkCreate(models,{
            returning: ['id'],
            ignoreDuplicates: true
        }).then(()=>{
            res.status(200).send({message:"Uploaded the file successfully" + req.file.originalname});
        }).catch((error) =>{
            res.status(500).send({
                message:"Fail to Import Data Into Database",
                error: error.message,
            });
        });
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            message: "Could not upload the file: " + req.file.originalname,
        });
    }
};


// Create function to Retrieve Data

const getDatas = (req, res) =>{
    Model.findAll().then((data)=>{
        res.send(data);
    }).catch((err)=>{
        res.status(500).send({
            message:err.message || "Error Occured while retrieving "
        })
    })
        
}

// Create Download Function

const downloadData = (req, res) => {
    Model.findAll().then((objs) => {

        let Models = []
        objs.forEach((obj) => {
            Models.push({
                id: obj.id,
                name: obj.name,
                email: obj.email,
                phone: obj.phone,
            });
        });

        let workbook = new excel.Workbook();
        let worksheet = workbook.addWorksheet("Datas");

        worksheet.columns =[
            {header: "ID", key: "id", width: 10},
            {header: "Name", key: "name", width:25},
            {header: "Email", key: "email", width:25},
            {header: "Phone", key: "phone", width:25},
        ];

        // Add Array Rows
        worksheet.addRows(Models);


        // Set Content Header

        res.setHeader(
            "Content-Type",
            "application/vnd.openxmlformats=officedocument.spreadsheetml.sheet"
        );

        res.setHeader(
            "Content-Disposition",
            "attachment; filename=" + "Datas.xlsx"
        );

        return workbook.xlsx.write(res).then(function(){
            res.status(200).end();
        });

    });
};

module.exports = {upload, getDatas, downloadData}