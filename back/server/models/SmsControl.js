const db = require('../db');
const SMS = {};
const moment = require('moment');

  SMS.insertOTP = (code, phone) => (
    db.one("INSERT INTO sms  (otpcode, phone, created_time) VALUES ($1, $2, $3) RETURNING *",
     [code,phone,  moment().format('YYYY-MM-DD HH:mm:ss')])
  )

  SMS.getOTPByPhone = (phone) =>(
    db.oneOrNone("SELECT * FROM sms WHERE phone=$1", [phone])
  )
  
  SMS.getOTPAll = () => (
    db.manyOrNone("SELECT * FROM sms")
  )

  SMS.deleteOTPByCode = (code) => (
    db.result("DELETE FROM sms WHERE otpcode = $1", [code])
  )

  SMS.deleteOTPByPhone = (phone) => (
    db.result("DELETE FROM sms WHERE phone = $1", [phone])
  )

  SMS.getOTPByCode = (code) =>(
    db.result("SELECT * FROM sms WHERE otpcode=$1", [code])
  )
  
  SMS.updateOTPByPhone = (code, phone) =>(
    db.result("UPDATE sms SET otpcode=$1, created_time=$2 WHERE phone=$3 ", [code, moment().format('YYYY-MM-DD HH:mm:ss'), phone])
  )
  
module.exports = SMS;