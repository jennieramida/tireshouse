
const router = require('express').Router();
const FileController = require('../../controllers/FileController');
var multer = require('multer')
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'storage/import')
  },
  filename: function (req, file, cb) {
    console.log(file)
    cb(null, file.fieldname + '-' + Date.now()+'.xlsx')
  }
})
var upload = multer({ storage: storage })


router.post('/', upload.single('excelImport'), FileController.excelImport);

router.get('/', FileController.excelExport );

module.exports = router;
// router.get('/info', OrderController.info);
