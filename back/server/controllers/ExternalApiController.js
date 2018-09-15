const sms = require('../models/SmsControl');
// const processHistory = require('../models/ProcessHistoryControl')
const moment = require('moment');
const area = require('../storage/area')
const keyAPi = '&key=AIzaSyBPhWQjyLqgDZkctg0AzewEhJgVPeLCiyU';

const { outputHandler, successHandler } = require('../middlewares')
const axios = require('axios');


exports.mapNearPlaceApi = (req ,res, next) => {
  //server Call external api
  const locMap = req.query.location;
  const urlMap = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=' + locMap + '&radius=100&language=th'+keyAPi;

  // console.log(area)
  // res.json(area);
  axios.get(urlMap)
    .then(function (response) {
      // handle success
      const search = response.data;
      var lastOutput;
      for(var i=0;i<search.results.length;i++){
        var arraySearch = search.results[i].vicinity.split(" ");
        for(var j=0 ;j<arraySearch.length; j++){
          const set = new Set(area);
          if(set.has(arraySearch[j])) {
            lastOutput  = arraySearch[j];
            break;
          }
        }
        if(lastOutput){
          break;
        }
      }
      res.json(outputHandler({areaResult: lastOutput}));

    })
    .catch(next)
    .then(function () {
      // always executed
    });
}