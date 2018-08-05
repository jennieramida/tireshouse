const Tires = require('../models/TiresControl');

exports.search = (req,res,next) => {
  // console.log(req.query);
    // res.end();
  Tires.searchTireTypeFront(req.query.width_f, req.query.series_f, req.query.diameter_f)
  .then(front_wheel => {
    (req.query.width_b !== '' && req.query.series_b!=='' && req.query.diameter_b!=='')?
    (Tires.searchTireTypeBack(req.query.width_b, req.query.series_b, req.query.diameter_b)
    .then(back_wheel=> {
      const array_match_data = {};
      /* make brand on front wheel */
      for(var i=0;i<front_wheel.length;i+=1){
        if(!(front_wheel[i].brand in array_match_data)){
          array_match_data[front_wheel[i].brand] = {"front":[],"back":[]};
        }
      }
      /* make brand on back wheel */
      for (var i = 0; i < back_wheel.length; i += 1) {
        if (!(back_wheel[i].brand in array_match_data)) {
          array_match_data[back_wheel[i].brand] = { "front": [], "back": []};
        }
      }
     /* fetch data to array front step*/
      for(var i=0;i<front_wheel.length;i+=1){
        array_match_data[front_wheel[i].brand]["front"].push(front_wheel[i])
      }
      /* fetch data to array back step*/
      for (var i = 0; i < back_wheel.length; i += 1) {
         array_match_data[back_wheel[i].brand]["back"].push(back_wheel[i])
      }
      
      res.json(array_match_data);
    })
    .catch(next)):res.json([front_wheel]);
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