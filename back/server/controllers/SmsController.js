const sms = require('../models/SmsControl');
// const processHistory = require('../models/ProcessHistoryControl')
const moment = require('moment');

const { outputHandler, successHandler } = require('../middlewares')
const axios = require('axios');
const OTPPolicyTime = 5000*60;
const THBULKURL = 'http://www.thaibulksms.com/sms_api_test.php';
exports.smsCallResposne = (req, res, next) => {
  const outputSms = { "messege": "ok"};
  const OTPCode = req.body.OTPCode;
  const phone = req.body.phone;

  sms.getOTPByPhone(phone)
  .then(getOutput => {
    console.log(getOutput);
    if(getOutput){
      // console.log(getOutput.createdTime)
     const diffTime  = Math.abs(new Date() - new Date(getOutput.createdTime))
      if (diffTime<= OTPPolicyTime){
        sms.deleteOTPByCode(OTPCode)
        .then(deleteOutput => {
          console.log(deleteOutput)
          res.json(outputHandler(outputSms));
        })
      }else {
        console.log(diffTime)
        res.json(successHandler("Timeout"))
      }
    } else {
      res.json(successHandler("No code"))
    }
  })
  .catch(next);
}

exports.smsOTPHandler = (req, res, next) => {
  const OTPCode = makeid();
  const phone = req.body.phone;
  sms.deleteOTPByPhone(phone)
  .then(deleteOutput =>{
    console.log(deleteOutput);
    sms.insertOTP(OTPCode, phone)
      .then(insertOutput => {
        res.json( insertOutput);
        // THAIBULKAPI()
        // .then( function( response) {
  
        // }).catch(next)
        //server Call external api
        // axios.get('http://www.thaibulksms.com/sms_api_test.php ')
        //   .then(function (response) {
        //     // handle success
        //     console.log(response.data);
        //     res.send("end")
        //   })
        //   .catch(function (error) {
        //     // handle error
        //     console.log(error);
        //   })
        //   .then(function () {
        //     // always executed
        //   });
    })
    .catch(next)
  })
  .catch(next);
}

exports.getOTPAll = (req, res, next) => {
  sms.getOTPAll()
  .then(getOutput => {
    res.json(getOutput);
  })
  .catch(next);
}

exports.getXMLTest = (req, res, next) => {
  var parseString = require('xml2js').parseString;
  const testUrl = "http://www.thaibulksms.com/sms_api_test.php?username=thaibulksms&password=thisispassword&msisdn=0994612205&message=test"
     axios.get(testUrl)
          .then(function (response) {
            // handle success

            console.log(response.data);
            parseString(response.data, function (err, result) {
              res.json(result.SMS.QUEUE);
            });
            // res.send("end")
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          })
          .then(function () {
            // always executed
          });
}

exports.smsOTPResend = (req, res, next) => {
  const OTPCode = makeid();
  const phone = req.body.phone;
  sms.updateOTPByPhone(OTPCode, phone)
  .then( updateOutput => {
    res.json(updateOutput);
  })
  .catch(next);
}

exports.mapTest = (req, res, next) => {
  //server Call external api
  const locMap = req.query.location;
  const urlMap = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location='+ locMap+'&radius=100&key=AIzaSyBPhWQjyLqgDZkctg0AzewEhJgVPeLCiyU';

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
const makeid = () => {
  var text = "";
  var possible = "0123456789";

  for (var i = 0; i < 6; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}

const THAIBULKAPI = () => {
  return axios.get(THBULKURL)
}

const minswithhours = (date) => {
  console.log(date.getDay())
  console.log(date.getMinutes() + date.getHours() * 60 + date.getDay() * 360)
  return date.getMinutes() +date.getHours()*60 + date.getDay()*360
}