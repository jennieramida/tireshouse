const { outputHandler, successHandler } = require('../middlewares')
const Tires = require('../models/TiresControl');
const moment = require('moment');
// var Excel = require('exceljs');
var Excel = require('exceljs');

exports.excelImport = (req, res, next) => {
  const file = req.file;
  // read from a file
  const pathFile = __dirname.split("controllers")[0]+file.path;
  // console.log(pathFile)
  var workbook = new Excel.Workbook();
  workbook.xlsx.readFile(pathFile)
    .then(function () {
      var worksheet = workbook.getWorksheet(1);
      console.log(worksheet.getCell('D10').value)
      // use workbook
    })
    .catch(err=> {
      console.log(err)
    })

  // pipe from stream
  
  res.json(file);
}

exports.excelExport = (req, res, next) => {
  var workbook = new Excel.Workbook();
  // __dirname.split("controllers")[0] +
  Tires.getTire()
  .then( getOutput => {
    const pathFile ='storage/export/TIRES_FORM.xlsx';
    var columnSet = ['A','B','C','D','E','F','G','H'];
    workbook.xlsx.readFile(pathFile)
      .then(function () {
        var worksheet = workbook.getWorksheet(1);
        // done
        // console.log(worksheet.getCell('A1').value )
        var id=0; 
        // console.log(getOutput)
        for(var i=0;i<getOutput.length;i++ ){
          id = i+2;
          
          worksheet.getCell('A' + id).value = getOutput[i].brand;
          worksheet.getCell('B' + id).value = getOutput[i].model;
          worksheet.getCell('C' + id).value = getOutput[i].width;
          worksheet.getCell('D' + id).value = getOutput[i].size;
          worksheet.getCell('E' + id).value = getOutput[i].series;
          worksheet.getCell('F' + id).value = getOutput[i].name;
          worksheet.getCell('G' + id).value = getOutput[i].price;
          worksheet.getCell('H' + id).value = getOutput[i].description;
        }
        // res.setHeader('Content-disposition', 'attachment; filename=db_dump.xlsx');
        // res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
        var fileOut = 'storage/public/tires_' + moment().format('MMDDYYYY_HHmmss')+'.xlsx';
        var output = 'tires_' + moment().format('MMDDYYYY_HHmmss')+'.xlsx';

        workbook.xlsx.writeFile(fileOut)
        .then(response =>{
          console.log('test')
        }).catch(err => {
          console.log(err)
        })
        res.json(outputHandler({ "url": output}));
      })
      .catch(error => {
        console.log(error)
        res.json("wrong")
      })

  })
  .catch(next);

}