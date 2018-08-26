const Tires = require('../models/TiresControl');
const {outputHandler, successHandler} = require('../middlewares')

exports.search = (req,res,next) => {
 //query for test localhost:3000/common/tires/search?widthF=195&seriesF=70&sizeF=14
  const widthFront = req.query.frontWidth
  const seriesFront = req.query.frontSeries
  const sizeFront = req.query.frontSize
  const widthBack = req.query.backWidth
  const seriesBack = req.query.backSeries
  const sizeBack = req.query.backSize
  const arrayMatchData = [];
  console.log(widthBack+"+"+seriesBack)
  if(widthBack === "" || seriesBack === "" || sizeBack ==="" ){
    Tires.searchTireType(widthFront, seriesFront, sizeFront)
    .then(getOutputFront => {
      // for (var i = 0; i < getOutputFront.length; i += 1) {
      //   if (!(getOutputFront[i].brand in arrayMatchData)) {
      //     arrayMatchData[getOutputFront[i].brand] = { "front": []};
      //   }
      // }
      console.log(getOutputFront);
      for (var i = 0; i < getOutputFront.length; i += 1) {
        arrayMatchData.push({"front":getOutputFront[i],"back":null})
        // arrayMatchData[i].back.push([])
      }
      res.json(outputHandler(arrayMatchData));
    })
    .catch(next);
  } else {
    Tires.searchTireType(widthFront, seriesFront, sizeFront)
      .then(getOutputFront => {
        
        Tires.searchTireType(widthBack, seriesBack, sizeBack)
          .then(getOutputBack => {
            for(var i=0;i<getOutputFront.length;i+=1){
              for(var j=0;j<getOutputBack.length;j+=1){
                if(getOutputBack[j].brand===getOutputFront[i].brand){
                  arrayMatchData.push({ "front": getOutputFront[i], "back": getOutputBack[j] })
                }
              }
            }

            res.json(outputHandler(arrayMatchData));
          })
          .catch(next);
      })
      .catch(next);
  }
  // if (req.query.width_f == '' && req.query.series_f == '' && req.query.size_f == ''){
  //   if (req.query.width_b !== '' && req.query.series_b !== '' && req.query.size_b !== '') {
  //     Tires.searchTireType(req.query.width_b, req.query.series_b, req.query.size_b)
  //       .then(back_wheel => {
  //         res.json([back_wheel]);
  //       }).catch(next)
  //   }else {
  //     res.json("error");
  //   }
  // }else{
 
    // Tires.searchTireType(req.query.width_f, req.query.series_f, req.query.size_f)
    // .then(front_wheel => {
    //   const array_match_data = {};
    //   if(req.query.width_b !== '' && req.query.series_b!=='' && req.query.size_b!==''){
    //   (Tires.searchTireTypeBack(req.query.width_b, req.query.series_b, req.query.size_b)
    //   .then(back_wheel=> {
    //     /* make brand on front wheel */
    //     for(var i=0;i<front_wheel.length;i+=1){
    //       if(!(front_wheel[i].brand in array_match_data)){
    //         array_match_data[front_wheel[i].brand] = {"front":[],"back":[]};
    //       }
    //     }
    //     /* make brand on back wheel */
    //     for (var i = 0; i < back_wheel.length; i += 1) {
    //       if (!(back_wheel[i].brand in array_match_data)) {
    //         array_match_data[back_wheel[i].brand] = { "front": [], "back": []};
    //       }
    //     }
    //   /* fetch data to array front step*/
    //     for(var i=0;i<front_wheel.length;i+=1){
    //       array_match_data[front_wheel[i].brand]["front"].push(front_wheel[i])
    //     }
    //     /* fetch data to array back step*/
    //     for (var i = 0; i < back_wheel.length; i += 1) {
    //       array_match_data[back_wheel[i].brand]["back"].push(back_wheel[i])
    //     }
        
    //     res.json(array_match_data);
    //   })
    //   .catch(next))}
    //   else {
    //     res.json([front_wheel]);//else condition
      // }
    // })
    // .catch(next);
  // }
};

exports.info = (req,res,next) => {
  Tires.searchInfo()
  .then(infoOutput => {
    // var resInfoOutput = {}; 
    // resInfoOutput['width'] = [];
    // resInfoOutput['series'] = [];
    // resInfoOutput['size'] = [];

    // for (var i = 0; i < infoOutput[0].length;i+=1){
    //   resInfoOutput['width'].push(infoOutput[0][i].width);
    // }
    // for (var i = 0; i < infoOutput[1].length; i += 1) {
    //   resInfoOutput['series'].push(infoOutput[1][i].series);
    // }
    // for (var i = 0; i < infoOutput[2].length; i += 1) {
    //   resInfoOutput['size'].push(infoOutput[2][i].size);
    // }
    res.json(outputHandler(infoOutput)) 
  })
  .catch(next);
}

exports.getTire = (req, res, next) => {
  Tires.getTire()
  .then(getOutput => {
    res.json(outputHandler(getOutput));
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
    res.json(successHandler('insert'));
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
    res.json(successHandler("update"));
  })
 .catch(next);
}

exports.deleteTire = (req, res, next) => {
  const idTire = req.body.id;
  Tires.deleteTire(idTire)
  .then( deleteOutput => {
    res.json(successHandler("delete"));
  })
  .catch(next);
}

