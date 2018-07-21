const Tires = require('../models/TiresControl');

exports.search = (req,res,next) => {
  console.log(req.query.width_f, req.query.series_f, req.query.diameter_f);
    // res.end();
  Tires.searchTireTypeFront(req.query.width_f, req.query.series_f, req.query.diameter_f)
  .then(front_wheel => {
    Tires.searchTireTypeBack(req.query.width_b, req.query.series_b, req.query.diameter_b)
    .then(back_wheel=> {
      const array_output = []; 
      array_output[0] = front_wheel;
      array_output[1] = back_wheel;
      res.json(array_output);
    })
    .then(next);
  })
  .catch(next);
  
};

exports.info = (req,res,next) => {
  Tires.searchInfo()
  .then(output => {
    res.json(output);
  })
  .catch(next);
}