# react-express-js-download-upload
Simple Application to make Upload and Download Excel File using Express Js and React JS


# Create Mysql Database using XAMPP
The first thing you can do is create database in your "localhost/phpmyadmin" or other MySql Apps. You need to create db called "upload". Or you can change the db name on db.config.js inside config folder.


# Description About All Features

![Rendering and Download Button](https://github.com/ShadowFiend01/react-express-js-download-upload/assets/42269924/9b68f020-5193-4c36-84ba-a4fe52a89209)

in excel.controller.js file you can find a function called "getDatas" that useful to render the data model into templates.
you will use axios to render the models on Template that you can find on frontend - "DownloadFile.js" inside components folder.

you can find download function called "downloadData" and upload function called "upload" on excel.controller.js

![Upload File](https://github.com/ShadowFiend01/react-express-js-download-upload/assets/42269924/709318e4-ebd8-4cc1-81d5-31fa21124309)


using this simple application you can upload and download excel data that stored on MySql Database.

# Depedencies
I used this list of depedencies :
1. axios
2. cors
3. exceljs
4. express
5. multer
6. mysql2
7. nodemon
8. read-excel-file
9. sequelize

# Reference 
1. https://www.bezkoder.com/node-js-upload-excel-file-database/
2. https://www.appsloveworld.com/reactjs/100/48/use-axios-to-get-and-save-an-excel-file
3. https://w3collective.com/react-file-upload-node-js/

Don't forget to install Node.js First .... 
Sorry for My Bad English

Happy Code !!!
