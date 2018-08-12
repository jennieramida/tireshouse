const db = require('../db');
const ZoneTech = {};
const moment = require('moment');

ZoneTech.insertZoneTech = (technician_id, zone_id) => (
  db.oneOrNone('INSERT INTO zone_technician (technician_id, zone_id, created_date )	VALUES($1, $2, $3)',
    [technician_id, zone_id, created_date, moment().format('YYYY-MM-DD HH:mm:ss')])
)
ZoneTech.updateZoneTech = (technician_id, zone_id, id) => (
  db.one('UPDATE zone_technician SET technician_id=$1, zone_id=$2 WHERE id=$3', [technician_id, zone_id, id])
)

ZoneTech.deleteZoneTech = (id) => (
  db.result('DELETE FROM zone_technician WHERE id=$1',[$id])
)

ZoneTech.getZoneTech = () => (
  db.manyOrNone('SELECT * FROM zone_technician')
)