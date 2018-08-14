const Tires = require('../models/TiresControl');

exports.search = (req,res,next) => {
  // console.log(req.query);
    // res.end();
  if (req.query.width_f == '' && req.query.series_f == '' && req.query.diameter_f == ''){
    if (req.query.width_b !== '' && req.query.series_b !== '' && req.query.diameter_b !== '') {
      Tires.searchTireTypeBack(req.query.width_b, req.query.series_b, req.query.diameter_b)
        .then(back_wheel => {
          res.json([back_wheel]);
        }).catch(next)
    }else {
      res.json("error");
    }
  }else{
 
    Tires.searchTireTypeFront(req.query.width_f, req.query.series_f, req.query.diameter_f)
    .then(front_wheel => {
      const array_match_data = {};
      if(req.query.width_b !== '' && req.query.series_b!=='' && req.query.diameter_b!==''){
      (Tires.searchTireTypeBack(req.query.width_b, req.query.series_b, req.query.diameter_b)
      .then(back_wheel=> {
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
      .catch(next))}
      else {
        res.json([front_wheel]);//else condition
      }
    })
    .catch(next);
  }
};

exports.info = (req,res,next) => {
  Tires.searchInfo()
  .then(output => {
    res.json(output);
  })
  .catch(next);
}

exports.getTire = (req, res, next) => {
  Tires.getTire()
  .then(getOutput => {
    res.json(getOutput);
  })
  .catch(next);
}

exports.insertTire = (req, res, next) => {
  const brandTire = req.body.brand;
  const modelTire = req.body.model;
  const nameTire = req.body.name;
  const widthTire = req.body.width;
  const seriesTire = req.body.series;
  const sizeTire = req.body.size;
  const priceTire = req.body.price;
  Tires.insertTire(brandTire, modelTire, nameTire, widthTire, seriesTire, sizeTire, priceTire)
  .then( insertOutput => {
    res.json("end");
  })
  .catch(next);
}

exports.updateTire = (req, res, next) => {
  const brandTire = req.body.brand;
  const modelTire = req.body.model;
  const nameTire = req.body.name;
  const widthTire = req.body.width;
  const seriesTire = req.body.series;
  const sizeTire = req.body.size;
  const priceTire = req.body.price;
  const idTire = req.body.id;
  Tires.updateTire(brandTire, modelTire, nameTire, widthTire, seriesTire, sizeTire, priceTire, idTire)
  .then(updateOutput => {
    res.json("end");
  })
 .catch(next);
}

exports.deleteTire = (req, res, next) => {
  const idTire = req.body.id;
  Tires.deleteTire(idTire)
  .then( deleteOutput => {
    res.json(deleteOutput);
  })
  .catch(next);
}

