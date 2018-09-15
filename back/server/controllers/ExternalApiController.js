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
      console.log(urlMap)
      res.json(response.data);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
}

exports.mapGeoCodePlaceApi = (req, res, next) => {
  
}