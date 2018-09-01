const db = require('../db');
const SMS = {};
const moment = require('moment');

  SMS.insertOTP = (code) => (
    db.one("INSERT INTO sms VALUE (code, created_time) VALUE ($1, $2) ",
     [code, moment().format('YYYY-MM-DD HH:mm:ss')])
  )

  SMS.getOTPByCode = (code) =>(
    db.oneOrNone("SELECT * FROM sms WHERE code=$1", [code])
  )

  SMS.deleteOTPByCode = (code) => (
    db.result("DELETE FROM sms WHERE code = $1", [code])
  )
  