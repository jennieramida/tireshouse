const db = require('../db');
const ProcessHistory = {};
const moment = require('moment');
const defaultProcessId = 1 ;
ProcessHistory.insertProcessHistory = (order_id) => (
  db.one("INSERT INTO process_history (order_id, process_id,created_time) VALUES ($1,$2,$3) RETURNING id",
    [order_id, defaultProcessId, moment().format('YYYY-MM-DD HH:mm:ss') ])
)

ProcessHistory.updateProcessHistory = (order_id, process_id) => (
  db.result("UPDATE process_history SET process_id=$1 WHERE order_id=$2",
  [process_id, order_id ])
)

ProcessHistory.deleteProcessHistory = (id) => (
  db.result("DELETE FROM process_history WHERE id=$1", [$1])
)

module.exports = ProcessHistory;