const multer = require("multer");

// Create Filter Function Before Uploading Data into Database While Read The File.

const excelFilter = (req, file, cb) => {
    if(
        file.mimetype.includes("excel") ||
        file.mimetype.includes("spreadsheetml")
    ) {
        cb(null, true);
    } else {
        cb("Please Upload Excel File", false);
    }
};


// Create Storage Destination while reading the File.

var storage = multer.diskStorage({
    destination: (req,file, cb) => {
        cb(null, __basedir + "/backend/resources/static/assets/uploads/");
    },
    filename: (req, file, cb) =>{
        console.log(file.originalname);
        cb(null, `${Date.now}-${file.originalname}`);
    },
})

// Assign the Two Functions Above into Multer

var uploadFile = multer({storage:storage, fileFilter: excelFilter});
module.exports = uploadFile;