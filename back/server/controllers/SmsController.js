// const Order = require('../models/OrderControl');
// const processHistory = require('../models/ProcessHistoryControl')
const { outputHandler, successHandler } = require('../middlewares')
const axios = require('axios');
const OTPPolicyTime = "5 mins";

exports.smsCallResposne = (req, res, next) => {
  const outputSms = { "messege": "ok"};
  res.json(outputHandler(outputSms));
}

exports.smsOTPHandler = (req, res, next) => {
  //server Call external api
  axios.get('http://www.thaibulksms.com/sms_api_test.php ')
    .then(function (response) {
      // handle success
      console.log(response.data);
      res.send("end")
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
}

exports.mapTest = (req, res, next) => {
  //server Call external api
  const locMap = req.query.location;
  const urlMap = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location='+ locMap+'&radius=1000&key=AIzaSyBPhWQjyLqgDZkctg0AzewEhJgVPeLCiyU';

  axios.get(urlMap)
    .then(function (response) {
      // handle success
      console.log(response);
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


//generateString
makeid = () => {
  var text = "";
  var possible = "0123456789";

  for (var i = 0; i < 6; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}