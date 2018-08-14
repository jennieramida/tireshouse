const db = require('../db');
const Process = {};
const moment = require('moment');

Process.insertProcess = (name, value) => (
  db.oneOrNone('INSERT INTO process ( name, value, created_time) VALUES ($1,$2,$3)',
    [name, value, moment().format('YYYY-MM-DD HH:mm:ss')])
)

/* Check ค่าสถานะ ทำงานไง*/
Process.updateProcess = (name, value) => (
  db.one('UPDATE set name=$1, value=$2 WHERE id=$3',
  [name,value])
)

Process.deleteProcess = (id) => (
  db.result('DELETE FROM process WHERE id=$1', a => a.rowCount,[id])
)

