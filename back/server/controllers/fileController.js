const { outputHandler, successHandler } = require('../middlewares')
// var Excel = require('exceljs');

exports.excelImport = (req, res, next) => {
  var Excel = require('exceljs');
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
  res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
  workbook.xlsx.write(res);
}